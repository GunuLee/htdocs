function call(){
    $.ajax({
        url: './mysql_connect.php', // 요청 할 주소
        async: true, // false 일 경우 동기 요청으로 변경
        type: 'POST', // GET, PUT
        data: {
            
        }, // 전송할 데이터
        dataType: 'text', // xml, json, script, html
        beforeSend: function (jqXHR) {
        }, // 서버 요청 전 호출 되는 함수 return false; 일 경우 요청 중단
        success: function (data) {
            alert(data);
        }, // 요청 완료 시
        error: function (jqXHR) {
        }, // 요청 실패.
        complete: function (jqXHR) {
        } // 요청의 실패, 성공과 상관 없이 완료 될 경우 호출
    });
}