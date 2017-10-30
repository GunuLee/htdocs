<?php

$host = '221.160.54.183:3307';
$user = 'root';
$pw = '0505';
$dbName = 'people';

$mysqli = mysqli_connect($host, $user, $pw, $dbName);

$query_get ="select * from visit where today = ".date(YYYY-mm-dd);
$resultSet = mysqli_query($mysqli, $query_get);

if($resultSet){
    $row = mysqli_fetch_array($resultSet);

    $today = $row['today'];
    $total = $row['total'];
} else {
    $query_get ="select * from visit order by date DESC";
    $resultSet = mysqli_query($mysqli, $query_get);

    $row = mysqli_fetch_array($resultSet);
    $total = $row['total'];
}





?>