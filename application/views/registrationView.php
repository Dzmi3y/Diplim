
<div class="py-3 container text-center  ">

<datalist id="DistrictsList"></datalist>
<datalist id="RegionsList"></datalist>

<div id="TitleRegistration" class=" container col-8 bg-success text-light rounded text-center"">  <strong><p>  Регистрация </p> </strong> </div>

    <!-- <div  id="RegistrationBlock" class=" container center-block">  -->

    	<form method="POST" id="formx" action="javascript:void(null);" onsubmit="Send()">
    <div class=" container col-8">
    	<div class="row container   " >
    		<div class="container  col-6">
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

			<div class="container col-6">

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
					<label for="InputRegion"><b>Область</b></label>
					<input type="text"  class="form-control" id="InputRegion" autocomplete="off" list="RegionsList" placeholder="Область">	
					<div id="ErrorRegionMessage" class="bg-danger text-white" ></div>
				</div>

				<div class="text-dark" class="form-group">
					<label for="InputDistrict"><b>Район</b></label>
					<input type="text" class="form-control" id="InputDistrict"  autocomplete="off" list="DistrictsList" placeholder="Район">	
					<div id="ErrorDistrictMessage" class="bg-danger text-white"></div>
				</div>

				<div class="text-dark" class="form-group">
					<label for="InputAddress"><b>Адрес</b></label>
					<input type="text" class="form-control" id="InputAddress" placeholder="Адрес">	
					<div id="ErrorAddressMessage" class="bg-danger text-white"></div>
				</div>
			</div>
			
		</div>

	</div>
	
		<div id="ErrorMessagesRegistration" class="container alert col-9 alert-danger" role="alert"></div>
		<br/>
		
			
			<button type="submit"  class="btn col-3  btn-dark ">Отправить</button>	

		
		</form>
	


</div>

<script type="text/javascript" src="/js/RegionAndDistrict.js"></script>

<script type="text/javascript">

		function  FillDatalist(IdDatalist,DataForFill,MetaData=null)
	{

		$("#"+IdDatalist).empty();

		if(MetaData==null)
		{
			for( let i in DataForFill)
			{
				$("#"+IdDatalist).append( '<option value="'+DataForFill[i].value+'">'+DataForFill[i].value+'</option>"');

			}
			
		}
		else
		{
			for( let i in DataForFill)
			{
				if(DataForFill[i].Region==MetaData)
				$("#"+IdDatalist).append( '<option value="'+DataForFill[i].value+'">'+DataForFill[i].value+'</option>"');
			}
		}



	}





	$('#InputEmail').bind('change',function(){Checker("Email",$("#InputEmail")[0].value);});
	$('#InputPassword2').bind('change',function(){ Checker("Password2",$("#InputPassword2")[0].value);});
	$('#InputPassword3').bind('change',function(){ Checker("Password3",$("#InputPassword3")[0].value);});
	$('#InputUNP').bind('change',function(){ Checker('UNP',$("#InputUNP")[0].value);});
	$('#InputPhone').bind('change',function(){ Checker('Phone',$("#InputPhone")[0].value);});
	$('#InputNameCompany').bind('change',function(){ Checker('NameCompany',$("#InputNameCompany")[0].value);});
	$('#InputRegion').bind('change',function(){ Checker('Region',$("#InputRegion")[0].value,true);});
	$('#InputDistrict').bind('change',function(){ Checker('District',$("#InputDistrict")[0].value);});
	$('#InputAddress').bind('change',function(){ Checker('Address',$("#InputAddress")[0].value);});

	$('#InputUNP').bind('keyup',function(event) {return KeyDownHandler(event,this);});
	$('#InputPhone').bind('keyup',function(event) {return KeyDownHandler(event,this);});

	function ChangeRegion(IsOnChange=false)
	{

		let value=$("#InputRegion")[0].value;
		let FlagCorrect=true;
		$("#ErrorRegionMessage p").remove();
		for(let i in Regions)
		{

			if(Regions[i].value==value)
			{
				if(IsOnChange)
				{
					$('#InputDistrict')[0].value="";
					$("#ErrorDistrictMessage p").remove();
				}
				FillDatalist("DistrictsList",Districts,Regions[i].value);
				FlagCorrect=true;
				break;
			}
				else
			{
				FlagCorrect=false;
				
			}
			


		}

		if(!FlagCorrect)
		{
			//console.log("eerroor");
			$("#ErrorRegionMessage").append('<p> Неверное название области! </p>');

		}

	}

	function ChangeDistrict()
	{
		let flagCorrect =true;
		let value =$("#InputDistrict")[0].value;
		$("#ErrorDistrictMessage p").remove();
		for(let i in Districts)
		{
			if(Districts[i].value==value)
			{

				if(Districts[i].Region!=$("#InputRegion")[0].value)
				{
					$("#ErrorDistrictMessage").append('<p> Область не соответствует району! </p>');
				}
				flagCorrect=true;
				break;
			}
				else
			{
				flagCorrect=false;
			}

		}
		if(!flagCorrect)
		{
			$("#ErrorDistrictMessage").append('<p> Неверное название района </p>');
		}

	}




	var callbackRegistration= function (data) 
	{
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

			
		}
	};

	function Check(RegistrationData)
	{	
		let result= true;
		$("#ErrorMessagesRegistration").empty();

		for(let i in RegistrationData)
		{
		 result *=Checker(i,RegistrationData[i])

		}

		return result;

		
	}



	function Checker(key,ValueForCheck,IsOnChange=false)
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
			
			if(result)
			{
				if(key=="Region")
				{
					ChangeRegion(IsOnChange);
				}

				if(key=="District")
				{
					ChangeDistrict();
				}
			}
			



			
			

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


		/*	if(key=="Phone")
			{
				if($('#InputPhone')[0].value.length!=9)
				{
					$("#ErrorPhoneMessage").append('<p> Телефонный номер должен состоять из девати цифор! </p>');
				}
			}*/
			

			if(key=="UNP")
			{
				if($('#InputUNP')[0].value.length!=9)
				{
					$("#ErrorUNPMessage").append('<p> УНП должен состоять из девати цифор!  </p>');
					return false;
				}
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



	





	FillDatalist("DistrictsList",Districts)
	FillDatalist("RegionsList",Regions)



</script>