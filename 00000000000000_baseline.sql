-- ============================================================================
-- BASELINE MIGRATION — captured from live production database
-- Project: VECTOR (pbtyanwkmbrcumwunxrv), Postgres 17.6
-- Captured: July 9, 2026, via direct Supabase MCP introspection
--   (Supabase:list_tables verbose + pg_policies query — not reconstructed
--   from memory or prior conversation. This is what is actually live.)
--
-- PURPOSE: This file exists so that connecting this project to GitHub
-- (Supabase's GitHub integration) starts with git and the live database in
-- agreement. Every table below already exists in production — running this
-- file against production would be a no-op (or should be marked as already
-- applied / baselined via the Supabase CLI's migration-history mechanism,
-- NOT re-run). Do not apply this directly to production.
--
-- Two things surfaced during this pull, flagged for awareness, not acted on:
--   1. counselor_synthesis_briefs already exists — the /save-synthesis-brief
--      404 (deferred weeks ago) was a missing Worker route, not a missing
--      table. Revisiting that route later is a smaller lift than assumed.
--   2. family_accounts has ZERO RLS policies (every other table has explicit
--      select_own/write_own pairs). Harmless today — all writes go through
--      the Worker's service_role key, which bypasses RLS — but any future
--      direct-from-frontend anon-key query against this table will silently
--      return zero rows. No policy added here; flagged for a future pass.
--   3. public.users, public.newusers, public.subscriptions exist live but
--      are not referenced anywhere in worker.js as of this capture — likely
--      legacy/orphaned from an earlier auth approach. Included as-is because
--      a baseline reflects reality, not assumptions; not endorsed as active.
-- ============================================================================


-- ----------------------------------------------------------------------------
-- 1. family_accounts — IMPL-PLAN-003. No dependencies.
-- ----------------------------------------------------------------------------
create table public.family_accounts (
  id                  uuid not null default gen_random_uuid(),
  clerk_user_id       text not null,
  email               text null,
  subscription_status text null default 'inactive'::text,
  stripe_customer_id  text null,
  plan_key            text null,
  entitlements        jsonb null default '{}'::jsonb,
  created_at          timestamp with time zone not null default now(),
  constraint family_accounts_pkey primary key (id),
  constraint family_accounts_clerk_user_id_key unique (clerk_user_id)
);

alter table public.family_accounts enable row level security;
-- NOTE: no policies exist on this table as of this capture (see flag above).


-- ----------------------------------------------------------------------------
-- 2. consultants — no dependencies.
-- ----------------------------------------------------------------------------
create table public.consultants (
  id                    uuid not null default gen_random_uuid(),
  created_at            timestamp with time zone not null default now(),
  email                 text null,
  first_name            text null,
  last_name             text null,
  practice_name         text null,
  zip                   text null,
  clerk_user_code       text null,
  tier                  text null default 'BETA'::text,
  active                boolean null default true,
  user_id               uuid null default gen_random_uuid(),
  clerk_user_id         text null unique,
  stripe_customer_id    text null,
  subscription_status   text null default 'trial'::text,
  access_code           text null unique,
  max_active_families   integer null default 25,
  entitlements          jsonb null default '{}'::jsonb,
  constraint consultants_pkey primary key (id)
);

comment on column public.consultants.max_active_families is
  'Enforced at Worker layer on family onboarding. Snapshot from PLAN_ENTITLEMENTS on checkout.session.completed.';
comment on column public.consultants.entitlements is
  'Capability snapshot written by stripe-webhook. Never re-queried from Stripe per request. Schema: { max_active_families, white_label, priority_support, plan_label }';

alter table public.consultants enable row level security;

create policy "Enable users to view their own data only" on public.consultants
  for select to authenticated using ((select auth.uid()) = user_id);
create policy "consultants_select_own" on public.consultants
  for select to authenticated using (user_id = auth.uid());
create policy "consultants_write_own" on public.consultants
  for all to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());


