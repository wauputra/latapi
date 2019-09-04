<?php

$data = file_get_contents('coba.json');
$coba = json_decode($data, true);

var_dump($coba);

echo $coba[0]["pembimbing"]["pembimbing 1"];
