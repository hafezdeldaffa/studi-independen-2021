/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
/*

Variable atau variabel dalam bahasa Indonesia, yaitu suatu wadah yang memiliki nama untuk menyimpan value yang akan kita pakai dalam suatu program. Dalam JavaScript, value di dalam variabel bisa berupa tipe data apa pun termasuk number, string, ataupun object. 
Sebelum ES6, hanya ada satu cara untuk mendeklarasikan suatu variabel yaitu dengan var, namun saat ini sudah diperkenalkan keyword yang lain let dan const yang akan kita bahas saat ini.
Kita dapat menggunakan var untuk mendemonstrasikan konsep variabel itu sendiri. Contoh berikut akan menjelaskan strukturnya dengan jelas seperti deklarasi suatu variabel dengan value di dalamnya. 

Scope dalam JavaScript adalah konsep yang digunakan untuk membatasi pengaksesan suatu variabel. Ada dua tipe scope yaitu lokal dan global.

Global variables adalah variabel yang dideklarasikan di luar blok.
Local variables adalah variabel yang dideklarasikan di dalam suatu blok bisa berupa function-scoped atau block-scoped.

Variabel yang dideklarasikan dengan var jika di dalam suatu fungsi tidak dapat diakses dari luar atau disebut function-scoped . Untuk let dan const yang merupakan block-scoped (konten di dalam curly brackets {} ) bukan hanya dalam fungsi saja mereka tidak dapat diakses secara global namun semua jenis blok seperti statemen if, for, dan while loops.
Global maupun block-scoped variabel menampilkan nilai yang sama yaitu “Greymon”, karena dengan var tidak menganggap dalam if merupakan blok yang berbeda, jadi kita disini hanya melakukan reassign terhadap variabel tersebut. Direkomendasikan untuk mendeklarasikan variabel dengan jenis block-scoped jadi kita dapat terhindar melakukan override pada value dalam suatu variabel tanpa kita duga.

*/

// Implementasi Sederhana Local Scope
function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
}

// Implementasi Sederhana Global Scope
var x = 2;       // Global scope

// Implementasi Sederhana Block Scope
{
    let x = 2;
}
// x can NOT be used here

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
///
const name = "John Watson";

function printFirstName(name) {
    return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));

/*
- Yang akan tampil adalah outpur berupa string Mariah.

- Alasannya adalah karena kita menggunakan fungsi split untuk membagi string name yang dijadikan paramater
pada fungsi printFirstName dan nanti fungsi split akan menghasil nilai berupa array, lalu fungsi printFirstName
akan mereturn index ke 0 dari string parameter name. Dan setelah itu kita menggunakan console.log untuk memanggil
fungsi printFirstName dan memasukan nilai string "Mariah Carey" sebagai parameter. Maka program akan menampilkan
output berupa tulisan Mariah.
*/