-- ----------------------------------------------------------------------------
-- 3. families — depends on family_accounts.
-- ----------------------------------------------------------------------------
create table public.families (
  id                       uuid not null default gen_random_uuid(),
  created_at               timestamp with time zone not null default now(),
  session_id               text null,
  email                    text null,
  family_last_name         text null,
  parent_1_first           text null,
  parent_2_first           text null,
  zip                      text null,
  children                 jsonb null,
  consultant_code          text null,
  vector_score             smallint null,
  career                   text null,
  worlds                   text null,
  cc_pathway_shown         text null,
  report_text              text null,
  state_pref               text null,
  campus_size_pref         text null,
  faith_pref               text null,
  cc_override_name         text null,
  cc_override_target       text null,
  cc_override_city         text null,
  cc_override_by           text null,
  cc_override_at           timestamp with time zone null,
  gpa                      text null,
  lifecycle_stage          text null default 'intake_started'::text,
  consultant_workspace_id  uuid null,
  anxiety_sensitive_mode   boolean null default false,
  family_account_id        uuid null,
  constraint families_pkey primary key (id),
  constraint families_family_account_id_fkey foreign key (family_account_id)
    references public.family_accounts (id)
);

comment on column public.families.lifecycle_stage is
  'intake_started | intake_complete | recommendations_ready | school_list_building | applications_in_progress | decisions_phase';
comment on column public.families.consultant_workspace_id is
  'FK to consultants.id — replaces free-text consultant_code once invite flow is live. Both coexist during transition.';
comment on column public.families.anxiety_sensitive_mode is
  'Set from personalization_context on invite redemption. Shapes pacing and tone in agent conversations.';

create index if not exists families_family_account_id_idx
  on public.families using btree (family_account_id);

alter table public.families enable row level security;

create policy "families_select_own" on public.families
  for select to authenticated using (
    consultant_code = (select c.clerk_user_code from consultants c where c.user_id = auth.uid() limit 1)
  );
create policy "families_write_own" on public.families
  for all to authenticated using (
    consultant_code = (select c.clerk_user_code from consultants c where c.user_id = auth.uid() limit 1)
  ) with check (
    consultant_code = (select c.clerk_user_code from consultants c where c.user_id = auth.uid() limit 1)
  );


-- ----------------------------------------------------------------------------
-- 4. family_sessions — no dependencies. (IMPL-PLAN-003 Phase 2 write target
--    for /save-family-session.)
-- ----------------------------------------------------------------------------
create table public.family_sessions (
  id             uuid not null default gen_random_uuid(),
  consultant_id  text null,
  family_surname text null,
  status         text null default 'pending'::text,
  created_at     timestamp with time zone null default now(),
  constraint family_sessions_pkey primary key (id)
);

alter table public.family_sessions enable row level security;

create policy "family_sessions_select_own" on public.family_sessions
  for select to authenticated using (
    consultant_id in (select c.clerk_user_code from consultants c where c.user_id = auth.uid())
  );
create policy "family_sessions_write_own" on public.family_sessions
  for all to authenticated using (
    consultant_id in (select c.clerk_user_code from consultants c where c.user_id = auth.uid())
  ) with check (
    consultant_id in (select c.clerk_user_code from consultants c where c.user_id = auth.uid())
  );


-- ----------------------------------------------------------------------------
-- 5. family_participants — depends on family_sessions.
-- ----------------------------------------------------------------------------
create table public.family_participants (
  id                uuid not null default gen_random_uuid(),
  family_id         uuid null,
  role              text null,
  first_name        text null,
  email             text null,
  pin_hash          text null,
  session_complete  boolean null default false,
  created_at        timestamp with time zone null default now(),
  constraint family_participants_pkey primary key (id),
  constraint family_participants_family_id_fkey1 foreign key (family_id)
    references public.family_sessions (id)
);

alter table public.family_participants enable row level security;

create policy "family_participants_select_own" on public.family_participants
  for select to authenticated using (
    family_id in (select fm.family_id from family_members fm where fm.auth_user_id = (auth.uid())::text)
  );
create policy "family_participants_write_own" on public.family_participants
  for all to authenticated using (
    family_id in (select fm.family_id from family_members fm where fm.auth_user_id = (auth.uid())::text)
  ) with check (
    family_id in (select fm.family_id from family_members fm where fm.auth_user_id = (auth.uid())::text)
  );


-- ----------------------------------------------------------------------------
-- 6. family_members — depends on families. INERT per live comment: no
--    live flow references this table yet; activates with PARENT-AGENT-001.
-- ----------------------------------------------------------------------------
create table public.family_members (
  id                          uuid not null default gen_random_uuid(),
  family_id                   uuid not null,
  auth_user_id                text null,
  name                        text not null,
  role                        text not null,
  relationship_to_student     text null,
  can_view_results            boolean null default false,
  can_edit_school_list        boolean null default false,
  can_view_consultant_notes   boolean null default false,
  created_at                  timestamp with time zone null default now(),
  constraint family_members_pkey primary key (id),
  constraint family_participants_family_id_fkey foreign key (family_id)
    references public.families (id)
);

