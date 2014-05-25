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

  if (isset($_GET['rid'])) {
      if($_GET['rid'] == 0) {
          mysql_query('DELETE FROM flags WHERE searchText = "'.$_GET['searcht'].'" AND videoID = "'.$rid.'"');
      } else
      {
          mysql_query('INSERT INTO removed (videoID) VALUES ("'.$_GET['rid'].'")');
          mysql_query('DELETE FROM flags WHERE searchText = "'.$_GET['searcht'].'" AND videoID = "'.$rid.'"');
      }
  }

while($row = mysql_fetch_assoc($result)){
    ?>
    
    <a href="<?php echo $row['videoLink']?>" target="_blank">Video Link</a>
    <br> Search Text: <?php echo $row['searchText'] ?>
    <br> <a href="mod.php?rid=0&searcht=<?php echo $row['searchText']?>">Keep</a>
    <br> <a href="mod.php?rid=<?php echo $row['videoID']?>&searcht=<?php echo $row['searchText']?>">Remove</a>

    <hr>
<?php
    
}


?>