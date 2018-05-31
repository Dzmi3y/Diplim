

<div class="row">
<div  class="px-5  py-1 col-3 border-dark center-block"> </div>
    <div  id="RegistrationBlock" class=" center-block"> 
    	<div class="text-light text-center">
    		<b>Регистрация</b>

    	</div>
    	<form method="POST" id="formx" action="javascript:void(null);" onsubmit="Send()">
    	<div class="row" >
    		<div class="col-6">
		    	<div class="text-dark"  class="form-group">
		    		<label class="text-dark" for="InputEmail"> <b>Email адрес:</b></label>
		    		<input type="email" class="form-control" id="InputEmail"  placeholder="Введите email">
		    		<div id="ErrorEmailMessage" class="bg-danger text-white"></div>
		    	</div>
				<div class="text-dark" class="form-group">
					<label for="InputPassword2"><b>Пароль:</b></label>
					<input type="password" class="form-control" id="InputPassword2" placeholder="Введите пароль">
					<div id="ErrorPassword2Message" class="bg-danger text-white"></div>
				</div>

				<div class="text-dark" class="form-group">
					<label for="InputPassword3"><b>Повторите пароль:</b></label>
					<input type="password" class="form-control" id="InputPassword3" placeholder="Введите пароль">
					<div id="ErrorPassword3Message" class="bg-danger text-white"></div>
				</div>

				<div class="text-dark" class="form-group">
					<label for="InputNameCompany"><b>Название предприятия:</b></label>
					<input type="text" class="form-control" id="InputNameCompany" placeholder="Название предприятия">
					<div id="ErrorNameCompanyMessage" class="bg-danger text-white"></div>
				</div>
			</div>

			<div class="col-6">

				<div class="text-dark" class="form-group">
					<label for="InputUNP"><b>УНП</b></label>
					<input type="text" class="form-control"  id="InputUNP" placeholder="Введите унп">	
					<div id="ErrorUNPMessage" class="bg-danger text-white"></div>
				</div>

				<div class="text-dark" class="form-group">
					<label for="InputPhone"><b>Телефон</b></label>
					<input type="text" class="form-control" id="InputPhone" placeholder="Номер телефона">	
					<div id="ErrorPhoneMessage" class="bg-danger text-white"></div>
				</div>

				<div class="text-dark" class="form-group">
					<label for="InputDistrict"><b>Район</b></label>
					<input type="text" class="form-control" id="InputDistrict" placeholder="Район">	
					<div id="ErrorDistrictMessage" class="bg-danger text-white"></div>
				</div>

				<div class="text-dark" class="form-group">
					<label for="InputRegion"><b>Область</b></label>
					<input type="text" class="form-control" id="InputRegion" placeholder="Область">	
					<div id="ErrorRegionMessage" class="bg-danger text-white"></div>
				</div>

				<div class="text-dark" class="form-group">
					<label for="InputAddress"><b>Адрес</b></label>
					<input type="text" class="form-control" id="InputAddress" placeholder="Адрес">	
					<div id="ErrorAddressMessage" class="bg-danger text-white"></div>
				</div>
			</div>
		</div>
	
		<div id="ErrorMessagesRegistration" class="alert alert-danger" role="alert"></div>
		<br/>
		<button type="submit"  class="btn col-12 btn-secondary">Отправить</button>		
</form>
	

	</div>
</div>


