<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/html">

<head>
    <meta charset="utf-8">
    <?php
    include '../php/mysql.php';

    session_start();
    if ($_SESSION['is_login']) {
        $user_id = $_SESSION['user_id'];
    }

    $course_no = $_GET['course_no'];

    $query_course = "select title from Course_v2 where `index`=" . $course_no;
    $resultSet = mysqli_query($conn, $query_course);

    $row = mysqli_fetch_array($resultSet);
    $title = $row['title'];

    echo "<script>alert(" . $title . ")</script>";

    $query_stopover = "select name, dateTime from Stopover where courseIndex=" . $course_no;
    $resultSet = mysqli_query($conn, $query_stopover);

    $stopovers = Array();

    while ($row = mysqli_fetch_row($resultSet)) {
        array_push($stopovers, $row);
    }
    ?>
    <title>콕콕 홈페이지 | 여행 SNS 콕콕, Travel Social Network Service</title>
    <link rel="stylesheet" type="text/css" href="../css/course.css">
    <link rel="stylesheet" type="text/css" href="../css/base.css">
    <link rel="stylesheet" type="text/css" href="../css/detail.css">
    <script type="text/javascript" src="../js/main.js"></script>
    <script type="text/javascript" src="../jQuery/jquery-3.1.1.min.js"></script>
    <link rel="stylesheet" type="text/css" href="../css/frame.css"
          media="screen and (min-width: 1200px) and (max-width: 5000px)">
    <link rel="stylesheet" type="text/css" href="../css/frame_mobile.css"
          media="screen and (min-width: 200px) and (max-width: 600px)">
    <link rel="stylesheet" type="text/css" href="../css/frame_tablet.css"
          media="screen and (min-width: 601px) and (max-width: 1199px)">
</head>

<body id="body">
<div id="header">
    <div id="logo">
        <a href="index.php"><img src="../img/logo.png" id="logo_img"></a>
    </div>
    <div id="login">
        <ul id="log">
            <?php
            if (!$_SESSION['is_login']) {
                echo "<li><a href=\"login.html\">로그인</a></li><li><a href=\"signup.html\">회원가입</a></li>";
            } else {
                echo "<li><a href=\"mykockoc.php\">마이페이지</a></li><li><a href=\"../php/logout.php\">로그아웃</a></li>";
            }
            ?>
        </ul>
    </div>
    <div id="menu">
        <ul>
            <a href="course.php" style="color: #f66d5b;"><li>코스</li></a>
            <a href="toursite.php"><li>관광지</li></a>
            <a href="festivalinfo.php"><li>축제정보</li></a>
            <a href="review.php"><li>여행후기</li></a>
            <a href="http://www.menycool.com/javascript-image-slider" target="_blank"></a>
        </ul>
    </div>
</div>
<!--검색 탭-->
<div id="search">
    <div id="search_text_field">
                    <span id="search_bar">
                    <input type='text' id='input_text' placeholder="여행코스 검색" style="text-align: center"/>
                </span>
        <button type='submit' id='sch_smit'>검색</button>
    </div>
    <ul id="search_nav">
        <li><a href="#none">코스짜기+</a></li>
        <li><a href="#none">여행후기 작성+</a></li>
        <li><a href="#none">여행 팁+</a></li>
    </ul>
</div>
<div id="list">
    <div id="detail">
        <div id="detail_header">
            <p>제목: <?php
                echo $title;
                ?></p>
            <a href="#none">
                <button type="submit" id="copybutton">코스복사</button>
            </a>
        </div>
    </div>
    <!-- <div id="detail_outline"> -->
    <div id="detail_list">
        <?php
        for ($i = 0; $i < count($stopovers); $i++) {
            $dateTime = $stopovers[$i][1];
            $strTok = explode(' ', $dateTime);
            $date = $strTok[0];
            $time = $strTok[1];
            echo "<div class=\"courses\">
                <div class=\"courses_top\">
                    <div class=\"circle\"></div>
                    <p class=\"stopover_name\">#" . $stopovers[$i][0] . "</p><br>
                </div>
                <div class=\"courses_bottom\">
                    <img src=\"../img/course_date_gray.png\" alt=\"\" class=\"course_detail_icon\">
                    <p>" . $date . "</p>
                    <img src=\"../img/profile_course.png\" alt=\"\" class=\"course_detail_icon\">
                    <p>" . $time . "</p>
                </div>
                </div>";
        }
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
        <div id="detail_comment_ment">
            <ul>
                <a href="#none"><img src="../img/profile.png" id="detail_comment_ment_img"></a>
                <a href="#none" id="detail_comment_ment_name">김미윤</a>
                <a href="#none" id="detail_comment_ment_date">2015-07-06</a>
                <br>
                <a href="#none" id="detail_comment_ment_massage">아 정말 가고 싶네요 제주도 또 가고 싶네요아 정말 가고 싶네요 제주도 또 가고
                    싶네요</a>
            </ul>
        </div>
        <div id="detail_comment_ment">
            <ul>
                <a href="#none"><img src="../img/profile.png" id="detail_comment_ment_img"></a>
                <a href="#none" id="detail_comment_ment_name">김미윤</a>
                <a href="#none" id="detail_comment_ment_date">2015-07-06</a>
                <br>
                <a href="#none" id="detail_comment_ment_massage">아 정말 가고 싶네요 제주도 또 가고 싶네요아 정말 가고 싶네요 제주도 또 가고
                    싶네요</a>
            </ul>
        </div>
    </div>
    <button type='submit' id='list_button' onclick="history.back()">목록보기</button>
</div>
<!--푸터-->
<div id="footer">
    <div id="footer2">
        <div id="text">
            <div id="nav">
                <a href="" target="_self" class="foottext" style="color: white">콕콕소개</a>
                <a href="" target="_self" class="foottext" style="color: white">콕콕 사용법</a>
                <a href="" target="_self" class="foottext" style="color: white">이용문의</a>
                <a href="" target="_self" class="foottext" style="color: white">이용약관</a>
                <a href="" target="_self" class="foottext" style="color: white">개인정보 취급방침</a>
            </div>
            <div id="address">
                TEL. 070-7010-5450 / FAX. 043-238-0567 / <span class="addspan">제휴문의 : service@kockoc.net</span>
                <br> 주소 : 충북 청주시 서원구 충대로1 <span class="addspan">학연산공동기술연구원 579호</span>
                <br> COPYRIGHT 2016 KocKoc. ALL RIGHTS RESERVED.
            </div>
        </div>
        <div id="store">
            <a href=""><img src="../img/appstore.png" href="#none" class="footimg" id="footimg1"></a>
            <a href="https://play.google.com/store/apps/details?id=com.kocapplication.pixeleye.kockocapp"><img
                        src="../img/google.png" href="#none" class="footimg" id="footimg2"></a>
        </div>
    </div>
</div>
</body>
</html>