create database skilvul_music_streaming;

use skilvul_music_streaming;

create table user (
    user_id int not null primary key,
    name varchar(50),
    email varchar(50),
    passwrod varchar(50)
);

create table singer (
    singer_id int not null primary key,
    name varchar(50)
);

create table album (
    album_id int not null primary key,
    name varchar(50),
    singer_id int not null,
    constraint fk_singer foreign key (singer_id) references singer(singer_id) on update cascade on delete cascade
);

create table playlist (
    playlist_id int not null primary key,
    user_id int not null,
    tracks varchar(50),
    constraint fk_user_playlist foreign key (user_id) references user(user_id) on update cascade on delete cascade
);

create table tracks (
    track_id int not null primary key,
    title varchar(50),
    singer_id int not null,
    album_id int not null,
    constraint fk_singer_track foreign key (singer_id) references singer(singer_id) on update cascade on delete cascade,
    constraint fk_album_track foreign key (album_id) references album(album_id) on update cascade on delete cascade
);

create table song (
    track_id int not null,
    playlist_id int not null,
    constraint fk_track_song foreign key (track_id) references tracks(track_id) on update cascade on delete cascade,
    constraint fk_playlist_song foreign key (playlist_id) references playlist(playlist_id) on update cascade on delete cascade
);