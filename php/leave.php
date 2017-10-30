<?php
/**
 * Created by PhpStorm.
 * User: pixeleye02
 * Date: 2017-07-03
 * Time: 오후 4:21
 */
include 'mysql.php';

session_start();

$query = "DELETE FROM User WHERE  User_No=".$_SESSION['user_no'];
mysqli_query($conn, $query);

session_destroy();
header('Location: ../HTML/index.php');
