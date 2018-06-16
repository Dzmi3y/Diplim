function CheckerTable2(ErorsContainer,ConvertColumn)
{
	let self= this;
	self.inp=null;
	self.nameColumn=null;
	self.IdCells=null;
	self.AllCorrect=true;
	self.nameRow=null;
	self.numberRow= null;
	self.ConvertColumn=ConvertColumn;

	let ArrayDataList=new Array();
	
	ArrayDataList["column1"]=EventGroupName;
	ArrayDataList["column2"]=EventGroupCode;


   self.Handler=function(inp,containerCellsValue,AddRow)
   {
   		console.log("Работаю");
   		
   		self.inp= inp; 	
   		self.nameColumn=self.inp.classList[0];
   		self.nameRow=self.inp.classList[1];
   		self.IdCells=self.GetIdCells();
   		self.AllCorrect=self.CheckCorrectEdit(containerCellsValue,AddRow);
   		console.log(self.AllCorrect);

   		if(self.AllCorrect) 
   		{
   			self.Unhighlight();
   			
		}
   		else
   		{
   			self.Highlight();
   		}

   		
   }	

self.isNumeric =function(n) 
	{
		if(n=="")
		{
			return true;
		}
		else
		{
  			return !isNaN(parseFloat(n)) && isFinite(n);
  		}
	};

	self.CheckCorrectEdit=function(containerCellsValue,AddRow)
	{
		self.numberRow=self.nameRow.replace('line','');
		var isCorrect=false;
		if(ArrayDataList[self.nameColumn])
		{	
			console.log(self.nameColumn);
			console.log(ArrayDataList[self.nameColumn]);
			for( var i in ArrayDataList[self.nameColumn])
			{
				if(self.inp.value==ArrayDataList[self.nameColumn][i].id)
				{

					if(self.nameColumn=="column1") 
					{

						$("#Editor2Inpr"+self.numberRow+"c2")[0].value=ArrayDataList["column2"][i].id;
						self.Unhighlight("Editor2Inpr"+self.numberRow+"c2");

						if (typeof containerCellsValue.ArrayCellsValue[self.numberRow-1]==="undefined" )
						{
							containerCellsValue.ArrayCellsValue[self.numberRow-1]=new Object();
							AddRow();

						}
						
						containerCellsValue.ArrayCellsValue[self.numberRow-1][self.ConvertColumn[1]]=ArrayDataList["column2"][i].id;


					}

					if(self.nameColumn=="column2") 
					{
						$("#Editor2Inpr"+self.numberRow+"c1")[0].value=ArrayDataList["column1"][i].id;
						self.Unhighlight("Editor2Inpr"+self.numberRow+"c2");
						if (typeof containerCellsValue.ArrayCellsValue[self.numberRow-1]==="undefined" )
						{
							containerCellsValue.ArrayCellsValue[self.numberRow-1]=new Object();
							
							AddRow();
						}
						
						containerCellsValue.ArrayCellsValue[self.numberRow-1][self.ConvertColumn[0]]=ArrayDataList["column1"][i].id;

					}


					isCorrect=true;
					break;
				}
			}
		}
		else
		{
			if(self.nameColumn=="column1")  
			{
				isCorrect=true;
			}
			else
			{
				if((self.isNumeric(self.inp.value))&&(self.inp.value>=0)) 
				isCorrect=true;
			}
		}
		return isCorrect;

	};



   self.GetIdCells=function()
	{
		let idCells =self.inp.id.replace('Inp','Td');
		return idCells;
	};



	self.Highlight=function()
	{
		let NumberColumn= self.inp.classList[0].replace('column','');
		let TitleRow = self.inp.classList[1].replace('line','');
		let TitleColumn= $("#3headrRowEditor2"+NumberColumn+"Field")[0].innerHTML;

		$("#"+self.IdCells).css('background', 'red');
   		ErorsContainer.ArrayIdErrorsElement[ErorsContainer.ArrayIdErrorsElement.length]=self.inp.id;
   		ErorsContainer.ObjMessageErrorManager.AddMessage(self.inp.id,"Неверное значение! Строка "+TitleRow+" столбец "+TitleColumn+".",TitleRow);
   		console.log(TitleColumn+" ееерррооооррр  "+TitleRow);
	}

/*
	self.Unhighlight=function()
	{
		$("#"+self.IdCells).css('background', 'transparent');

   		ErorsContainer.ObjMessageErrorManager.RemoveMessage(self.inp.id);

   		let item =ErorsContainer.ArrayIdErrorsElement.indexOf(self.inp.id);		
		if(item>=0)
		{
			ErorsContainer.ArrayIdErrorsElement.splice(item, 1);	
   		}
	}*/



	self.Unhighlight=function(OtherInputId=null)
	{
		let	CurrentInput;


		if(OtherInputId==null)
		{
			CurrentInput=self.inp.id;
		}
		else
		{
			CurrentInput=OtherInputId;
		}

			let idCell= CurrentInput.replace('Inp','Td');

			$("#"+idCell).css('background', 'transparent');
			console.log("remove checktable1");
	   		ErorsContainer.ObjMessageErrorManager.RemoveMessage(CurrentInput);

	   		let item =ErorsContainer.ArrayIdErrorsElement.indexOf(CurrentInput);		
			if(item>=0)
			{
				ErorsContainer.ArrayIdErrorsElement.splice(item, 1);	
	   		}
   		

	}



//$(".line3 .inputEditor").filter(".Editor")[2].value

};
