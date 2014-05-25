<?php
header("access-control-allow-origin: *");

$dbhost = 'localhost';
$dbuser = 'clubbed_admin';
$dbpass = 'ClubbedIn2013';
$db = 'clubbed_ypr';

$dbserver = mysql_connect($dbhost, $dbuser, $dbpass)
    or die("Unable to connect to MySQL: " . mysql_error());
mysql_select_db($db)
    or die("Unable to select database: " . mysql_error());

$videoLink = $_POST['link'];
$searchText = $_POST['search'];

mysql_query('INSERT INTO flags (videoLink, searchText) VALUES ("'.$videoLink.'","'.$searchText.'")');


?>