comment on table public.family_members is
  'INERT — no live flow references this table. Activates with PARENT-AGENT-001 build. auth_user_id is text (not uuid) to support both Supabase Auth uid today and Clerk user id post-migration.';
comment on column public.family_members.role is
  'student | parent_guardian | invited_participant';

alter table public.family_members enable row level security;

create policy "No access until activated" on public.family_members
  for all to public using (false);
create policy "family_members_select_own" on public.family_members
  for select to authenticated using (auth_user_id = (auth.uid())::text);
create policy "family_members_write_own" on public.family_members
  for all to authenticated using (auth_user_id = (auth.uid())::text) with check (auth_user_id = (auth.uid())::text);


-- ----------------------------------------------------------------------------
-- 7. parent_intelligence_profiles — depends on family_participants.
-- ----------------------------------------------------------------------------
create table public.parent_intelligence_profiles (
  id                    uuid not null default gen_random_uuid(),
  family_member_id      uuid null,
  raw_payload           jsonb null,
  alumni_signal         jsonb null,
  professional_signal   jsonb null,
  network_geography     jsonb null,
  aspiration_profile    jsonb null,
  child_perception      jsonb null,
  hidden_constraints    jsonb null,
  engine_version        text null,
  global_confidence     text null,
  created_at            timestamp with time zone null default now(),
  constraint parent_intelligence_profiles_pkey primary key (id),
  constraint parent_intelligence_profiles_family_member_id_fkey foreign key (family_member_id)
    references public.family_participants (id)
);

alter table public.parent_intelligence_profiles enable row level security;

create policy "parent_intelligence_profiles_select_own" on public.parent_intelligence_profiles
  for select to authenticated using (
    family_member_id in (
      select fp.id from family_participants fp
      where fp.family_id in (select fm.family_id from family_members fm where fm.auth_user_id = (auth.uid())::text)
    )
  );
create policy "parent_intelligence_profiles_write_own" on public.parent_intelligence_profiles
  for all to authenticated using (
    family_member_id in (
      select fp.id from family_participants fp
      where fp.family_id in (select fm.family_id from family_members fm where fm.auth_user_id = (auth.uid())::text)
    )
  ) with check (
    family_member_id in (
      select fp.id from family_participants fp
      where fp.family_id in (select fm.family_id from family_members fm where fm.auth_user_id = (auth.uid())::text)
    )
  );


-- ----------------------------------------------------------------------------
-- 8. invite_codes — depends on consultants, families.
-- ----------------------------------------------------------------------------
create table public.invite_codes (
  id                          uuid not null default gen_random_uuid(),
  code                        text null unique,
  code_hash                   text null unique,
  code_type                   text not null,
  consultant_id               uuid null,
  family_id                   uuid null,
  invited_role                text null,
  personalization_context     jsonb null,
  max_uses                    integer null default 1,
  uses_count                  integer null default 0,
  expires_at                  timestamp with time zone null,
  redeemed_at                 timestamp with time zone null,
  redeemed_by_auth_user_id    text null,
  created_by_auth_user_id     text null,
  status                      text null default 'active'::text,
  created_at                  timestamp with time zone null default now(),
  constraint invite_codes_pkey primary key (id),
  constraint invite_codes_family_id_fkey foreign key (family_id) references public.families (id),
  constraint invite_codes_consultant_id_fkey foreign key (consultant_id) references public.consultants (id)
);

comment on table public.invite_codes is
  'Unified invite/access code table. code = plain text (consultant access codes). code_hash = hashed PIN (family participant invites, PARENT-AGENT-001 flow). Both coexist.';
comment on column public.invite_codes.code_type is
  'consultant_access | family_self_serve_invite | family_participant_invite';
comment on column public.invite_codes.personalization_context is
  'Injected into agent session on redemption. Schema: { preferred_name, tone, known_anxiety_context, deadline_pressure, family_dynamic_notes }';

alter table public.invite_codes enable row level security;

create policy "Consultants manage own codes" on public.invite_codes
  for all to public using (
    created_by_auth_user_id = (auth.uid())::text or code_type = 'family_self_serve_invite'::text
  );
