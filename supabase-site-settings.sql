create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.site_settings (
  setting_key text primary key,
  setting_value text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists site_settings_set_updated_at on public.site_settings;
create trigger site_settings_set_updated_at
before update on public.site_settings
for each row
execute function public.set_updated_at();

alter table public.site_settings enable row level security;

drop policy if exists "Site settings are readable by everyone" on public.site_settings;
create policy "Site settings are readable by everyone"
on public.site_settings
for select
to anon, authenticated
using (true);

drop policy if exists "Authenticated admins can create site settings" on public.site_settings;
drop policy if exists "Only library admin can create site settings" on public.site_settings;
create policy "Only library admin can create site settings"
on public.site_settings
for insert
to authenticated
with check ((auth.jwt() ->> 'email') = 'thienprocs@gmail.com');

drop policy if exists "Authenticated admins can update site settings" on public.site_settings;
drop policy if exists "Only library admin can update site settings" on public.site_settings;
create policy "Only library admin can update site settings"
on public.site_settings
for update
to authenticated
using ((auth.jwt() ->> 'email') = 'thienprocs@gmail.com')
with check ((auth.jwt() ->> 'email') = 'thienprocs@gmail.com');

insert into public.site_settings (setting_key, setting_value)
values ('contest_link', 'https://thuvien.tayninh.gov.vn')
on conflict (setting_key) do nothing;
