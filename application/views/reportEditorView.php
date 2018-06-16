



<link rel="stylesheet" type="text/css" href="/js/Editor/form1Style.css">


<datalist id="Editor_column1"></datalist>
<datalist id="Editor_column2"></datalist>
<datalist id="Editor_column3"></datalist>
<datalist id="Editor_column7"></datalist>
<datalist id="Editor_column10"></datalist>
<datalist id="Editor_column14"></datalist>
<datalist id="Editor_column16"></datalist>
<datalist id="Editor_column18"></datalist>
<datalist id="Editor_column21"></datalist>
<datalist id="Editor_column4"></datalist>

<datalist id="Editor2_column1"></datalist>
<datalist id="Editor2_column2"></datalist>

<datalist id="YearListDropDown"></datalist>

<ul id="myTab" class="nav nav-tabs">
<li class="nav-item"><a class="nav-link active" id="SelectReportTab" href="#selectReport" data-toggle="tab">Выбор отчета</a></li>
<li class="nav-item"><a id="tabFirstTable" class="nav-link" href="#firstTable" data-toggle="tab">Таблица 1</a></li>
<li class="nav-item"><a class="nav-link" href="#secondTable" data-toggle="tab">Таблица 2</a></li>
<li class="nav-item" ><a class="nav-link" id="SendReportTab"  href="#sendReport" data-toggle="tab">Отправить отчет</a></li>
</ul>

<div class="tab-content" id="tabContent">

	<div  class="tab-pane fade show active" id="selectReport">
		<br/>
		<div class="row">
			<div class="col-3"></div>
			<div class="col-8 text-center row" >


				<div class="col-7">
					<div id="CreateReport" class="my-1 mx-1 ">
						
						<strong> Создание нового отчета </strong> <br/>
						<input id="YearInputNewReport" type="number" min="2008" max="3000" class="col-5" placeholder="Год"> 
						<button id="CreateReportButton" class="btn btn-secondary col-3" >Создать</button>	
						<div class="col-4" ></div>
						<div id="ErrorCreateReport" class=" alert alert-danger col-8 container " role="alert"></div>
					</div>
						
					<div id="ChangedReports" class="my-1 mx-1 align-items-centre" >

						<br/>
						<strong> Поиск отчетов</strong> 
						<br/>
						<input id="YearInput" type="text" class="col-5" placeholder="Год" list="YearListDropDown"> 
						<button id="SearchButton" class="btn btn-secondary col-3" >Найти</button>
						
						<br/>
						<div id="MessageListForSearch" class="alert alert-danger col-8 container" role="alert"></div>
						<br/>
						<button id="DownloadPDF" type="button" class="btn btn-success">Скачать выбранный отчет в формате PDF</button>
					</div>
				</div>



				<div id="ListReportBlock" class="col-4">

					<strong> Список отчетов </strong>  <br/>
					<button type="button" id="UpdateListDataBtn" class=" btn btn-success col-12">Обновить список</button>
					<div id="YearList"  class=" container border border-dark  text-center center-block col-12"   style="height: 300px; overflow-y: scroll;">
						<ul id="ListReport" class="nav nav-pills flex-column mb-3 col-12" role="tablist"></ul>
					</div>
					<button type="button" id="ShowModalMessage" data-toggle="modal" data-target="#ModalMessage" class=" btn btn-danger col-12">Удалить выделенный отчет</button>
				</div>
				<div class="col-1"></div>



			</div>

			<div class="col-1"></div>
		</div>
		<br/>
	</div>


	<div id="ModalMessage" class="modal fade">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header"><button class="close" type="button" data-dismiss="modal">×</button>
					
				</div>
				<div  id="ModalMessageDelete" class="modal-body text-center"></div>
				
				<div class="modal-footer text-center">
					<button id="DeleteReportBtn" class="btn btn-danger" type="button" data-dismiss="modal">Удалить</button>
					<button class="btn btn-default" type="button" data-dismiss="modal">Отмена</button>
				</div>
					
			
			</div>
		</div>
	</div>



	<div  class="tab-pane fade " id="firstTable" >
		<dir class="contentForReport">
			
				<div class="row">
					<div class=" container py-3 col-6 " ><h2><strong><p  class="py-2 px-5 nameReport "></p></strong></h2> </div>
					<div class="col-6">
						<!-- <h3 class="ml-5">Список ошибок</h3> -->

						<div id="ErrorMessages" class="border alert alert-danger  border-danger  mx-1" style="height: 100px;  overflow-y: scroll; border-radius: 10px;" >	
						</div>
					
					</div>
				</div>
			

			<table id="Editor">	
			</table>
			
				<button id="DeleteButton"  class="btn btn-secondary  my-1 mx-1">Удалить отмеченные строки</button>

				
		</dir>
	</div>

	<div class="tab-pane fade" id="secondTable">
		<dir class="contentForReport">
			
			<div class="row">
					<div class=" container py-3 col-6 " ><h2><strong><p  class="py-2 px-5 nameReport "></p></strong></h2> </div>
					<div class="col-6">
						<!-- <h3 class="ml-5">Список ошибок</h3> -->

						<div id="ErrorMessages2" class="border alert alert-danger  border-danger  mx-1" style="height: 100px;  overflow-y: scroll; border-radius: 10px;" >	
						</div>
					
					</div>
				</div>
			<div class="container row">
				<div class="container">
					<table id="Editor2" class="my-1 mx-1 ">	
					</table>
					
					<button id="DeleteButton2"  class="btn btn-secondary  my-1 mx-1">Удалить отмеченные строки</button>
				</div>
			</div>


			
		</dir>
	</div>

	<div class="tab-pane fade " id="sendReport">
		<div class="container">
			<dir class="contentForReport container text-center col-5">
				<div class="text-center" ><h2><p class="nameReport"></p></h2></div>
				<div id="MessageSuccessSend" class="text-center alert alert-success" role="alert">
				</div>
				<div id="MessageSendError" class="text-center alert alert-danger" role="alert">
				</div>
				
				<button id="SendReport"  class="btn btn-secondary  my-1 mx-1"  >Отправить отчет</button>
			</dir>
		</div>

	</div>

