function ReportEditorForUser(NavTabID,Table1,Table2)
{

let self = this;
	self.ArrayYearId=Array();
	self.CurrentIDReport;
	self.ConvertColumn=["CA","CB","CV","CG","C1","C2","C3","C4","C5","C6","C7","C8","C9","C10","C11","C12","C13","C14","C15","C16","C17","C18","C19"];
	self.Convert2Column=["CA","CB","C1","C2","C3","C4"];




	let Editor1;
	let Editor2;
	let yearCurrentReport;
	let currentReportId;
	//let CurrentYear;

	IDDel1="";
	IDDel2="";
 	IDMsg1="";
	IDMsg2="";







	self.CreateNavTab =function(LaadedArray)
	{
		/*$("#firstTable").show();
		$("#secondTable").show();*/
		$(".contentForReport").show();
		//$("#ListReportBlock").show();
		$("#DownloadPDF").show();
		$("#ShowModalMessage").show();

		console.log("CreateNavTab");
		console.log(NavTabID);
		$("#MessageListForSearch").hide();
		$('#MessageListForSearch p').remove()
		

	/*	новый $('#'+NavTabID).append('<li id="li'+idSubTab+'" class="nav-item "><a  id="a'+idSubTab+'" class="'+classes+'"  data-toggle="tab">['+CurrentYear+'] '+CurrentNameCompany+'</a></li>');

		$('#li'+idSubTab).bind('click',function(){self.LoadTables(LaadedArray[i]["IDReport"],'['+LaadedArray[i]["Year"]+'] '+LaadedArray[i]["NameCompany"],LaadedArray[i]["IDCompany"]);});
*/

		if(LaadedArray.length>0)
		{	
			$('#'+NavTabID +' li').remove()
			let classes="";
			let idSubTab=""
			

			for(let i in LaadedArray)
			{
				let CurrentYear=LaadedArray[i]["Year"];
				CurrentIdReport=LaadedArray[i]["ID"];
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

				$('#'+NavTabID).append('<li id="li'+idSubTab+'" class="nav-item "><a  id="a'+idSubTab+'" class="'+classes+'"  data-toggle="tab">Отчет за '+CurrentYear+' год</a></li>');

				$('#li'+idSubTab).bind('click',function(){self.LoadTables(LaadedArray[i]["ID"],LaadedArray[i]["Year"]);});

			}
			//console.log("GetArrayYearId2222222222222222222222222222222222");	
			if(window.location.hash=="")
			{
				self.LoadTables(LaadedArray[0]["ID"],LaadedArray[0]["Year"]);
			}
			
		}
		else
		{
			$('#MessageListForSearch').append("<p>Отчеты не найдены!</p>");
			$('#YearList a').remove();
			
			/*$("#firstTable").hide();
			$("#secondTable").hide();*/
			$(".contentForReport").hide();
			//$("#ListReportBlock").hide();
			$("#DownloadPDF").hide();
			$("#ShowModalMessage").hide();

			$("#MessageListForSearch").show();
			console.log("++++++++++++");

		}
	}



	self.LoadTables=function(IDReport,year)
	{

		let nameReport="Отчет за "+year+" год";
		yearCurrentReport=year;
		currentReportId=IDReport;
		$("#ModalMessageDelete strong").remove();
		$("#ModalMessageDelete").append("<strong>Удалить отчет за "+year+" год?</strong>");


		console.log("GetArrayYearId33333333333");
		//self.CurrentIDCompany=CompanyID;
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


	self.DeleteReport=function()
	{

		$.ajax(
		{
		  type: 'POST',
		  url: '/ajax.php',
		  data: {"DeleteReport":currentReportId},
		  dataType: 'html',
		  success: self.callbackDeleteReport
		});
		  

	}

	self.callbackDeleteReport=function(data)
	{

		$("#UpdateListDataBtn")[0].click();
	}



	self.GetArrayYearId=function(SetArrayYearId)
	{
		console.log("GetArrayYearId111111111111111111111111111111111111111111111111111111111111111111111111111");	
			console.log(SetArrayYearId);
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

		 Editor2 =  new LoaderEditor(Table2,Del2,Msg2,2);

		$('#SearchButton').bind('click',self.Search);
		$('#SendReportTab').bind('click',function(){ ShowMessageTables();});
		$('#SendReport').bind('click',function(){ ShowMessageTables();});
		$('#SendReport').bind('click',self.Save);
		$('#DeleteReportBtn').bind('click',self.DeleteReport);



		self.UpdateListData();

		


	}


	self.UpdateListData = function()
	{
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


		


		let ArrayDataList=new Array();
	
		ArrayDataList["Editor_column2"]=WasteCodClean;
		ArrayDataList["Editor_column3"]=Condition;
		ArrayDataList["Editor_column7"]=ReceiptOfWaste;
		ArrayDataList["Editor_column10"]=WasteTransfer;
		ArrayDataList["Editor_column14"]=DirectionOfTheWaste;
		ArrayDataList["Editor_column16"]=WasteDisposal;
		ArrayDataList["Editor_column18"]=Dump;
		ArrayDataList["Editor_column21"]=WasteStorage;
		ArrayDataList["Editor_column4"]=Danger;

		let ArrayDataList2=new Array();
		ArrayDataList2["Editor2_column1"]=EventGroupName;
		ArrayDataList2["Editor2_column2"]=EventGroupCode;

		DataForLoadingInTables= JSON.parse($report);
		//console.log(DataForLoadingInTables["Table1"]);
		Editor1.Load(HeadrRows,self.ConvertColumn,DataForLoadingInTables["Table1"],ArrayDataList);
		Editor2.Load(HeadrRowsTable2,self.Convert2Column,DataForLoadingInTables["Table2"],ArrayDataList2);

	
		

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
		let result=Array();

			for(let i in self.ArrayYearId)
			{
				
			

				if(Year=="")
				{
					
					result.push(self.ArrayYearId[i]);
					
				}


				

				if(Year!="")
				{
					if(self.ArrayYearId[i]["Year"]==Year)
					{
						result.push(self.ArrayYearId[i]);
					}
					
				}

			}

		
		
		console.log("Result");
		console.log(result);

		self.CreateNavTab(result);
		
			

	}

	self.dataForSaveAsPDF= function()
	{

		let obj = new Object();
		obj.table1=Editor1.GetData;
		obj.table2=Editor2.GetData;
		obj.ConvertColumn =self.ConvertColumn;
		obj.Convert2Column =self.Convert2Column;

		return obj;
	/*	"DataForPDF":
		{
			"table1" :,
			"table2" :Editor2.GetData

		}*/


	}



	

	self.Save = function ()
	{
		

		let FlagCorrectTable1=Editor1.IsCorrect();
		let FlagCorrectTable2=Editor2.IsCorrect();
		if(FlagCorrectTable1&&FlagCorrectTable2)
		{

		
			let table1 = Editor1.GetData();
			let table2 = Editor2.GetData();
		


		    let str = {'ReportOfUser': {'year':yearCurrentReport,'report':{'table1':{"Add":table1["Add"],"Delete":table1["Delete"]},'table2':{"Add":table2["Add"],"Delete":table2["Delete"]}}}};

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
		
	}



		$("#MessageSendError").hide() ;
		$("#MessageSuccessSend").hide();

		var ShowMessageTables =function()
		{
			$("#MessageSuccessSend").hide();
			let FlagCorrectTable1=Editor1.IsCorrect();
			let FlagCorrectTable2=Editor2.IsCorrect();
			//console.log("dddlol");
			let Message="";
			if(!FlagCorrectTable1||!FlagCorrectTable2)
			{

		

				 Message="<strong> ВНИМАНИЕ! </strong></br>";

				if(!FlagCorrectTable1)
				{
					Message+="В <strong> таблице 1 </strong> обнаружены ошибки.</br>";
				}

				if(!FlagCorrectTable2)
				{
					Message+="В <strong> таблице 2 </strong> обнаружены ошибки.</br>";
				}

				$("#MessageSendError")[0].innerHTML=Message;
				$("#MessageSendError").show() 
			}
			else
			{
				$("#MessageSendError").hide() 
			}
			$("#MessageSendError")[0].innerHTML=Message;
		}


 	self.callback= function (data) 
	{
		console.log("Вернулся!");
		console.log(data);
		console.log("end");

		let Message ="Отчет сохранен!";
		$("#MessageSuccessSend")[0].innerHTML=Message;	
		$("#MessageSuccessSend").show() 


	};


	self.NewReport= function(year)
	{
		yearCurrentReport=year;
		let nameReport="Отчет за "+year+" год";
		self.CleanAll();
		$(".nameReport")[0].innerHTML=nameReport;
		$(".nameReport")[1].innerHTML=nameReport;
		$(".nameReport")[2].innerHTML=nameReport;




		let ArrayDataList=new Array();
	
		ArrayDataList["Editor_column2"]=WasteCodClean;
		ArrayDataList["Editor_column3"]=Condition;
		ArrayDataList["Editor_column7"]=ReceiptOfWaste;
		ArrayDataList["Editor_column10"]=WasteTransfer;
		ArrayDataList["Editor_column14"]=DirectionOfTheWaste;
		ArrayDataList["Editor_column16"]=WasteDisposal;
		ArrayDataList["Editor_column18"]=Dump;
		ArrayDataList["Editor_column21"]=WasteStorage;
		ArrayDataList["Editor_column4"]=Danger;

		let ArrayDataList2=new Array();
		ArrayDataList2["Editor2_column1"]=EventGroupName;
		ArrayDataList2["Editor2_column2"]=EventGroupCode;



		Editor1.Load(HeadrRows,self.ConvertColumn,null,ArrayDataList);
		Editor2.Load(HeadrRowsTable2,self.Convert2Column,null,ArrayDataList2);

	}


}