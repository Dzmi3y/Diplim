function CheckerBalancesTable2(idTable,rErorsContainer)
{
	let idTableText = idTable;
	let self =this;
	let lastLineValue="";
	let	currentRow="";
	let lastInpObj="";
	let trId=""
	let isNewRow=true;
	self.AllCorrect=true;
	let FailedInputs= new Array();
	var ErorsContainer=rErorsContainer;


	self.CheckRow=function()
	{

   		let indexRemove="";
			
		for(let i in FailedInputs)
		{

			let inpId=FailedInputs[i].code;
			let InputValue= $("#"+inpId)[0].value

			if(InputValue.trim()!="")
			{
				
				ErorsContainer.ObjMessageErrorManager.RemoveMessage(inpId);
				indexRemove=i;
				break;
			}



			
			

		}
		if(indexRemove!="")
		FailedInputs.splice(indexRemove, 1);

	}



	self.NewFocus=function(inpObj)
	{
		AllCorrect=true;
		lastInpObj=inpObj;

		lastLineValue=inpObj.classList[1];
		currentRow=Number(lastLineValue.replace("line",""));
		trId=idTableText+"EditRow"+currentRow;



		
		
			if($("#"+trId).length)
			{
					self.Checking();


				/*if($("#ErrorMessages2 p").length==0)
				{*/
						
					


					if(AllCorrect)
					{
						self.Unhighlight();
						ErorsContainer.ObjMessageErrorManager.RemoveMessageWithClass("line"+currentRow);
					}
					else
					{			
						self.Highlight();
					}
			

					isNewRow=true;
			/*	}
				else
				{
					self.Highlight();
				}*/
		
			}

		


	

	}




	self.Checking=function()
	{
		//console.log("checking");
		if(self.CheckTisRowInArrayIdErrorsElement())
		{
			//console.log("checking2");
			let rowVoid1=true;
			let rowVoid2=true;
			let rowIsCorrect=true;

			for(let i=1;i<=5;i++)
			{
				if(self.GetValueInp(i).trim()!="")
				{
					rowVoid1=false;
					
				}
				else
				{
					rowVoid1=true;	
				}

				if(self.GetValueInp(i+1).trim()!="")
				{
					rowVoid2=false;
					
				}
				else
				{
					rowVoid2=true;	
				}


				if(rowVoid1!=rowVoid2)
				{
					rowIsCorrect=false;
					break;
				}

			}

			if(!rowIsCorrect)
			{
				AllCorrect=false;
				ErorsContainer.ObjMessageErrorManager.AddMessage(trId,"Заполнены не все поля в строке: "+currentRow+".",currentRow);
			}
			else
			{
				ErorsContainer.ObjMessageErrorManager.RemoveMessage(trId);
			}
				
		}
		else
		{
			AllCorrect=false;
		}
			

	}


	self.CheckTisRowInArrayIdErrorsElement= function()
	{

		for(let i in ErorsContainer.ArrayIdErrorsElement)
			{
				console.log(ErorsContainer.ArrayIdErrorsElement);

				console.log(currentRow);
				console.log("r"+currentRow);
   				let item =ErorsContainer.ArrayIdErrorsElement[i].indexOf("r"+currentRow);

   				console.log(item);
   				if(item>=0)
   				{
   					return false;
   				}
   				
   			}
   			return true;
   	}


	self.GetValueInp=function(columNumber)
	{
		return $("#"+idTableText+"Inpr"+currentRow+"c"+columNumber)[0].value;
	}


	self.GetNumber=function(num)
	{
		var val=Number(self.GetValueInp(num));
		if(isNaN(val))
		{
			return 0;
		}
		else
		{
			return val;
		}
	}


	self.Highlight=function()
	{
		console.log("------------------");
		$("#"+trId).css('background', 'rosybrown');
		$(".inputEditor2."+lastLineValue).addClass("bg-danger text-white");
		console.log($(".inputEditor2."+lastLineValue));
	
	}


	self.Unhighlight=function()
	{
		$("#"+trId).css('background', 'transparent');
		$(".inputEditor2."+lastLineValue).removeClass("bg-danger text-white");
	}
	self.GetNameField=function(columNumber)
	{
	//	console.log("GetNameField");
	//	console.log($("#4headrRow"+columNumber+"Field"));
		return $("#3headrRow"+idTableText+columNumber+"Field")[0].innerHTML;

	}


}