function LoaderEditor(idEditor,idButtonDelete,idMessageErrorlist=null,TableNumber=null)
{					
	let self= this;
	self.ObjTableManager=null;





	let ErorsContainer =
		{
			ArrayIdErrorsElement: new Array(),
			ObjMessageErrorManager:new MessageErrorManager(idEditor,idMessageErrorlist)
		};

	let CheckerContainer=
	{
		ParObjChecker: new Checker(ErorsContainer),
		ParObjCheckerBalances: new CheckerBalances(idEditor,ErorsContainer) 
	};



	self.Load= function (HeaderRowsData,ConvertColumn,DataForCells=null,DataForColumn=null)
	{


		if(TableNumber==1)
		{
			self.LoadCheckers(new CheckerTable1(ErorsContainer,ConvertColumn),new CheckerBalancesTable1(idEditor,ErorsContainer));
		}

		if(TableNumber==2)
		{
			self.LoadCheckers(new CheckerTable2(ErorsContainer,ConvertColumn),new CheckerBalancesTable2(idEditor,ErorsContainer));
		}

			self.ObjTableManager = new TableManager("#"+idEditor,DataForCells,ErorsContainer,ConvertColumn,CheckerContainer);

								
		let DataForList = DataListManager(idEditor,DataForColumn);

		self.ObjTableManager.CreateTable(HeaderRowsData,DataForList);

	 	

		$('#'+idButtonDelete).bind('click',self.ObjTableManager.ObjEditRowsManager.DeleteRows);



		var isCtrl = false;
		$("#"+idEditor).keyup(function (e) 
		{
 
			if(e.which == 17) isCtrl=false;
			//console.log("xxxcccttttrrrlll");
		}).keydown(function (e) 
		{
			let direction;
 
			if(e.which == 17) isCtrl=true;
			if(e.which == 38 && isCtrl == true) 
			{
	 
			
				direction="up";
			}
			if(e.which == 40 && isCtrl == true) 
			{
	 
			
				direction="down";
			}
			if(e.which == 39 && isCtrl == true) 
			{
	 
			
				direction="right";
			}
			if(e.which == 37 && isCtrl == true) 
			{
	 
			
				direction="left";
			}

			self.ObjTableManager.ObjEditRowsManager.MoveFocus(direction)
 
		});




	}

	self.IsCorrect =function()
	{
		//console.log("########");
		
	
		let ArrayErrorMessages= $("#"+idMessageErrorlist+" p");
		let result= true;
		let length=0;
		/*for (let i in ArrayErrorMessages)
		{
			length++;
		}*/

		//console.log(ArrayErrorMessages);
		//console.log(length);
		if(ArrayErrorMessages.length>0)
		{
			result=false;
		}

		//console.log(result);
		return result;
	}



	self.LoadCheckers =function (ParObjChecker,ParObjCheckerBalances=null)
	{
		if(ParObjChecker!=null) CheckerContainer.ParObjChecker=ParObjChecker;
		if(ParObjCheckerBalances!=null) CheckerContainer.ParObjCheckerBalances=ParObjCheckerBalances;

	}

	self.GetData = function()
	{

		return	self.ObjTableManager.GetData();
	}


}