### Soal

1. Apa perbedaan antara static web server dan dynamic web server?

```javascript
Static web sever hanya dapat melakukan serve konten statis seperti contohnya html dan css biasa, karena kontennya statis maka tidak akan terjadi proses perubahan data yang diproses oleh server.

Sedangkan, Dynamic web server dapat melakukan serve konten dinamis dan menghandle pertukaran data dinamis dari user.
```

2. Jelaskan arsitektur static site dan dynamic site

```javascript
Static Site, client side meminta http request kemudian diterima oleh web server dimana terdapat file seperti html css javascript, dan responese yang ditampilkan hanya berupa file file tadi. tidak ada processing data di webserver

Dynamic site, Client side meminta GET request dan akan masuk ke web server dan selanjutnya masuk ke dalam web application. kemudian didalam web application dilakukan processing data dari database dan akan dibawa ke web server dan dilakukan response sehingga tampilah di dalam browser.
```

3. Apa saja yang dapat kita buat pada sisi server?

```javascript
1. Menyimpan data
2. Analisis data
3. Menyimpan session dan storage
4. Mengontrol konten secara dinamis
5. Dapat melakukan pertukaran data/komunikasi anatara user dengan server
```

4. Mohon jelaskan apa itu RESTful?

```javascript
REST (REpresentational State Transfer) merupakan standar arsitektur komunikasi berbasis web yang sering diterapkan dalam pengembangan layanan berbasis web. Umumnya menggunakan HTTP (Hypertext Transfer Protocol) sebagai protocol untuk komunikasi data. REST pertama kali diperkenalkan oleh Roy Fielding pada tahun 2000.

Pada arsitektur REST, REST server menyediakan resources (sumber daya/data) dan REST client mengakses dan menampilkan resource tersebut untuk penggunaan selanjutnya. Setiap resource diidentifikasi oleh URIs (Universal Resource Identifiers) atau global ID. Resource tersebut direpresentasikan dalam bentuk format teks, JSON atau XML. Pada umumnya formatnya menggunakan JSON dan XML.
```

5. Apa saja jenis HTTP verbs yang ada (jelaskan fungsinya masing-masing)

```javascript
GET : berfungsi untuk mendapatkan data yang terdapat didalam database

POST : berfungsi untuk membuat/menambah data baru

PUT : berfungsi untuk mengupdate/merubah data secara spesifik

DELETE : berfungsi untuk menghapus data secara spesifik
```

6. Apa fungsi dari Response Codes?

```javascript
Response code adalah suatu standarisasi stasus kode web server ketika memberikan informasi mengenai keadaan halaman pada website anda. Biasanya berupa angka yang dikirimkan ketika request terjadi. Kode ini biasanya berada protocol HTTP. Status request pada HTTP berupa angka 3 digit yang dikirimkan. Ada 5 jenis kelompok kode respons : 100- 199 untuk respon informasi, 200-299 untuk respon sukses, 300-399 untuk respons redirect, 400-499 untuk respon error pada client, 500-599 untuk error pada server.
Ketika client mengirimkan request kepada server dan server membalas dan client menerimanya maka akan muncul respons HTTP berupa kode.
```
