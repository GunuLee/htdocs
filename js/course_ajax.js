/**
 * Created by pixeleye02 on 2017-06-27.
 */
function course_ajax(flag) {
    var courseTitle;
    var courseNo;
    var oData;

    $.ajax({
        url: '../php/get_course.php', // 요청 할 주소
        async: true, // false 일 경우 동기 요청으로 변경
        type: 'POST', // GET, PUT
        data: {}, // 전송할 데이터
        dataType: 'text', // xml, json, script, html
        beforeSend: function (jqXHR) {
        }, // 서버 요청 전 호출 되는 함수 return false; 일 경우 요청 중단
        success: function (data) {
            oData = JSON.parse(data);
            for (var i = 0; i < 15; i++) {
                courseTitle = JSON.stringify(oData[i + (flag)].title).replace(/"/gi, "");
                courseNo = JSON.stringify(oData[i + (flag)].index).replace(/"/gi, "");
                $("#course_title" + (i + 1)).text(courseTitle);
                $("#course" + (i + 1)).val(courseNo);
                $("#course" + (i + 1)).parent().parent().attr("href","../HTML/course_detail.php?course_no="+courseNo);
                stopover_ajax(courseNo, i);

                //코스 상세페이지 링크 만들어야됨
            }
        }, // 요청 완료 시
        error: function (jqXHR) {
        }
        , // 요청 실패.
        complete: function (jqXHR) {
        } // 요청의 실패, 성공과 상관 없이 완료 될 경우 호출
    });


}