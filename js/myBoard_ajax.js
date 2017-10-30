/**
 * Created by pixeleye02 on 2017-07-03.
 */

function myBoard_ajax(userNo) {
    var boardNo;
    var userNo = userNo;
    var mainImg;
    var oData;

    $.ajax({
        url: '../php/get_board.php', // 요청 할 주소
        async: true, // false 일 경우 동기 요청으로 변경
        type: 'POST', // GET, PUT
        data: {
            flag: 2,
            userNo: userNo
        }, // 전송할 데이터
        dataType: 'text', // xml, json, script, html
        beforeSend: function (jqXHR) {
        }, // 서버 요청 전 호출 되는 함수 return false; 일 경우 요청 중단
        success: function (data) {
            oData = JSON.parse(data);
            for (var i = 0; i < oData.length; i++) {
                boardNo = JSON.stringify(oData[i].Board_No).replace(/"/gi, "");
                mainImg = JSON.stringify(oData[i].mainImg).replace(/"/gi, "");
                $('#my_reviews').append("<li class='layout_1by3'><a id='article" + (i + 1) + "' href='" +
                    "../HTML/review_detail.php?board_no=" + boardNo + "'><img src='" +
                    "http://115.68.14.27:8080/board_image/" + userNo + "/" + mainImg + "'></a>");
            }
        }, // 요청 완료 시
        error: function (jqXHR) {
        }, // 요청 실패.
        complete: function (jqXHR) {
        } // 요청의 실패, 성공과 상관 없이 완료 될 경우 호출
    });
}