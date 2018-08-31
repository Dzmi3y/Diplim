
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
ArrayDataList2["Editor2_column2"]=EventGroupCode;

let Editor1 =  new LoaderEditor("Editor","DeleteButton","ErrorMessages",1);
let Editor2 =  new LoaderEditor("Editor2","DeleteButton2","ErrorMessages2",2);


var callbackLoader= function(report)
{
	console.log("callbackLoader");
	loadDataForTable1=null;
	loadDataForTable2=null;

	if(report.trim()!="")
	{
	DataForLoadingInTables= JSON.parse(report);
	loadDataForTable1=DataForLoadingInTables["Table1"];
	loadDataForTable2=DataForLoadingInTables["Table2"];
	}

	Editor1.Load(HeadrRows,ConvertColumn,loadDataForTable1,ArrayDataList1);
	Editor2.Load(HeadrRowsTable2,Convert2Column,loadDataForTable2,ArrayDataList2);
}

loader();

$('#SendReportTab').bind('click',function(){console.log("lolppppppppp"); ShowMessageTables();});
$('#SendReport').bind('click',function(){console.log("lolppppppppp"); ShowMessageTables();});
$('#SendReport').bind('click',GetData);

function GetData()
{
	let FlagCorrectTable1=Editor1.IsCorrect();
	let FlagCorrectTable2=Editor2.IsCorrect();
	if(FlagCorrectTable1&&FlagCorrectTable2)
	{
		let table1 = Editor1.GetData();
		let table2 = Editor2.GetData();

	    let str =  {'report':{'table1':{"Add":table1["Add"],"Delete":table1["Delete"]},'table2':{"Add":table2["Add"],"Delete":table2["Delete"]}}};
 
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
{
	console.log("Вернулся!");
	console.log(data);
	console.log("end");

	let Message ="Отчет сохранен!";
	$("#MessageSuccessSend")[0].innerHTML=Message;	
	$("#MessageSuccessSend").show() 
};




