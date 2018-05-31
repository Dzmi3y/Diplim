

function EditRowsManager(idTable,countColumns,loaderArray,ParObjCheckerBalances,ConvertColumn)
{
	
	let self=this;
	//let ArrayCellsValue= (typeof loadArray==="undefined")? new Array():loadArray;
	let ArrayCellsValue= (loaderArray==null)? new Object() :loaderArray;
	self.IDArrayForDelete=Array();
	let CurrentFocus=Array();

	console.log(ArrayCellsValue);
		self.idTable = idTable;
	let idTableText = self.idTable.replace("#","");

	let ObjCheckerBalances=  ParObjCheckerBalances;
	
	self.countColumns=countColumns;
	self.numberLastRow=0;
	let ArrayForEditInDB=new Array();
	self.arrayOfNumberExistRows=new Array();
	self.selectedRows=new Array(); 
	self.Handler=null;
	self.DeleteHandler=null;


	self.GetList=function(columnName)
	{


		if($("#"+columnName))
		{

			 return columnName;			
		}
		else
		{
			return "";
		}

	};
	
	//console.log(self.GetList("column3"));

	self.AddRow= function(arrayCells=null)
	{

		if(self.arrayOfNumberExistRows.length!=0)
		{	
			let nameLastRow=idTableText+"EditRow"+self.arrayOfNumberExistRows[self.arrayOfNumberExistRows.length-1];
			self.RemoveEventClick(nameLastRow);
		}

		self.numberLastRow++;
		self.arrayOfNumberExistRows[self.arrayOfNumberExistRows.length]=""+self.numberLastRow;
		let nameRow =idTableText+"EditRow"+self.numberLastRow;

		$(self.idTable).append('<tr id="'+nameRow+'" class="line'+self.numberLastRow+' '+idTableText+'"  > </tr>');	
		self.AddCell(nameRow,arrayCells);
		self.AddEventClick(nameRow);
		//$('.line'+self.numberLastRow).bind('focus',self.HandlerNewFocus);
		//$('.line'+self.numberLastRow).bind('blur',self.CheckThisRow);

		

		//$('.line'+self.numberLastRow).bind('blur',self.CheckThisRow);
	};


	self.AddCell= function(nameRow,arrayCells)
	{
		let CheckBoxID= idTableText+'checkbox'+self.numberLastRow; 
		$('#'+nameRow).append('<td><b>'+self.numberLastRow+'.</b> <input type="checkbox" id="'+CheckBoxID+'" class="column0 line'+self.numberLastRow+' '+idTableText+'" /> </td>');
		$('#'+CheckBoxID).bind('change',self.ChangeAllCheckBox);


		for (var i = 1; i <self.countColumns; i++) 
			{
				let value =(arrayCells==null) ? "" : arrayCells[ConvertColumn[i-1]]; 
				value=(typeof value==="undefined") ? "":value;
				value=( value===null) ? "":value;

				let columnName ="column"+i;
				let inputID= idTableText+'Inpr'+self.numberLastRow+'c'+i ;
				let cellID= idTableText+'Tdr'+self.numberLastRow+'c'+i ;
				
				$('#'+nameRow).append('<td id="'+cellID+'"> <input id="'+inputID+'" class="'+columnName+' line'+self.numberLastRow+' input'+idTableText+' '+idTableText+'" list="'+idTableText+'_'+self.GetList(columnName)+'" value="'+value+'"/> </td>');
				$('#'+inputID).bind('change',function(){ self.Handler(this);});
				let cn=i;
				let ln=self.numberLastRow;
				$('#'+inputID).bind('focus',function(){ CurrentFocus["cn"]= cn; CurrentFocus["ln"]=ln; console.log(CurrentFocus);  });

				$('#'+inputID).bind('change',function(){  self.OnChangeCell(this);});
				
				if(i!=1)
				{
					$('#'+inputID).bind('keyup',function(event) {return self.KeyDownHandler(event,this);});
				}
					
			}

	};


	self.DeleteRows=function()
	{
		console.log("Удоляю");
		console.log(ArrayCellsValue);
		if(self.selectedRows.length>0)
		{
			for( var i = 0;i< self.selectedRows.length;i++ )
			{
				let classForDelete=self.selectedRows[i];	
				var numberRow= classForDelete.replace('line','');
				let item =self.arrayOfNumberExistRows.indexOf(numberRow-1);
				self.arrayOfNumberExistRows.splice(item, 1);

				self.DeleteHandler(classForDelete);
		  		$("."+classForDelete+"."+idTableText).remove();

		  		let n=numberRow;
		  		console.log(n);

		  		if (typeof ArrayCellsValue[numberRow-1] !="undefined")
		  		{
			  		if(typeof ArrayCellsValue[numberRow-1]["ID"]!="undefined") self.IDArrayForDelete.push(ArrayCellsValue[numberRow-1]["ID"]);

			  		delete ArrayCellsValue[numberRow-1];
			  		//let f = in ArrayCellsValue;
			  		//console.log(in ArrayCellsValue[2]);
			  		//ArrayCellsValue.splice(n,1);
			  		console.log(self.IDArrayForDelete);
		  		}
		  		else
		  		{
		  			self.AddRow();
		  		}
			}
			self.selectedRows.splice(0, self.selectedRows.length);
			
			//if(ArrayCellsValue.length=0) self.AddRow();
		}

	};


	self.AddEventClick= function(nameRow)
	{

		//$('#'+nameRow).bind('click',self.AddRow);
	};

	self.RemoveEventClick= function(nameRow)
	{
		//$('#'+nameRow).unbind('click');
	};



	self.ChangeAllCheckBox= function()
	{
		console.log("Изменён");
		let classes =$(this).prop("classList"); 
		if(this.checked)
		{	
			//$("tr."+classes[1]).css('background', 'gray');
			self.selectedRows[self.selectedRows.length]=""+classes[1];
		}
		else
		{
			//$("tr."+classes[1]).css('background', 'white');
			let item =self.selectedRows.indexOf(classes[1]);
			self.selectedRows.splice(item, 1);
		}
	};


	self.KeyDownHandler=function(event,th)
	{
		var rep = /[-\;":'a-zA-Zа-яА-Я]/; 
		th.value = th.value.replace(rep, ''); 
		th.value = th.value.replace(',', '.'); 
	}


	self.CheckThisRow=function(ObjectInput)
	{
		console.log("check check");
		ObjCheckerBalances.NewFocus(ObjectInput);
		ObjCheckerBalances.CheckRow();

		let row =ObjectInput.classList[1];
		let column= ObjectInput.classList[0];

		if(ObjectInput.classList[0]!="column0")
		{
			if(ArrayForEditInDB[row]==null)
			{
				ArrayForEditInDB[row]=new Array();
			}

			ArrayForEditInDB[row][column]=ObjectInput.value;
		}

		//console.log(ArrayForEditInDB);
	}

	self.HandlerNewFocus= function()
	{
		//ObjCheckerBalances.NewFocus(this);
	}

	self.OnChangeCell = function(ObjectChanged)
	{

		//console.log(Data);
		let value=ObjectChanged.value;
		let row =ObjectChanged.classList[1].replace("line","");
		let column= ObjectChanged.classList[0].replace("column","");

		console.log("Change r"+row+" c"+column+" v"+value);
		self.CheckThisRow(ObjectChanged);

		if (typeof ArrayCellsValue[row-1]==="undefined" )
		{
			ArrayCellsValue[row-1]=new Object();
			self.AddRow();

		}
		
		ArrayCellsValue[row-1][ConvertColumn[column-1]]=value;
		console.log(ArrayCellsValue);
	}

	self.LoadData = function()
	{
		//console.log("ololo");
		//if (!(typeof loadArray==="undefined"))
		//{
			console.log("load data");
			console.log(ArrayCellsValue);
			for(let i in ArrayCellsValue)
			{
				console.log("LoadData");
				console.log(ArrayCellsValue[i]);
				self.AddRow(ArrayCellsValue[i]);
			}
			self.AddRow();
			console.log("ffooocckkuusss");
			$('#EditorInpr1c1').focus();
		//}
	}

	self.LoadData();

	self.GetData = function()
	{
		return(ArrayCellsValue);
	}


	self.MoveFocus = function(direction)
	{
		// $("#Editor input.column1.line2").focus();
		 let cn=CurrentFocus["cn"];
		 let ln=CurrentFocus["ln"];

		if(direction=="up")
		{
			ln--;

		}

		if(direction=="down")
		{
			ln++;
		}

		if(direction=="right")
		{
			cn++;
		}

		if(direction=="left")
		{
			cn--;
		}


		if($(idTable+" input.column"+cn+".line"+ln))
		{
			$(idTable+" input.column"+cn+".line"+ln).focus();
		}

	}


}

