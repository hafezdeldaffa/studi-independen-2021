/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/* 
- Objek TypeError mewakili kesalahan saat operasi tidak dapat dilakukan, biasanya 
(tetapi tidak secara eksklusif) ketika nilai bukan tipe yang diharapkan.

- Objek ReferenceError mewakili kesalahan ketika variabel yang tidak ada direferensikan.

- RangeError dilemparkan saat mencoba meneruskan angka sebagai argumen ke fungsi yang tidak 
mengizinkan rentang yang menyertakan angka itu. Ini dapat ditemui saat membuat larik dengan panjang ilegal 
dengan konstruktor Array, atau saat meneruskan nilai buruk ke metode numerik Number.

- SyntaxError adalah kesalahan dalam sintaks dari urutan karakter atau token yang dimaksudkan untuk ditulis dalam waktu kompilasi.
*/


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
/*
- Akan terjadi Error.
- ReferenceError.
- Error terjadi karena compiler tidak dapat mengakses variable SalaryWithVar dan SalaryWithCost, karena kita memanggil variable tersebut
terlebih dahulu sebelum variable tersebut dibuat. Jadinya compiler tidak bisa menemukan variable tersebut.
*/