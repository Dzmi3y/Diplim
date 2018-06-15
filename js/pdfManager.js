


var docPDF=
{

	footer:function(currentPage, pageCount) 
	{ 
		return { text: currentPage.toString() + ' из ' + pageCount, alignment:  'center'  };
	},		 
	pageSize: 'A4',
	pageMargins:[ 5, 5, 5, 30 ],
	startPosition: 
	{
	    pageNumber: 2, // the page this node starts on
	    pageOrientation: 'landscape', // the orientation of this page
	    left: 60, // the left position
	    right: 60, // the right position
	    verticalRatio: 0.2, // the ratio of space used vertically in this document (excluding margins)
	    horizontalRatio: 0.0  // the ratio of space used horizontally in this document (excluding margins)
	},
	pageOrientation: 'landscape',
	content: 
	[

		{
			columns:
			[
				{ width: 600, text: '' },
				{ text:'УТВЕРЖДЕНО\nПостановление\nНационального\nстатистического комитета\nРеспублики Беларусь\n19.09.2013 № 208',fontSize: 10}
			]
		},
		{text:"\n"},
		{
			table:
			{
				widths:[800],
				body:[
	          [ 
	          {
	          	text: "ГОСУДАРСТВЕННАЯ СТАТИСТИЧЕСКАЯ ОТЧЕТНОСТЬ ",
	          	bold: true,
	          	alignment:"center"
	          } 
	          ]
	         
	        ]



			}




		},
		{text:"\n"},

		{
			table:
			{
				widths:[800],
				body:[
	          [ 
		          {
		          	text: "Представление искаженных данных государственной статистической отчетности, несвоевременное представление или непредставление такой отчетности влекут применение мер административной или уголовной ответственности в порядке, установленном законодательством Республики Беларусь",
		          	//bold: true,
		          	//alignment:"center"
		          	fontSize: 10
		          } 
	          ]
	         
	        ]

			}

		},
		{text:"\n"},

		{

		columns: 
		[
	        { width: '*', text: '' },
	        {
	            width: 'auto',



				table:
				{
					widths:[350],
					body:[
		          [ 
		          {
		          	text:"ОТЧЕТ\nоб обращении с отходами производства\nза  20___год",
		          	//bold: true,
		          	alignment:"center"
		          } 
		          ]
		         
		        ]
		        



				}
			},
	        { width: '*', text: '' },
    	]
    	},
    	{text:"\n"},
		{
    	columns: 
		[

	        
	        {
	            width: 'auto',



				table:
				{
					widths:[496,90], //586
 					alignment:"center",
					body:
					[
			          [ {text:"Представляют",alignment:"center",fontSize: 10},   {text:"Срок\nпредставления",alignment:"center",fontSize: 10}  ],
			          [ {text:"юридические лица, обособленные подразделения юридических лиц, осуществляющие деятельность, связанную с обращением с отходами производства (кроме юридических лиц, обособленных подразделений юридических лиц, у которых образуются только отходы производства, подобные отходам жизнедеятельности населения, отходы бумаги и картона от канцелярской деятельности и делопроизводства, отходы упаковки незагрязненные, отработанные люминесцентные трубки, отработанные ртутные лампы, при общем объеме таких отходов\n50 и менее тонн в год)\n       республиканскому научно-исследовательскому унитарному предприятию «Белорусский научно-\n      	 \u0009исследовательский центр «Экология»;\nреспубликанское научно-исследовательское унитарное предприятие «Белорусский научно-исследовательский центр «Экология» – агрегированные первичные статистические данные по республике, областям, г. Минску; административным районам, отдельным городам; по видам экономической деятельности; по группам и видам отходов производства"
			          		,alignment:"justify",fontSize: 10},   
			          	{text:"20 января\n\n\n\n\n\n\n\n\n20 апреля",alignment:"center",fontSize: 10}  ],
			          

			          [ {text:"       Министерству природных ресурсов и охраны окружающей среды Республики Беларусь;\n Министерство природных ресурсов и охраны окружающей среды Республики Беларусь – официальную статистическую информацию по республике, областям, г. Минску; административным районам, отдельным городам; по видам экономической деятельности; по группам и видам отходов производства\n       Национальному статистическому комитету Республики Беларусь"
			          		,alignment:"justify",fontSize: 10},   
			          	{text:"30 апреля",alignment:"center",fontSize: 10}  ]
		         

		       		]
		        



				}
			},
	        { width: '*', text: '' },
	        {
	            width: 'auto',
	           	
	            stack: [
	            	{
						table:
						{
							widths:[90,90],
							height:[180],
							body:[
		          			
					         
         					  [ {text: 'Форма 1-отходы (Минприроды)', colSpan: 2, alignment: 'center'},  '' ],
         					  [ 'Код формы по ОКУД', '0618503' ]
					         
		         
		        			]
		    			}
		    		},
				
					{text:"\n"},
					{text:"\n"},
					{text:"\n"},
				
					{
						table:
						{
							widths:[180],
							alignment:"center",
							body:[
			          				[ 
							          {
							          	text: "Готовая",
							          			          	//bold: true,
							          	alignment:"center"
							          } 
			         				]
		        				]
		        
						}
					}
				]

				
			},
			{ width: '*', text: '' }

    	]





		},
		{text:"\n"},
		{

			table:
			{
				widths:[800],
				body:[
	          [ 
	          {
	          	text: "Полное наименование юридического лица \nПолное наименование обособленного подразделения юридического лица\nПочтовый адрес (фактический)\nЭлектронный адрес (www, e-mail)"
	          	//bold: true,
	          	//alignment:"center"
	          	,fontSize: 10
	          } 
	          ]
	         
	        ]



			}


		},
		{

			table:
			{
				widths:[225,225],
				body:[
	          [ 
	          {
	          	text: "Регистрационный номер респондента\nв статистическом регистре  (ОКПО)",
	          	//bold: true,
	          	alignment:"center"
	          	,fontSize: 10
	          },
	           {
	          	text: "Учетный номер плательщика\n(УНП) ",
	          	//bold: true,
	          	alignment:"center"
	          	,fontSize: 10
	          },
	          ],
	          [{text: "1",alignment:"center"},{text: "2",alignment:"center"}],
	           [{text: " ",alignment:"center"},{text: " ",alignment:"center"}]

	         
	        ]



			}


		},





	    {text: 'Таблица1', pageOrientation: 'landscape',   pageBreak: 'before',alignment:"right"},
	    {text: 'Обращение с отходами производства\n',alignment:"center"},
	    {
	    	table: 
		    {
		        body: [0]
		    }
		},
	    {text: 'Таблица 2', pageOrientation: 'landscape', pageBreak: 'before',alignment:"right"},
	    {text: 'Выполнения мероприятий по сокращению объемов образования\nи (или) накопления отходов производства\n',alignment:"center"},	    
	    {
	    	
	    	table: 
		    {
		      
		       body: [0]

		    }
		},
		
		{text:"\n"},

		{
			table:
			{
				widths:[300,150,250],
				body:[
	          [ 
	          {
	          	text: "Руководитель (уполномоченный заместитель руководителя)\nюридического лица, обособленного подразделения\n(нужное подчеркнуть)",
	          //bold: true,
	          	alignment:"center"
	          	,fontSize: 10
	          },
	          {
	          	text: "\n_____________________________\n(подпись)",
	          //bold: true,
	        	alignment:"center"
	        	,fontSize: 10
	          },
	          {
	          	text: "\n_____________________________\n(инициалы, фамилия)",
	          //bold: true,
	        	alignment:"center"
	        	,fontSize: 10
	          } 
	          ]
	         
	        ]



			}

		},

		{text:"\n"},
		{
			table:
			{
				widths:[400,50,250],
				body:[
	          [ 
	          {
	          	text: "_________________________________________________________________\n(фамилия, собственное имя, отчество контактного лица, номер телефона, адрес электронной почты)",
	          	//bold: true,
	          	//alignment:"center"
	          } ,
	          {
	          	text: " ",
	       
	          },
	          {
	          	text: "«____» ____________________ 20 ___г.\n(дата составления государственной\nстатистической отчетности)",
	          //bold: true,
	        	alignment:"center"
	        	,fontSize: 10
	          },

	          ]
	         
	        ]



			}

		}



	    
	],

	pageBreakBefore: function(currentNode, followingNodesOnPage, nodesOnNextPage, previousNodesOnPage) 
	{
		currentNode.pageNumbers= [2, 3];
		console.log(currentNode);
    	return currentNode.headlineLevel === 1 && followingNodesOnPage.length === 0;
	}
	


};

