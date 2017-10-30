<?php
    $host = '221.160.54.183:3307';
    $user = 'root';
    $pw = '0505';
    $dbName = 'people';
    $mysqli = mysqli_connect($host, $user, $pw, $dbName);

//    if($mysqli){
//        echo "MySQL 접속 성공";
//    }else{
//        echo "MySQL 접속 실패";
//    }

    $query = "SELECT person_in, person_out, nowmon, nowday FROM expo_1
    union 
    SELECT person_in, person_out, nowmon, nowday FROM expo_2 union  
    SELECT person_in, person_out, nowmon, nowday FROM expo_3 union  
    SELECT person_in, person_out, nowmon, nowday FROM expo_4 union  
    SELECT person_in, person_out, nowmon, nowday FROM expo_5 union  
    SELECT person_in, person_out, nowmon, nowday FROM expo_6 union  
    SELECT person_in, person_out, nowmon, nowday FROM expo_7 union  
    SELECT person_in, person_out, nowmon, nowday FROM expo_8 union  
    SELECT person_in, person_out, nowmon, nowday FROM expo_9 union  
    SELECT person_in, person_out, nowmon, nowday FROM expo_10";

    $resultSet = mysqli_query($mysqli, $query);
    $row = mysqli_fetch_array($resultSet);


    echo json_encode($row);

