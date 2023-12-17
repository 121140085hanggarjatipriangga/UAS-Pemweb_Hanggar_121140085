-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 17 Des 2023 pada 22.10
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webhanggardb`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `berita`
--

CREATE TABLE `berita` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `detail` varchar(500) NOT NULL,
  `tanggal` date NOT NULL,
  `jenis` varchar(50) NOT NULL,
  `penulis` varchar(255) NOT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `jenis_browser` varchar(200) NOT NULL,
  `alamat_ip` varchar(160) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `berita`
--

INSERT INTO `berita` (`id`, `nama`, `detail`, `tanggal`, `jenis`, `penulis`, `foto`, `jenis_browser`, `alamat_ip`) VALUES
(46, 'Kubu Prabowo: Boleh Saja Remehkan Gibran, Kita Buktikan di Arena Debat Cawapres', 'Sekretaris Tim Kampanye Nasional (TKN) Prabowo Subianto-Gibran Rakabuming Raka, Nusron Wahid mempersilakan siapapun untuk meremehkan Gibran yang akan segera menghadapi debat cawapres. Nusron mengatakan, semua akan terbukti di arena debat cawapres pada 22 Desember 2023. \"Underestimate (meremehkan) boleh-boleh saja. Yang penting kan faktanya dan buktinya, kita buktikan dalam arena debat nanti. Kalau enggak yakin, ngapain nyalon?\" ujar Nusron saat ditemui di Tebet, Jakarta Selatan', '2023-12-17', 'Berita Nasional', 'Hanggar Jati Priangga', 'img/6578e666948c4.jpg', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', '::1'),
(48, 'Korban Erupsi Marapi Bertambah, Pendaki Perempuan yang Video Minta Tolongnya Viral Meninggal Dunia  ', 'Korban meninggal dunia akibat erupsi Gunung Marapi di Sumatera Barat bertambah menjadi 24 orang. Korban terakhir adalah Zhafirah Zarim Febrina yang menghembuskan napas terakhir di Rumah Sakit Umum Pusat (RSUP) M Djamil Padang, Minggu (17/12/2023) sekitar pukul 17.50 WIB. Zhafira sempat tenar karena videonya meminta tolong yang dikirim ke ibunya menjadi viral. Saat mengirim video itu, Zhafira dalam kondisi terluka parah dengan tubuh dipenuhi abu vulkanik gunung. ', '2023-12-16', 'Berita Nasional', 'Hanggar Jati Priangga', 'img/657251647ae9e.jpg', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', '::1'),
(49, 'Ketika Ganjar Tiba-tiba Dimintai Uang oleh Ibu-ibu di Magelang, Langsung Panggil Panwaslu ', 'Momen menarik terjadi ketika calon presiden nomor urut 3 Ganjar Pranowo menengok sawah-sawah milik petani di Dusun Gunung Bakal, Desa Sumberarum, Magelang, Jawa Tengah, Minggu (17/12/2023). Di sela-sela obrolannya terkait irigasi bersama petani, Ganjar dihampiri oleh seorang ibu-ibu yang meminta uang kepadanya. Ibu-ibu berjilbab merah itu bertanya kepada Ganjar apakah akan berbagi rezeki dalam kunjungannya ke Jawa Tengah hari ini dalam masa kampanye.', '2023-12-15', 'Berita Nasional', 'Hanggar Jati Priangga', 'img/657eb823d6cfe.jpg', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', '::1'),
(50, 'PPATK Enggan Ikut Campur Urusan Politik soal Laporan Kejanggalan Dana Kampanye', 'Ketua Pusat Pelaporan dan Analisis Transaksi Keuangan (PPATK) Ivan Yustiavandana menyatakan tak ikut campur urusan politik terkait laporan transaksi janggal yang diduga untuk membiayai kampanye Pemilu 2024. Ia menekankan, pihaknya fokus pada upaya untuk mencegah dan memberantas tindak pidana pencucian uang (TPPU). “Kami tidak masuk substansi politiknya. Kami enggak ke sana,” ujar Ivan pada Kompas.com, Minggu (17/12/2023).', '2023-12-18', 'Berita Nasional', 'Hanggar Jati Priangga', 'img/5f310dec40d90.jpg', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', '::1');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `berita`
--
ALTER TABLE `berita`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `berita`
--
ALTER TABLE `berita`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