/*	content: [
    {
     // layout: 'lightHorizontalLines', // optional
      table: {
        // headers are automatically repeated if the table spans over multiple pages
        // you can declare how many rows should be treated as headers
        headerRows: 1,
        widths: [ '*', 'auto', 100, '*' ],

        body: [
          [ 'First', 'Second', 'Third', 'The last one' ],
          [ 'Value 1',{text: 'Value 2 and 3', colSpan: 2, alignment: 'center'}, , 'Value 4' ],
          [ { text: 'Bold value', bold: true  }, 'Val 2', 'Val 3', 'Val 4' ]
        ]
      }
    }
  ]

};*/

/*
var docDefinition = 
{
  footer: function(currentPage, pageCount) { return currentPage.toString() + ' of ' + pageCount; },
  header: function(currentPage, pageCount, pageSize) {
    // you can apply any logic and return any valid pdfmake element

    return [
      { text: 'simple text', alignment: (currentPage % 2) ? 'left' : 'right' },
      { canvas: [ { type: 'rect', x: 170, y: 32, w: pageSize.width - 170, h: 40 } ] }
    ]
  },
  (...)
};
*/






/*docPDF["content"][0]["text"]="Hello motherfucka";
docPDF["content"][2]["table"]["body"].push([ 'First', 'Second']) ;
let arr = new Array(2);
arr.fill("");

docPDF["content"][2]["table"]["body"].push(arr);
docPDF["content"][2]["table"]["body"].push(['Third', 'The last one']);*/


	//console.log( HeadrRows);

	//let ar=new Array(23);

	//console.log(ar);




    	String.prototype.replaceAll = function(search, replacement) {
	    var target = this;
	    return target.replace(new RegExp(search, 'g'), replacement);
	};




