CREATE TABLE ceramic_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  vehicle_make_model text NOT NULL,
  package_interest text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE ceramic_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert_ceramic_leads" ON ceramic_leads
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "select_ceramic_leads" ON ceramic_leads
  FOR SELECT TO authenticated USING (true);