create policy "invite_codes_select_own" on public.invite_codes
  for select to authenticated using (
    created_by_auth_user_id = (auth.uid())::text
    or (code_type = 'family_self_serve_invite'::text and consultant_id in (select c.id from consultants c where c.user_id = auth.uid()))
    or family_id in (select f.id from families f where f.consultant_code = (select c.clerk_user_code from consultants c where c.user_id = auth.uid() limit 1))
  );
create policy "invite_codes_write_own" on public.invite_codes
  for all to authenticated using (
    created_by_auth_user_id = (auth.uid())::text
    or consultant_id in (select c.id from consultants c where c.user_id = auth.uid())
    or family_id in (select f.id from families f where f.consultant_code = (select c.clerk_user_code from consultants c where c.user_id = auth.uid() limit 1))
  ) with check (
    created_by_auth_user_id = (auth.uid())::text
    or consultant_id in (select c.id from consultants c where c.user_id = auth.uid())
    or family_id in (select f.id from families f where f.consultant_code = (select c.clerk_user_code from consultants c where c.user_id = auth.uid() limit 1))
  );


-- ----------------------------------------------------------------------------
-- 9. key_dates — depends on consultants, families.
-- ----------------------------------------------------------------------------
create table public.key_dates (
  id             uuid not null default gen_random_uuid(),
  family_id      uuid not null,
  consultant_id  uuid null,
  title          text not null,
  date_value     date not null,
  date_type      text null,
  school_slug    text null,
  notes          text null,
  created_at     timestamp with time zone null default now(),
  constraint key_dates_pkey primary key (id),
  constraint key_dates_consultant_id_fkey foreign key (consultant_id) references public.consultants (id),
  constraint key_dates_family_id_fkey foreign key (family_id) references public.families (id)
);

comment on column public.key_dates.date_type is
  'application_deadline | scholarship_deadline | visit_date | test_date | meeting | decision_release';
comment on column public.key_dates.school_slug is
  'School name string matching UNIVERSITY_DB key — nullable for non-school dates';

alter table public.key_dates enable row level security;

create policy "key_dates_select_own" on public.key_dates
  for select to authenticated using (
    consultant_id in (select c.id from consultants c where c.user_id = auth.uid())
    or family_id in (select f.id from families f where f.consultant_code = (select c.clerk_user_code from consultants c where c.user_id = auth.uid() limit 1))
  );
create policy "key_dates_write_own" on public.key_dates
  for all to authenticated using (
    consultant_id in (select c.id from consultants c where c.user_id = auth.uid())
    or family_id in (select f.id from families f where f.consultant_code = (select c.clerk_user_code from consultants c where c.user_id = auth.uid() limit 1))
  ) with check (
    consultant_id in (select c.id from consultants c where c.user_id = auth.uid())
    or family_id in (select f.id from families f where f.consultant_code = (select c.clerk_user_code from consultants c where c.user_id = auth.uid() limit 1))
  );


-- ----------------------------------------------------------------------------
-- 10. school_priority_list — depends on consultants, families.
-- ----------------------------------------------------------------------------
create table public.school_priority_list (
  id                uuid not null default gen_random_uuid(),
  family_id         uuid not null,
  consultant_id     uuid null,
  school_slug       text not null,
  priority_tier     text null,
  status            text null default 'considering'::text,
  reason_added      text null,
  consultant_notes  text null,
  family_notes      text null,
  created_at        timestamp with time zone null default now(),
  updated_at        timestamp with time zone null default now(),
  constraint school_priority_list_pkey primary key (id),
  constraint school_priority_list_family_id_fkey foreign key (family_id) references public.families (id),
  constraint school_priority_list_consultant_id_fkey foreign key (consultant_id) references public.consultants (id)
);

comment on column public.school_priority_list.priority_tier is
  'dream | target | likely | financial_safety | consultant_recommended';
comment on column public.school_priority_list.status is
  'considering | researching | visiting | applying | submitted | removed';

alter table public.school_priority_list enable row level security;

create policy "school_priority_list_select_own" on public.school_priority_list
  for select to authenticated using (
    consultant_id in (select c.id from consultants c where c.user_id = auth.uid())
    or family_id in (select f.id from families f where f.consultant_code = (select c.clerk_user_code from consultants c where c.user_id = auth.uid() limit 1))
  );
