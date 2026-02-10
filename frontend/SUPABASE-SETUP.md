# Fix SSL error: Use Supabase instead of MongoDB on Vercel

The API now supports **Supabase** (HTTPS, no SSL driver issues). Do this once:

## 1. Create free Supabase project

1. Go to **https://supabase.com** → Sign up / Log in.
2. **New project** → pick org → name (e.g. `digitalstricker`) → set a database password → **Create project**.

## 2. Create tables

In Supabase dashboard: **SQL Editor** → **New query** → paste and run:

```sql
-- Products table
create table if not exists products (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  des text default '',
  img text not null,
  category text not null,
  created_at timestamptz default now()
);

-- Contacts table
create table if not exists contacts (
  id uuid default gen_random_uuid() primary key,
  "Name" text not null,
  "Email" text not null,
  "PhoneNumber" text default '',
  "Message" text default '',
  created_at timestamptz default now()
);

-- Allow API access (anon key)
alter table products enable row level security;
alter table contacts enable row level security;
create policy "Allow all for anon" on products for all using (true) with check (true);
create policy "Allow all for anon" on contacts for all using (true) with check (true);
```

Click **Run**.

## 3. Get URL and anon key

In Supabase: **Settings** (gear) → **API**:

- **Project URL** (e.g. `https://xxxxx.supabase.co`)
- **anon public** key (under "Project API keys")

## 4. Add to Vercel

In Vercel → your project → **Settings** → **Environment Variables**:

| Name | Value |
|------|--------|
| `SUPABASE_URL` | Your Project URL |
| `SUPABASE_ANON_KEY` | Your anon public key |

Environment: **Production** (and Preview if you want). Save.

## 5. Redeploy

**Deployments** → ⋮ on latest → **Redeploy**.

After this, upload and delete will use Supabase and the SSL error will stop.
