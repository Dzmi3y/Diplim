<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="utf-8">
	<title><?php echo $title?></title>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">


	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="/css/style.css">
</head>
<body class="bg-light">


  <script  src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>




<nav class="navbar navbar-expand   navbar-light navbar-dark  " style="background-color: #309804FF; ">
      <a class="navbar-brand" href="#">
        <img  src="/images/logo.png" width="60" height="60"/>
      	<!--<img src="/images/logo.png" width="80" height="80"/>-->
      </a>
     

      <div class="collapse navbar-collapse" id="navbarHeadr">
        <ul class="navbar-nav mr-auto">
          <?php 
          $active["personalCabinet"]="active";
         
            include "authorizedUsersMainMenu.php";
      
          ?>
                  

        </ul>
      </div>
    </nav>



<nav class="navbar navbar-expand   navbar-light navbar-dark  " style="background-color: #83B994FF; ">
     

      <div class="collapse navbar-collapse" >
        <ul class="navbar-nav mr-auto">
          <?php 
         
       		include $pathAuthorize;
          ?>
                  

        </ul>
      </div>
    </nav>









<!--container-fluid-->
<?php
  
  include 'application/views/'.$contentView; 

?>

	




<?php include "application/views/template/footer.php"; ?>














</body>
</html>