-- Registration collects date of birth, sex at birth and the marketing choice,
-- so the profile row needs somewhere to keep them. Safe to run twice.
alter table if exists public.profiles
  add column if not exists date_of_birth date,
  add column if not exists sex_at_birth text,
  add column if not exists marketing_opt_in boolean default false;

-- A signed-in person may create and update only their own profile row.
drop policy if exists profiles_insert_own on public.profiles;
create policy profiles_insert_own on public.profiles
  for insert to authenticated
  with check (auth.uid() = id);

drop policy if exists profiles_update_own on public.profiles;
create policy profiles_update_own on public.profiles
  for update to authenticated
  using (auth.uid() = id)
  with check (auth.uid() = id);
