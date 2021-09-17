# Jawaban Nomor 4 - more-advanced

1. git revert : Perintah ini membuat komit baru yang membatalkan perubahan dari komit sebelumnya. Perintah ini menambahkan riwayat baru ke proyek (tidak mengubah riwayat yang ada).

   git reset : Perintah ini sedikit lebih rumit. Itu benar-benar melakukan beberapa hal yang berbeda tergantung pada bagaimana itu dipanggil. Ini memodifikasi indeks (yang disebut "area pementasan"). Atau itu mengubah komit yang ditunjuk oleh kepala cabang saat ini. Perintah ini dapat mengubah riwayat yang ada (dengan mengubah komit yang dirujuk oleh cabang).

2. Git Merge - Untuk pengembang yang menggunakan sistem kontrol versi, penggabungan adalah metode yang lazim. Penggabungan mengambil konten cabang sumber dan menggabungkannya dengan cabang target, lebih tepatnya. Hanya cabang target yang diperbarui dalam proses ini. Sejarah cabang sumber tetap sama.

   Git Rebase - Cara lain untuk mengintegrasikan modifikasi dari satu cabang ke cabang lainnya adalah dengan Rebase. Rebase mengompres semua modifikasi menjadi satu tambalan. Patch tersebut kemudian dimasukkan ke dalam cabang target.

3. git stash pop membuang simpanan (paling atas, secara default) setelah menerapkannya, sedangkan git stash apply meninggalkannya di daftar simpanan untuk kemungkinan digunakan kembali nanti (atau Anda kemudian dapat git stash menjatuhkannya).

Ini terjadi kecuali ada konflik setelah git stash pop, dalam hal ini ia tidak akan menghapus simpanan, membiarkannya berperilaku persis seperti git simpanan berlaku.

4. Interactive rebasing dapat digunakan untuk mengubah komit dalam banyak cara seperti mengedit, menghapus, dan meremas. Untuk memberi tahu Git tempat memulai rebase interaktif, gunakan SHA-1 atau indeks komit yang segera mendahului komit yang ingin Anda ubah.