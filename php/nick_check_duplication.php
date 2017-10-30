<?php
/**
 * Created by PhpStorm.
 * User: pixeleye02
 * Date: 2017-06-20
 * Time: 오후 2:31
 */
include 'mysql.php';

$insert = $_GET['nickname'];

$query = "select User_No from User where Nickname='".$insert."'";
$result = mysqli_query($conn, $query);

if(result != "")
    echo "<script>
                alert(\"중복된 닉네임이 존재합니다.\");               
           </script>" ;//중복됨
else "<script>
                alert(\"사용가능합니다.\");               
           </script>"; //중복안됨
?>