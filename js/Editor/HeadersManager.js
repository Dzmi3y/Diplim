function HeadersManager(idTable,headrRows)
{
	let self=this;
	self.lastNumberRow=0;
	self.idTable=idTable;
	self.headrRows=headrRows;


	self.FillInTheTableHeader= function()
	{
		for( var i =0; i< self.headrRows.length;i++)
		{
			self.AddHeadrs(self.headrRows[i]);
		}
	
		console.log("Headrs is created");
	};

	self.AddHeadrs= function(headrsContent)
	{

		
		self.lastNumberRow++;
		
		let idTableText = self.idTable.replace("#","");
		var nameRow= self.lastNumberRow+'headrRow'+idTableText;
		
		$(self.idTable).append('<tr id="'+nameRow+'" > </tr>');
		
			for (var i = 0; i <headrsContent.length; i++) 
			{
				$('#'+nameRow).append('<th class="'+self.idTable.replace("#","")+'" id="'+nameRow+''+i+'Field" rowspan="'+headrsContent[i].rowspan+'" colspan="'+headrsContent[i].colspan+'" valign="top">'+headrsContent[i].text+'</th>');
			}			
	};

	self.GetCountColumn = function()
	{
		var countHeadrsRow=self.headrRows.length;
		var countColumn =self.headrRows[countHeadrsRow-1].length;
		return countColumn;

	};


};

