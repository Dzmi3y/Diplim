

<div class="row">
<div  class="px-5  py-1 col-4 border-dark center-block"> </div>
    <div  id="RegistrationBlock" class=" center-block"> 
    	<div class="text-light text-center">
    		<b>Сброс пароля</b>

    	</div>
    	<form method="POST" id="formx" action="javascript:void(null);" onsubmit="Send()">
	    	
	    		
			    	<div class="text-dark"  class="form-group">
			    		<p><h2><strong>Сброс пароля</strong></h2></p>
			    		</br>
			    		<label class="text-dark" for="InputEmail"> <b>Введите email адрес:</b></label>
			    		<input type="email" class="form-control" id="InputEmail"  placeholder="Введите email">
			    		<div id="ErrorEmailMessage" class="bg-danger text-white"></div>
			    	</div>
				

				
			
			<div id="ErrorMessagesResetPassword" class="alert alert-danger" role="alert"></div>
			<div id="MessageSuccessResetPassword" class="alert alert-success" role="alert"></div>
			<br/>
			<br/>
			<button type="submit"  class="btn col-12 btn-secondary">Сбросить пароль</button>		
		</form>
	</div>
</div>


<script type="text/javascript">

	$("#ErrorMessagesResetPassword").hide();
	$("#MessageSuccessResetPassword").hide();

	$('#InputEmail').bind('change',function(){Check($("#InputEmail")[0].value);});


	var callbackResetPassword= function (data) 
	{

		if(data==true)
		{
			$("#ErrorMessagesResetPassword").hide();
			$("#MessageSuccessResetPassword").empty();
			$("#MessageSuccessResetPassword").append("<p>Новый пароль отправлен на указаный Email.</p>");
			$("#MessageSuccessResetPassword").show();
		}
		else
		{
			let ErrorMessage = JSON.parse(data);
			$("#MessageSuccessResetPassword").hide();
			$("#ErrorMessagesResetPassword").empty();
			$("#ErrorMessagesResetPassword").append(ErrorMessage["Error"]);
			$("#ErrorMessagesResetPassword").show();
		}


	};

	function Send() 
	{
		$("#MessageSuccessResetPassword").hide();
		$("#ErrorMessagesResetPassword").hide();			
		
		let Email=$("#InputEmail")[0].value;

		if(Check(Email))
		{
			$.ajax(
			{
			  type: 'POST',
			  url: '/ajax.php',
			  data:{"resetPassword":Email},
			  dataType: 'html',
			  success: callbackResetPassword
			});
		
		}

	};

	function Check(Email)
	{
		$("#ErrorEmailMessage p").remove();

		if(Email.trim()!="")
		{
			
			if( IsEmail(Email))
			{
				return true;
			}
			else
			{
				return false;
			}
			
		}
		else
		{
			$("#ErrorEmailMessage").append('<p> Поле пустое </p>');
			return false;
		}

	}

	function IsEmail(Email)
	{

		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,6})$/;
		let res=reg.test(Email);
		if (!res) $("#ErrorEmailMessage").append('<p> Email введён неверно </p>');
	    return res;
	}


</script>