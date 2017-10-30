/**
 * Created by pixeleye02 on 2017-06-22.
 */
var board_no;

function article_ajax() {

    $.ajax({
        url: '../php/get_board.php', // 요청 할 주소
        async: true, // false 일 경우 동기 요청으로 변경
        type: 'POST', // GET, PUT
        data: {}, // 전송할 데이터
        dataType: 'text', // xml, json, script, html
        beforeSend: function (jqXHR) {
        }, // 서버 요청 전 호출 되는 함수 return false; 일 경우 요청 중단
        success: function (data) {
            oData = JSON.parse(data);
            for (var i = 0; i < 15; i++) {
                userNo = JSON.stringify(oData[(i+flag)].User_No);
                mainImg = JSON.stringify(oData[(i+flag)].mainImg);
                $("#article" + (i+1)).attr("href", "115.68.14.27:8080/"); //서버보고 만들어야됨
                $("#article_img" + (i+1)).attr("src", "http://115.68.14.27:8080/board_image/" + userNo.replace(/"/gi,"") + "/" + mainImg.replace(/"/gi,""));
            }
        }, // 요청 완료 시
        error: function (jqXHR) {
        }, // 요청 실패.
        complete: function (jqXHR) {
        } // 요청의 실패, 성공과 상관 없이 완료 될 경우 호출
    });
}

function article_title() {

}

function article_content() {

}

function article_comment() {

}