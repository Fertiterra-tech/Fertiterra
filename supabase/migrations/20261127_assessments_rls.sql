-- Let a signed-in person read only their own assessments.
-- The browser still cannot read anyone else's rows.
drop policy if exists assessments_select_own on public.assessments;
create policy assessments_select_own on public.assessments
  for select to authenticated
  using (lower(email) = lower(coalesce(auth.jwt() ->> 'email', '')));
