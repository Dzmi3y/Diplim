function CheckerTable2(ErorsContainer,ConvertColumn)
{
	let self= this;
	self.inp=null;
	self.nameColumn=null;
	self.IdCells=null;
	self.AllCorrect=true;

	let ArrayDataList=new Array();
	
	ArrayDataList["column2"]=EventGroupCode;


   self.Handler=function(inp)
   {
   		console.log("Работаю");
   		
   		self.inp= inp; 	
   		self.nameColumn=self.inp.classList[0];
   		self.IdCells=self.GetIdCells();
   		self.AllCorrect=self.CheckCorrectEdit()
   		

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

	self.CheckCorrectEdit=function()
	{
		var isCorrect=false;
		if(ArrayDataList[self.nameColumn])
		{	
			for( var i in ArrayDataList[self.nameColumn])
			{
				if(self.inp.value==ArrayDataList[self.nameColumn][i].id)
				{
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
   		console.log(TitleColumn+"   "+TitleRow);
	}


	self.Unhighlight=function()
	{
		$("#"+self.IdCells).css('background', 'transparent');
   		ErorsContainer.ObjMessageErrorManager.RemoveMessage(self.inp.id);

   		let item =ErorsContainer.ArrayIdErrorsElement.indexOf(self.inp.id);		
		if(item>=0)
		{
			ErorsContainer.ArrayIdErrorsElement.splice(item, 1);	
   		}
	}

//$(".line3 .inputEditor").filter(".Editor")[2].value

};
