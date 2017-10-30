<?php
/**
 * Created by PhpStorm.
 * User: pixeleye02
 * Date: 2017-06-27
 * Time: 오전 10:58
 */
session_start();
session_destroy();
header('Location: ../HTML/index.php');
echo "<script>alert(\"로그아웃 되었습니다.\")</script>"
?>