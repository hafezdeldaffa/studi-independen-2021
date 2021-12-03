create database skilvulbookstore;

use skilvulbookstore;

create table penerbit (
    id int(10) not null auto_increment primary key,
    nama varchar(50) null,
    kota varchar(50) null
);

create table penulis (
    id int(10) not null auto_increment primary key,
    nama varchar(50) null,
    kota varchar(50) null
);

create table buku (
    id int(10) not null auto_increment primary key,
    isbn varchar(50) null,
    judul varchar(50) null,
    penulis int(10) null,
    penerbit int(10) null,
    harga int(10) null,
    stock int(10) null,
    constraint fk_penulis foreign key (penulis) references penulis(id),
    constraint fk_penerbit foreign key (penerbit) references penerbit(id)
);

insert into penerbit (id, nama, kota)
values (1, 'Gramedia', 'Jakarta'),
       (2, 'Mizan', 'Bekasi'),
       (3, 'Erlangga', 'Wonosobo');

insert into penulis (id, nama, kota)
values (1, 'Pidi Baiq', 'Bandung'),
       (2, 'Andrea Hirata', 'Jakarta'),
       (3, 'Tere Liye', 'Jakarta');

insert into buku (id, isbn, judul, penulis, penerbit, harga, stock)
values (1, '988-123-456', 'Dilan', 1, 1, 75000, 300),
       (2, '999-1223-457', 'Laskar Pelangi', 2, 1, 150000, 100),
       (3, '899-234-4554', 'Bumi', 3, 2, 120000, 150),
       (4, '777-3242-554', 'Dilan 0812', 1, 3, 100000, 5);

select * from buku inner join penerbit p on buku.penerbit = p.id;

select * from buku left join penerbit p on buku.penerbit = p.id;

select * from buku right join penerbit p on buku.penerbit = p.id;

select max(harga) from buku where stock < 10;

select min(harga) from buku;

select count(*) as 'harga dibawah 100000' from buku where harga < 100000;
