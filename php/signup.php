<?php
/**
 * Created by PhpStorm.
 * User: pixeleye02
 * Date: 2017-06-20
 * Time: 오전 11:28
 */

include 'mysql.php';

$name = $_POST['name'];
$nickname = $_POST['nickname'];
$id = $_POST['id'];
$tel = $_POST['phone_number'];
$pwd = $_POST['pwd'];
$pwd_check = $_POST['pwd_check'];
$birth = $_POST['birth'];
$gender = $_POST['gender'];
$collection_check = $_POST['collection_check'];
$nofi_check = $_POST['nofi_check'];

$textfields = array($name, $nickname, $id, $tel, $pwd, $pwd_check, $birth);

for($i = 0 ; $i < count($textfields) ; $i++) {
    if($textfields[$i] == "") {
        echo "<script>
                    alert(\"빈칸을 채워주세요\");
                     window.history.back();
               </script>";
        break;
    } else if($collection_check) {
        echo "<script>
                    alert(\"약관 및 개인정보 수집/이용에 동의해주세요\");
                     window.history.back();
               </script>";
    } else {
        $query = "insert into 
          User (Nickname, E_mail_ID, PWD, YMD, Gender, Name, Tel)
          values('".$nickname."', '".$id."', password('".$pwd."'), '".$birth."', '".$gender."', '".$name."', '".$tel."')";

        $result = mysqli_query($conn, $query);

        if($result == true)
            echo "<script>
                        alert(\"회원가입이 완료 되었습니다.\");
                        location.replace(\"index.html\");
                   </script>";
        else
            echo "<script>
                        alert(\"회원가입을 실패하였습니다..\");
                        location.replace(\"index.html\");
                   </script>";

    }
}
?>

