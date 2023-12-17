<?php
include 'koneksi.php';

session_start();

$dataHandler = new BeritaDataHandler($conn);

$nama = $_POST['nama'];
$detail = $_POST['detail'];
$tanggal = $_POST['tanggal'];
$jenis = $_POST['jenis'];
$penulis = $_POST['penulis'];

$jenis_browser = $_SERVER['HTTP_USER_AGENT'];

$alamat_ip = $_SERVER['REMOTE_ADDR'];

$dataHandler->tambahData($nama, $detail, $tanggal, $jenis, $penulis, $_FILES["foto"], $jenis_browser, $alamat_ip);

$_SESSION['last_action'] = time();

$conn->close();
?>
