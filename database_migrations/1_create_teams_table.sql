begin;

create table teams (
    id serial primary key,
    name text unique not null check (name <> '')
);

commit;
