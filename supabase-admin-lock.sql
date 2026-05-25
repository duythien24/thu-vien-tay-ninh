drop policy if exists "Authenticated admins can create books" on public.books;
create policy "Only library admin can create books"
on public.books
for insert
to authenticated
with check ((auth.jwt() ->> 'email') = 'thienprocs@gmail.com');

drop policy if exists "Authenticated admins can update books" on public.books;
create policy "Only library admin can update books"
on public.books
for update
to authenticated
using ((auth.jwt() ->> 'email') = 'thienprocs@gmail.com')
with check ((auth.jwt() ->> 'email') = 'thienprocs@gmail.com');

drop policy if exists "Authenticated admins can delete books" on public.books;
create policy "Only library admin can delete books"
on public.books
for delete
to authenticated
using ((auth.jwt() ->> 'email') = 'thienprocs@gmail.com');
