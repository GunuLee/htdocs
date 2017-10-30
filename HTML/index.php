<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>콕콕 홈페이지 | 여행 SNS 콕콕, Travel Social Network Service</title>
    <script type="text/javascript" src="../js/main.js"></script>
    <script type="text/javascript" src="../jQuery/jquery-3.1.1.min.js"></script>
    <script type="text/javascript" src="../js/singup.js"></script>
    <!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">-->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="../js/tourApi.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="../css/index2.css" media="screen and (min-width: 1200px) and (max-width: 5000px)">
    <link rel="stylesheet" type="text/css" href="../css/index_mobile.css" media="screen and (min-width: 200px) and (max-width: 600px)">
    <link rel="stylesheet" type="text/css" href="../css/index_tablet.css" media="screen and (min-width: 601px) and (max-width: 1199px)">
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
            <a href="course.php"><li>코스</li></a>
            <a href="toursite.php"><li>관광지</li></a>
            <a href="festivalinfo.php"><li>축제정보</li></a>
            <a href="review.php"><li>여행후기</li></a>
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
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <!--<ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>-->

        <div class="carousel-inner">
            <div class="item active">
                <img id="slide_img1" src="">
                <div id="slide_content1" class="carousel-caption">
                </div>
            </div>

            <div class="item">
                <img id="slide_img2" src="">
                <div id="slide_content2" class="carousel-caption">
                </div>
            </div>

            <div class="item">
                <img id="slide_img3" src="">
                <div id="slide_content3" class="carousel-caption">
                </div>
            </div>
        </div>

        <script>
            slideImg();
        </script>

        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    <div class="w3-container w3-orange">
        <p>추천관광지</p>
    </div>
    <div class="rwd">
        <a href=""><img src="http://115.68.14.27:8080/board_image/295/20161210_142318.jpg" class="reco1"></a>
        <a href=""><img src="http://115.68.14.27:8080/board_image/295/20161210_142318.jpg" class="reco"></a>
        <a href=""><img src="http://115.68.14.27:8080/board_image/295/20161210_142318.jpg" class="reco1"></a>
        <a href=""><img src="http://115.68.14.27:8080/board_image/295/20161210_142318.jpg" class="reco" id="reco"></a>
        <a href=""><img src="http://115.68.14.27:8080/board_image/295/20161210_142318.jpg" class="reco1"></a>
        <a href=""><img src="http://115.68.14.27:8080/board_image/295/20161210_142318.jpg" class="reco"></a>
    </div>
    <div style="clear: both">
        <a href=""><img src="../img/tip.JPG" style="width: 49%; margin-top: 30px;"></a>
        <a href=""><img src="../img/tip.JPG" style="float: right; width: 49%; margin-top: 30px;" id="hidden"></a>
    </div>

    <div class="w3-container w3-orange">
        <p>추천코스</p>
    </div>
    <div>
        <a href=""><img src="../img/course.JPG" class="course1"></a>
        <a href=""><img src="../img/course.JPG" class="course1"></a>
        <a href=""><img src="../img/course.JPG" class="course"></a>
    </div>

    <div class="w3-container w3-orange">
        <p>여행후기</p>
    </div>
    <div>
        <a href=""><img src="http://115.68.14.27:8080/board_image/361/1472308361381.jpg" class="reco1"></a>
        <a href=""><img src="http://115.68.14.27:8080/board_image/361/1472308361381.jpg" class="reco"></a>
        <a href=""><img src="http://115.68.14.27:8080/board_image/361/1472308361381.jpg" class="reco1"></a>
        <a href=""><img src="http://115.68.14.27:8080/board_image/361/1472308361381.jpg" class="reco" id="reco"></a>
        <a href=""><img src="http://115.68.14.27:8080/board_image/361/1472308361381.jpg" class="reco1"></a>
        <a href=""><img src="http://115.68.14.27:8080/board_image/361/1472308361381.jpg" class="reco"></a>
    </div>
</div>
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
            <a href="https://play.google.com/store/apps/details?id=com.kocapplication.pixeleye.kockocapp"><img src="../img/google.png" href="#none" class="footimg" id="footimg2"></a>
        </div>
    </div>
</div>
</body>
</html>