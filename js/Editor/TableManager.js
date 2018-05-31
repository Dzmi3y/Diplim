function TableManager(idTable,loadArray,ErorsContainer,ArgConvertColumn=null,CheckerContainer)
{
	var ConvertColumn=ArgConvertColumn;
	let self=this;
	var idTableText = idTable;
	self.loadArray=loadArray;
	self.idTable=idTable;
	self.countColumns=0;
	self.ObjEditRowsManager;
	self.ObjChecker=CheckerContainer.ParObjChecker;
	self.ObjCheckerBalances=CheckerContainer.ParObjCheckerBalances;







	self.Check= function()
	{
		
		
		if (!window.jQuery)
		{		
		 	throw new Error("Error. jQuery isn't connected.");		 	
		}
			
		if(!$("table").is(self.idTable))
		{
			throw new Error("Error. Table with id "+self.idTable+" isn't exist");
		}
		
		console.log("Check completed successfully.");		
	};

	self.Check();


	self.CreateTable= function(HeaderContent)
	{

		var ObjHeadersManager =new HeadersManager(self.idTable,HeaderContent);
		ObjHeadersManager.FillInTheTableHeader();
		self.countColumns = ObjHeadersManager.GetCountColumn();
		self.ObjEditRowsManager= new EditRowsManager(self.idTable,self.countColumns,self.loadArray,self.ObjCheckerBalances,ConvertColumn);
		//self.ObjChecker=new CheckerTable1(ErorsContainer);

		self.ObjEditRowsManager.DeleteHandler=function(ClassForDelete)
		{
			ErorsContainer.ObjMessageErrorManager.RemoveMessageWithClass(ClassForDelete);
		}
		

		console.log("create header");

		self.ObjEditRowsManager.Handler=function(inputObj)
		{
			console.log("handler1");
			self.ObjChecker.Handler(inputObj);
		};
		console.log(self.ObjEditRowsManager.Handler);
		//self.ObjEditRowsManager.AddRow();
		
	};

	

	self.AddRow= function()
	{
		//console.log(self);
	//	self.ObjEditRowsManager.AddRow();
	};

	self.GetData= function ()
	{
		console.log("getttttt");
		let  GetDataArray=Array();
		GetDataArray["Delete"]=self.ObjEditRowsManager.IDArrayForDelete;
		GetDataArray["Add"]=self.ObjEditRowsManager.GetData();
		//console.log(GetDataArray["Add"]);
		/*let	ArrayEmpty=Array();

		for ( let i =0; i< GetDataArray["Add"].length;i++) 
		{
			if(i in GetDataArray["Add"])
			{
				console.log("Ништяк");
				console.log(i);
			}
			else
			{
				console.log("Пустота");
				console.log(i);
				ArrayEmpty.push(i);

			}
			
		}


		let val;
		for(let i in ArrayEmpty)
		{
			val=ArrayEmpty[i];
			GetDataArray["Add"].splice(val,1);
		}*/


		return	GetDataArray;
	}



};