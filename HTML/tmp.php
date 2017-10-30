<?php
session_start();
if ($_SESSION['is_login']) {
    $user_id = $_SESSION['user_id'];
}
?>
<?php
if (!$_SESSION['is_login']) {
    echo "<li><a href=\"login.html\">로그인</a></li><li><a href=\"signup.html\">회원가입</a></li>";
} else {
    echo "<li><a href=\"mykockoc.php\">마이페이지</a></li><li><a href=\"../php/logout.php\">로그아웃</a></li>";
}
?>
