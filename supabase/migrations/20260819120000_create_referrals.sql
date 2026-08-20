CREATE TABLE IF NOT EXISTS referrals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  referrer_name text NOT NULL,
  referrer_phone text NOT NULL,
  referrer_email text NOT NULL,
  friend_name text NOT NULL,
  friend_phone text NOT NULL,
  friend_email text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE referrals ENABLE ROW LEVEL SECURITY;

-- Same pattern as `leads`: no anon/public write policies. The public referral
-- form does NOT write with the anon key — it POSTs to the `submit-referral`
-- Edge Function, which inserts using the SERVICE ROLE key and bypasses RLS.
-- This keeps the anon key from being usable to spam rows directly.

-- A logged-in owner may read the referrals list to track redemptions.
CREATE POLICY "select_referrals" ON referrals
  FOR SELECT TO authenticated
  USING (true);
