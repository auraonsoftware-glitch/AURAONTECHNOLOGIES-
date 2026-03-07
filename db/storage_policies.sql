-- Storage RLS policies for resumes bucket
-- Run this in Supabase SQL Editor

-- Allow anyone to upload (insert) files to the resumes bucket
CREATE POLICY "Allow public uploads to resumes"
ON storage.objects
FOR INSERT
TO anon
WITH CHECK (bucket_id = 'resumes');

-- Allow anyone to read files from the resumes bucket
CREATE POLICY "Allow public reads from resumes"
ON storage.objects
FOR SELECT
TO anon
USING (bucket_id = 'resumes');
