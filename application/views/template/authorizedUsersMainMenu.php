
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
  <li>
    <button type="submit" onclick="exit()" class="btn col-md-12 btn-secondary">Выход</button>
  </li>


  <script type="text/javascript">
  
  function exit()
  {

    console.log("get nnnyoyo");


    function callback()
    {
      location.reload();

    }



$.ajax({
  type: 'POST',
  url: '/ajax.php',
  data: 'exit',
  dataType: 'html',
  success: callback});
  }




</script>