<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>콕콕 홈페이지 | 여행 SNS 콕콕, Travel Social Network Service</title>
    <link rel="stylesheet" type="text/css" href="../css/review.css">
    <link rel="stylesheet" type="text/css" href="../css/base.css">
    <script type="text/javascript" src="../js/main.js"></script>
    <script type="text/javascript" src="../jQuery/jquery-3.1.1.min.js"></script>
    <script type="text/javascript" src="../js/board_ajax.js"></script>
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
            session_start();
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
            <a href="course.php"><li>코스</li></a>
            <a href="toursite.php"><li>관광지</li></a>
            <a href="festivalinfo.php"><li>축제정보</li></a>
            <a href="review.php" style="color: #f66d5b;"><li>여행후기</li></a>
            <a href="http://www.menycool.com/javascript-image-slider" target="_blank"></a>
        </ul>
    </div>
</div>
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
<div id="container">
    <div class="component_content" id="tour_recommend">
        <p>지역</p>
        <br>
        <ul>
            <button type='submit' class="basebutton" id="al_" onclick="al_()" style="background-color: #f66d5b; color: white;">전체</button>
            <button type='submit' class='basebutton' id="seoul" onclick="seoul()">서울</button>
            <button type='submit' class='basebutton' id="incheon" onclick="incheon()">인천</button>
            <button type='submit' class='basebutton' id="daejeon" onclick="daejeon()">대전</button>
            <button type='submit' class='basebutton' id="daegu" onclick="daegu()">대구</button>
            <button type='submit' class='basebutton' id="gwangju" onclick="gwangju()">광주</button>
            <button type='submit' class='basebutton' id="busan" onclick="busan()">부산</button>
            <button type='submit' class='basebutton' id="ulsan" onclick="ulsan()">울산</button>
            <button type='submit' class='basebutton' id="sejong" onclick="sejong()">세종</button>
            <button type='submit' id='searchbutton'>검색</button>
            <button type='submit' class='basebutton' id="gyeonggi" onclick="gyeonggi()">경기</button>
            <button type='submit' class='basebutton' id="gangwon" onclick="gangwon()">강원</button>
            <button type='submit' class='basebutton' id="chungbuk" onclick="chungbuk()">충북</button>
            <button type='submit' class='basebutton' id="chungnam" onclick="chungnam()">충남</button>
            <button type='submit' class='basebutton' id="gyeongbuk" onclick="gyeongbuk()">경북</button>
            <button type='submit' class='basebutton' id="gyeongnam" onclick="gyeongnam()">경남</button>
            <button type='submit' class='basebutton' id="jeonbuk" onclick="jeonbuk()">전북</button>
            <button type='submit' class='basebutton' id="jeonnam" onclick="jeonnam()">전남</button>
            <button type='submit' class='basebutton' id="jeju" onclick="jeju()">제주</button>
        </ul>
    </div>
</div>
<div id="list">
    <div class="list_header">
        <p>여행후기</p>
    </div>
    <div class="component_content" id="course_recommend">
        <a href="" class="review_button">
            <div class="review_button_child">
                <img id="article_img1" class="review_button_img">
            </div>
        </a>
        <a href="" class="review_button">
            <div class="review_button_child">
                <img id="article_img2" class="review_button_img">
            </div>
        </a>
        <a href="" class="review_button2">
            <div class="review_button_child">
                <img id="article_img3" class="review_button_img">
            </div>
        </a>
        <a href="" class="review_button">
            <div class="review_button_child">
                <img id="article_img4" class="review_button_img">
            </div>
        </a>
        <a href="" class="review_button">
            <div class="review_button_child">
                <img id="article_img5" class="review_button_img">
            </div>
        </a>
        <a href="" class="review_button2">
            <div class="review_button_child">
                <img id="article_img6" class="review_button_img">
            </div>
        </a>
        <a href="" class="review_button">
            <div class="review_button_child">
                <img id="article_img7" class="review_button_img">
            </div>
        </a>
        <a href="" class="review_button">
            <div class="review_button_child">
                <img id="article_img8" class="review_button_img">
            </div>
        </a>
        <a href="" class="review_button2">
            <div class="review_button_child">
                <img id="article_img9" class="review_button_img">
            </div>
        </a>
        <a href="" class="review_button">
            <div class="review_button_child">
                <img id="article_img10" class="review_button_img">
            </div>
        </a>
        <a href="" class="review_button">
            <div class="review_button_child">
                <img id="article_img11" class="review_button_img">
            </div>
        </a>
        <a href="" class="review_button2">
            <div class="review_button_child">
                <img id="article_img12" class="review_button_img">
            </div>
        </a>
        <a href="" class="review_button">
            <div class="review_button_child">
                <img id="article_img13" class="review_button_img">
            </div>
        </a>
        <a href="" class="review_button">
            <div class="review_button_child">
                <img id="article_img14" class="review_button_img">
            </div>
        </a>
        <a href="" class="review_button2">
            <div class="review_button_child">
                <img id="article_img15" class="review_button_img">
            </div>
        </a>
    </div>
</div>
<div class="pagenumber">
    <button type="submit" class="number" id="number1" onclick="number1()" value="0"
            style="background-color: #f66d5b; color: white;">1
    </button>
    <button type="submit" class="number" id="number2" onclick="number2()" value="1">2</button>
    <button type="submit" class="number" id="number3" onclick="number3()" value="2">3</button>
    <script>
        $("#number1").click(function () {
            var flag = $("#number1").val();
            board_ajax(flag * 0);
        })
        $("#number2").click(function () {
            var flag = $("#number2").val();
            board_ajax(flag * 15);
        })
        $("#number3").click(function () {
            var flag = $("#number3").val();
            board_ajax(flag * 15);
        })
    </script>
</div>
<script>
    $(document).ready(function () {
        board_ajax(0);
    });
</script>
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
