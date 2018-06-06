
function DataListManager(IdTable,ArrayDataList)
{
	let self=this;
	self.ListKey=Array();
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

		

		/*for(let i in list)
		{
			if(list[i].name!="")
			{
				$('#'+idDataList).append('<option value="'+list[i].id+'">'+list[i].id+' ('+list[i].name+')</option>');	
			}
			else
			{
				$('#'+idDataList).append('<option value="'+list[i].id+'">'+list[i].id+'</option>');	
			}
			//$('#'+idDataList).append('<option value="'+list[i].id+'">'+list[i].id+'</option>');	
		}*/


		for(let i in list)
		{
			if(list[i].name!="")
			{
				self.ListKey[idDataList][i]={value: ''+list[i].id+' ('+list[i].name+')', id: list[i].id};

				//$('#'+idDataList).append('<option value="'+list[i].id+'">'+list[i].id+' ('+list[i].name+')</option>');	
			}
			else
			{
				self.ListKey[idDataList][i]={value:''+list[i].id, id: list[i].id};	
			}
			//$('#'+idDataList).append('<option value="'+list[i].id+'">'+list[i].id+'</option>');	
		}



	};

	self.FillAll = function()
	{
		
/*
		var example =
		[
		  {value:"1 (Для использования)", id:"1"},
		  {value:"2 Для обезвреживания", id:"2"},
		  {value:"3 Для захоронения", id:"3"},
		  {value:"4 Для хранения", id:"4"},
		  {value:"5 Прочее", id:"5"},
		  {value:" ", id:""}
		];
*/



		for(let i in ArrayDataList)
		{
			self.ListKey[i]=new Array();

			if(i=="Editor_column2")
			{
				self.ListKey['Editor_column1']= new Array();
				
				let list1=ArrayDataList[i];
				for(let j in list1)
				{
					self.ListKey['Editor_column1'][j]={value: ""+list1[j].name, id: ""+list1[j].name};
					self.ListKey[i][j]={value:  ""+list1[j].id, id: ""+list1[j].id};			
				}

			}
			else
			{
				self.FillInDataList(i,ArrayDataList[i]);
			}

		}





	/*	for(let i in ArrayDataList)
		{
			if(i=="Editor_column2")
			{
				let list1=ArrayDataList[i];
				for(let i in list1)
				{
					
					$('#Editor_column1').append('<option value="'+list1[i].name+'">'+list1[i].name+'</option>');	
					$('#Editor_column2').append('<option value="'+list1[i].id+'">'+list1[i].id+'</option>');
					
				}

			}
			else
			{
				self.FillInDataList(i,ArrayDataList[i]);
			}

		}*/
		

	};

	self.FillAll();
	console.log("++++++++");
	console.log(self.ListKey);
	return self.ListKey;

};


