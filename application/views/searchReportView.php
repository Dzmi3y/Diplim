

<link rel="stylesheet" type="text/css" href="/js/Editor/form1Style.css">

<datalist id="Editor_column2"></datalist>
<datalist id="Editor_column3"></datalist>
<datalist id="Editor_column7"></datalist>
<datalist id="Editor_column10"></datalist>
<datalist id="Editor_column14"></datalist>
<datalist id="Editor_column16"></datalist>
<datalist id="Editor_column18"></datalist>
<datalist id="Editor_column21"></datalist>
<datalist id="Editor_column4"></datalist>

<datalist id="Editor2_column2"></datalist>

<datalist id="YearList"></datalist>
<datalist id="CompanyList"></datalist>


<ul id="myTab" class="nav nav-tabs">
<li class="nav-item"><a class="nav-link active" href="#searchTab" data-toggle="tab">Поиск</a></li>
<li class="nav-item"><a class="nav-link" href="#firstTable" data-toggle="tab">Таблица 1</a></li>
<li class="nav-item"><a class="nav-link" href="#secondTable" data-toggle="tab">Таблица 2</a></li>
<li class="nav-item"><a class="nav-link" id="SendReportTab" href="#sendReport" data-toggle="tab">Отправить отчет</a></li>
</ul>

<div class="tab-content py-3" id="tabContent">

	<div  class="tab-pane fade show active" id="searchTab" >

		<div class="container" >
			<div class="col-6 container">
				<div class="row my-1">
					<input id="YearInput" type="text" class="col-2" placeholder="Год" list="YearList"> 
					<input id="CompanyNameInput" type="text" class="col-8" placeholder="Предприятие" list="CompanyList"> 
					<button id="SearchButton" class="btn btn-default col-2" >Найти</button>
				</div>
				<div class="row  mx-1">
					<button type="button" id="UpdateListDataBtn" class=" btn btn-success col-5 ">Обновить список</button>
					<div class="col-1"></div>
					<button type="button" id="ShowModalMessage" data-toggle="modal" data-target="#ModalMessage" class=" btn btn-danger col-6 ">Удалить выделенный отчет</button>
				</div>
				<p ><h5> <strong>Список отчетов:</strong></h5></p>
				<strong><h4><div class="text-center alter alert-danger" id="MessageListForSearch"></div></h4></strong>
				<div id="YearList" class="alert alert-dark"   style="overflow-y: scroll; height: 300px; ">
					<ul id="ListReport" class="nav nav-pills flex-column " role="tablist">
					</ul>
				</div>

			</div>
		</div>


	</div>
	

	<div  class="tab-pane fade" id="firstTable" >
		<div class="px-2">
		
		 <dir class="row"> 
			
				
			<div class="col-2"></div>
			<div>
					<div class=" container text-center py-3 col-6 " ><h5><strong><p  class="py-2 px-5 nameReport "></p></strong></h5> </div>
					
			
			

			<table id="Editor">	
			</table>
			
				<button id="DeleteButton"  class="btn btn-dark  my-1 mx-1">Удалить отмеченные строки</button>
				<div class="col-6">
						<h5>Список ошибок</h5>

						<div id="ErrorMessages" class="border alert alert-danger  border-danger " style="height: 100px;  overflow-y: scroll; border-radius: 10px;" >	
						</div>
					
				</div>
			</div>
		</div>

	</div>

	<div class="tab-pane fade" id="secondTable">
		<div class="px-2">
			
			 <dir class="row"> 
			
				
			<div class="col-2"></div>
			<div>
					<div class=" container text-center py-3 col-6 " ><h5><strong><p  class="py-2 px-5 nameReport "></p></strong></h5> </div>
					
				
				<div class="container row">
					<div class="container">
						<table id="Editor2" class="my-1 mx-1 ">	
						</table>
						
						<button id="DeleteButton2"  class="btn btn-dark  my-1 mx-1">Удалить отмеченные строки</button>
						<div class="col-6">
							<h5 >Список ошибок</h5>

							<div id="ErrorMessages2" class="border alert alert-danger  border-danger " style="height: 100px;  overflow-y: scroll; border-radius: 10px;" >	
							</div>
						
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>

	<div class="tab-pane fade" id="sendReport">
		<div class="container">
			<dir class="contentForReport container text-center col-5">
				<div class="text-center" ><h5><strong><p class="nameReport"></p></strong></h5></div>
				<div id="MessageSuccessSend" class="text-center alert alert-success" role="alert">
				</div>
				<div id="MessageSendError" class="text-center alert alert-danger" role="alert">
				</div>
				
				<button id="SendReport"  class="btn btn-dark  my-1 mx-1" > Отправить отчет</button>
			</dir>
		</div>
	</div>

</div>

<div class="row my-1 mx-1" >

</div>

	<div id="ModalMessage" class="modal fade">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header"><button class="close" type="button" data-dismiss="modal"></button>
					
				</div>
				<div  id="ModalMessageDelete" class="modal-body text-center"></div>
				
				<div class="modal-footer text-center">
					<button id="DeleteReportBtn" class="btn btn-danger" type="button" data-dismiss="modal">Удалить</button>
					<button class="btn btn-default" type="button" data-dismiss="modal">Отмена</button>
				</div>
					
			
			</div>
		</div>
	</div>
</br>



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

<script type="text/javascript" src="/js/Editor/ReportEditorForAdmin.js"></script>


<script type="text/javascript">
	
	function updateDropDownList()
	{
		$.ajax(
		{
		  type: 'POST',
		  url: '/ajax.php',
		  data: "GetListDataSearch",
		  dataType: 'html',
		  success: CallBackListData
		});
	}

	

	
	function CallBackListData(jsonDataForLists)
	{
		$('#YearList p').remove();
		let DataForLists= JSON.parse(jsonDataForLists);
		//console.log("--------------------------------");
		//console.log(DataForLists["Year"][0]);


		for(let i in DataForLists["Year"])
		{
			$('#YearList').append("<option value=\'"+ DataForLists["Year"][i]["Year"]+"\'></option>");
		}


			
		for(let i in DataForLists["NameCompany"])
		{
			$('#CompanyList').append("<option value=\'"+DataForLists["NameCompany"][i]["NameCompany"]+"\'></option>");	
		}
			
	}

	
	



	/*var HeaderTable1 =new HeadersManager("#table1",HeadrRows);
	HeaderTable1.FillInTheTableHeader();
	var HeaderTable2 =new HeadersManager("#table2",HeadrRowsTable2);
	HeaderTable2.FillInTheTableHeader();*/
	//var objViewer= new Viewer("myTab","table1","table2");
	updateDropDownList();
	var objReportEditorForAdmin = new ReportEditorForAdmin("ListReport","Editor","Editor2");
	objReportEditorForAdmin.Start("DeleteButton","DeleteButton2","ErrorMessages","ErrorMessages2");
	
	

	$('#UpdateListDataBtn').bind('click',function()
	{
	   
		updateDropDownList();
		objReportEditorForAdmin.UpdateListData(); 
		$("#YearInput")[0].value="";
		$("#CompanyNameInput")[0].value="";
		$("#MessageListForSearch p").remove();
		$("#SearchButton")[0].click();

	});

</script>