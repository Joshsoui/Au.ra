create extension if not exists pgcrypto;

create table organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  created_at timestamptz default now()
);

create table artists (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id) on delete cascade,
  stage_name text not null,
  legal_name text,
  city text,
  country text,
  genres text[] default '{}',
  bio text,
  status text not null default 'applicant',
  readiness_score int default 0 check (readiness_score between 0 and 100),
  created_at timestamptz default now()
);

create table artist_links (
  id uuid primary key default gen_random_uuid(),
  artist_id uuid references artists(id) on delete cascade not null,
  platform text not null,
  url text not null,
  unique(artist_id, platform, url)
);

create table assessments (
  id uuid primary key default gen_random_uuid(),
  artist_id uuid references artists(id) on delete cascade not null,
  overall_score int not null check (overall_score between 0 and 100),
  music_score int,
  brand_score int,
  audience_score int,
  live_score int,
  professional_score int,
  momentum_score int,
  summary text,
  created_at timestamptz default now()
);

create table next_moves (
  id uuid primary key default gen_random_uuid(),
  artist_id uuid references artists(id) on delete cascade not null,
  title text not null,
  rationale text,
  category text,
  impact text,
  status text default 'open',
  due_at timestamptz,
  created_at timestamptz default now()
);

create table releases (
  id uuid primary key default gen_random_uuid(),
  artist_id uuid references artists(id) on delete cascade not null,
  title text not null,
  release_type text default 'single',
  stage text default 'demo',
  target_release_date date,
  private_link text,
  notes text,
  created_at timestamptz default now()
);

create table industry_contacts (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id) on delete cascade not null,
  name text not null,
  company text,
  contact_type text,
  email text,
  relationship_strength text default 'cold',
  genres text[] default '{}',
  private_notes text,
  created_at timestamptz default now()
);

create table opportunities (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id) on delete cascade not null,
  artist_id uuid references artists(id) on delete cascade,
  release_id uuid references releases(id) on delete cascade,
  contact_id uuid references industry_contacts(id) on delete set null,
  opportunity_type text not null,
  title text not null,
  match_score int check (match_score between 0 and 100),
  status text default 'suggested',
  rationale text,
  created_at timestamptz default now()
);

create table representation_applications (
  id uuid primary key default gen_random_uuid(),
  artist_id uuid references artists(id) on delete cascade not null,
  organization_id uuid references organizations(id) on delete cascade not null,
  status text default 'submitted',
  manager_notes text,
  submitted_at timestamptz default now(),
  reviewed_at timestamptz
);

create table tasks (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id) on delete cascade not null,
  artist_id uuid references artists(id) on delete cascade,
  title text not null,
  status text default 'open',
  priority text default 'medium',
  due_at timestamptz,
  created_at timestamptz default now()
);

create table intelligence_runs (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id) on delete cascade,
  artist_id uuid references artists(id) on delete cascade,
  run_type text not null,
  model text,
  input jsonb,
  output jsonb,
  created_at timestamptz default now()
);

create index artists_org_idx on artists(organization_id);
create index releases_artist_idx on releases(artist_id);
create index contacts_org_idx on industry_contacts(organization_id);
create index opportunities_org_idx on opportunities(organization_id);
create index opportunities_artist_idx on opportunities(artist_id);
