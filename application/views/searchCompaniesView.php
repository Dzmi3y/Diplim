
<datalist id="SearchList"></datalist>
<div class="row">

	<div class="col-4 ">
		
		<p>Поиск по:</p>
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



		<div class="row my-1 mx-1">
			<input id="CompanyNameInput" type="text" class="col-9" placeholder="Поиск" list="SearchList"> 
			<button id="SearchButton" class="btn btn-default col-3" >Найти</button>
		</div>

		<p class="my-1 mx-1"> Список Компаний</p>
		<div id="MessageListForSearch"></div>
		<div class="my-1 mx-1" style="overflow-y: scroll; height: 40%;">
			<ul id="myTab" class="nav nav-pills flex-column mb-3" role="tablist" >

			</ul>
		</div>
	</div>

		
	<div>

		<p id="NameCompany"> </p>
		<p id="Phone"> </p>
		<p id="Email"> </p>
		<p id="UNP"> </p>
		<p id="Region"> </p>
		<p id="District"> </p>
		<p id="Address"> </p>
		<p>Список отчетов</p>
		<div id=ListReports></div>

		
					
		


		
	</div>

</div>



<script type="text/javascript" src="/js/LoaderCompaniesInfo.js"></script>

<script type="text/javascript">
	
	
var objLoaderCompaniesInfo= new	LoaderCompaniesInfo("myTab","CompanyNameInput","SearchButton");
objLoaderCompaniesInfo.Start();

</script>