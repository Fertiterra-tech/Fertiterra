-- FertiTerra app waitlist
-- Run once in Supabase: project fertiterra (qzcozdsyritvjufmcqeb), SQL Editor.
--
-- The public may add themselves. Nobody can read the list with the anon key.
-- You read it in the Supabase Table Editor, or export it from there.

create table if not exists public.waitlist (
  id          uuid primary key default gen_random_uuid(),
  email       text not null unique,
  first_name  text,
  joining_for text,
  source      text default 'waitlist-page',
  created_at  timestamptz not null default now()
);

create index if not exists waitlist_created_at_idx on public.waitlist (created_at desc);

alter table public.waitlist enable row level security;

-- insert only, and only with a plausible email
drop policy if exists "waitlist_public_insert" on public.waitlist;
create policy "waitlist_public_insert"
  on public.waitlist
  for insert
  to anon, authenticated
  with check (position('@' in email) > 1);

-- deliberately no select, update or delete policy for anon or authenticated

grant insert on public.waitlist to anon, authenticated;

-- Handy count for you only (service role bypasses RLS):
-- select count(*) from public.waitlist;
