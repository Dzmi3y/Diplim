

<form method="POST" id="formx" action="javascript:void(null);" onsubmit="Send()">

 <div class=" py-3 container col-8">
	<div class="row container   " >		
    		<div class="col-6">
		    	<div class="text-dark"  class="form-group">
		    		<label class="text-dark" for="InputEmail"> <b>Изменить email адрес:</b></label>
		    		<input type="email" class="form-control" id="InputEmail"  placeholder="Введите email">
		    		<div id="ErrorEmailMessage" class="bg-danger text-white"></div>
		    	</div>
				<div class="text-dark" class="form-group">
					<label for="InputPassword2"><b>Новый пароль:</b></label>
					<input type="password" class="form-control" id="InputPassword2" placeholder="Введите пароль">
					<div id="ErrorPassword2Message" class="bg-danger text-white"></div>
				</div>

				<div class="text-dark" class="form-group">
					<label for="InputPassword3"><b>Повторите новый пароль:</b></label>
					<input type="password" class="form-control" id="InputPassword3" placeholder="Введите пароль">
					<div id="ErrorPassword3Message" class="bg-danger text-white"></div>
				</div>

				<div class="text-dark" class="form-group">
					<label for="InputNameCompany"><b>Изменить название предприятия:</b></label>
					<input type="text" class="form-control" id="InputNameCompany" placeholder="Введите название предприятия">
					<div id="ErrorNameCompanyMessage" class="bg-danger text-white"></div>
				</div>
			</div>

			<div class="col-6">

				<div class="text-dark" class="form-group">
					<label for="InputUNP"><b>Изменить УНП</b></label>
					<input type="text" class="form-control" id="InputUNP" placeholder="Введите унп">	
					<div id="ErrorUNPMessage" class="bg-danger text-white"></div>
				</div>

				<div class="text-dark" class="form-group">
					<label for="InputPhone"><b>Изменить телефон</b></label>
					<input type="text" class="form-control" id="InputPhone" placeholder="">	
					<div id="ErrorPhoneMessage" class="bg-danger text-white"></div>
				</div>


				<div class="text-dark" class="form-group">
					<label for="InputRegion"><b>Изменить область</b></label>
					<input type="text" class="form-control" id="InputRegion" placeholder="">	
					<div id="ErrorRegionMessage" class="bg-danger text-white"></div>
				</div>

				<div class="text-dark" class="form-group">
					<label for="InputDistrict"><b>Изменить район</b></label>
					<input type="text" class="form-control" id="InputDistrict" placeholder="">	
					<div id="ErrorDistrictMessage" class="bg-danger text-white"></div>
				</div>

				<div class="text-dark" class="form-group">
					<label for="InputAddress"><b>Изменить адрес</b></label>
					<input type="text" class="form-control" id="InputAddress" placeholder="">	
					<div id="ErrorAddressMessage" class="bg-danger text-white"></div>
				</div>
			</div>
		</div>
		<br/>
		<div class="container col-6">
			<div id="ErrorMessagesSetting" class="alert alert-danger  text-center" role="alert"></div>
			<div id="MessageSuccessSetting" class="alert alert-success  text-center" role="alert"></div>
		</div>
		
		

		<div class="text-center"><button type="submit"  class="btn btn-secondary">Сохранить изменения</button>		</div>

	

	</div>
	
