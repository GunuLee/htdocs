<?php
/**
 * Created by PhpStorm.
 * User: pixeleye02
 * Date: 2017-06-22
 * Time: 오후 5:04
 */
include '../php/mysql.php';

session_start();
if ($_SESSION['is_login']) {
    $user_id = $_SESSION['user_id'];
}

$board_no = $_GET["board_no"];

$query = "select * from Board where Board_No =" . $board_no;
$resultSet = mysqli_query($conn, $query);

$row = mysqli_fetch_array($resultSet);
$course_no = $row['Course_No'];
$text = $row['Text'];
$userNo = $row['User_No'];
$date = $row['Date'];
$time = $row['Time'];
$course_name = $row['Course_Name'];

$query_img = "select * from ImgPathList where Board_No = " . $board_no;
$resultSet_img = mysqli_query($conn, $query_img);
$img_row = [];
$i = 0;
while ($img = mysqli_fetch_array($resultSet_img)) {
    $img_row[$i] = $img['ImgPath'];
    $i++;
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" http-equiv="pragma" content="no-cache">
    <title>콕콕 홈페이지 | 여행 SNS 콕콕, Travel Social Network Service</title>
    <link rel="stylesheet" type="text/css" href="../css/review.css">
    <link rel="stylesheet" type="text/css" href="../css/base.css">
    <script type="text/javascript" src="../js/main.js"></script>
    <script type="text/javascript" src="../jQuery/jquery-3.1.1.min.js"></script>
    <link rel="stylesheet" type="text/css" href="../css/frame.css"
          media="screen and (min-width: 1200px) and (max-width: 5000px)">
    <link rel="stylesheet" type="text/css" href="../css/frame_mobile.css"
          media="screen and (min-width: 200px) and (max-width: 600px)">
    <link rel="stylesheet" type="text/css" href="../css/frame_tablet.css"
          media="screen and (min-width: 601px) and (max-width: 1199px)">
</head>

<body onpageshow="all()">
<!--wraper-->
<div id="wraper">
    <!--헤더-->
    <header id="main_header">
        <div id="header_upper">
            <!--로고-->
            <a href="index.php" id="logo"><img src="../img/logo.png" id="logo_img"></a>
            <!--회원 네비-->
            <nav id="member_nav">
                <ul>
                    <?php
                    if (!$_SESSION['is_login']) {
                        echo "<li><a href=\"login.html\">로그인</a></li><li><a href=\"signup.html\">회원가입</a></li>";
                    } else {
                        echo "<li><a href=\"mykockoc.php\">마이페이지</a></li><li><a href=\"../php/logout.php\">로그아웃</a></li>";
                    }
                    ?>
                </ul>
            </nav>
            <!--메인 메뉴-->
            <nav id="main_menu_nav">
                <ul>
                    <li><a href="course.php">코스</a></li>
                    <li><a href="toursite.php">관광지</a></li>
                    <li><a href="festivalinfo.php">축제정보</a></li>
                    <li>
                        <a href="review.php">
                            <div id="font_color">여행후기</div>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <!--검색 탭-->
        <div id="search">
            <div id="search_text_field">
                    <span id="search_bar">
                            <input type='text' id='input_text' placeholder="여행후기 검색" style="text-align: center"/>
                        </span>
                <button type='submit' id='sch_smit'>검색</button>
            </div>
            <ul id="search_nav">
                <li><a href="#none">코스짜기+</a></li>
                <li><a href="#none">여행후기 작성+</a></li>
                <li><a href="#none">여행 팁+</a></li>
            </ul>
        </div>
    </header>
    <!--여행후기 상세보기-->
    <div id="list">
        <div id="detail">
            <div id="detail_header">
                <?php
                echo "<p>제목:" . $course_name . "</p>";
                ?>
                <a href="#none">
                    <button type="submit" id="copybutton2">코스복사</button>
                </a>
                <a href="#none">
                    <button type="submit" id="copybutton">관심글 등록</button>
                </a>
            </div>
        </div>
        <div id="detail_list">
            <?php
            for ($i = 0; $i < count($img_row); $i++) {
                echo "<img src=\"http://115.68.14.27:8080/board_image/" . $userNo . "/" . $img_row[$i] . "\" id=\"detail_list_arr\">\n";
            }
            echo "<p>" . $text . "</p>";
            ?>
            <div id="detail_star">
                <a href="#none"><img src="../img/heart.png" id="detail_star_heart"></a>
                <a href="#none"><img src="../img/star.png" id="detail_star_star"></a>
                <a href="#none"><img src="../img/comment.png" id="detail_star_comment"></a>
                <a href="#none"><img src="../img/scrap.jpg" id="detail_star_scrap"></a>
            </div>
            <div id="detail_comment">
                <form action="#none">
                    <input type="text" id="detail_comment_box">
                    <button type='submit' id='detail_comment_button'>댓글</button>
                </form>
            </div>
            <?php
            $query_comment = "select *
                              from User
                              inner join RegisterComment
                              on User.User_No = RegisterComment.User_No
                              where RegisterComment.Board_No = " . $board_no;
            $resultSet_comment = mysqli_query($conn, $query_comment);

            while ($comment_row = mysqli_fetch_array($resultSet_comment)) {
                $comment = $comment_row['Text'];
                $comment_user = $comment_row['Nickname'];
                $comment_date = $comment_row['Date'];

                echo "<a>" . $comment_user . "</a>
                    <a href=\"#none\" id=\"detail_comment_ment_date\">" . $comment_date . "</a>
                    <br>
                    <p id=\"detail_comment_ment_massage\">" . $comment . "</p>
                </ul>
            </div>";
            }
            ?>
            <button type='submit' id='list_button' onclick="history.back()">목록보기</button>
        </div>
    </div>
</div>
    <!--푸터-->
    <footer id="footer">
        <nav id="nav_footer">
            <ul>
                <li>
                    <a href="#none" target="_self">콕콕소개</a>
                </li>
                <li>
                    <a href="#none" target="_self">콕콕 사용법</a>
                </li>
                <li>
                    <a href="#none" target="_self">이용문의</a>
                </li>
                <li>
                    <a href="#none" target="_self">이용약관</a>
                </li>
                <li>
                    <a href="#none" target="_self">개인정보 취급방침</a>
                </li>
            </ul>
            <div class="appstoreimg">
                <a href=""><img src="../img/appstore.png" href="#none"></a>
            </div>
            <div class="adroidimg">
                <a href="https://play.google.com/store/apps/details?id=com.kocapplication.pixeleye.kockocapp"><img
                            src="../img/google.png"></a>
            </div>
        </nav>
        <address id="address_footer">
            <br> TEL. 070-7010-5450 / FAX. 043-238-0567 / 제휴문의 : service@kockoc.net
            <br> 주소 : 충북 청주시 서원구 충대로1 학연산공동기술연구원 579호
            <br> COPYRIGHT 2016 KocKoc. ALL RIGHTS RESERVED.
        </address>
    </footer>
</body>

</html>

