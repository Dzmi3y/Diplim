

function EditRowsManager(idTable,countColumns,loaderArray,ParObjCheckerBalances,ConvertColumn,DataForList)
{
	
	let self=this;
	let containerCellsValue={ArrayCellsValue:null};
	containerCellsValue.ArrayCellsValue=(loaderArray==null)? new Object() :loaderArray;

	//containerCellsValue.containerCellsValue.ArrayCellsValue
	//let containerCellsValue.ArrayCellsValue= (typeof loadArray==="undefined")? new Array():loadArray;

	//let containerCellsValue.ArrayCellsValue= (loaderArray==null)? new Object() :loaderArray;
	self.IDArrayForDelete=Array();
	let CurrentFocus=Array();

	self.DataForList=DataForList;
	//console.log(containerCellsValue.ArrayCellsValue);
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


	self.BindingList=function(InpID,ColumnName)
	{
		if(self.DataForList[ColumnName])
		{
			var widthVar=100;

			switch (ColumnName) 
			{
		   	  case "Editor2_column1":
			    widthVar=900;
			    break;
			  case "Editor_column1":
			    widthVar=1000;
			    break;
			  case "Editor_column2":
			    widthVar=100;
			    break;
			  case "Editor_column3":
			   widthVar=200;
			    break;
			   case "Editor_column4":
			   widthVar=100;
			    break;
			   case "Editor_column7":
			   widthVar=200;
			    break;
			    case "Editor_column10":
			   widthVar=310;
			    break;
			    case "Editor_column12":
			   widthVar=400;
			    break;
			    case "Editor_column14":
			   widthVar=450;
			    break;
			    case "Editor_column16":
			   widthVar=260;
			    break;
			    case "Editor_column18":
			   widthVar=450;
			    break;
			    case "Editor_column21":
			   widthVar=500;
			    break;
			  default:
			   widthVar=100;
			}



			$("#"+InpID).autocomplete({
			    lookup: self.DataForList[ColumnName],
			    minChars: 0,
			    width: widthVar,
			    maxHeight:150,

			    onSelect: function(data, value)
			    {
			    	//value="lol";
			    	$("#"+InpID)[0].value=data.id;
			    	//console.log(typeof data.id);
			    	//console.log("#"+InpID);

			    	value=data.id;

			    	self.OnChangeCell($("#"+InpID)[0]);
			    }
			});
		}

	}



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
				
				$('#'+nameRow).append('<td id="'+cellID+'"> <input id="'+inputID+'" class="'+columnName+' line'+self.numberLastRow+' input'+idTableText+' '+idTableText/*+'" list="'+idTableText+'_'+self.GetList(columnName)*/+'" value="'+value+'"/> </td>');
				//$('#'+inputID).bind('change',function(){ self.Handler(this);});
				

				let cn=i;
				let ln=self.numberLastRow;
				$('#'+inputID).bind('focus',function(){ CurrentFocus["cn"]= cn; CurrentFocus["ln"]=ln;  });

				$('#'+inputID).bind('change',function(){  self.OnChangeCell(this);});
				
				if(i!=1)
				{
				//	$('#'+inputID).bind('keyup',function(event) {return self.KeyDownHandler(event,this);});
				}
					
				self.BindingList(inputID,idTableText+'_'+self.GetList(columnName));
			}

	};


	self.DeleteRows=function()
	{

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
		  	


		  		if (typeof containerCellsValue.ArrayCellsValue[numberRow-1] !="undefined")
		  		{
			  		if(typeof containerCellsValue.ArrayCellsValue[numberRow-1]["ID"]!="undefined") self.IDArrayForDelete.push(containerCellsValue.ArrayCellsValue[numberRow-1]["ID"]);

			  		delete containerCellsValue.ArrayCellsValue[numberRow-1];
			  		//let f = in containerCellsValue.ArrayCellsValue;
			  		//console.log(in containerCellsValue.ArrayCellsValue[2]);
			  		//containerCellsValue.ArrayCellsValue.splice(n,1);
			  	
		  		}
		  		else
		  		{
		  			self.AddRow();
		  		}
			}
			self.selectedRows.splice(0, self.selectedRows.length);
			
			//if(containerCellsValue.ArrayCellsValue.length=0) self.AddRow();
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
		self.Handler(ObjectChanged,containerCellsValue,self.AddRow);
		let value=ObjectChanged.value;
		let row =ObjectChanged.classList[1].replace("line","");
		let column= ObjectChanged.classList[0].replace("column","");

		//console.log("Change r"+row+" c"+column+" v"+value);
		self.CheckThisRow(ObjectChanged);
/*---------------------------------------------------------------------------------------------*/
		if (typeof containerCellsValue.ArrayCellsValue[row-1]==="undefined" )
		{
			containerCellsValue.ArrayCellsValue[row-1]=new Object();
			self.AddRow();

		}
		
		containerCellsValue.ArrayCellsValue[row-1][ConvertColumn[column-1]]=value;
		//console.log(containerCellsValue.ArrayCellsValue);
	}

	self.LoadData = function()
	{
		//console.log("ololo");
		//if (!(typeof loadArray==="undefined"))
		//{
			// console.log("load data");
			// console.log(containerCellsValue.ArrayCellsValue);
			for(let i in containerCellsValue.ArrayCellsValue)
			{
				// console.log("LoadData");
				// console.log(containerCellsValue.ArrayCellsValue[i]);
				self.AddRow(containerCellsValue.ArrayCellsValue[i]);
			}
			self.AddRow();
			//console.log("ffooocckkuusss");
			//$('#EditorInpr1c1').focus();
		//}
	}

	self.LoadData();

	self.GetData = function()
	{
		return(containerCellsValue.ArrayCellsValue);
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