</form>
	<script type="text/javascript">

		$("#ErrorMessagesSetting").hide();
		$("#MessageSuccessSetting").hide();
	
	 $(window).on('beforeunload', function(){
        return "В случае подтверждения закрытия окна браузера, все несохраненные данные будут утеряны.";
    });
 
    $(document).on("submit", "form", function(event){
        
        $(window).off('beforeunload');
    });





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



	var callbackSettingChange= function (data) 
	{//возвращаемый результат от сервера
		//console.log("callback");
		
		console.log("callback");
		console.log(data);

		if(data==true)
		{
			$("#ErrorMessagesSetting").hide();
			$("#MessageSuccessSetting").empty();
			$("#MessageSuccessSetting").append("<p>Изменения успешно сохранены.</p>");
			$("#MessageSuccessSetting").show();

			

		}
		else
		{
			let ErrorMessage = JSON.parse(data);
			//console.log("eeeeeeee");
			//console.log(ErrorMessage);
			$("#MessageSuccessSetting").hide();
			$("#ErrorMessagesSetting").empty();
			$("#ErrorMessagesSetting").append(ErrorMessage["Error"]);
			$("#ErrorMessagesSetting").show();
		}
		
	//console.log(data);

	};

	function Send() 
	{
		$("#MessageSuccessSetting").hide();
		$("#ErrorMessagesSetting").hide();			
			var SettingData = 
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


			if(Check(SettingData))
		{

		/*	
			*/
			console.log("Seting data");
			console.log(SettingData);
/*
			console.log(SettingData);
			var myJsonString =JSON.stringify(SettingData);
			console.log(myJsonString);
			console.log(JSON.parse(myJsonString));

*/

			$.ajax(
			{
			  type: 'POST',
			  url: '/ajax.php',
			  data:{"SettingChange":JSON.stringify(SettingData)},
			  dataType: 'html',
			  success: callbackSettingChange
			});
			//console.log("kek");
			
		}
	};


	function Check(RegistrationData)
	{	
		let result= true;
		$("#ErrorMessagesRegistration").empty();
		//console.log(RegistrationData);

		for(let i in RegistrationData)
		{
		 result *=Checker(i,RegistrationData[i]);

		}
		console.log(result);
		return result;

		
	}



	function Checker(key,ValueForCheck)
	{

	
		let result=true;


		/*console.log("begin "+key);
			console.log(result);*/

			if(key=="Password")
			{
				$("#Error"+key+"Message p").remove();
				$("#Error"+key+"Message p").remove();
			}
			else
			{
				$("#Error"+key+"Message p").remove();
			}

			result *= IsNotEmpty(key,ValueForCheck);

			/*console.log("empity");
			console.log(result);*/



			
			

			if(key=="Password")
			{
				
				result *= CheckPassword(key,ValueForCheck);
			}


			

		
			return result;
	}


	function IsNotEmpty(key,ValueForCheck)
	{
		/*console.log("!!!!!!!!!!!");
		console.log("#Error"+key+"Message");
		console.log(ValueForCheck);*/
		if(key=="Password")
		{
			key="Password2";
		}

		let flag=true;
		if((key!="Password2")&&(key!="Password3"))
		{
			
			//console.log("ne key")
			//console.log(key);
			if((""+ValueForCheck).trim()=="")
			{
				flag=true;
			}
			else
			{
			 flag=false;
			}



		}
		else
		{

			flag=false;
		}



		if(flag)
		{
			/*if((key!="Password2")&&(key!="Password3"))
			{*/

			

				$("#Error"+key+"Message").append('<p> Строка не заполнена! </p>');
			
				return false;
			/*}
			else
			{



				if($("#InputPassword3")[0].value!=$("#InputPassword2")[0].value)
				{
					$("#ErrorPassword3Message").append('<p> Пароли не совподают </p>');
					
					return false;
				}
				else
				{
					return true;	
				}			
			}*/
			
			
		}
		else
		{
			if(key=="Email")
			{
				
				return  IsEmail(key,ValueForCheck);
			}

			/*if(key=="Phone")
			{
				if($('#InputPhone')[0].value.length!=9)
				{
					$("#ErrorPhoneMessage").append('<p> Телефонный номер должен состоять из девати цифор! </p>');
					return false;
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
					
					$("#ErrorPassword3Message p").remove();
					return true;
				}
				else
				{

					
						$("#ErrorPassword3Message p").remove();
						$("#Error"+key+"Message").append('<p> Пароли не совподают </p>');
						return false;
				}
			}
			

			
			if(key=="Password2")
			{
				

				
				if(ValueForCheck.length>=6)
				{
					
					if($("#InputPassword2")[0].value==$("#InputPassword3")[0].value)
					{
						$("#ErrorPassword3Message p").remove();
						return true;
					}
					else
					{
						$("#ErrorPassword3Message p").remove();
						$("#ErrorPassword3Message").append('<p> Пароли не совподают </p>');
						return false;
					}
					return true;
				
				}
				else
				{


					if(ValueForCheck!="")
					{
						$("#Error"+key+"Message").append('<p> Пароль должен быть более 6 символов </p>');
						return false;
					}
					else
					{



						if($("#InputPassword2")[0].value==$("#InputPassword3")[0].value)
					{
						$("#ErrorPassword3Message p").remove();
						return true;
					}
					else
					{
						$("#ErrorPassword3Message p").remove();
						$("#ErrorPassword3Message").append('<p> Пароли не совподают </p>');
						return false;
					}
					return true;
					}
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
		/*console.log("ppppppppppppp");
		console.log(ValueForCheck);
		console.log(ValueForCheck.length);*/
		console.log("ppppppppppppp");
		if(ValueForCheck.length>=6)
		{
			if(ValueForCheck==$("#InputPassword3")[0].value)
			{
				return true;
			}
			else
			{
				$("#Error"+key+"3Message p").remove();
				$("#Error"+key+"3Message").append('<p> Пароли не совподают </p>');
				return false;
			}

		}
		else
		{
			if(ValueForCheck.trim()!="")
			{
				$("#Error"+key+"2Message p").remove();
				$("#Error"+key+"2Message").append('<p> Пароль должен быть более 6 символов </p>');
			}
			else
			{
				
				return true;
			}
			return false;
		}
	}


KeyDownHandler=function(event,th)
{
	var rep = /[-\;":'a-zA-Zа-яА-Я]/; 
	th.value = th.value.replace(rep, ''); 
	th.value = th.value.replace(',', '.'); 
}




/*function Check(SettingData)
	{	
		console.log("checkcheck");
		var result= true;
		$("#ErrorMessagesSetting").empty();
		console.log(SettingData);

		for(let i in SettingData)
		{
		 result *=Checker(i,SettingData[i])
		

		}
		

		return result;

		
	}



	function Checker(key,ValueForCheck)
	{
/*
		console.log("begin----------------");
		console.log(key);
		console.log(typeof ValueForCheck);
		console.log("end----------------");

	
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


			if(key=="Password3")
			{
				if($("#InputPassword2")[0].value==$("#InputPassword3")[0].value)
				{
					result*= true;
				}
				else
				{
					

					$("#Error"+key+"Message").append('<p> Пароли не совподают </p>');
					result*= false;
				}
			}
			
			
			if(key=="Password2")
			{
					
				
				if(ValueForCheck.length>=6)
				{
			
					result*= true;
				
				}
				else
				{

					
					let val =ValueForCheck.trim();
					if(val!="")
					{
						console.log("fuck");
						console.log(val!="");
						$("#Error"+key+"Message").append('<p> Пароль должен быть более 6 символов </p>')
					}
					result*= false;
				}
			}



			result *= IsNotEmpty(key,ValueForCheck);
			

			if(key=="Password")
			{
				
				result *= CheckPassword(key,ValueForCheck);
				console.log(result);
			}


			if(key=="Email")
			{
				console.log("emailllll");
				result *= IsEmail(key,ValueForCheck);
				console.log(result);
			}

			 
			return result;
	}


	function IsNotEmpty(key,ValueForCheck)
	{
		//console.log(ValueForCheck);
		if((key!="Password2")&&(key!="Password3"))
		{
			var vCheck= (""+ValueForCheck).trim();
			if( vCheck=="")
			{
				$("#Error"+key+"Message").append('<p> Строка не заполнена! </p>');
				//console.log("#Error"+key+"Message");
				return false;
				
			}
			else
			{
				return true;
			}
		}

	}


	function IsEmail(key,ValueForCheck)
	{
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,6})$/;
		let res=reg.test(ValueForCheck);
		console.log(res);
		if (!res) $("#Error"+key+"Message").append('<p> Email введён неверно </p>');
	    return res;
	}

	function CheckPassword(key,ValueForCheck)
	{
		/*console.log("ppppppppppppp");
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
				console.log("Yt cjdggg");
				$("#Error"+key+"3Message p").remove();
				$("#Error"+key+"3Message").append('<p> Пароли не совподают </p>');
				return false;
			}

		}
		else
		{
			let val =ValueForCheck.trim();
			if(val!="")
			{
				$("#Error"+key+"2Message").append('<p> Пароль должен быть более 6 символов </p>');
			}
			return false;
		}
	}


KeyDownHandler=function(event,th)
{
	var rep = /[-\;":'a-zA-Zа-яА-Я]/; 
	th.value = th.value.replace(rep, ''); 
	th.value = th.value.replace(',', '.'); 
}

*/






	function SettingLoadData()
	{
		console.log("Setting load");
		$.ajax(
			{
			  type: 'POST',
			  url: '/ajax.php',
			  data:"SettingLoad",
			  dataType: 'html',
			  success: callBackSettingLoad
			});

	}

	function callBackSettingLoad(jsonLoadData)
	{
		console.log("CallBAck");
		let LoadData =JSON.parse(jsonLoadData)[0];
		console.log(LoadData);
		/*Обработать*/
		$("#InputEmail")[0].value=LoadData['Email'];
		$("#InputPhone")[0].value=LoadData['Phone'];
		$("#InputNameCompany")[0].value=LoadData['NameCompany'];
		$("#InputRegion")[0].value=LoadData['Region'];
		$("#InputDistrict")[0].value=LoadData['District'];
		$("#InputAddress")[0].value=LoadData['Address'];
		$("#InputUNP")[0].value=LoadData['UNP'];
	}
	SettingLoadData();
	console.log("load");









</script>