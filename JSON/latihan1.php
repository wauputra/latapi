<?php

/* $mahasiswa = [
[
"nama" => "Wahyu Adi Putra",
"nba" => "09.00.30372",
"email" => "drioac1@gmail.com",
],
[
"nama" => "Wauputra",
"nba" => "09.00.30377",
"email" => "wauputra1@gmail.com",
],
]; */

$dbh = new PDO('mysql:host=localhost;dbname=my', 'root', '');

$db = $dbh->prepare('select * from m_jabatan');
$db->execute();

$jabatan = $db->fetchAll(PDO::FETCH_ASSOC);

//array asosiatif
//var_dump($mahasiswa);

$data = json_encode($jabatan);
echo $data;