</div>
<br/>
<!--<script type="text/javascript" src="js/Editor/jsBootstrap.js"></script>-->




<script type="text/javascript">

	//$("#ChangedReports")[0].prop("disabled", true);

	//$("#ChangedReports").hide();
	$("#ErrorCreateReport").hide();
	$("#MessageListForSearch").hide();
	

	 $(window).on('beforeunload', function(){
        return "В случае подтверждения закрытия окна браузера, все несохраненные данные будут утеряны.";
    });
 
    $(document).on("submit", "form", function(event){
        
        $(window).off('beforeunload');
    });





    /*var objReportEditorForUser = new ReportEditorForUser("ListReport","Editor","Editor2");
	objReportEditorForUser.Start(); //("DeleteButton","DeleteButton2","ErrorMessages","ErrorMessages2");*/

		

</script>









<script type="text/javascript" src="/js/Editor/Data/Table1/HeadersForTable.js"></script>
<script type="text/javascript" src="/js/Editor/Data/Table1/DataLists.js"></script>   
<script type="text/javascript" src="/js/Editor/Data/Table1/PhysicCondition.js"></script>
<script type="text/javascript" src="/js/Editor/Data/Table1/WasteCod.js"></script>

<script type="text/javascript" src="/js/Editor/Data/Table2/HeadersForTable2.js"></script>

<script type="text/javascript" src="/js/Editor/CheckerBalances.js"></script>
<script type="text/javascript" src="/js/Editor/Checker.js"></script>
<script type="text/javascript" src="/js/Editor/CheckerBalancesTable1.js"></script>
<script type="text/javascript" src="/js/Editor/CheckerBalancesTable2.js"></script>
<script type="text/javascript" src="/js/Editor/CheckerTable1.js"></script>
<script type="text/javascript" src="/js/Editor/CheckerTable2.js"></script>

<script type="text/javascript" src='/js/Editor/MessageError.js'></script>
<script type="text/javascript" src="/js/Editor/DataListManager.js"></script>
<script type="text/javascript" src="/js/Editor/Binding.js"></script>


<script type="text/javascript" src="/js/Editor/HeadersManager.js"></script>
<script type="text/javascript" src="/js/Editor/EditRowsManager.js"></script>
<script type="text/javascript" src="/js/Editor/TableManager.js"></script>
<script type="text/javascript" src="/js/Editor/LoaderEditor.js"></script>


<script type="text/javascript" src="/js/Editor/ReportEditorForUser.js"></script>

<script type="text/javascript" src="/js/pdfmake-master/build/pdfmake.min.js"></script> 
<script type="text/javascript" src="/js/pdfmake-master/build/vfs_fonts.js"></script> 


<script type="text/javascript" src="/js/pdfManager.js"></script>

<!-- <script type="text/javascript" src="/js/Editor/Main.js"></script>  -->


