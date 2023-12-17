# TUGAS BESAR UAS PEMOGRAMAN WEB
# Biodata
Nama  : Hanggar Jati Priangga
NIM   : 121140085
Kelas : RB

# Instruksi Menggunakan
Berikut adalah kalimat instruksi penggunaan berdasarkan informasi yang diberikan:

1. PC Anda harus memiliki webserve disini saya mengunakan XAMPP
2. Jika tidak maka instal Xampp di komputer Anda, lalu jalankan.
2. Pastikan untuk menyimpan semua file terkait di dalam folder 'htdocs' pada instalasi Xampp.
3. Saya telah menyediakan file database dengan nama 'webhanggardb' di dalam folder 'database/webhanggardb.sql'. Import file ini ke dalam sistem database Mysql Anda.
4. Untuk membuat database dengan nama 'webhanggardb', gunakan perintah SQL berikut: "CREATE DATABASE webhanggardb". Alternatifnya lihat perintah dibawah.

# Langkah-langkah dalam membuat basis data dengan code SQL
## 1.	Membuat database
CREATE DATABASE webhanggardb;

## 2.	Membuat Table
CREATE TABLE `berita` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `nama` varchar(255) NOT NULL,
  `detail` varchar(500) NOT NULL,
  `tanggal` date NOT NULL,
  `jenis` varchar(50) NOT NULL,
  `penulis` varchar(255) NOT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `jenis_browser` varchar(200) NOT NULL,
  `alamat_ip` varchar(160) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

## 2. Menambahkan data menggunakan code SQL
INSERT INTO `berita` (`id`, `nama`, `detail`, `tanggal`, `jenis`, `penulis`, `foto`, `jenis_browser`, `alamat_ip`) VALUES
(46, 'Kubu Prabowo: Boleh Saja Remehkan Gibran, Kita Buktikan di Arena Debat Cawapres', 'Sekretaris Tim Kampanye Nasional (TKN) Prabowo Subianto-Gibran Rakabuming Raka, Nusron Wahid mempersilakan siapapun untuk meremehkan Gibran yang akan segera menghadapi debat cawapres. Nusron mengatakan, semua akan terbukti di arena debat cawapres pada 22 Desember 2023. \"Underestimate (meremehkan) boleh-boleh saja. Yang penting kan faktanya dan buktinya, kita buktikan dalam arena debat nanti. Kalau enggak yakin, ngapain nyalon?\" ujar Nusron saat ditemui di Tebet, Jakarta Selatan', '2023-12-17', 'Berita Nasional', 'Hanggar Jati Priangga', 'img/6578e666948c4.jpg', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', '::1');

## 3.  Menampilkan data menggunakan SQL
SELECT * FROM `berita`

## 4. Mengedit data dengan SQL
UPDATE `berita` SET `nama` = 'Kubu Prabowo Boleh Saja Remehkan Gibran, Kita Buktikan di Arena Debat Cawapres' WHERE `berita`.`id` = 46

## 5. Menghapus data dengan SQL
DELETE FROM berita WHERE `berita`.`id` = 46

