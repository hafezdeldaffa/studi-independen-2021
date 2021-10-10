// 1. Apa itu synchronous? Asynchronous adalah proses jalannya program bisa dilakukan secara bersamaan tanpa harus menunggu proses antrian.
// 2. Apa itu asynchronous? Synchronous merupakan bagian dari Asynchronous (1 antrian) dimana proses akan dieksekusi secara bersamaan dan untuk hasil tergantung lama proses suatu fungsi synchronous
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser? Bisa
// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
// first log:  1
// first log:  2
// first log:  3
// first log:  4
// first log:  5
// second log:  6
// second log:  6
// second log:  6
// second log:  6
// second log:  6
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
// Karena variable i pada program for tersebut menggunakan 'var', makanya variable tersebu dianggap sebagai variable global.
// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
for (let i = 1; i <= 5; i++) {
  console.log('first log: ', i); // 01 - Pertama
  setTimeout(() => console.log('second log: ', i), 100); // 02 - Kedua
}

/* SOAL NOMOR 2 */
const isR18Plus = (age) => {
  Promise((resolve, reject) => {
    try {
      if (age > 18) {
        resolve('anda sudah dewasa');
      } else {
        reject('anda masih dibawah umur');
      }
    } catch (e) {
      console.log(e);
    }
  });
};
const printR18Plus = async () => {
  const underAge = await isR18Plus(10);
  const properAge = await isR18Plus(19);

  console.log(underAge);
  console.log(properAge);
};

printR18Plus();

/* SOAL NOMOR 3 */
const getGitHubUser = async (username) => {
  try {
    const url = `https://api.github.com/users/${username}`;
    const data = await fetch(url);
    console.log(data.json());
    return data;
  } catch (e) {
    console.log(e);
  }
};
const printGitHubUser = async () => {
  const mojombo = await getGitHubUser('mojombo');
  const orange = await getGitHubUser('');
  const rudiTabuti = await getGitHubUser('rudi.tabuti');

  console.log(mojombo);
  console.log(orange);
  console.log(rudiTabuti);
};

printGitHubUser();
