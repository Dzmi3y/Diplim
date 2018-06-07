function CheckerTable1(ErorsContainer,ConvertColumn)
{
	var self = this;
	self.inp=null;
	self.nameColumn=null;
	self.IdCells=null;
	self.nameRow=null;
	self.numberRow= null;
	self.AllCorrect=true;
	
	self.ConvertColumn =ConvertColumn;

	let ArrayDataList=new Array();
	
	ArrayDataList["column1"]=WasteName;
	ArrayDataList["column2"]=WasteCodClean;
	ArrayDataList["column4"]=Danger;
	ArrayDataList["column3"]=Condition;
	ArrayDataList["column7"]=ReceiptOfWaste;
	ArrayDataList["column10"]=WasteTransfer;
	ArrayDataList["column14"]=DirectionOfTheWaste;
	ArrayDataList["column16"]=WasteDisposal;
	ArrayDataList["column18"]=Dump;
	ArrayDataList["column21"]=WasteStorage;

   self.Handler=function(inp,containerCellsValue,AddRow)
   {
   	 	
   		console.log("hhhaannddlleerrCheckkkkkkkk");
   		console.log("handler");
   		console.log(inp);
   		self.inp= inp; 	
   		self.nameColumn=self.inp.classList[0];
   		self.nameRow=self.inp.classList[1];
   		self.IdCells=self.GetIdCells();

   		self.AllCorrect=self.CheckCorrectEdit(containerCellsValue,AddRow)
   		
   		//console.log(" i checkernax");
   		//console.log(inp);
   		//console.log(self.AllCorrect);

   		if(self.AllCorrect) 
   		{
   			self.Unhighlight();
   			
		}
   		else
   		{
   			self.Highlight();
   		}
   		
   		//self.CodeColumnsForBlocked();
   };


	self.CheckCorrectEdit=function(containerCellsValue,AddRow)
	{
		console.log("eeeeeeeeeeeoooooeeeeeeeee");
		console.log(containerCellsValue);
		self.numberRow=self.nameRow.replace('line','');
		var isCorrect=false;

		console.log("&&&&&&&");
		console.log(ArrayDataList);
		console.log(self.nameColumn);
		console.log(self.inp.value);
		if(ArrayDataList[self.nameColumn])
		{	
			console.log("!!!!!!!!!!!!!!!!!!!!!!!!1");
			for( var i in ArrayDataList[self.nameColumn])
			{


				if(self.inp.value==ArrayDataList[self.nameColumn][i].id)
				{


					if(self.nameColumn=="column1") 
					{
						console.log(self.nameRow);
						console.log(self.numberRow);
						console.log("#EditorInpr"+self.numberRow+"c2");
						$("#EditorInpr"+self.numberRow+"c2")[0].value=ArrayDataList["column2"][i].id;
						$("#EditorInpr"+self.numberRow+"c4")[0].value=ArrayDataList["column2"][i].hazardClass;


						if (typeof containerCellsValue.ArrayCellsValue[self.numberRow-1]==="undefined" )
						{
							containerCellsValue.ArrayCellsValue[self.numberRow-1]=new Object();
							AddRow();

						}
						
						containerCellsValue.ArrayCellsValue[self.numberRow-1][self.ConvertColumn[1]]=ArrayDataList["column2"][i].id;
						containerCellsValue.ArrayCellsValue[self.numberRow-1][self.ConvertColumn[3]]=ArrayDataList["column2"][i].hazardClass;


					}

					if(self.nameColumn=="column2") 
					{
						$("#EditorInpr"+self.numberRow+"c1")[0].value=ArrayDataList["column1"][i].id;
						$("#EditorInpr"+self.numberRow+"c4")[0].value=ArrayDataList["column2"][i].hazardClass;

						if (typeof containerCellsValue.ArrayCellsValue[self.numberRow-1]==="undefined" )
						{
							containerCellsValue.ArrayCellsValue[self.numberRow-1]=new Object();
							
							AddRow();
						}
						
						containerCellsValue.ArrayCellsValue[self.numberRow-1][self.ConvertColumn[0]]=ArrayDataList["column1"][i].id;
						containerCellsValue.ArrayCellsValue[self.numberRow-1][self.ConvertColumn[3]]=ArrayDataList["column2"][i].hazardClass;
						

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


	self.Highlight=function()
	{
		let NumberColumn= self.inp.classList[0].replace('column','');
		let TitleRow = self.inp.classList[1].replace('line','');
		let TitleColumn= $("#4headrRowEditor"+NumberColumn+"Field")[0].innerHTML;

		$("#"+self.IdCells).css('background', 'red');
   		ErorsContainer.ArrayIdErrorsElement[ErorsContainer.ArrayIdErrorsElement.length]=self.inp.id;
   		ErorsContainer.ObjMessageErrorManager.AddMessage(self.inp.id,"Неверное значение! Строка "+TitleRow+" столбец "+TitleColumn+".",0);
   		
	}


	self.Unhighlight=function()
	{
		$("#"+self.IdCells).css('background', 'transparent');
		console.log("remove checktable1");
   		ErorsContainer.ObjMessageErrorManager.RemoveMessage(self.inp.id);

   		let item =ErorsContainer.ArrayIdErrorsElement.indexOf(self.inp.id);		
		if(item>=0)
		{
			ErorsContainer.ArrayIdErrorsElement.splice(item, 1);	
   		}
	}




	/*self.GetArrayIdErrorsElements = function()
	{
		return ArrayIdErrorsElement;
	};*/


}
/*

	self.CodeColumnsForBlocked=function()
	{
		console.log("CodeColumnsForBlocked");
		var numbersCodeColumns=[7,10,14,16,18,21];

		for (var i in numbersCodeColumns)
		{
			 let col='column'+numbersCodeColumns[i];
			 if(self.inp.classList[0]== col)
			 {
			 	self.blockers(numbersCodeColumns[i]);
			 	break;
			 }
		}
	}

	self.blockers =function(currentColumnNumber)
	{
		var inpIdCodeCell=self.inp.id;
		console.log(inpIdCodeCell);
		var item=inpIdCodeCell.indexOf("c");
		var nextColumnNumber= currentColumnNumber+1;
		var nextCellId = inpIdCodeCell.substring(0,item+1)+nextColumnNumber;
		console.log(nextCellId);

		if(self.AllCorrect && (inpIdCodeCell!=""))
		{

			console.log("Unblocked");
			self.blocked(nextCellId,false)
		}
		else
		{

			if(inpIdCodeCell=="") 
			{
				var nn =inpIdCodeCell.replace("inp","td");
				$('#'+nn).css('background', 'sienna');
			}

			console.log("Blocked");
			self.blocked(nextCellId,true)
		}

	};


	self.blocked =function(inpId,isBlocked)
	{
		console.log("func blocked")
		let tdId=inpId.replace('inp','td');
		if(isBlocked)
		{
			console.log("is blocked true");
			$('#'+inpId).value="";
			$('#'+inpId).prop('readonly', true);
			$('#'+tdId).css('background', 'sienna');
		}
		else
		{
			console.log("is blocked false");
			$('#'+inpId).prop('readonly', false);
			$('#'+tdId).css('background', 'transparent');
		}

	}

	*/



	