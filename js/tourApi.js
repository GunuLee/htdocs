/**
 * Created by pixeleye02 on 2017-07-04.
 */
var serviceKey = "%2FPY%2FrC05SWjkibjwVdcdM9oEFIigSw3ePTOzJRtbCB3Li5gdZVTDZkYG5A1U4fah%2BvyfFw%2BGIGkeE3gpg3EaPQ%3D%3D"; //서비스 키
var apiURL = "http://api.visitkorea.or.kr/openapi/service/rest/KorService/"; // apiURL
var numOfRows = 45; //한 페이지 결과 수
var MobileOS = "ETC"; //os종류
var MobileApp = "KOCKOC"; //서비스 이름
var areaBasedList = "areaBasedList"; //지역기반 검색
var detailICommon = "detailCommon"; //상세정보
var searchFestival = "searchFestival"; //축제검색
var contentTypeId = 999; //콘텐츠타입
var areaCode = 999; //지역코드

function thumbnailTourSite(flag) {
    var URL = apiURL + areaBasedList + "?ServiceKey=" + serviceKey;
    var allData = {
        arrange: "o",
        MobileOS: MobileOS,
        MobileApp: MobileApp,
        numOfRows: numOfRows,
        areaCode: areaCode,
        contentTypeId: contentTypeId,
        _type: "json"
    };
    if (areaCode == 999 && contentTypeId == 999) {
        delete allData.areaCode;
        delete allData.contentTypeId;
    }
    else if (areaCode == 999 && contentTypeId != 999) {
        delete allData.areaCode;
    }
    else if (areaCode != 999 && contentTypeId == 999) {
        delete  allData.contentTypeId;
    }
    $.ajax({
        url: URL, // 요청 할 주소
        async: true, // false 일 경우 동기 요청으로 변경
        type: 'GET', // GET, PUT
        data: allData, // 전송할 데이터
        dataType: 'text', // xml, json, script, html
        beforeSend: function (jqXHR) {}, // 서버 요청 전 호출 되는 함수 return false; 일 경우 요청 중단
        success: function (data) {
            data = JSON.parse(data);
            for (var i = 0; i < 15; i++) {
                var contentID = JSON.stringify(data.response.body.items.item[i + flag].contentid);
                var contentType = JSON.stringify(data.response.body.items.item[i + flag].contenttypeid);
                var thumbnail = JSON.stringify(data.response.body.items.item[i + flag].firstimage2).replace(/"/gi, "");
                $("#tour_site_thumbnail" + (i + 1)).attr("src", thumbnail);
                $("#tour_site_thumbnail" + (i + 1)).parent().attr("href", "toursite_detail.php?contentID=" + contentID + "&contentType=" + contentType);
            }
        }, // 요청 완료 시
        error: function (jqXHR) {
        }, // 요청 실패.
        complete: function (jqXHR) {
        } // 요청의 실패, 성공과 상관 없이 완료 될 경우 호출
    });
}

function detailTourSite(contentID) {
    var URL = apiURL + detailICommon + "?ServiceKey=" + serviceKey;

    $.ajax({
        url: URL, // 요청 할 주소
        async: true, // false 일 경우 동기 요청으로 변경
        type: 'GET', // GET, PUT
        data: {
            MobileOS: MobileOS,
            MobileApp: MobileApp,
            contentId: contentID,
            overviewYN: "Y",
            defaultYN: "Y",
            firstImageYN: "Y",
            _type: "json"
        }, // 전송할 데이터
        dataType: 'text', // xml, json, script, html
        beforeSend: function (jqXHR) {
        }, // 서버 요청 전 호출 되는 함수 return false; 일 경우 요청 중단
        success: function (data) {
            data = JSON.parse(data);
            var re = /\r\n/gi; //개행문자
            var title = JSON.stringify(data.response.body.items.item.title).replace(/"/gi, "");
            var firstImage = JSON.stringify(data.response.body.items.item.firstimage).replace(/"/gi, "");
            var overview = JSON.stringify(data.response.body.items.item.overview).replace(/"/gi, "");
            overview = overview.replace(/\\n/g, "<br />");
            $("#detail_header").append("<p>제목 : " + title + "</p>");
            $("#detail_list").append("<img src=\'" + firstImage + "' id=\"detail_list_arr\">");
            $("#detail_list").append("<h1>개요</h1></br><p>" + overview + "</p>");

        }, // 요청 완료 시
        error: function (jqXHR) {
        }, // 요청 실패.
        complete: function (jqXHR) {
        } // 요청의 실패, 성공과 상관 없이 완료 될 경우 호출
    });
}

function festiThumbnail(flag) {
    var URL = apiURL + searchFestival + "?ServiceKey=" + serviceKey;
    var todayDate = new Date();
    var yyyymmdd = todayDate.getFullYear() + (("0" + (todayDate.getMonth() + 1)).slice(-2)) + ("0" + todayDate.getDate()).slice(-2);

    $.ajax({
        url: URL, // 요청 할 주소
        async: true, // false 일 경우 동기 요청으로 변경
        type: 'GET', // GET, PUT
        data: {
            MobileOS: MobileOS,
            MobileApp: MobileApp,
            arrange: "O",
            eventStartDate: yyyymmdd,
            numOfRows: numOfRows,
            _type: "json"
        }, // 전송할 데이터
        dataType: 'text', // xml, json, script, html
        beforeSend: function (jqXHR) {
        }, // 서버 요청 전 호출 되는 함수 return false; 일 경우 요청 중단
        success: function (data) {
            data = JSON.parse(data);
            for (var i = 0; i < 15; i++) {
                var firstImage = data.response.body.items.item[i + flag].firstimage2;
                var contentID = data.response.body.items.item[i + flag].contentid;
                $("#festival_thumbnail" + (i + 1)).attr("src", firstImage);
                $("#festival_thumbnail" + (i + 1)).parent().attr("href", "festivalinfo_detail.php?contentID=" + contentID)
            }

        }, // 요청 완료 시
        error: function (jqXHR) {
        }, // 요청 실패.
        complete: function (jqXHR) {
        } // 요청의 실패, 성공과 상관 없이 완료 될 경우 호출
    });
}

function detailFestival(contentID) {
    var URL = apiURL + detailICommon + "?ServiceKey=" + serviceKey;

    $.ajax({
        url: URL, // 요청 할 주소
        async: true, // false 일 경우 동기 요청으로 변경
        type: 'GET', // GET, PUT
        data: {
            MobileOS: MobileOS,
            MobileApp: MobileApp,
            contentId: contentID,
            overviewYN: "Y",
            defaultYN: "Y",
            firstImageYN: "Y",
            _type: "json"
        }, // 전송할 데이터
        dataType: 'text', // xml, json, script, html
        beforeSend: function (jqXHR) {
        }, // 서버 요청 전 호출 되는 함수 return false; 일 경우 요청 중단
        success: function (data) {
            data = JSON.parse(data);
            var title = JSON.stringify(data.response.body.items.item.title).replace(/"/gi, "");
            var firstImage = JSON.stringify(data.response.body.items.item.firstimage).replace(/"/gi, "");
            var overview = JSON.stringify(data.response.body.items.item.overview).replace(/"/gi, "");
            overview = overview.replace(/\\n/g, "<br />");
            overview = overview.replace(/\\/g, "");
            $("#detail_header").append("<p>제목 : " + title + "</p>");
            $("#detail_list").append("<img src=\'" + firstImage + "' id=\"detail_list_arr\">");
            $("#detail_list").append("<h1>개요</h1></br><p>" + overview + "</p>");

        }, // 요청 완료 시
        error: function (jqXHR) {
        }, // 요청 실패.
        complete: function (jqXHR) {
        } // 요청의 실패, 성공과 상관 없이 완료 될 경우 호출
    });
}

function slideImg() {
    var URL = apiURL + searchFestival + "?ServiceKey=" + serviceKey;
    var todayDate = new Date();
    var yyyymmdd = todayDate.getFullYear() + (("0" + (todayDate.getMonth() + 1)).slice(-2)) + ("0" + todayDate.getDate()).slice(-2);

    $.ajax({
        url: URL, // 요청 할 주소
        async: true, // false 일 경우 동기 요청으로 변경
        type: 'GET', // GET, PUT
        data: {
            MobileOS: MobileOS,
            MobileApp: MobileApp,
            arrange: "O",
            eventStartDate: yyyymmdd,
            _type: "json"
        }, // 전송할 데이터
        dataType: 'text', // xml, json, script, html
        beforeSend: function (jqXHR) {
        }, // 서버 요청 전 호출 되는 함수 return false; 일 경우 요청 중단
        success: function (data) {
            data = JSON.parse(data);
            for (var i = 0; i < 3; i++) {
                var firstImage = data.response.body.items.item[i].firstimage;
                var title = data.response.body.items.item[i].title;
                $("#slide_img" + (i + 1)).attr("src", firstImage);
                $("#slide_content" + (i + 1)).append("<h3>" + title + "</h3>");
            }

        }, // 요청 완료 시
        error: function (jqXHR) {
        }, // 요청 실패.
        complete: function (jqXHR) {
        } // 요청의 실패, 성공과 상관 없이 완료 될 경우 호출
    });
}

function checkContentType(typeId) {
    switch (typeId) {
        case 1 :
            contentTypeId = 12;//관광지
            break;
        case 2 :
            contentTypeId = 14;//문화시설
            break;
        case 3 :
            contentTypeId = 28;//레포츠
            break;
        default:
            contentTypeId = 999;//똥값
            break;
    }
}

function checkAreaCode(area) {
    switch (area) {
        case 1 :
            areaCode = 1;//서울
            break;
        case 2 :
            areaCode = 2; //인천
            break;
        case 3 :
            areaCode = 3; //대전
            break;
        case 4 :
            areaCode = 4; //대구
            break;
        case 5 :
            areaCode = 5; //광주
            break;
        case 6 :
            areaCode = 6; //부산
            break;
        case 7 :
            areaCode = 7; //울산
            break;
        case 8 :
            areaCode = 8; //세종
            break;
        case 9 :
            areaCode = 31; //경기
            break;
        case 10 :
            areaCode = 32; //강원
            break;
        case 11 :
            areaCode = 33; //충북
            break;
        case 12 :
            areaCode = 34; //충남
            break;
        case 13 :
            areaCode = 35; //경북
            break;
        case 14 :
            areaCode = 36; //경남
            break;
        case 15 :
            areaCode = 37; //전북
            break;
        case 16 :
            areaCode = 38; //전남
            break;
        case 17 :
            areaCode = 39; //제주
            break;
        default:
            areaCode = 999; //똥값
    }
}

function searchBtn(flag) {
    switch (flag) {
        case 1 :
            thumbnailTourSite(0);
        case 2 :
        default:

    }
}