function PDFManager()
{

	var self=this;
	var DocumentPDF=docPDF;

	self.DownloadPDF= function(tables,dataConvert)
	{


		let HeaderTable1=self.addHeader(HeadrRows);
		let HeaderTable2=self.addHeader(HeadrRowsTable2);
		let Table1=self.createRows(tables[0],dataConvert[0],HeaderTable1);
		let Table2=self.createRows(tables[1],dataConvert[1],HeaderTable2);

		//console.log(Table1);
		//console.log("---------------------");
		//console.log(Table2);

		//console.log(HeaderTable2);
		DocumentPDF["content"][14]["table"]["body"]=Table1;
		DocumentPDF["content"][14]["table"]["widths"]=self.getWidths(23);
		//console.log(DocumentPDF);
		DocumentPDF["content"][17]["table"]["body"]=Table2;
		DocumentPDF["content"][17]["table"]["widths"]=self.getWidths(6);


		pdfMake.createPdf(DocumentPDF).download('Otchet.pdf');
	}





	self.addHeader=function(ValHeader)
	{


		let countColumn= ValHeader[ValHeader.length-1].length-1;
		let templateCells ={text: '', colSpan: 1, rowSpan: 1, alignment: 'center'};

		var headerResult= new Array();
		var rowSpanArray= new Array();

		for( var i in ValHeader)
		{
			console.log(headerResult);
			console.log("++++++++++++++++1111");

			let RowValHeader= ValHeader[i];
			//console.log("-------");
			headerResult[i]= new Array();
			var k=0;
			if((i==0)||(i==ValHeader.length-1))
			{
				k=1;
			}
			else
			{
				k=0;
			}

			for(var j=0 ;j<countColumn;j++)
			{

				if(i==0)
				{

					var rowspan =parseInt(ValHeader[i][k]["rowspan"], 10);
					var colspan=parseInt(ValHeader[i][k]["colspan"], 10);   
					var text=ValHeader[i][k]["text"];
					text=text.replaceAll("<br/>","\n");

					headerResult[i][j]=new Object();

					headerResult[i][j].text=text;
					headerResult[i][j].colSpan=colspan;
					headerResult[i][j].rowSpan=rowspan;
					headerResult[i][j].alignment='center';
					headerResult[i][j].fontSize= 7;

					rowSpanArray[j]=rowspan-1;
					k++;
					console.log(colspan);

					if(colspan>1)
					{
						console.log("++++++++++++++++++++#33333333333333333");
						console.log(j);
						console.log("(((((");
						j++;

						for (var z=j;z<j+colspan-2;z++)
						{
							//headerResult[i][j]={'text': '', 'colSpan': 1, 'rowSpan': 1, 'alignment': 'center'};
							headerResult[i][j]={'text': '', 'colSpan': 1, 'rowSpan': 1};
							rowSpanArray[j]=0;
							console.log(headerResult[i][j]);
							console.log(j);
						}

						j+=colspan-2;
						console.log("))))");
					}
					//console.log(headerResult);
				}
				else
				{
					if(rowSpanArray[j]>0)
					{
						console.log();
						rowSpanArray[j]=rowSpanArray[j]-1;
						//headerResult[i][j]={'text': '', 'colSpan': 1, 'rowSpan': 1, 'alignment': 'center'};
						headerResult[i][j]={'text': '', 'colSpan': 1, 'rowSpan': 1 };
					}
					else
					{

						var rowspan =parseInt(ValHeader[i][k]["rowspan"], 10);
						var colspan=parseInt(ValHeader[i][k]["colspan"], 10);   
						var text=ValHeader[i][k]["text"];
						text=text.replaceAll("<br/>","\n");

						headerResult[i][j]=new Object();

						headerResult[i][j].text=text;
						headerResult[i][j].colSpan=colspan;
						headerResult[i][j].rowSpan=rowspan;
						headerResult[i][j].alignment='center';
						headerResult[i][j].fontSize=7;

						rowSpanArray[j]=rowspan-1;
						k++;
						console.log(colspan);
						console.log("------------------------");
						if(colspan>1)
						{
							console.log("------------------------");
							j++;
							for (var z=j;z<j+colspan-2;z++)
							{
								//headerResult[i][j]={'text': '', 'colSpan': 1, 'rowSpan': 1, 'alignment': 'center'};
								headerResult[i][j]={'text': '', 'colSpan': 1, 'rowSpan': 1 };
								rowSpanArray[j]=0;
								console.log(headerResult[i][j]);
							}

							j+=colspan-2;
						}


					}


				}

			}

			if( headerResult[i][countColumn-1] == undefined) 
			{
				headerResult[i][countColumn-1]={'text': '', 'colSpan': 1, 'rowSpan': 1 };
				rowSpanArray[countColumn-1]=0;
			}
			console.log(headerResult[i][countColumn-1]);

		}

		return headerResult;
	}	


	self.getWidths=function (count)
	{
		let widtsArray=Array();
		for (var i = 0; i < count; i++) 
		{

			//switch()

			if(i==0)
			{
				widtsArray[i]=100;
			}
			else
			{

				widtsArray[i]='auto';
				
			}
		}
		//console.log(widtsArray);
		return widtsArray;
	}


	self.createRows=function (Table,convertData,result)
	{
		let row;
		for(var i in Table)
		{
			row=new Array();
			for(var j in convertData)
			{
				let textCell= ((Table[i][convertData[j]]==null)||(Table[i][convertData[j]]==NaN)) ? "":Table[i][convertData[j]];
				row.push({'text':textCell,'fontSize':7});
				// let NumberNewCell=row.length;
				// row[NumberNewCell]=new Object();
				// row[NumberNewCell].text=Table[i][convertData[j]];
				//row[NumberNewCell].fontSize=7;
			}

			result.push(row);
		}

		return result;
	}

	



}


/*



var heddddr=addHeader(HeadrRows);
docPDF["content"][2]["table"]["body"]=heddddr;
docPDF["content"][2]["table"]["widths"]=getWidths(23);

console.log(docPDF["content"][2]["table"]["body"]);
console.log(heddddr)
console.log(HeadrRows);
console.log(getWidths());




console.log(docPDF);
console.log(docPDF["content"][0]["text"]);*/
//pdfMake.createPdf(docPDF).download();
