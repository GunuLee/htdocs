/**
 * Created by pixeleye02 on 2017-07-04.
 */
function getFollows(userNo) {
    var oData;
    $.ajax({
        url: '../php/get_follow.php', // 요청 할 주소
        async: true, // false 일 경우 동기 요청으로 변경
        type: 'POST', // GET, PUT
        data: {}, // 전송할 데이터
        dataType: 'text', // xml, json, script, html
        beforeSend: function (jqXHR) {
        }, // 서버 요청 전 호출 되는 함수 return false; 일 경우 요청 중단
        success: function (data) {
            oData = JSON.parse(data);
            $("#mypage_following_list").empty();
            $("#mypage_follower_list").empty();

            for(var i = 0; i < oData.length; i++){
                if(oData[i].Follow != userNo){
                    var followList = "<p>"+oData[i].Nickname+"</p></br>";
                    $("#mypage_following_list").append(followList);
                } else {
                    var followerList = "<p>"+oData[i].Nickname+"</p></br>";
                    $("#mypage_follower_list").append(followerList);
                }
            }

        }, // 요청 완료 시
        error: function (jqXHR) {
        }
        , // 요청 실패.
        complete: function (jqXHR) {
        } // 요청의 실패, 성공과 상관 없이 완료 될 경우 호출
    });

}