CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  vehicle text NOT NULL,
  vehicle_type text NOT NULL DEFAULT 'sedan',
  package_interest text NOT NULL,
  notes text,
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert_leads" ON leads
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "select_leads" ON leads
  FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "update_leads" ON leads
  FOR UPDATE TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "delete_leads" ON leads
  FOR DELETE TO authenticated
  USING (true);
