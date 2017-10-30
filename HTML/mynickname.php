<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <?php
    session_start();
    if ($_SESSION['is_login']) {
        $user_id = $_SESSION['user_id'];
    }
    ?>
    <title>콕콕 홈페이지 | 여행 SNS 콕콕, Travel Social Network Service</title>
    <link rel="stylesheet" type="text/css" href="../css/mypage.css">
    <link rel="stylesheet" type="text/css" href="../css/base.css">
</head>
<body>
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
                    <li><a href="review.php">여행후기</a></li>
                </ul>
            </nav>
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
    </header>
    <!--content-->
    <div id="mypage">
        <li><a href="mykockoc.php" id="mypage_mypage1">MY PAGE</a></li><br>
        <li><a href="mykockoc.php" id="mypage_mypage2">마이 페이지</a></li>
    </div>
    <div id="list_mypage">
        <div id=mypage_list2>
            <a href="mykockoc.php" id="mypage_list_kockoc">내콕콕</a>
        </div>
        <div id=mypage_list2>
            <a href="mycourse.php" id="mypage_list_kockoc">내코스</a>
        </div>
        <div id=mypage_list2>
            <a href="myreview.php" id="mypage_list_kockoc">내여행후기</a>
        </div>
        <div id=mypage_list2>
            <a href="myneighbor.php" id="mypage_list_kockoc">이웃</a>
        </div>
        <div id=mypage_list2>
            <a href="myinterest.php" id="mypage_list_kockoc">관심글</a>
        </div>
        <div id=mypage_list2>
            <a href="mynotice.php" id="mypage_list_kockoc">알림</a>
        </div>
        <div id=mypage_list2>
            <a href="mynews.php" id="mypage_list_kockoc">뉴스&공지</a>
        </div>
        <div id=mypage_list1>
            <a href="mysetup.php" id="mypage_list_kockoc">설정</a>
        </div>
        <div id=mypage_list2>
            <a href="#none" id="mypage_list_kockoc">도움말</a>
        </div>
        <div id=mypage_list2>
            <a href="../php/logout.php" id="mypage_list_kockoc">로그아웃</a>
        </div>
    </div>

    <div id="mypage_main">
        <p id="mypage_main_text">설정</p>
    </div>
    <div id="mypage_nickname">
        <p>별명 변경</p>
    </div>
    <div id="mypage_nickname_list">
        <div id="mypage_nickname_text">별명을 입력해주세요.</div>
        <form action="../php/change_nickname.php" method="post">
            <input type="text" name="new_nickname" id="mypage_nickname_check">
            <button type="submit" id="mypage_nickname_overlap">중복확인</button>
            <button type="submit" id="mypage_nickname_membership">확인</button>
        </form>
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
    </nav>
    <div class="appstoreimg">
        <a href=""><img src="../img/appstore.png"></a>
    </div>
    <div class="adroidimg">
        <a href="https://play.google.com/store/apps/details?id=com.kocapplication.pixeleye.kockocapp"><img src="../img/google.png"></a>
    </div>
    <address id="address_footer">
        <br>
        TEL. 070-7010-5450 / FAX. 043-238-0567 / 제휴문의 : service@kockoc.net
        <br>
        주소 : 충북 청주시 서원구 충대로1 학연산공동기술연구원 579호
        <br>
        COPYRIGHT 2016 KocKoc. ALL RIGHTS RESERVED.
    </address>
</footer>
</body>
</html>