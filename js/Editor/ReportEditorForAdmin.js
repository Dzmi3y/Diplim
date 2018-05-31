function ReportEditorForAdmin(NavTabID,Table1,Table2)
{

	let self = this;
	self.ArrayYearId=Array();
	self.CurrentIDCompany;
	self.CurrentIDReport;

	let Editor1;
	let Editor2;

	IDDel1="";
	IDDel2="";
 	IDMsg1="";
	IDMsg2="";







	self.CreateNavTab =function(LaadedArray)
	{
		console.log("CreateNavTab");
		console.log(NavTabID);
		
		$('#MessageListForSearch p').remove()

		if(LaadedArray.length>0)
		{	
			$('#'+NavTabID +' li').remove()
			let classes="";
			let idSubTab=""
			let CurrentYear;

			for(let i in LaadedArray)
			{
				CurrentYear=LaadedArray[i]["Year"];
				CurrentNameCompany=LaadedArray[i]["NameCompany"];
				CurrentIdReport=LaadedArray[i]["IDReport"];
				//console.log(CurrentIdReport)
				idSubTab= "Tab"+CurrentIdReport;
				if(i==0) 
				{
					classes="nav-link active tab";
					
				}
				else
				{
					classes="nav-link tab";
				}

				$('#'+NavTabID).append('<li id="li'+idSubTab+'" class="nav-item "><a  id="a'+idSubTab+'" class="'+classes+'"  data-toggle="tab">['+CurrentYear+'] '+CurrentNameCompany+'</a></li>');

				$('#li'+idSubTab).bind('click',function(){self.LoadTables(LaadedArray[i]["IDReport"],'['+LaadedArray[i]["Year"]+'] '+LaadedArray[i]["NameCompany"],LaadedArray[i]["IDCompany"]);});

			}
			
			self.LoadTables(LaadedArray[0]["IDReport"],'['+LaadedArray[0]["Year"]+'] '+LaadedArray[0]["NameCompany"],LaadedArray[0]["IDCompany"]);

			
		}
		else
		{
			$('#MessageListForSearch').append("<p>Отчет не найден!</p>");
			console.log("++++++++++++");

		}
	}


	self.LoadTables=function(IDReport,nameReport,CompanyID)
	{
		self.CurrentIDCompany=CompanyID;
		self.CurrentIDReport=IDReport;
		console.log("Loooogg");
		self.CleanAll()
		$(".nameReport")[0].innerHTML=nameReport;
		$(".nameReport")[1].innerHTML=nameReport;
		$(".nameReport")[2].innerHTML=nameReport;
		$.ajax(
		{
		  type: 'POST',
		  url: '/ajax.php',
		  data: {"AdminIDCompanyForLoadCurrentReport":IDReport},
		  dataType: 'html',
		  success: self.callbackLoader
		});

		console.log(IDReport);

	}




	self.GetArrayYearId=function(SetArrayYearId)
	{
		self.ArrayYearId=JSON.parse(SetArrayYearId);
		self.CreateNavTab(self.ArrayYearId);
		
			if(window.location.hash!="")
			{
				$(window.location.hash)[0].click();
				window.location.hash="";
			}
		console.log(self.ArrayYearId);

	}


	self.Start= function(Del1,Del2,Msg1,Msg2)
	{

		 IDDel1=Del1;
		 IDDel2=Del2;
		 IDMsg1=Msg1;
		 IDMsg2=Msg2;

		 Editor1 =  new LoaderEditor(Table1,Del1,Msg1,1);

		 Editor2 =  new LoaderEditor(Table2,Del2,Msg2);

		$('#SearchButton').bind('click',self.Search);
		$('#SendReport').bind('click',self.Save);

		$.ajax(
		{
		  type: 'POST',
		  url: '/ajax.php',
		  data: "GetArrayYearIdForAdmin",
		  dataType: 'html',
		  success: self.GetArrayYearId
		});


	}


	self.callbackLoader= function($report)
	{
		console.log("hello");


		let ConvertColumn=["CA","CB","CV","CG","C1","C2","C3","C4","C5","C6","C7","C8","C9","C10","C11","C12","C13","C14","C15","C16","C17","C18","C19"];
		let Convert2Column=["CA","CB","C1","C2","C3","C4"];


		let ArrayDataList=new Array();
	
		ArrayDataList["Editor_column3"]=Condition;
		ArrayDataList["Editor_column7"]=ReceiptOfWaste;
		ArrayDataList["Editor_column10"]=WasteTransfer;
		ArrayDataList["Editor_column14"]=DirectionOfTheWaste;
		ArrayDataList["Editor_column16"]=WasteDisposal;
		ArrayDataList["Editor_column18"]=Dump;
		ArrayDataList["Editor_column21"]=WasteStorage;
		ArrayDataList["Editor_column4"]=Danger;


		DataForLoadingInTables= JSON.parse($report);
		console.log(DataForLoadingInTables["Table1"]);
		Editor1.Load(HeadrRows,ConvertColumn,DataForLoadingInTables["Table1"],ArrayDataList);
		Editor2.Load(HeadrRowsTable2,Convert2Column,DataForLoadingInTables["Table2"]);


		

	}


	self.CleanAll = function()
	{
		$("#"+Table1+" tr").remove();
		$("#"+Table2+" tr").remove();
	/*	$("#"+Table1+" th").remove();
		$("#"+Table2+" th").remove();*/
		$("#"+IDMsg1+" p").remove();
		$("#"+IDMsg2+" p").remove();
		$('#'+IDDel1).unbind('click');
		$('#'+IDDel2).unbind('click');
		

	}




	self.Search=function(ID=null)
	{

		let Year=$("#YearInput")[0].value;
		let NameCompany=$("#CompanyNameInput")[0].value;
		let result=Array();
		if((Year!="")||(NameCompany!=""))
		{
			for(let i in self.ArrayYearId)
			{
				
				if((Year!="")&&(NameCompany==""))
				{
					if(self.ArrayYearId[i]["Year"]==Year)
					{
						result.push(self.ArrayYearId[i]);
					}
				}

				if((Year=="")&&(NameCompany!=""))
				{
					if(self.ArrayYearId[i]["NameCompany"]==NameCompany)
					{
						result.push(self.ArrayYearId[i]);
					}
				}

				if((Year!="")&&(NameCompany!=""))
				{
					if((self.ArrayYearId[i]["Year"]==Year)&&(self.ArrayYearId[i]["NameCompany"]==NameCompany))
					{
						result.push(self.ArrayYearId[i]);
					}
					
				}

			}

		
		}

		self.CreateNavTab(result);
		
			

	}





	

	self.Save = function ()
	{
		console.log("-------------------");
		/*console.log(Editor1.GetData());
		console.log(Editor2.GetData());*/
		
		let table1 = Editor1.GetData();
		let table2 = Editor2.GetData();
		//console.log({'report':{'table1':table1,"table2":table2}});
		/*console.log(table1);
		console.log("###################");
		console.log(table2);*/


	    let str =  {'reportAdmin':{'table1':{"Add":table1["Add"],"Delete":table1["Delete"]},'table2':{"Add":table2["Add"],"Delete":table2["Delete"]},'IDCompany':self.CurrentIDCompany,'IDReport':self.CurrentIDReport}};

		// str = JSON.stringify(str);   
	    console.log(str);
		$.ajax(
			{
			  type: 'POST',
			  url: '/ajax.php',
			  data: str,
			  dataType: 'html',
			  success: self.callback
			});
	}



 self.callback= function (data) 
	{//возвращаемый результат от сервера

		/*if(data=="true")
		{
			location.reload();

		}
		else
		{
			$("#ErrorMessages").empty();
			$("#ErrorMessages").append('<p> Ошибка! </p>');
		}*/
		//et m= JSON.parse(data);
		console.log("Вернулся!");
		console.log(data);
		console.log("end");


	};







}


