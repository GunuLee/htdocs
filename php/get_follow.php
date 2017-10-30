<?php
/**
 * Created by PhpStorm.
 * User: pixeleye02
 * Date: 2017-07-04
 * Time: 오후 1:07
 */
include 'mysql.php';

session_start();

$userNo = $_SESSION['user_no'];

$query = "select Follows.Follow,Follows.Follower, User.Nickname
from Follows 
inner join
User
on Follows.Follow = User.User_No
where Follows.Follower = '".$userNo."'";

$query2 = "select Follows.Follow,Follows.Follower, User.Nickname
from Follows 
inner join
User
on Follows.Follower = User.User_No
where Follows.Follow = '".$userNo."'";

$resultSet = mysqli_query($conn, $query);
$resultSet2 = mysqli_query($conn, $query2);

$rows = Array();

while($row = mysqli_fetch_array($resultSet)) {
    array_push($rows, $row);
}
while($row = mysqli_fetch_array($resultSet2)) {
    array_push($rows, $row);
}

echo json_encode($rows);
