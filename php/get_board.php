<?php
/**
 * Created by PhpStorm.
 * User: pixeleye02
 * Date: 2017-06-22
 * Time: 오후 4:51
 */
include 'mysql.php';

$flag = $_POST['flag'];

if ($flag == 1) {
    $query = "select * from Board order by Date desc, Time desc";
    $resultSet = mysqli_query($conn, $query);
    $rows = array();
    $i = 0;

    while ($row = mysqli_fetch_assoc($resultSet)) {
        if ($i < 45) {
            $rows[$i] = $row;
            $i++;
        } else break;
    }

    echo json_encode($rows);
} else if($flag == 2) {
    $userNo = $_POST['userNo'];
    $query = "select * from Board where User_No =".$userNo." order by Date desc, Time desc";
    $resultSet = mysqli_query($conn, $query);
    $rows = array();

    while ($row = mysqli_fetch_assoc($resultSet)) {
            array_push($rows, $row);
    }

    echo json_encode($rows);
}
?>