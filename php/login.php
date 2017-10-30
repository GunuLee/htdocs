<?php
/**
 * Created by PhpStorm.
 * User: pixeleye02
 * Date: 2017-06-19
 * Time: 오전 11:14
 */

include 'mysql.php';

if(!isset($_POST['id'])||!isset($_POST['pwd'])) exit;

$id = $_POST['id'];
$pwd = $_POST['pwd'];

$query = "select * from User where E_mail_ID = '".$id."' and PWD = password('".$pwd."')";
$result_set = mysqli_query($conn,$query);
$row = mysqli_fetch_array($result_set);

if($row == ""){
    echo "<script>alert('아이디 또는 패스워드가 잘못되었습니다.');history.back();</script>";
} else {
    session_start();

    $_SESSION['is_login'] = true;
    $_SESSION['user_id'] = $id;
    $_SESSION['user_name'] = $row['Name'];
    $_SESSION['user_no'] = $row['User_No'];

    echo "<script>alert('성공');</script>";

    header('Location: ../HTML/index.php');
}
?>