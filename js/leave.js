/**
 * Created by pixeleye02 on 2017-07-03.
 */
function leave() {
    if(confirm("정말?")) {
        location.href =  "../php/leave.php";
        return true;
    } else {
        return false;
    }
}