-- FertiTerra assessment storage.
-- One row per person, keyed on email, so a second submission updates rather
-- than duplicates the lead.
create table if not exists public.assessments (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  first_name text not null,
  last_name text not null,
  email text not null unique,
  phone text,
  goal text,
  answers jsonb not null default '{}'::jsonb,
  marketing_opt_in boolean not null default false,
  research_opt_in boolean not null default false,
  status text not null default 'submitted',
  source text not null default 'screening'
);

create index if not exists assessments_created_at_idx on public.assessments (created_at desc);

alter table public.assessments enable row level security;

-- Anyone may create or update their own assessment through the API.
drop policy if exists assessments_insert on public.assessments;
create policy assessments_insert on public.assessments
  for insert to anon, authenticated with check (true);

-- No update policy on purpose. A browser must never be able to overwrite a
-- row that belongs to someone else, so repeat submissions are handled by the
-- server with the service role key.

-- Nobody reads the table from the browser. Staff read it through the
-- service role or the dashboard.
drop policy if exists assessments_no_select on public.assessments;
create policy assessments_no_select on public.assessments
  for select to anon, authenticated using (false);
