//ffffffffffffffffffffffffffff


//var ObjMessageErrorManager = new MessageErrorManager("Editor","ErrorMessages");

//var ArrayIdErrorsElement= new Array();

	//let jsn ='{"1":{"ca":null,"cb":null,"cv":null,"cg":null,"c1":null,"c2":null,"c3":"4","c4":null,"c5":"5","c6":null,"c7":null,"c8":null,"c9":null,"c10":null,"c11":null,"c12":null,"c13":null,"c14":null,"c15":null,"c16":null,"c17":null,"c18":null,"c19":null},"2":{"ca":null,"cb":"1","cv":"2","cg":null,"c1":"3","c2":null,"c3":null,"c4":null,"c5":null,"c6":null,"c7":null,"c8":null,"c9":null,"c10":null,"c11":null,"c12":null,"c13":null,"c14":null,"c15":null,"c16":null,"c17":null,"c18":null,"c19":null}}';
	//let ll = JSON.parse(jsn);
	//console.log(ll[1]["c3"]);

/*
	var isCtrl = false;
		$(document).keyup(function (e) 
		{
 
			if(e.which == 17) isCtrl=false;
			console.log("cccttttrrrlll");
		});*/


	/*	$(document).bind('keyup',function(event) { console.log("cccttttrrrlll"); return true;});
		console.log("lllllllllllllloooooooooooooooooo");*/


	




	let ConvertColumn=["CA","CB","CV","CG","C1","C2","C3","C4","C5","C6","C7","C8","C9","C10","C11","C12","C13","C14","C15","C16","C17","C18","C19"];
	let Convert2Column=["CA","CB","C1","C2","C3","C4"];
	

	var DataForLoadingInTables=null;



var loader= function()
{

$.ajax(
		{
		  type: 'POST',
		  url: '/ajax.php',
		  data: "IDCompanyForLoadCurrentReport",
		  dataType: 'html',
		  success: callbackLoader
		});

}







/*function Data()
{
"ca":"",
"cb":"",
"cv":"",
"c1":"",
"c2":"",
"c3":"",
"c4":"",
"c5":"",
"c6":"",
"c7":"",
"c8":"",
"c9":"",
"c10":"",
"c11":"",
"c12":"",
"c13":"",
"c14":"",
"c15":"",
"c16":"",
"c17":"",
"c18":"",
"c19":""

};*/



let ArrayDataList1=new Array();

		
		ArrayDataList1["Editor_column2"]=WasteCodClean;
		console.log(WasteCodClean);
		ArrayDataList1["Editor_column3"]=Condition;
		console.log(Condition);
		ArrayDataList1["Editor_column7"]=ReceiptOfWaste;
		ArrayDataList1["Editor_column10"]=WasteTransfer;
		ArrayDataList1["Editor_column14"]=DirectionOfTheWaste;
		ArrayDataList1["Editor_column16"]=WasteDisposal;
		ArrayDataList1["Editor_column18"]=Dump;
		ArrayDataList1["Editor_column21"]=WasteStorage;
		ArrayDataList1["Editor_column4"]=Danger;
		console.log(Danger);



	let ArrayDataList2=new Array();
	ArrayDataList2["Editor2_column1"]=EventGroupName;
	ArrayDataList2["Editor2_column2"]=EventGroupCode;






let Editor1 =  new LoaderEditor("Editor","DeleteButton","ErrorMessages",1);


let Editor2 =  new LoaderEditor("Editor2","DeleteButton2","ErrorMessages2",2);


var callbackLoader= function(report)
{
	console.log("callbackLoader");
	//console.log(report);

	loadDataForTable1=null;
	loadDataForTable2=null;

	if(report.trim()!="")
	{

	DataForLoadingInTables= JSON.parse(report);
	loadDataForTable1=DataForLoadingInTables["Table1"];
	loadDataForTable2=DataForLoadingInTables["Table2"];

	
	




	}

	console.log("looo");
	Editor1.Load(HeadrRows,ConvertColumn,loadDataForTable1,ArrayDataList1);
	Editor2.Load(HeadrRowsTable2,Convert2Column,loadDataForTable2,ArrayDataList2);

	

}

loader();








$('#SendReportTab').bind('click',function(){console.log("lolppppppppp"); ShowMessageTables();});
$('#SendReport').bind('click',function(){console.log("lolppppppppp"); ShowMessageTables();});
$('#SendReport').bind('click',GetData);

function GetData()
{
	//console.log("-------------------");
	/*console.log(Editor1.GetData());
	console.log(Editor2.GetData());*/
	
	let FlagCorrectTable1=Editor1.IsCorrect();
	let FlagCorrectTable2=Editor2.IsCorrect();
	if(FlagCorrectTable1&&FlagCorrectTable2)
	{


		let table1 = Editor1.GetData();
		let table2 = Editor2.GetData();
		//console.log({'report':{'table1':table1,"table2":table2}});
		/*console.log(table1);
		console.log("###################");
		console.log(table2);*/


	    let str =  {'report':{'table1':{"Add":table1["Add"],"Delete":table1["Delete"]},'table2':{"Add":table2["Add"],"Delete":table2["Delete"]}}};

		// str = JSON.stringify(str);   
	    console.log(str);
		$.ajax(
			{
			  type: 'POST',
			  url: '/ajax.php',
			  data: str,
			  dataType: 'html',
			  success: callback
			});
	}
	else
	{
		console.log("Незасэйвился!!!!!!!!!!")
	}

}
		$("#MessageSendError").hide() ;
		$("#MessageSuccessSend").hide();

		var ShowMessageTables =function()
		{
			$("#MessageSuccessSend").hide();
			let FlagCorrectTable1=Editor1.IsCorrect();
			let FlagCorrectTable2=Editor2.IsCorrect();
			console.log("dddlol");
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


var callback= function (data) 
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

		let Message ="Отчет сохранен!";
		$("#MessageSuccessSend")[0].innerHTML=Message;	
		$("#MessageSuccessSend").show() 


	};

	





/*var	ObjTableManager = new TableManager("#Editor",ll,ConvertColumn);
ObjTableManager.CreateTable(HeadrRows);
var	ObjTableManager2 = new TableManager("#Editor2");
ObjTableManager2.CreateTable(HeadrRowsTable2);

DataListManager(ArrayDataList);
Binding();*/





