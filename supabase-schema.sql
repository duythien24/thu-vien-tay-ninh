create extension if not exists pgcrypto;

create table if not exists public.books (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null,
  label text not null,
  author text not null,
  cover_url text,
  description text not null,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists books_category_idx on public.books (category);
create index if not exists books_sort_order_idx on public.books (sort_order);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists books_set_updated_at on public.books;
create trigger books_set_updated_at
before update on public.books
for each row
execute function public.set_updated_at();

alter table public.books enable row level security;

drop policy if exists "Books are readable by everyone" on public.books;
create policy "Books are readable by everyone"
on public.books
for select
to anon, authenticated
using (true);

drop policy if exists "Authenticated admins can create books" on public.books;
create policy "Authenticated admins can create books"
on public.books
for insert
to authenticated
with check (true);

drop policy if exists "Authenticated admins can update books" on public.books;
create policy "Authenticated admins can update books"
on public.books
for update
to authenticated
using (true)
with check (true);

drop policy if exists "Authenticated admins can delete books" on public.books;
create policy "Authenticated admins can delete books"
on public.books
for delete
to authenticated
using (true);

-- Important:
-- For a public website, keep SELECT open so visitors can read book data.
-- For management, create admin users in Supabase Authentication and turn off public signups if needed.
