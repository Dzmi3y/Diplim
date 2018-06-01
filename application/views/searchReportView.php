

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
<li class="nav-item"><a class="nav-link" href="#sendReport" data-toggle="tab">Отправить отчет</a></li>
</ul>

<div class="tab-content" id="tabContent">

	<div  class="tab-pane fade show active" id="searchTab" >

		<div class="my-1 mx-1" >
			
			<div class="row my-1 mx-1">
				<input id="YearInput" type="text" class="col-2" placeholder="Год" list="YearList"> 
				<input id="CompanyNameInput" type="text" class="col-9" placeholder="Предприятие" list="CompanyList"> 
				<button id="SearchButton" class="btn btn-default col-1" >Найти</button>
			</div>
			<p> Список отчетов</p>
			<div id="MessageListForSearch"></div>
			<div id="YearList"   style="overflow-y: scroll;">
				<ul id="ListReport" class="nav nav-pills flex-column mb-3" role="tablist">
				</ul>
			</div>
		</div>


	</div>


	<div  class="tab-pane fade" id="firstTable" >
		<div ><p class="nameReport"></p></div>
		<table id="Editor" class="my-1 mx-1">	
		</table>

		<button id="DeleteButton"  class="btn btn-secondary  my-1 mx-1">Удалить отмеченные строки</button>

		<div id="ErrorMessages" class="border border-danger my-1 mx-1" style="height: 100px; width: 300px; overflow-y: scroll;" >	

		</div>

	</div>

	<div class="tab-pane fade" id="secondTable">
		<div ><p class="nameReport"></p></div>
		<table id="Editor2" class="my-1 mx-1">	
		</table>
		
		<button id="DeleteButton2"  class="btn btn-secondary  my-1 mx-1">Удалить отмеченные строки</button>

		<div id="ErrorMessages2" class="border border-danger my-1 mx-1" style="height: 100px; width: 300px; overflow-y: scroll;" >	

		</div>

	</div>

	<div class="tab-pane fade" id="sendReport">
		<div ><p class="nameReport"></p></div>
		Отправить отчет
		<button id="SendReport"  class="btn btn-secondary  my-1 mx-1"  >Отправить отчет</button>

	</div>

</div>
<!-- --------------------------------------------------------- -->


<div class="row my-1 mx-1" >





	



</div>




<script type="text/javascript"> 








/*$('#t1').bind('click',function(){fn("lol");});
$b=true;

function fn(text)
{
	if($b)
	{
		console.log(text);
		$b=false;
	}

}*/




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

<script type="text/javascript" src="/js/Editor/ReportEditorForAdmin.js"></script>


<script type="text/javascript">
	
	$.ajax(
		{
		  type: 'POST',
		  url: '/ajax.php',
		  data: "GetListDataSearch",
		  dataType: 'html',
		  success: CallBackListData
		});

	function CallBackListData(jsonDataForLists)
	{
		let DataForLists= JSON.parse(jsonDataForLists);
		console.log("--------------------------------");
		console.log(DataForLists["Year"][0]);

		for(let i in DataForLists["Year"])
		{
			$('#YearList').append('<option value="'+ DataForLists["Year"][i]["Year"]+'"></option>');
		}


			
		for(let i in DataForLists["NameCompany"])
		{
			$('#CompanyList').append('<option value="'+DataForLists["NameCompany"][i]["NameCompany"]+'"></option>');	
		}
			
	}

	


	/*var HeaderTable1 =new HeadersManager("#table1",HeadrRows);
	HeaderTable1.FillInTheTableHeader();
	var HeaderTable2 =new HeadersManager("#table2",HeadrRowsTable2);
	HeaderTable2.FillInTheTableHeader();*/
	//var objViewer= new Viewer("myTab","table1","table2");
	var objReportEditorForAdmin = new ReportEditorForAdmin("ListReport","Editor","Editor2");
	objReportEditorForAdmin.Start("DeleteButton","DeleteButton2","ErrorMessages","ErrorMessages2");
	
	

</script>