<script type="text/javascript">


	$('#InputEmail').bind('change',function(){Checker("Email",$("#InputEmail")[0].value);});
	$('#InputPassword2').bind('change',function(){ Checker("Password2",$("#InputPassword2")[0].value);});
	$('#InputPassword3').bind('change',function(){ Checker("Password3",$("#InputPassword3")[0].value);});
	$('#InputUNP').bind('change',function(){ Checker('UNP',$("#InputUNP")[0].value);});
	$('#InputPhone').bind('change',function(){ Checker('Phone',$("#InputPhone")[0].value);});
	$('#InputNameCompany').bind('change',function(){ Checker('NameCompany',$("#InputNameCompany")[0].value);});
	$('#InputRegion').bind('change',function(){ Checker('Region',$("#InputRegion")[0].value);});
	$('#InputDistrict').bind('change',function(){ Checker('District',$("#InputDistrict")[0].value);});
	$('#InputAddress').bind('change',function(){ Checker('Address',$("#InputAddress")[0].value);});

	$('#InputUNP').bind('keyup',function(event) {return KeyDownHandler(event,this);});
	$('#InputPhone').bind('keyup',function(event) {return KeyDownHandler(event,this);});



	var callbackRegistration= function (data) 
	{//возвращаемый результат от сервера
		console.log("callback");
		console.log(data);

		if(data==true)
		{
			alert("Регистрация завершена успешно!");
			document.location.href="main";

		}
		else
		{
			let ErrorMessage = JSON.parse(data);
			//console.log("eeeeeeee");
			//console.log(ErrorMessage);

			$("#ErrorMessagesRegistration").empty();
			$("#ErrorMessagesRegistration").append(ErrorMessage["Error"]);
			$("#ErrorMessagesRegistration").show();
		}
		
	console.log(data);

	};
	$("#ErrorMessagesRegistration").hide();

	function Send() 
	{
			$("#ErrorMessagesRegistration").hide();
			$("#ErrorMessagesRegistration p").remove();
			var RegistrationData = 
			{	

			//	"registration":
			//	{
					"Email":$("#InputEmail")[0].value,
					"Password":$("#InputPassword2")[0].value,
					'UNP':$("#InputUNP")[0].value,
					'Phone':$("#InputPhone")[0].value,
					'NameCompany':$("#InputNameCompany")[0].value,
					'Region':$("#InputRegion")[0].value,
					'District':$("#InputDistrict")[0].value,
					'Address':$("#InputAddress")[0].value
				//}
			};

		/*	
			*/
		if(Check(RegistrationData))
		{
		console.log(RegistrationData);
/*
			console.log(RegistrationData);
			var myJsonString =JSON.stringify(RegistrationData);
			console.log(myJsonString);
			console.log(JSON.parse(myJsonString));

*/

			$.ajax(
			{
			  type: 'POST',
			  url: 'ajax.php',
			  data:{"registration":JSON.stringify(RegistrationData)},
			  dataType: 'html',
			  success: callbackRegistration
			});
			console.log("kek");
			
		}
	};

	function Check(RegistrationData)
	{	
		let result= true;
		$("#ErrorMessagesRegistration").empty();
		console.log(RegistrationData);

		for(let i in RegistrationData)
		{
		 result *=Checker(i,RegistrationData[i])

		}

		return result;

		
	}



	function Checker(key,ValueForCheck)
	{

	
		let result=true;




			if(key=="Password")
			{
				$("#Error"+key+"1Message p").remove();
				$("#Error"+key+"2Message p").remove();
			}
			else
			{
				$("#Error"+key+"Message p").remove();
			}

			result *= IsNotEmpty(key,ValueForCheck);

			



			
			

			if(key=="Password")
			{
				
				result *= CheckPassword(key,ValueForCheck);
			}


			

		
			return result;
	}


	function IsNotEmpty(key,ValueForCheck)
	{
		if(	ValueForCheck.trim()=="")
		{
			$("#Error"+key+"Message").append('<p> Строка не заполнена! </p>');
			//console.log("#Error"+key+"Message");
			return false;
			
		}
		else
		{
			if(key=="Email")
			{
				
				return  IsEmail(key,ValueForCheck);
			}
			


			if(key=="Password3")
			{
				if($("#InputPassword2")[0].value==$("#InputPassword3")[0].value)
				{
					return true;
				}
				else
				{
					$("#Error"+key+"Message").append('<p> Пароли не совподают </p>');
					return false;
				}
			}
			

			
			if(key=="Password2")
			{
				
				if(ValueForCheck.length>=6)
				{
			
					return true;
				
				}
				else
				{
					$("#Error"+key+"Message").append('<p> Пароль должен быть более 6 символов </p>');
					return false;
				}
			}
			
			return true;

			
		}

	}


	function IsEmail(key,ValueForCheck)
	{
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,6})$/;
		let res=reg.test(ValueForCheck);
		if (!res) $("#Error"+key+"Message").append('<p> Email введён неверно </p>');
	    return res;
	}

	function CheckPassword(key,ValueForCheck)
	{
		console.log("ppppppppppppp");
		console.log(ValueForCheck);
		console.log(ValueForCheck.length);
		if(ValueForCheck.length>=6)
		{
			if(ValueForCheck==$("#InputPassword3")[0].value)
			{
				return true;
			}
			else
			{
				$("#Error"+key+"3Message").append('<p> Пароли не совподают </p>');
				return false;
			}

		}
		else
		{
			$("#Error"+key+"2Message").append('<p> Пароль должен быть более 6 символов </p>');
			return false;
		}
	}


KeyDownHandler=function(event,th)
{
	var rep = /[-\;":'a-zA-Zа-яА-Я]/; 
	th.value = th.value.replace(rep, ''); 
	th.value = th.value.replace(',', '.'); 
}



</script>