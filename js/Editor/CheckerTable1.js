function CheckerTable1(ErorsContainer)
{
	var self = this;
	self.inp=null;
	self.nameColumn=null;
	self.IdCells=null;
	self.AllCorrect=true;

	let ArrayDataList=new Array();
	
	ArrayDataList["column2"]=WasteCodClean;
	ArrayDataList["column4"]=Danger;
	ArrayDataList["column3"]=Condition;
	ArrayDataList["column7"]=ReceiptOfWaste;
	ArrayDataList["column10"]=WasteTransfer;
	ArrayDataList["column14"]=DirectionOfTheWaste;
	ArrayDataList["column16"]=WasteDisposal;
	ArrayDataList["column18"]=Dump;
	ArrayDataList["column21"]=WasteStorage;

   self.Handler=function(inp)
   {
   //	console.log("hhhaannddlleerrCheckkkkkkkk");
   	//	console.log("handler");
   		console.log(inp);
   		self.inp= inp; 	
   		self.nameColumn=self.inp.classList[0];
   		self.IdCells=self.GetIdCells();
   		self.AllCorrect=self.CheckCorrectEdit()
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



	