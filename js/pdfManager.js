var docPDF=
{

pageSize: 'A4',
//pageMargins:[ 5, 5, 5, 5 ],
pageOrientation: 'portrait',
  content: [
    {text: 'Text on Portrait'},
    {text: '', pageOrientation: 'landscape',   pageBreak: 'before'},
    {table: {
        // headers are automatically repeated if the table spans over multiple pages
        // you can declare how many rows should be treated as headers
       // headerRows: 1,
        //widths: [ '*', 'auto', 100, '*' ],
        

        body: [
         
        ]
      }
  	},
    {text: 'Text on Landscape 2', pageOrientation: 'portrait', pageBreak: 'before'},
    
    
  ]


	/*content: [
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
  ]*/

};

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


	function addHeader(ValHeader)
	{


		let countColumn= ValHeader[ValHeader.length-1].length-1;

		/*let ArrayRowSpan=Array(countColumn);
		ArrayRowSpan.fill(0);*/

		let templateCells ={text: '', colSpan: 1, rowSpan: 1, alignment: 'center'};

		/*let templateRows=new Array(countColumn);
		templateRows.fill(templateCells);

		let headerResult=Array(ValHeader.length);
		headerResult.fill(templateRows);*/

		var headerResult= new Array();
		var rowSpanArray= new Array();

		for( var i in ValHeader)
		{

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
						j++;
						for (var z=j;z<j+colspan-2;z++)
						{
							//headerResult[i][j]={'text': '', 'colSpan': 1, 'rowSpan': 1, 'alignment': 'center'};
							headerResult[i][j]={'text': '', 'colSpan': 1, 'rowSpan': 1, };
							rowSpanArray[j]=0;
							console.log(headerResult[i][j]);
						}

						j+=colspan-2;
					}
					//console.log(headerResult);
				}
				else
				{
					if(rowSpanArray[j]>0)
					{

						rowSpanArray[j]=rowSpanArray[j]-1;
						//headerResult[i][j]={'text': '', 'colSpan': 1, 'rowSpan': 1, 'alignment': 'center'};
						headerResult[i][j]={'text': '', 'colSpan': 1, 'rowSpan': 1, };
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

						if(colspan>1)
						{
							j++;
							for (var z=j;z<j+colspan-2;z++)
							{
								//headerResult[i][j]={'text': '', 'colSpan': 1, 'rowSpan': 1, 'alignment': 'center'};
								headerResult[i][j]={'text': '', 'colSpan': 1, 'rowSpan': 1, };
								rowSpanArray[j]=0;
								console.log(headerResult[i][j]);
							}

							j+=colspan-2;
						}


					}


				}





					/*var rowspan =parseInt(ValHeader[i][k]["rowspan"], 10);
					var colspan=parseInt(ValHeader[i][k]["colspan"], 10);   
					//var text=ValHeader[i][j]["text"];
					text=text.replaceAll("<br/>","\n");
					//console.log(text.replace("<br/>"," "));



					


					headerResult[i][j]=new Array();

					headerResult[i][j].text=text;
					headerResult[i][j].colSpan=colspan;
					headerResult[i][j].rowSpan=rowspan;*/



			
			}



		}

		return headerResult;
	}	



var heddddr=addHeader(HeadrRows);
docPDF["content"][2]["table"]["body"]=heddddr;

console.log(docPDF["content"][2]["table"]["body"]);
console.log(heddddr)
console.log(HeadrRows);





console.log(docPDF);
console.log(docPDF["content"][0]["text"]);
pdfMake.createPdf(docPDF).download();