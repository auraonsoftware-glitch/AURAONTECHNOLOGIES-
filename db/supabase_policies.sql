-- WARNING: These are permissive policies for testing. Review before using in production.

-- Enable RLS (if not already enabled) and allow anon inserts/selects on applicants
ALTER TABLE public.applicants ENABLE ROW LEVEL SECURITY;
CREATE POLICY allow_anon_insert_applicants ON public.applicants
  FOR INSERT
  USING (true)
  WITH CHECK (true);
CREATE POLICY allow_anon_select_applicants ON public.applicants
  FOR SELECT
  USING (true);

-- Enable RLS and allow anon inserts/selects on quote_requests
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY allow_anon_insert_quotes ON public.quote_requests
  FOR INSERT
  USING (true)
  WITH CHECK (true);
CREATE POLICY allow_anon_select_quotes ON public.quote_requests
  FOR SELECT
  USING (true);
