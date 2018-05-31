

<link rel="stylesheet" type="text/css" href="/js/Editor/form1Style.css">


<div class="row">

<div id="AgeList" class="col-2"  style="overflow-y: scroll;">
<p>  Список отчетов</p>
<p id="ErrorMessage"> </p>
<ul id="myTab" class="nav nav-pills flex-column mb-3" role="tablist">
<!-- <li id="t1" class="nav-item "><a class="nav-link active"  data-toggle="tab">2017</a></li>
<li id="t2" class="nav-item"><a class="nav-link"  data-toggle="tab">2016</a></li>
<li id="t3" class="nav-item"><a class="nav-link" data-toggle="tab">2015</a></li> -->
</ul>
</div>

<!-- <div class="tab-content" id="tabContent">
	<div  class="tab-pane fade show active" id="firstTable" >
		Таблица1
		<table id="otch1_1" class="my-1 mx-1">	
		</table>
		Таблица2
		<table id="otch1_2" class="my-1 mx-1">	
		</table>

	</div>

	<div class="tab-pane fade" id="secondTable">



		<table id="otch2_1" class="my-1 mx-1">	
		</table>
		<table id="otch2_2" class="my-1 mx-1">	
		</table>	

		</div>
 -->


	<div  id="sendReport">

		<table id="table1" class="my-1 mx-5">	
		</table>
		

		<br/><br/>

		<table id="table2" class="my-1 mx-5">	
		</table>
	</div>
<!-- </div> -->
</div>

</div>


<script type="text/javascript"> 

$('#t1').bind('click',function(){fn("lol");});
$b=true;

function fn(text)
{
	if($b)
	{
		console.log(text);
		$b=false;
	}

}




</script>


<script type="text/javascript" src="/js/Editor/Data/Table1/HeadersForTable.js"></script>
<script type="text/javascript" src="/js/Editor/Data/Table2/HeadersForTable2.js"></script>
<script type="text/javascript" src="/js/Editor/HeadersManager.js"></script>
<script type="text/javascript" src="/js/Editor/Viewer.js"></script>


<script type="text/javascript">
	$("table")[0].style.visibility="hidden"
	$("table")[1].style.visibility="hidden"

	
	var objViewer= new Viewer("myTab","table1","table2");
	objViewer.Start();

</script>