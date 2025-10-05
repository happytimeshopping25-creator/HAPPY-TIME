create extension if not exists pgcrypto;
create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  price numeric(12,3) not null default 0,
  image_url text,
  created_at timestamptz default now()
);
create table if not exists public.admin_users (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  email text,
  role text check (role in ('admin','editor','viewer')) not null default 'viewer',
  created_at timestamptz default now()
);
