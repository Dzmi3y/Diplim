function CheckerBalancesTable1(idTable,rErorsContainer)
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
	console.log(ErorsContainer);
	let  metadataAboutColumns=new Array();
	let  metadataAboutCodeColumns=new Array();
	
	/*
		metadataAboutColumns["5"]={"condition":"none","value":""};
		metadataAboutColumns["6"]={"condition":"none","value":""};
		metadataAboutColumns["8"]={"condition":"7","value":""};
		metadataAboutColumns["9"]={"condition":"none","value":""};
		metadataAboutColumns["11"]={"condition":"10","value":""};
		metadataAboutColumns["12"]={"condition":"none","value":""};
		metadataAboutColumns["13"]={"condition":"none","value":""};
		metadataAboutColumns["15"]={"condition":"14","value":""};
		metadataAboutColumns["17"]={"condition":"16","value":""};
		metadataAboutColumns["19"]={"condition":"18","value":""};
		metadataAboutColumns["22"]={"condition":"21","value":""};
		metadataAboutColumns["23"]={"condition":"none","value":""};
	*/


		metadataAboutColumns["5"]="none";
		metadataAboutColumns["6"]="none";
		metadataAboutColumns["8"]="7";
		//metadataAboutColumns["9"]="none";		     
		metadataAboutColumns["11"]="10";
		metadataAboutColumns["12"]="none";
		metadataAboutColumns["13"]="none";	    
		metadataAboutColumns["15"]="14"
		metadataAboutColumns["17"]="16";		  
		metadataAboutColumns["19"]="18";
		metadataAboutColumns["22"]="23";
		//metadataAboutColumns["23"]="21";


		metadataAboutCodeColumns["7"]="8";
		metadataAboutCodeColumns["16"]="17";
		metadataAboutCodeColumns["10"]="11";
		metadataAboutCodeColumns["14"]="15";
		metadataAboutCodeColumns["18"]="19";
		metadataAboutCodeColumns["21"]="22";

	self.CheckRow=function()
	{

	//console.log(FailedInputs);
	//if(!isNewRow)
	//{	
		console.log("Checkkkkkkkk");

   		let indexRemove="";




			
		for(let i in FailedInputs)
		{


			if(FailedInputs[i].code=="inpr"+currentRow+"c9")
			{
				if(self.GetNumber(9)<self.GetNumber(8))
				{
					let inpId= "inpr"+currentRow+"c9";
					ErorsContainer.ObjMessageErrorManager.RemoveMessage(inpId);
					indexRemove=i;
					break;
				}


			}

				//console.log(FailedInputs[i].code+" == input5_6_8line"+currentRow );
				if( FailedInputs[i].code == "input5_6_8line"+currentRow)
				{
					//console.log("xxxxxxinput5_6_8line"+currentRow);
					if(self.CheckInput5_6_8())
					{
						//console.log("input5_6_8line"+currentRow);
						ErorsContainer.ObjMessageErrorManager.RemoveMessage("input5_6_8line"+currentRow);
						indexRemove=i;
					}
					break;
				}
			
				if(FailedInputs[i].field!="")
				{
					if(FailedInputs[i].field==lastInpObj.id)
					{
						if(lastInpObj.value=="") 
						{
							ErorsContainer.ObjMessageErrorManager.RemoveMessage(FailedInputs[i].code);
							indexRemove=i;

						}
						break;
					}

				}
							
				/*if(FailedInputs[i].code==lastInpObj.id)
				{
					if(lastInpObj.value!="") 
					{
						ErorsContainer.ObjMessageErrorManager.RemoveMessage(lastInpObj.id);
						indexRemove=i;
					}		

					break;					
				}*/
			

		}
		if(indexRemove!="")
		FailedInputs.splice(indexRemove, 1);
		//console.log("ушел");
		
	//}
	}



	self.NewFocus=function(inpObj)
	{
		AllCorrect=true;
		lastInpObj=inpObj;

		lastLineValue=inpObj.classList[1];
		currentRow=Number(lastLineValue.replace("line",""));
		trId=idTableText+"EditRow"+currentRow;

	//	if(lastLineValue!=inpObj.classList[1])
		{
			if($("#"+trId).length)
			{
				//if(lastLineValue=="")
				//{
					//isNewRow=false;
				//}
				//else
				//{

					self.Checking();

					if(AllCorrect)
					{
						console.log("!!!!!!!!AllCorrect");
						self.Unhighlight();
						ErorsContainer.ObjMessageErrorManager.RemoveMessageWithClass("line"+currentRow);
					}
					else
					{			
						self.Highlight();
					}
			

					isNewRow=true;
			//	}
			}

			
		}
	//	else
	//	{
	//		isNewRow=false;
	//	}

		//console.log("Перешел");
		//lastLineValue=inpObj.classList[1];
		//currentRow=Number(lastLineValue.replace("line",""));
		//trId="EditRow"+currentRow;

		



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

	self.GetValueInp=function(columNumber)
	{
		return $("#"+idTableText+"Inpr"+currentRow+"c"+columNumber)[0].value;
	}

	self.GetNameField=function(columNumber)
	{
	//	console.log("GetNameField");
	//	console.log($("#4headrRow"+columNumber+"Field"));
		return $("#4headrRow"+idTableText+columNumber+"Field")[0].innerHTML;
	}

	self.Checking=function()
	{
		//console.log("checking");
		if(self.CheckTisRowInArrayIdErrorsElement())
		{
			//console.log("checking2");

			self.CheckKeyFields();

			let summ=0;
			let beginYear=0;
			let Correct22;
			let Correct23;
		//	console.log(metadataAboutColumns);
			if(self.GetNumber(9)>self.GetNumber(8))
			{
			//	console.log("99999999>>>8888");
				let inpId= idTableText+"Inpr"+currentRow+"c9";
				FailedInputs[FailedInputs.length]={"code":inpId,"field":""};
				ErorsContainer.ObjMessageErrorManager.AddMessage(inpId,"Поле '"+self.GetNameField(9)+"' должно быть не более чем поле '"+self.GetNameField(8)+"'  (строка: "+currentRow+").");
			}
			else
			{
				let inpId= idTableText+"Inpr"+currentRow+"c9";
				ErorsContainer.ObjMessageErrorManager.RemoveMessage(inpId);
			}


			for(let i in metadataAboutColumns )
			{
				//console.log("mmm");
				

				if(i==5) beginYear+=self.GetNumber(i);


				if((i==8)||(i==6)) 
				{
					summ+=self.GetNumber(i);
				}			
			

				if((i>=10)&&(i<=19))
				{
					summ-=self.GetNumber(i);
				}
				
				self.CheckMetadata(metadataAboutColumns[i],i);
			}


			for(let i in metadataAboutCodeColumns)
			{
				self.CheckMetadata(metadataAboutCodeColumns[i],i);
			}



			if((self.GetNumber(22)==summ)||(summ<0))
			{
				Correct22=true;
			}
			else
			{
				Correct22=false
			}

			Correct23=self.GetNumber(23)==summ+beginYear;

			if(!(Correct22*Correct23)) 
			{
				AllCorrect*=false;
				ErorsContainer.ObjMessageErrorManager.AddMessage(trId,"Ошибки в  строке: "+currentRow+".",currentRow);
			}
				
		}
		else
		{
			console.log("eeelllooooolllllllll!");
			
			AllCorrect*=false;
			
		}

	}

	self.CheckTisRowInArrayIdErrorsElement= function()
	{

		for(let i in ErorsContainer.ArrayIdErrorsElement)
			{
   				let item =ErorsContainer.ArrayIdErrorsElement.indexOf("r"+currentRow);
   				if(item<0)
   				{
   					return false;
   				}
   				
   			}
   			return true;
   	}

	self.CheckKeyFields=function()
	{
		console.log(self.GetValueInp);
/*
		let empty_2=self.GetValueInp(2)=="";
		let empty_3=self.GetValueInp(3)=="";
		let empty_4=self.GetValueInp(4)=="";

		let empty_2_3_4= empty_2 && empty_3 && empty_4;*/

		let ThisRowEmpty=true;
		for(let i=2;i<=23;i++)
		{
			if(self.GetValueInp(i)!="")
			{
				ThisRowEmpty*=false;
			}

		}
		//console.log(ThisRowEmpty);

		if(ThisRowEmpty)
		{
			console.log(lastLineValue);

			ErorsContainer.ObjMessageErrorManager.RemoveMessageWithClass("lastLineValue");
		}
		

		for(let i=2;i<=4;i++)
		{		

			if((self.GetValueInp(i)=="")&&(!ThisRowEmpty))
			{
				AllCorrect*=false;
				let inpId= idTableText+"Inpr"+currentRow+"c"+i;
				FailedInputs[FailedInputs.length]={"code":inpId,"field":""};
				ErorsContainer.ObjMessageErrorManager.AddMessage(inpId,"Поле '"+self.GetNameField(i)+"' не заполнено (строка: "+currentRow+").",currentRow);
			}
			
		}

		//AllCorrect*=empty_2_3_4;
		


		if((!self.CheckInput5_6_8())&&(!ThisRowEmpty))
		{
			//console.log("oooooooooo");
			let inpIsExist=false;
			for(var i in FailedInputs)
			{
				if(FailedInputs[i].code=="input5_6_8line"+currentRow )
				{
					//console.log(FailedInputs);
					//console.log("llllllllll");
					//inpIsExist=true;
					break;
				}
			}

			if(!inpIsExist)
			{
				//console.log("saving 568 in array, row"+currentRow);
				AllCorrect*=false;
				FailedInputs[FailedInputs.length]={"code":"input5_6_8line"+currentRow,"field":""};
				ErorsContainer.ObjMessageErrorManager.AddMessage("input5_6_8line"+currentRow,"Ключевые поля 1 2 4 не заполнены (строка: "+currentRow+").",currentRow);
			}

		}

	}

	self.CheckInput5_6_8=function()
	{
		let inp5Value= $("#"+idTableText+"Inpr"+currentRow+"c5")[0].value;
		let inp6Value= $("#"+idTableText+"Inpr"+currentRow+"c6")[0].value;
		let inp8Value= $("#"+idTableText+"Inpr"+currentRow+"c8")[0].value;

		let inp5ValueIsClear = inp5Value=="";
		let inp6ValueIsClear = inp6Value=="";
		let inp8ValueIsClear = inp8Value=="";
		//console.log(inp5ValueIsClear+" "+inp6ValueIsClear+" "+inp8ValueIsClear);
		//console.log("row   "+currentRow+" return"+ !(inp5ValueIsClear&&inp6ValueIsClear&&inp8ValueIsClear));
		return !(inp5ValueIsClear&&inp6ValueIsClear&&inp8ValueIsClear);
	}


	self.Highlight=function()
	{
		$("#"+trId).css('background', 'rosybrown');
		//$(".inputEditor.line3").css('background', 'Violet');
		//$(".inputEditor.line3").addClass(".bg-gradient-dark")
		$(".inputEditor."+lastLineValue).addClass("bg-danger text-white");

		//background-color: #ffe;
	}


	self.Unhighlight=function()
	{
		$("#"+trId).css('background', 'transparent');
		$(".inputEditor."+lastLineValue).removeClass("bg-danger text-white");
	}


	self.CheckMetadata =function(valueForChecking,index)
	{
		if(valueForChecking!='none')
		{
			let valueCode=self.GetValueInp(valueForChecking);
			let currentValue=self.GetValueInp(index);
					//console.log("VNIMFNIE");
					//console.log(valueCode);
			if((valueCode=="")&&(currentValue!=""))
			{
				AllCorrect*=false;
				let inpId= idTableText+"Inpr"+currentRow+"c"+valueForChecking;
				let NextInpId = idTableText+"Inpr"+currentRow+"c"+index;
				FailedInputs[FailedInputs.length]={"code":inpId,"field":NextInpId};
				ErorsContainer.ObjMessageErrorManager.AddMessage(inpId,"Поле '"+self.GetNameField(valueForChecking)+"' не заполнено (строка: "+currentRow+").",currentRow);
			}
			
		}

	}

}