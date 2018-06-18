
<datalist id="SearchList"></datalist>
<div class="row py-3 px-3">

	<div class="col-2" >
		
		<p><h5><strong>Поиск по:</strong></h5></p>
		<div class="form-check ">
  			<input class="form-check-input" type="radio" name="inlineRadioOptions" id="RadioButtonNameCompany" value="option1" checked>
  			<label class="form-check-label" for="RadioButtonNameCompany">По названию предприятия</label>
		</div>
		<div class="form-check ">
	 		<input class="form-check-input" type="radio" name="inlineRadioOptions" id="RadioButtonUNP" value="option2">
  			<label class="form-check-label" for="RadioButtonUNP">По УНП</label>
		</div>
		<div class="form-check ">
	 		<input class="form-check-input" type="radio" name="inlineRadioOptions" id="RadioButtonEmail" value="option3">
  			<label class="form-check-label" for="RadioButtonEmail">По Email</label>
		</div>
		<div class="form-check ">
	 		<input class="form-check-input" type="radio" name="inlineRadioOptions" id="RadioButtonPhone" value="option2">
  			<label class="form-check-label" for="RadioButtonPhone">По номеру телефона</label>
		</div>
		<div class="form-check ">
	 		<input class="form-check-input" type="radio" name="inlineRadioOptions" id="RadioButtonRegion" value="option2">
  			<label class="form-check-label" for="RadioButtonRegion">По области</label>
		</div>
		<div class="form-check ">
	 		<input class="form-check-input" type="radio" name="inlineRadioOptions" id="RadioButtonDistrict" value="option2">
  			<label class="form-check-label" for="RadioButtonDistrict">По району</label>
		</div>
		<div class="form-check ">
	 		<input class="form-check-input" type="radio" name="inlineRadioOptions" id="RadioButtonAddress" value="option2">
  			<label class="form-check-label" for="RadioButtonAddress">По адресу</label>
		</div>
	</div>

	<div class="col-4" >
			<div class="row my-1 mx-1">
			<input id="CompanyNameInput" type="text" class="col-9" placeholder="Поиск" list="SearchList"> 
			<button id="SearchButton" class="btn btn-default col-3" >Найти</button>
		</div>

		
		<div class="alert alert-danger" id="MessageListForSearch"></div>
		<p class="my-1 mx-1"><strong> Список предприятий</strong></p>
		<div class="my-1 mx-1 alert alert-dark" style="overflow-y: scroll; height: 70%;">
			<ul id="myTab" class="nav nav-pills  flex-column mb-3" role="tablist" >

			</ul>
		</div>

	</div>



		
	<div class="px-3 py-3 col-3" >

		<p><strong style="font-size: 18px;">Название предприятия: <br/> </strong> <i><u><strong id="NameCompany"> </strong></u></i></p>
		<p><strong style="font-size: 18px;">Номер телефона: <br/></strong> <i><u><strong id="Phone"> </strong></u></i></p>
		<p><strong style="font-size: 18px;">Электронная почта: <br/></strong> <i><u><strong id="Email"> </strong></u></i></p>
		<p><strong style="font-size: 18px;">УНП:<br/> </strong> <i><u><strong id="UNP"> </strong></u></i></p>
		<p><strong style="font-size: 18px;">Область: <br/></strong> <i><u><strong id="Region"> </strong></u></i></p>
		<p><strong style="font-size: 18px;">Район: <br/></strong> <i><u><strong id="District"> </strong></u></i></p>
		<p><strong style="font-size: 18px;">Адрес: <br/></strong> <i><u><strong id="Address"> </strong></u></i></p>
		

		
					
		


		
	</div>

	<div class="px-3 col-2" >
		<p><strong style="font-size: 20px;">Список отчетов:</strong></p>
		<div id="ListReports"  class="alert alert-dark text-center" style="font-size: 20px; overflow-y: scroll; height: 80%;"></div>
	</div>


</div>
<script type="text/javascript" src="/js/RegionAndDistrict.js"></script>


<script type="text/javascript" src="/js/LoaderCompaniesInfo.js"></script>



<script type="text/javascript">
	$('#MessageListForSearch').hide();
	

var objLoaderCompaniesInfo= new	LoaderCompaniesInfo("myTab","CompanyNameInput","SearchButton");
objLoaderCompaniesInfo.Start();

</script>