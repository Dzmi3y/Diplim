function Viewer (NavTabID,IDTable1,IDTable2)
{
	var self=this;
	self.ArrayYearId=Array();

	

	self.CreateNavTab =function()
	{
		console.log("CreateNavTab");
		console.log(NavTabID);
		if(self.ArrayYearId.length>0)
		{	

			
			let classes="";
			let idSubTab=""
			let CurrentYear;

			for(let i in self.ArrayYearId)
			{
				CurrentYear=self.ArrayYearId[i]["Year"];
				CurrentIdReport=self.ArrayYearId[i]["ID"];
				console.log(CurrentIdReport)
				idSubTab= "Tab"+CurrentYear;
				if(i==0) 
				{
					classes="nav-link active";
					
				}
				else
				{
					classes="nav-link";
				}

				$('#'+NavTabID).append('<li id="'+idSubTab+'" class="nav-item "><a class="'+classes+'"  data-toggle="tab">'+CurrentYear+'</a></li>');

				$('#'+idSubTab).bind('click',function(){self.LoadTables(self.ArrayYearId[i]["ID"]);});

			}

			
		}
		else
		{

		}
	}


	self.GetArrayYearId=function(SetArrayYearId)
	{
		//if((SetArrayYearId[1] != "[")&&(SetArrayYearId[2] != "]"))
		self.ArrayYearId = JSON.parse(SetArrayYearId);
		if(self.ArrayYearId.length>0)
		{
			
			
			var HeaderTable1 =new HeadersManager("#table1",HeadrRows);
			HeaderTable1.FillInTheTableHeader();
			var HeaderTable2 =new HeadersManager("#table2",HeadrRowsTable2);
			HeaderTable2.FillInTheTableHeader();
			
			$("table")[0].style.visibility="visible"
			$("table")[1].style.visibility="visible"

			self.ArrayYearId = JSON.parse(SetArrayYearId);
			//console.log(self.ArrayYearId);
			self.CreateNavTab();
			self.LoadTables(self.ArrayYearId[0]["ID"]);
		}
		else
		{

			$("#ErrorMessage")[0].innerHTML="Отчетов не обнаружено";
		}

	}



	self.LoadTables=function(Id_Report)
	{
		console.log(Id_Report);
		
		$.ajax(
		{
		  type: 'POST',
		  url: '/ajax.php',
		  data: {"GetWasteTables":Id_Report},
		  dataType: 'html',
		  success: self.CallBackLoadTables
		});
		

	}

	self.CallBackLoadTables=function(tablesJSON)
	{
		console.log("");
		let tables =JSON.parse(tablesJSON);

		let ConvertColumn=["CA","CB","CV","CG","C1","C2","C3","C4","C5","C6","C7","C8","C9","C10","C11","C12","C13","C14","C15","C16","C17","C18","C19"];
		let Convert2Column=["CA","CB","C1","C2","C3","C4"];

		self.LoadRows(IDTable1,tables["table1"],ConvertColumn);
		self.LoadRows(IDTable2,tables["table2"],Convert2Column);

		//console.log(tables["table1"]);
	}


	self.LoadRows= function(IDTable,DataTable,ConvertData)
	{
		console.log("Load");


		let numberRow=1;
		let classes="Rows"+IDTable;
		let nameRow="";

		/*if( $("."+classes).length>0 )
		{*/
			$("."+classes).remove();
		//}

		for(let key in DataTable)
		{
			nameRow=IDTable+"Row"+key;

			$('#'+IDTable).append('<tr id="'+nameRow+'" class="'+classes+'"  > </tr>');	
			$('#'+nameRow).append('<td>'+numberRow+'</td>');
			numberRow++;

			let cellValue="";
			for(let i in  ConvertData)
			{
				cellValue=DataTable[key][ConvertData[i]];
				if (cellValue==null)
				{
					cellValue="";
				}

				$('#'+nameRow).append('<td class="'+classes+'">'+cellValue+'</td>');
			}

		}
	}

	self.Start=function()
	{
		


		$.ajax(
		{
		  type: 'POST',
		  url: '/ajax.php',
		  data: "GetArrayYearId",
		  dataType: 'html',
		  success: self.GetArrayYearId
		});

		
		
		//self.ArrayYearId = self.GetArrayYearId();


	}
}