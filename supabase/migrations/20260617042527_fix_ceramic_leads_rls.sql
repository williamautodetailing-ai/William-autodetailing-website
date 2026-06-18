/*
# Fix ceramic_leads RLS — remove unrestricted anon INSERT policy

## Problem
The `insert_ceramic_leads` policy allowed any anonymous user to insert rows into
`ceramic_leads` with `WITH CHECK (true)`, effectively bypassing row-level security
for the anon role and opening the table to abuse.

## Fix
Drop the insecure anon INSERT policy. All legitimate inserts originate from the
`notify-lead` edge function, which authenticates with the Supabase service role key.
The service role bypasses RLS entirely, so no anon policy is needed for writes.

## Result
- Anonymous users: no read or write access.
- Authenticated users (staff/admin): read access via the existing `select_ceramic_leads` policy.
- Edge function (service role): full write access, unaffected by RLS.
*/

DROP POLICY IF EXISTS "insert_ceramic_leads" ON public.ceramic_leads;