create policy "school_priority_list_write_own" on public.school_priority_list
  for all to authenticated using (
    consultant_id in (select c.id from consultants c where c.user_id = auth.uid())
    or family_id in (select f.id from families f where f.consultant_code = (select c.clerk_user_code from consultants c where c.user_id = auth.uid() limit 1))
  ) with check (
    consultant_id in (select c.id from consultants c where c.user_id = auth.uid())
    or family_id in (select f.id from families f where f.consultant_code = (select c.clerk_user_code from consultants c where c.user_id = auth.uid() limit 1))
  );


-- ----------------------------------------------------------------------------
-- 11. school_requirements — depends on consultants, families, family_members.
-- ----------------------------------------------------------------------------
create table public.school_requirements (
  id                     uuid not null default gen_random_uuid(),
  family_id              uuid not null,
  consultant_id          uuid null,
  school_slug            text not null,
  requirement_type       text null,
  title                  text not null,
  status                 text null default 'not_started'::text,
  due_date               date null,
  owner_participant_id   uuid null,
  notes                  text null,
  created_at             timestamp with time zone null default now(),
  updated_at             timestamp with time zone null default now(),
  constraint school_requirements_pkey primary key (id),
  constraint school_requirements_consultant_id_fkey foreign key (consultant_id) references public.consultants (id),
  constraint school_requirements_family_id_fkey foreign key (family_id) references public.families (id),
  constraint school_requirements_owner_participant_id_fkey foreign key (owner_participant_id) references public.family_members (id)
);

comment on column public.school_requirements.requirement_type is
  'essay | recommendation_letter | transcript | test_score | portfolio | interview | financial_aid';
comment on column public.school_requirements.status is
  'not_started | in_progress | complete | submitted | waived';

alter table public.school_requirements enable row level security;

create policy "school_requirements_select_own" on public.school_requirements
  for select to authenticated using (
    consultant_id in (select c.id from consultants c where c.user_id = auth.uid())
    or family_id in (select f.id from families f where f.consultant_code = (select c.clerk_user_code from consultants c where c.user_id = auth.uid() limit 1))
    or owner_participant_id in (
      select fp.id from family_participants fp
      where fp.family_id in (
        select f.id from families f where f.consultant_code = (select c.clerk_user_code from consultants c where c.user_id = auth.uid() limit 1)
      )
    )
  );
create policy "school_requirements_write_own" on public.school_requirements
  for all to authenticated using (
    consultant_id in (select c.id from consultants c where c.user_id = auth.uid())
    or family_id in (select f.id from families f where f.consultant_code = (select c.clerk_user_code from consultants c where c.user_id = auth.uid() limit 1))
  ) with check (
    consultant_id in (select c.id from consultants c where c.user_id = auth.uid())
    or family_id in (select f.id from families f where f.consultant_code = (select c.clerk_user_code from consultants c where c.user_id = auth.uid() limit 1))
  );


-- ----------------------------------------------------------------------------
-- 12. client_activities — depends on consultants, families. Consultant-only
--     audit trail; untouched by any family-direct work.
-- ----------------------------------------------------------------------------
create table public.client_activities (
  id                        uuid not null default gen_random_uuid(),
  consultant_id             uuid not null,
  family_id                 uuid not null,
  activity_type             text not null,
  title                     text not null,
  description               text null,
  created_by_auth_user_id   text null,
  created_at                timestamp with time zone null default now(),
  constraint client_activities_pkey primary key (id),
  constraint client_activities_consultant_id_fkey foreign key (consultant_id) references public.consultants (id),
  constraint client_activities_family_id_fkey foreign key (family_id) references public.families (id) on delete cascade
);

comment on column public.client_activities.activity_type is
  'intake_completed | recommendation_generated | school_added | deadline_added | cc_override_applied | consultant_note_added | meeting_completed | code_redeemed';

create index if not exists client_activities_family_idx on public.client_activities using btree (family_id);
create index if not exists client_activities_consultant_idx on public.client_activities using btree (consultant_id);
create index if not exists client_activities_type_idx on public.client_activities using btree (activity_type);

alter table public.client_activities enable row level security;

create policy "client_activities_select_own" on public.client_activities
  for select to authenticated using (
    consultant_id in (select c.id from consultants c where c.user_id = auth.uid())
    or family_id in (select f.id from families f where f.consultant_code = (select c.clerk_user_code from consultants c where c.user_id = auth.uid() limit 1))
  );
