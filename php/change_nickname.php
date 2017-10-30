<?php
/**
 * Created by PhpStorm.
 * User: pixeleye02
 * Date: 2017-06-29
 * Time: 오후 2:35
 */
include 'mysql.php';

session_start();

$userNo = $_SESSION['user_no'];
$newNickname = $_POST['new_nickname'];

$query = "select * from User where Nickname = '".$newNickname."'";
$resultSet = mysqli_query($conn, $query);
$row = mysqli_fetch_array($resultSet);
if(isset($row)) echo "<script>alert(\"그 닉네임은 이미 존재합니다.\"); history.back();</script>";
else {
    $query = "update User set Nickname = '".$newNickname."' where User_No = ".$userNo;
    $resultSet = mysqli_query($conn, $query);
    if($resultSet) echo "<script>alert(\"닉네임을 변경하였습니다.\"); history.back();</script>";
    else echo "<script>alert(\"닉네임 변경에 실패하였습니다.\"); history.back();</script>";
}