<script type="text/javascript">
	var objReportEditorForUser = new ReportEditorForUser("ListReport","Editor","Editor2");
	objReportEditorForUser.Start("DeleteButton","DeleteButton2","ErrorMessages","ErrorMessages2");
	var dataForPdf = objReportEditorForUser.dataForSaveAsPDF();

		

 

		$.ajax(
		{
		  type: 'POST',
		  url: '/ajax.php',
		  data: "GetListDataSearchUser",
		  dataType: 'html',
		  success: CallBackListData
		});
	


	


	let DataForLists;

	function CallBackListData(jsonDataForLists)
	{


		 DataForLists= JSON.parse(jsonDataForLists);
		for(let i in DataForLists["Year"])
		{
			$('#YearListDropDown').append('<option value="'+ DataForLists["Year"][i]["Year"]+'"></option>');
		}

		
			
	}

	function createPdf()
	{
		console.log("createPdf");
		tables=new Array();
		dataConvert=new Array();

		tables[0] = dataForPdf.table1()["Add"];
		tables[1] =dataForPdf.table2()["Add"];
		dataConvert[0]=dataForPdf.ConvertColumn;
		dataConvert[1]=dataForPdf.Convert2Column;

/*
		console.log(table1[0][ConvertColumn[0]]);
		console.log(table1[0]);
		console.log();*/


		console.log(tables[0]);
		let PDF = new PDFManager();
		PDF.DownloadPDF(tables,dataConvert);

	}



	function CreateNewReport()
	{
		//$("#ErrorCreateReport").hide();
		

		$(".contentForReport").show();
		$("#ErrorCreateReport p").remove();
		let valueInp = $("#YearInputNewReport")[0].value;
		if((Number(valueInp))&& (Number.isInteger(Number(valueInp))))
		{
			if((2008<=valueInp)&&(valueInp<=3000))
			{
				let flagCorrect=true;
				for(let i in DataForLists["Year"])
				{
					if(DataForLists["Year"][i]["Year"]==valueInp)
					{
						flagCorrect=false;
						break;
					}
				}

				if(flagCorrect)
				{
					$("#ErrorCreateReport").hide();
					//////////////////////////////////////////////////////////////////////
					objReportEditorForUser.NewReport(valueInp);
					$("#tabFirstTable")[0].click();
				}
				else
				{
					$("#ErrorCreateReport").append("<p>Отчет за "+valueInp+" существует.</p>");
					$("#ErrorCreateReport").show();	
				}
			}
			else
			{
				$("#ErrorCreateReport").append("<p>Значение должно находится в интервале от 2008 до 3000 включительно.</p>");
				$("#ErrorCreateReport").show();
			}
		}
		else
		{
			$("#ErrorCreateReport").append("<p>Введены неверные данные</p>");
			$("#ErrorCreateReport").show();
		}

		

	
	}

	$('#CreateReportButton').bind('click',function(){CreateNewReport();});
	$('#DownloadPDF').bind('click',function(){createPdf();});
	$('#UpdateListDataBtn').bind('click',function()
	{
		objReportEditorForUser.UpdateListData(); 
		$("#YearInputNewReport")[0].value="";
		$("#YearInput")[0].value="";
		$("#ErrorCreateReport").hide();
		$("#MessageListForSearch").hide();

	});

</script>





<!-- <script type="text/javascript">
	
$('#Editor').on('mouseover',function(e){console.log("Hello, nah");});

</script> -->

<!-- <p id="p1" title="tis is text &#013; ttt next " data-toggle="tooltip" data-placement="right">text </p>
 -->

<!-- <script type="text/javascript">
	//$("#p1")[0].attr( "title", "hello" );
	//console.log($("#EditRow1")[0]);
	//$("#EditRow1").attr("title","Hell \r o!");


</script> -->

<!-- example -->
<!-- <script type="text/javascript">
	let jsn ='{"1":{"ca":null,"cb":null,"cv":null,"cg":null,"c1":null,"c2":null,"c3":"4","c4":null,"c5":"5","c6":null,"c7":null,"c8":null,"c9":null,"c10":null,"c11":null,"c12":null,"c13":null,"c14":null,"c15":null,"c16":null,"c17":null,"c18":null,"c19":null},"2":{"ca":null,"cb":"1","cv":"2","cg":null,"c1":"3","c2":null,"c3":null,"c4":null,"c5":null,"c6":null,"c7":null,"c8":null,"c9":null,"c10":null,"c11":null,"c12":null,"c13":null,"c14":null,"c15":null,"c16":null,"c17":null,"c18":null,"c19":null}}';
	let ll = JSON.parse(jsn);
	console.log(ll[1]["c3"]);
</script> -->