create policy "client_activities_write_own" on public.client_activities
  for all to authenticated using (
    consultant_id in (select c.id from consultants c where c.user_id = auth.uid())
    or family_id in (select f.id from families f where f.consultant_code = (select c.clerk_user_code from consultants c where c.user_id = auth.uid() limit 1))
  ) with check (
    consultant_id in (select c.id from consultants c where c.user_id = auth.uid())
    or family_id in (select f.id from families f where f.consultant_code = (select c.clerk_user_code from consultants c where c.user_id = auth.uid() limit 1))
  );


-- ----------------------------------------------------------------------------
-- 13. counselor_synthesis_briefs — no dependencies. Already exists live;
--     no Worker route (/save-synthesis-brief) currently writes to it — see
--     flag at top of file.
-- ----------------------------------------------------------------------------
create table public.counselor_synthesis_briefs (
  id                              uuid not null default gen_random_uuid(),
  consultant_code                 text null,
  student_name                    text null,
  top_shared_fit_schools          jsonb null,
  mismatch_warnings               jsonb null,
  recommended_counselor_actions   jsonb null,
  comparison_insights             text null,
  created_at                      timestamp with time zone not null default now(),
  constraint counselor_synthesis_briefs_pkey primary key (id)
);

alter table public.counselor_synthesis_briefs enable row level security;

create policy "counselor_synthesis_briefs_select_own" on public.counselor_synthesis_briefs
  for select to authenticated using (
    consultant_code in (select c.access_code from consultants c where c.user_id = auth.uid())
    or consultant_code in (select c.clerk_user_code from consultants c where c.user_id = auth.uid())
  );
create policy "counselor_synthesis_briefs_write_own" on public.counselor_synthesis_briefs
  for all to authenticated using (
    consultant_code in (select c.access_code from consultants c where c.user_id = auth.uid())
    or consultant_code in (select c.clerk_user_code from consultants c where c.user_id = auth.uid())
  ) with check (
    consultant_code in (select c.access_code from consultants c where c.user_id = auth.uid())
    or consultant_code in (select c.clerk_user_code from consultants c where c.user_id = auth.uid())
  );


-- ----------------------------------------------------------------------------
-- 14. Legacy / unexplained tables — exist live, not referenced in worker.js
--     as of this capture. Included for baseline accuracy, not endorsed as
--     active parts of the current architecture.
-- ----------------------------------------------------------------------------
create table public.users (
  id          text not null,
  email       text null,
  plan        text null default 'free'::text,
  created_at  timestamp without time zone null default now(),
  constraint users_pkey primary key (id)
);

alter table public.users enable row level security;

create policy "users_select_own" on public.users
  for select to authenticated using (id = (auth.uid())::text);
create policy "users_write_own" on public.users
  for all to authenticated using (id = (auth.uid())::text) with check (id = (auth.uid())::text);


create table public.newusers (
  id          text not null,
  email       text null,
  plan        text null default 'free'::text,
  created_at  timestamp without time zone null default now(),
  constraint newusers_pkey primary key (id)
);

alter table public.newusers enable row level security;

create policy "Enable insert for authenticated users only" on public.newusers
  for insert to authenticated with check (true);


create table public.subscriptions (
  id                         uuid not null default gen_random_uuid(),
  created_at                 timestamp with time zone null default now(),
  clerk_user_id              text null,
  stripe_customer_id         text null,
  stripe_subscription_id     text null unique,
  status                     text null default 'active'::text,
  plan                       text null,
  current_period_end         timestamp with time zone null,
  constraint subscriptions_pkey primary key (id)
);

alter table public.subscriptions enable row level security;

create policy "subscriptions_select_own" on public.subscriptions
  for select to authenticated using (clerk_user_id = (auth.uid())::text);
create policy "subscriptions_write_own" on public.subscriptions
  for all to authenticated using (clerk_user_id = (auth.uid())::text) with check (clerk_user_id = (auth.uid())::text);


-- ============================================================================
-- End of baseline. 14 tables total, matching live production exactly as of
-- July 9, 2026. All service_role writes (the Worker's exclusive write path)
-- bypass RLS regardless of the policies above — these policies only govern
-- direct anon/authenticated-key access, which is not the current pattern for
-- any table in this application.
-- ============================================================================
