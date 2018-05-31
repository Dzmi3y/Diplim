<div>

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



<ul id="myTab" class="nav nav-tabs">
<li class="nav-item"><a class="nav-link active" href="#firstTable" data-toggle="tab">Таблица 1</a></li>
<li class="nav-item"><a class="nav-link" href="#secondTable" data-toggle="tab">Таблица 2</a></li>
<li class="nav-item" ><a class="nav-link" id="SendReportTab"  href="#sendReport" data-toggle="tab">Отправить отчет</a></li>
</ul>

<div class="tab-content" id="tabContent">
<div  class="tab-pane fade show active" id="firstTable" >

	<table id="Editor" class="my-1 mx-1">	
	</table>

	<button id="DeleteButton"  class="btn btn-secondary  my-1 mx-1">Удалить отмеченные строки</button>


	<div id="ErrorMessages" class="border  border-danger my-1 mx-1" style="height: 100px; width: 500px; overflow-y: scroll; border-radius: 10px;" >	

	</div>

</div>

<div class="tab-pane fade" id="secondTable">

	<table id="Editor2" class="my-1 mx-1">	
	</table>
	
<button id="DeleteButton2"  class="btn btn-secondary  my-1 mx-1">Удалить отмеченные строки</button>

	<div id="ErrorMessages2" class="border  border-danger my-1 mx-1" style="height: 100px; width: 500px; overflow-y: scroll; border-radius: 10px;" >	

	</div>

</div>

<div class="tab-pane fade" id="sendReport">
	<div id="MessageSuccessSend" class="alert alert-success" role="alert">
	</div>
	<div id="MessageSendError" class="alert alert-danger" role="alert">
	</div>
	Отправить отчет
	<button id="SendReport"  class="btn btn-secondary  my-1 mx-1"  >Отправить отчет</button>

</div>

</div>

<!--<script type="text/javascript" src="js/Editor/jsBootstrap.js"></script>-->


<script type="text/javascript">
	 $(window).on('beforeunload', function(){
        return "В случае подтверждения закрытия окна браузера, все несохраненные данные будут утеряны.";
    });
 
    $(document).on("submit", "form", function(event){
        
        $(window).off('beforeunload');
    });

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
<script type="text/javascript" src="/js/Editor/Main.js"></script> 





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




</div>