<?php
/**
 * Created by PhpStorm.
 * User: pixeleye02
 * Date: 2017-06-27
 * Time: 오후 1:53
 */

include 'mysql.php';

$query_course = "select * from Course_v2 order by regiDate desc";
$resultSet = mysqli_query($conn, $query_course);
$rows = Array();
$i = 0;

while($row = mysqli_fetch_array($resultSet)){
    if ($i < 45) {
        $rows[$i] = $row;
        $i++;
    } else break;
}

echo json_encode($rows);

