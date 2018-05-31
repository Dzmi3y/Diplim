function DataListManager(IdTable,ArrayDataList)
{
	let self=this;
	/*let ArrayDataList=new Array();
	
		ArrayDataList["ConditionList"]=Condition;
		ArrayDataList["ReceiptOfWasteList"]=ReceiptOfWaste;
		ArrayDataList["WasteTransferList"]=WasteTransfer;
		ArrayDataList["DirectionOfTheWasteList"]=DirectionOfTheWaste;
		ArrayDataList["WasteDisposalList"]=WasteDisposal;
		ArrayDataList["DumpList"]=Dump;
		ArrayDataList["WasteStorageList"]=WasteStorage;
		ArrayDataList["DangerList"]=Danger;*/
		
	
	

	self.FillInDataList = function(idDataList,list)
	{	

		for(let i in list)
		{
			//$('#'+idDataList).append('<option value="'+list[i].id+'">'+list[i].id+'('+list[i].name+')</option>');	
			$('#'+idDataList).append('<option value="'+list[i].id+'">'+list[i].id+'</option>');	
		}

	};

	self.FillAll = function()
	{
		for(let i in ArrayDataList)
		{
			self.FillInDataList(i,ArrayDataList[i]);
		}
	};

	self.FillAll();
};