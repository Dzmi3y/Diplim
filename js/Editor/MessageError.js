function MessageErrorManager(idTable,idMessagelist)
{
	let self= this;
	var ArrayErrorMessages=new Array();

	self.GetArrayErrorMessages =function()
	{
		return ArrayErrorMessages;
	}
	

	self.AddMessage = function(idErrorElement,ErrorMessag,NumberRowError)
	{
		let idMessage= "Error"+idErrorElement;
		console.log("eerrrooorr");
		console.log(this);

		if(!($('#'+idMessage).length))
		{
			let className="";
			
			if(idErrorElement.indexOf("input5_6_8")>=0)
			{
				className='class="'+idErrorElement.replace("input5_6_8","")+' '+idTable+'"';
			}


			let currentElement =$("#"+idErrorElement)[0];
			if (currentElement)
			{
				if(currentElement.nodeName=="INPUT")
				{
					className='class="'+currentElement.classList[1]+' '+idTable+'"';
				}

				if(currentElement.nodeName=="TR")
				{
					className='class="'+currentElement.classList[0]+' '+idTable+'"';
				}
			}

			ArrayErrorMessages[idMessage]= {"NumberRow":NumberRowError,"ErrorText":ErrorMessag};

			self.AddTitleRow(idMessage,NumberRowError);


			$('#'+idMessagelist).append('<p id="'+idMessage+'" '+className+' >'+ErrorMessag+'</p>');		
		}

	}

	self.RemoveMessage = function(idErrorElement)
	{	
		
		let idMessage= "Error"+idErrorElement;
		if($('#'+idMessage).length)
		{	

			$('#'+idMessage).remove();
			self.RemoveTitleRow(idMessage); 
			delete ArrayErrorMessages[idMessage];
		}

	}


	self.RemoveMessageWithClass = function(className)
	{	
		console.log("Kill all "+className);
		if($("p."+className).length)
		{		
			console.log("/////////==");
			$("p."+className).remove(); 
			let RowNumber = className.replace("line","");

			let ArrayIdForDeleted=new Array();
			for (let id in ArrayErrorMessages) 
			{

				if(ArrayErrorMessages[id].NumberRow==RowNumber)
				{

					self.RemoveTitleRow(id);
					ArrayIdForDeleted.push(id);
				}
			}

			for( let i in ArrayIdForDeleted)
			{
				let id = ArrayIdForDeleted[i];
				console.log("+++++++++++==");
				console.log(id);
				console.log(ArrayErrorMessages);

				delete ArrayErrorMessages[id];
			}

		}

	}
	

	self.AddTitleRow = function(idMessage,NumberRow)
	{
		
		let NameRow= idTable+"EditRow"+NumberRow;
		let LastErrorText=$("#"+NameRow).attr("title");
		if (!LastErrorText) LastErrorText="";
		let AllText =  LastErrorText+ArrayErrorMessages[idMessage].ErrorText+"\r";


		$("#"+NameRow).attr("title",AllText);
	}

	self.RemoveTitleRow = function(idMessage)
	{
		
		let NumberRow= ArrayErrorMessages[idMessage].NumberRow;

		let NameRow=idTable+"EditRow"+NumberRow;
		let AllText =  $("#"+NameRow).attr("title");

		let DeleteText= ArrayErrorMessages[idMessage].ErrorText+"\r";
		
		if (typeof AllText==="undefined") 
		{
			AllText= "";
		}

		AllText= AllText.replace(DeleteText,"");


		$("#"+NameRow).attr("title",AllText);
	}

}