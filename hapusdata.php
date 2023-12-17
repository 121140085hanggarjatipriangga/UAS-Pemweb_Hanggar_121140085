<?php
include 'koneksi.php';

session_start();

$dataHandler = new BeritaDataHandler($conn);

$id = $_POST['id'];

$alamat_ip = $_SERVER['REMOTE_ADDR'];

$dataHandler->hapusData($id, $alamat_ip);

$_SESSION['last_action'] = time();

$conn->close();
?>
