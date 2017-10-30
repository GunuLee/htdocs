/**
 * Created by pixeleye02 on 2017-06-27.
 */
function stopover_ajax(courseNo, i) {
    var oData;
    var stopoverName;

    $.ajax({
        url: '../php/get_stopover.php', // 요청 할 주소
        async: true, // false 일 경우 동기 요청으로 변경
        type: 'POST', // GET, PUT
        data: {
            courseNo: courseNo
        }, // 전송할 데이터
        dataType: 'text', // xml, json, script, html
        beforeSend: function (jqXHR) {
        }, // 서버 요청 전 호출 되는 함수 return false; 일 경우 요청 중단
        success: function (data) {
            oData = JSON.parse(data);
            $("#course"+ (i+1)).empty();
            if (oData.length <= 5) {
                for (var j = 0; j < oData.length; j++) {
                    stopoverName = JSON.stringify(oData[j].name).replace(/"/gi, "");
                    if (j+1 == oData.length) {
                        $("#course" + (i + 1)).append("<p class='stopover_name'>#</p>" + stopoverName);
                    } else {
                        $("#course" + (i + 1)).append("<p class='stopover_name'>#</p>" + stopoverName + " - ");
                    }
                }
            } else {
                for (var j = 0; j < 5; j++) {
                    stopoverName = JSON.stringify(oData[j].name).replace(/"/gi, "");
                    if (j+1 == 5) {
                        $("#course" + (i + 1)).append("<p class='stopover_name'>#</p>" + stopoverName+ " -  more...");
                    } else {
                        $("#course" + (i + 1)).append("<p class='stopover_name'>#</p>" + stopoverName + " - ");
                    }
                }
            }
        }, // 요청 완료 시
        error: function (jqXHR) {
        }, // 요청 실패.
        complete: function (jqXHR) {
        } // 요청의 실패, 성공과 상관 없이 완료 될 경우 호출
    });
}