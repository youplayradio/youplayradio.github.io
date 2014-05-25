<?php
$dbhost = 'localhost';
$dbuser = 'clubbed_admin';
$dbpass = 'ClubbedIn2013';
$db = 'clubbed_ypr';

$dbserver = mysql_connect($dbhost, $dbuser, $dbpass)
    or die("Unable to connect to MySQL: " . mysql_error());
mysql_select_db($db)
    or die("Unable to select database: " . mysql_error());

$result = mysql_query('SELECT * FROM flags');

while($row = mysql_fetch_assoc($result)){
    ?>
    
    <a href="<?php echo $row['videoLink']?>" target="_blank">Video Link</a>
    <br> Search Text: <?php echo $row['searchText'] ?>
    <br> <a href="mod.php?rid=0">Keep</a>
    <br> <a href="mod.php?rid=<?php echo $row['videoID']?>">Remove</a>

    <hr>
<?php
    
}


?>