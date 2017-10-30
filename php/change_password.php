<?php
/**
 * Created by PhpStorm.
 * User: pixeleye02
* Date: 2017-06-28
* Time: 오후 3:12
*/

include 'mysql.php';

session_start();
$userNo = $_SESSION['user_no'];
$currentPwd = $_POST['current_pwd'];
$newPwd = $_POST['new_pwd'];
$pwdCheck = $_POST['pwd_check'];

if($newPwd != $pwdCheck) {
    echo"<script>alert(\"새로운 비밀번호와 비밀번호확인이 다릅니다.\"); history.back();</script>";
    exit;
}

$queryCheckID = "select User_No from User where User_No = ".$userNo." and PWD = password('".$currentPwd."')";
$resultSet=mysqli_query($conn, $queryCheckID);
$row = mysqli_fetch_array($resultSet);


if(!isset($row)) echo "<script>alert(\"현재 비밀번호가 틀렸습니다.\"); history.back(); </script>";
else {
    $query = "update User set PWD = password('".$newPwd."') where User_No = ".$row['User_No'];
    $resultSet = mysqli_query($conn, $query);
    if($resultSet) echo "<script>alert(\"비밀번호를 변경하였습니다.\"); history.back(); </script>";
    else echo "<script>alert(\"비밀번호를 변경하지 못하였습니다.\"); history.back(); </script>";
}