function sendId() {
    if (!document.sign_up_form.id.value) {
        alert("아이디를 입력하지 않았습니다.");
        document.sign_up_form.id.focus();
        return;
    }
    for (i = 0; i < document.sign_up_form.id.value.length; i++) {
        ch = document.sign_up_form.id.value.charAt(i)
        if (!(ch >= '0' && ch <= '9') && !(ch >= 'a' && ch <= 'z')) {
            alert("아이디는 소문자, 숫자만 입력가능합니다.");
            document.sign_up_form.id.focus();
            document.sign_up_form.id.select();
            return;
        }
    }
    if (document.sign_up_form.id.value.indexOf(" ") >= 0) {
        alert("아이디에 공백을 사용할 수 없습니다.");
        /*prompt("sometext", "defaultvalue")*/
        document.sign_up_form.id.focus();
        document.sign_up_form.id.select();
        return;
    }
    if (document.sign_up_form.id.value.length < 6 || document.sign_up_form.id.value.length > 12) {
        alert("아이디를 6~12자까지 입력해주세요.");
        document.sign_up_form.id.focus();
        document.sign_up_form.id.select();
        return;
    }
    if (!document.sign_up_form.nickname.value) {
        alert("별명을 확인하세요.");
        document.sign_up_form.nickname.focus();
        return;
    }
    alert("확인되었습니다.");
}

function sendIt() {
    if (!document.sign_up_form.phone_number.value) {
        alert("전화번호를 입력하지 않았습니다.")
        document.sign_up_form.phone_number.focus();
        return false;
    }
    if (isNaN(document.sign_up_form.phone_number.value)) {
        alert("숫자만 입력하세요.")
        document.sign_up_form.phone_number.focus();
        return false;
    }
    if (!document.sign_up_form.pwd.value) {
        alert("비밀번호를 입력하지 않았습니다.")
        document.sign_up_form.pwd.focus();
        return false;
    }
    if (document.sign_up_form.pwd.value.length < 8 || document.sign_up_form.pwd.value.length > 20) {
        alert("비밀번호를 8~20자까지 입력해주세요.")
        document.sign_up_form.pwd.focus();
        document.sign_up_form.pwd.select();
        return false;
    }
    if (document.sign_up_form.pwd.value != document.sign_up_form.pwd_check.value) {
        alert("비밀번호와 비밀번호 확인이 같지 않습니다.")
        document.sign_up_form.pwd.value = "";
        document.sign_up_form.pwd_check.value = "";
        document.sign_up_form.pwd.focus();
        return false;
    }
    if (!document.sign_up_form.birth.value) {
        alert("생년월일을 입력하세요.")
        document.sign_up_form.birth.focus();
        return false;
    }
    if (isNaN(document.sign_up_form.birth.value)) {
        alert("숫자만 입력하세요.")
        document.sign_up_form.birth.focus();
        return false;
    }
    if (document.sign_up_form.birth.value.length < 8 || document.sign_up_form.birth.value.length > 8) {
        alert("생년월일을 다시 확인하세요.")
        document.sign_up_form.birth.focus();
        return false;
    }
    var count = document.sign_up_form.checkbox.length;
    for (var i = 0; i < count; i++) {
        if (document.sign_up_form.checkbox[i].checked == false) {
            alert("이용약관에 동의해주세요.");
        }
    }
}

function sendEmail() {
    if (!document.sign_up_form.email.value) {
        alert("E-Mail을 입력하지 않았습니다.")
        document.sign_up_form.email.focus();
        return;
    }
    var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    if (exptext.test(document.sign_up_form.email.value) == false) {
        alert("E-Mail을 다시 확인하세요.");
        document.sign_up_form.email.focus();
        return;
    }
    alert("E-Mail을 확인하였습니다.")
    document.sign_up_form.submit();
}
/*----------------------------------------로그인 정보기억------------------------------------*/
function setsave(name, value, expiredays) {
    alert("cookie Save!!");
    var today = new Date();
    today.setDate(today.getDate() + expiredays);
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + today.toGMTString() + ";";
    alert("cookie Save Complete!!");
}

// 버튼 클릭시 실행 function
function login() {
    saveLogin(document.getElementById("id").value);
//} else {
//saveLogin("");
//}
}

// id를 받아와 쿠키에 저장할지 쿠키에서 삭제할지 결정.
function saveLogin(id) {
    if (id != "") {
// userid 쿠키에 id 값을 7일간 저장
        setsave("id", id, 7);
    } else {
// userid 쿠키 삭제
        setsave("id", id, -1);
    }
}

// 화면 로드시 아이디
function getLogin() {

// userid 쿠키에서 id 값을 가져온다.
    var cook = document.cookie + ";";
    var idx = cook.indexOf("id", 0);
    var val = "";

    if (idx != -1) {
        cook = cook.substring(idx, cook.length);
        begin = cook.indexOf("=", 0) + 1;
        end = cook.indexOf(";", begin);
        val = unescape(cook.substring(begin, end));
    }

// 가져온 쿠키값이 있으면
    if (val != "") {
        document.getElementById("userId").value = val;
        document.getElementById("checkbox").checked = true;
    }
}


