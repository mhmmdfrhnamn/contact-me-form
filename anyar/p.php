<?php
$nama = $_POST['nama'] ?? '';
$email = $_POST['email'] ?? '';
$telepon = $_POST['telepon'] ?? '';
$lokasi = $_POST['lokasi'] ?? '';
$pesan = $_POST['pesan'] ?? '';

if (!empty($email) && !empty($pesan)) {
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $penerima = "farhanexcellentz17@gmail.com"; // Email penerima pesan 
        $subjek = "Pesan dari: $nama <$email>";
        $body = "Nama: $nama\nEmail: $email\nTelepon: $telepon\nLokasi: $lokasi\nPesan: $pesan\n\nSalam,\n$nama";
        $header = "From: $email";

        if (mail($penerima, $subjek, $body, $header)) {
            echo "Pesan Kamu berhasil dikirim.";
        } else {
            echo "Maaf, Pesanmu gagal dikirim.";
        }
    } else {
        echo "Masukkan email yang valid.";
    }
} else {
    echo "Email dan pesan harus diisi.";
}

