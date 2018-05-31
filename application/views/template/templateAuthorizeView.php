

<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="utf-8">
	<title><?php echo $title?></title>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <style type="text/css">
   

  </style>

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="/css/style.css">
</head>
<body class="bg-light">


  <script  src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>




<nav class="navbar navbar-expand  navbar-light navbar-dark " style="background-color: #309804FF; ">
      <a class="navbar-brand" href="#">
        <img  src="/images/logo.png" width="60" height="60"/>
      	<!--<img src="/images/logo.png" width="80" height="80"/>-->
      </a>

      <div class="collapse navbar-collapse" id="navbarHeadr">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item <?php echo $active["main"]?>">
            <a class="nav-link" href="/main">Главная</a>
          </li>
          <li class="nav-item <?php echo $active["doc"]?>">
            <a class="nav-link" href="/doc">Документация</a>
          </li>
          <li class="nav-item <?php echo $active["contacts"]?>">
            <a class="nav-link" href="/contacts">Контакты</a>
          </li>
           <li class="nav-item <?php echo $active["personalCabinet"]?>">
            <a class="nav-link" href="/personalCabinet">Личный кабинет</a>
          </li>
          <li class="nav-item <?php echo $active["example"]?>">
            <a class="nav-link" href="/example">Пример</a>
          </li>
          <li>
            
          </li>

        </ul>
      </div>
    </nav>

<a href="ReportEditor">ReportEditorView.php</a>







<!--container-fluid-->


    <div class="my-1 mx-1">

          <?php include $pathAuthorize;?>
  
    </div>



	
  <div class="row-fluid main" style="width: 100%; overflow-x:auto;" >
          <!--Body content-->
          <?php include 'application/views/'.$contentView; ?>
   </div>



<footer id="footer" class="navbar navbar-expand footer navbar-dark" style="background-color: #309804FF; width: 100%;">
      <div class="collapse navbar-collapse" id="contentFooter">
        <ul class="navbar-nav mr-auto" >
          <li class="nav-item active">
            <a class="nav-link" href="#">Инфа <span class="sr-only">(current)</span></a>
          </li>

        </ul>
      </div>
  </footer>








</body>
</html>