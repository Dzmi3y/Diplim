<?php 
if ($_SESSION['IsAdmin'])
{
	header("Location: http://".$_SERVER['HTTP_HOST']."/adminPersonalCabinet/searchReport");
}
else
{
	header("Location: http://".$_SERVER['HTTP_HOST']."/personalCabinet/allReports");
}
?>