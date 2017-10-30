<?php
/**
 * Created by PhpStorm.
 * User: pixeleye02
 * Date: 2017-06-27
 * Time: 오후 4:03
 */
include 'mysql.php';

$course_no = $_POST['courseNo'];

$query = "select * from Stopover where courseIndex = " . $course_no . " order by stopoverPosition asc";
$resultSet = mysqli_query($conn, $query);
$rows = Array();

$i = 0;

while ($row = mysqli_fetch_assoc($resultSet)) {
    $rows[$i] = $row;
    $i++;
}

echo json_encode($rows);