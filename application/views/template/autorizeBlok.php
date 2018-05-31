<form method="POST" id="formAuthorize" action="javascript:void(null);" onsubmit="SendAuthorizeData()">
	<div  id="authorize" class="px-1 py-1 border-dark  " style="background-color: #83B994FF;">
       			
    	<div class="text-light text-center">
    		<b>Авторизация</b>

    	</div>
    	
    	<div class="form-group">
    		<label class="text-dark" for="InputEmailAuth"> <b>Email адрес:</b></label>
    		<input type="email" class="form-control" id="InputEmailAuth"  placeholder="Введите email">
    	</div>

		<div class="text-dark" class="form-group">
			<label for="InputPasswordAuth"><b>Пароль:</b></label>
			<input type="password" class="form-control" id="InputPasswordAuth" placeholder="Введите пароль">
		</div>
		<div id="ErrorMessagesAuth" class="bg-danger text-white"></div>
  		<a href="/resetPassword">Забыли пароль или логин</a>
		<button type="submit" class="btn col-md-12 btn-secondary">Войти</button>

	</div>
</form>

<script type="text/javascript">

	var callback= function (data) 
	{//возвращаемый результат от сервера

		if(data==true)
		{
			console.log("reload");
			location.reload();

		}
		else
		{
			$("#ErrorMessagesAuth").empty();
			$("#ErrorMessagesAuth").append('<p> Неверный Email или пароль</p>');
		}
		console.log(data);

	};

	function SendAuthorizeData() 
	{

		var emailAuth=$("#InputEmailAuth")[0].value;
		var passAuth=$("#InputPasswordAuth")[0].value;
		console.log("Auth");
		console.log(emailAuth);
		console.log(passAuth);

		$.ajax(
		{
		  type: 'POST',
		  url: 'ajax.php',
		  data: {'authorize':{'email':emailAuth,"pass":passAuth}},
		  dataType: 'html',
		  success: callback
		});

	};
</script>