### Soal

1. Mohon jelaskan apa itu Node.js? Apa perbedannya dengan JavaScript?

```bash
Node.js adalah platform perangkat lunak yang dirancang oleh Ryan Lienhart Dahl. Node.js adalah runtime untuk lingkungan JavaScript diluar peramban web yang dibangun diatas v8 JavaScript Engine. Node.js dapat dijalankan pada Windows, Mac OS X, dan Linux.

Tidak ada perbedaan antara web JavaScript dan Node.js dalam hal bahasa yang digunakan. JavaScript digunakan di browser dan di Node.js hampir persis sama. Yang membuat Node.js istimewa adalah kumpulan API yang berbeda. Di browser, Anda memiliki berbagai API DOM / Web yang terbuka yang membantu Anda berinteraksi dengan UI dan memungkinkan Anda mengakses hardware sampai batas tertentu.
```

2. Mohon jelaskan arsitektur dari Node.js?

```bash
Node.js memiliki dua komponen utama, yaitu engine JavaScript V8 Google dan Libuv Library. Selain itu, platform tersebut menggunakan dua design pattern: object pool dan facade.
```

3. Apa perbedaan antara Built-in Module, External Module, dan Custom Module pada Node.js?

```bash
Built-in module merupakan set module bawaan yang dimana dapat digunakan
tanpa instalasi lebih lanjut dan dapat langsung digunakan.

Extrenal module merupakan modul dari pihak ketiga yang harus kita instal
terlebih dahulu sebelum digunakan.

Custom module merupakan module yang dapat dicustom atau kita buat sendiri
dan dapat dimasukkan kedalam aplikasi kita.
```

4. Sebutkan salah satu contoh dari Built-in Module, External Module, dan Custom Module pada Node.js?

```bash
Built-in module: path, http, fs, os

External Module: nodemon, express, helmet, mongoose

Custom Module:

exports.add = function (a, b) {
   return a + b;
};

exports.sub = function (a, b) {
   return a - b;
};

exports.mul = function (a, b) {
   return a * b;
};

exports.div = function (a, b) {
   return a / b;
};
```
