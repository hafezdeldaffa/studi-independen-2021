show databases;

create database bookstore;

use bookstore;

create table books (
    id int auto_increment primary key,
    author1 varchar(100) not null,
    author2 varchar(100),
    author3 varchar(100),
    title varchar(100),
    description varchar(50),
    place_sell varchar(3),
    stock int default 0,
    creation_date datetime default current_timestamp on update current_timestamp
);

alter table books add column price int default 0;

alter table books add column status enum('available', 'out of stock', 'limited');

alter table books drop column place_sell;

insert into books (id, author1, author2, author3, title, description, stock, creation_date, price, status) values (1, 'Mamat', 'Memet', 'Mimit', 'Belajar Javascript', 'Buku pembelajaran javascript', 200, '2021-02-03', 75000, 'available'),
                                                                                                                  (2, 'Hafezd', 'El', 'Daffa', 'Belajar MySQL', 'Buku pembelajaran Mysql', 100, '2021-02-03', 100000, 'limited'),
                                                                                                                  (3, 'Hafezd', 'El', 'Drago', 'Belajar NodeJS', 'Buku pembelajaran NodeJS', 100, '2021-02-03', 150000, 'out of stock');

select * from books;

select id as ID, author1 as A1, author2 as A2, author3 as A3 from books;

select * from books where id = 1;

select * from books where stock > 0 AND stock < 200;

select * from books where stock > 50 OR stock < 300;

select * from books where NOT stock < 200;

select * from books order by id asc;

select * from books limit 2;

update books set author1 = 'Jacob', price = 200000 where id = 3;

delete from books where id = 1;

select * from books;