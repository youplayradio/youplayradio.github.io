<?php
$dbhost = 'localhost';
$dbuser = 'clubbed_admin';
$dbpass = 'ClubbedIn2013';
$db = 'clubbed_ypr';

$dbserver = mysql_connect($dbhost, $dbuser, $dbpass)
    or die("Unable to connect to MySQL: " . mysql_error());
mysql_select_db($db)
    or die("Unable to select database: " . mysql_error());

$result = mysql_query('SELECT * FROM removed');
$removed = array();

while ($row = mysql_fetch_assoc($result))
{
    array_push($removed, array("id" => $row['videoID']));
}

echo json_encode($removed);
?>