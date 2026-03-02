-- Create applicants table
create table applicants (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  phone text not null,
  position text not null,
  applicant_type text not null,
  experience text not null,
  resume text not null,
  linkedin text,
  cover_letter text,
  created_at timestamptz default now()
);

-- Create quote_requests table
create table quote_requests (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  phone text not null,
  company text,
  service text not null,
  budget text,
  resume text,
  message text not null,
  created_at timestamptz default now()
);
