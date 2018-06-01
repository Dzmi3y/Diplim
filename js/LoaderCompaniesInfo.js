function LoaderCompaniesInfo(NavTabID,IDSearcKey,IDButtonSearch)
{
	let self=this;
	self.AllCompanies;
	self.ArrayNameFields=Array();
	self.CurrentSearchField;

	self.Start=function()
	{
		
		$("#"+IDButtonSearch).bind("click",function(){self.Search();});
		

		$.ajax(
			{
			  type: 'POST',
			  url: '/ajax.php',
			  data: "GetAllCompanies",
			  dataType: 'html',
			  success: self.callbackGetAllCompanies
			});


	}

	self.callbackGetAllCompanies=function(jsonAllCompanies)
	{
		
		 self.AllCompanies = JSON.parse(jsonAllCompanies);
			
			

		 for(let i in self.AllCompanies[0] )
		 {
		 	if((i!="ID")&&(i!="Password"))
		 	{
		 		$('#RadioButton'+i).bind('click',function(){self.LoadSearchList(i)});
		 		self.ArrayNameFields.push(i);
		 	}
		 }

		 self.CreateNavTab(self.AllCompanies);
		 self.LoadSearchList("NameCompany");

		// 

		// $('#'+NavTabID)



	}


	
	self.CreateNavTab =function(LoadedArray)
	{
		console.log("CreateNavTab");
		console.log(LoadedArray);
		console.log(NavTabID);
		
		$('#MessageListForSearch p').remove()

		if(LoadedArray.length>0)
		{	
			$('#'+NavTabID +' li').remove()
			


			 let idSubTab;
		 let classes="TabCompany";

		 for(let i in LoadedArray)
		 {
		 	idSubTab="NameCompanyTab"+i;

		 	if(i==0) 
				{
					classes="nav-link active tab";
					
				}
				else
				{
					classes="nav-link tab";
				}

		 	$('#'+NavTabID).append('<li id="li'+idSubTab+'" class="nav-item "><a  id="a'+idSubTab+'" class="'+classes+'"  data-toggle="tab">'+LoadedArray[i]["NameCompany"]+'</a></li>');

			$('#li'+idSubTab).bind('click',function(){self.LoadInfo(i,LoadedArray);});
			
			


		 	//NameCompany
		 }
		 self.LoadInfo(0,LoadedArray);
		 



			
		}
		else
		{
			$('#MessageListForSearch').append("<p>Предприятие не найдено!</p>");
			console.log("++++++++++++");

		}
	}


	self.LoadSearchList= function(NameField)
	{
		$("#SearchList option").remove();
		//console.log(NameField);
		self.CurrentSearchField=NameField;
		for(let i in self.AllCompanies)
		{
			$("#SearchList").append('<option value="'+self.AllCompanies[i][NameField]+'"></option>');
		}

		

	}


	self.LoadInfo = function(NumberInArray,LoadedArray)
	{
		console.log(NumberInArray);
		console.log(LoadedArray);
		$("#NameCompany")[0].innerHTML=LoadedArray[NumberInArray]["NameCompany"];
		$("#Phone")[0].innerHTML=LoadedArray[NumberInArray]["Phone"];
		$("#Email")[0].innerHTML=LoadedArray[NumberInArray]["Email" ];
		$("#UNP")[0].innerHTML=LoadedArray[NumberInArray]["UNP"];
		$("#Region")[0].innerHTML=LoadedArray[NumberInArray]["Region"];
		$("#District")[0].innerHTML=LoadedArray[NumberInArray]["District"];
		$("#Address")[0].innerHTML=LoadedArray[NumberInArray]["Address"];

		$("#ListReports a").remove();
		console.log(LoadedArray[NumberInArray]["ID"]);

		$.ajax(
		{
		  type: 'POST',
		  url: '/ajax.php',
		  data: {"GetIDYearReport":LoadedArray[NumberInArray]["ID"]},
		  dataType: 'html',
		  success: self.GetReportsId
		});

		

		



	}

	self.GetReportsId =function(jsonReportsId)
	{
		let ArrayReportsId= JSON.parse(jsonReportsId);
		//console.log("GetReportsId33333");

		//console.log(ReportsId);

		for(let i in ArrayReportsId)
		{
			$("#ListReports").append("<div><a href='/adminPersonalCabinet/searchReport#aTab"+ArrayReportsId[i]["ID"]+"'>"+ArrayReportsId[i]["Year"]+"</a></div>");
		}

	}

	self.Search = function()
	{

		let SearchKey=$("#"+IDSearcKey)[0].value;
		let result=Array();
		console.log("Поиск");
		console.log(SearchKey);
		for(let i in self.AllCompanies)
		{

			if(SearchKey=="")
			{
				result.push(self.AllCompanies[i]);

			}
			else
			{

				if(self.AllCompanies[i][self.CurrentSearchField]==SearchKey)
				{
					
					result.push(self.AllCompanies[i]);
				}
			}

		}
		console.log(result);
		self.CreateNavTab(result);
	}



	
}