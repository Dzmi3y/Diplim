
<?php
class ProcessingSentReports
{
	
	public static function SaveReports($year,$report)
	{


	/*	$currentYear = date('Y');
		$currentMonth=date('m');
		$currentDay=date('d');


		$insertYear;
		if($currentMonth>1)
		{
			$insertYear=$currentYear;
		}

		if(($currentMonth=1)&&($currentDay<=20))
		{
			$insertYear=$currentYear-1;
			
		}*/





		$CurrentDate=str_replace(' ','',date('Y-m-d'));
		$queryAddReport= "INSERT INTO Reports (CompanyID,Year,Date_change) VALUES(".$_SESSION['ID'].",". $year.",'".$CurrentDate."');";
		$queryGetIdReport= "SELECT ID FROM Reports WHERE  CompanyID = ".$_SESSION['ID']." AND Year=".$year;

		$ID=ConnectDB::SendQuery($queryGetIdReport);

		if( empty($ID))
		{
			ConnectDB::SendQuery($queryAddReport);
			$ID=ConnectDB::SendQuery($queryGetIdReport);

		}
		else
		{

			
		}


			self::DeleteRows("WasteTable1",$report['table1']["Delete"]);
			self::DeleteRows("WasteTable2",$report['table2']["Delete"]);


		$st1= self::SaveTablesInDB("WasteTable1",$report['table1']["Add"],$ID[0]["ID"]);

		$st= self::SaveTablesInDB("WasteTable2",$report['table2']["Add"],$ID[0]["ID"]);




		//return json_encode($ID[0]["ID"]);  

		//return json_encode($report['table1']['1']['c3']);
		return $st1;
		//return "yo";
	}


public static function SaveReportsAdmin($reportAdmin)
{

	self::DeleteRows("WasteTable1",$reportAdmin['table1']["Delete"]);
	self::DeleteRows("WasteTable2",$reportAdmin['table2']["Delete"]);

	self::SaveTablesInDB("WasteTable1",$reportAdmin['table1']["Add"],$reportAdmin["IDReport"]);

	$s=self::SaveTablesInDB("WasteTable2",$reportAdmin['table2']["Add"],$reportAdmin["IDReport"]);


	return $s;
}










	public static function DeleteRows($nameTableInDB, $tableId)
	{
		//echo "ddellllleeeetttee";
		foreach ( $tableId as $key => $value) 
		{
			$queryDelete="DELETE FROM `".$nameTableInDB."` WHERE ID=".$value;
			ConnectDB::SendQuery($queryDelete);
			//echo $queryDelete;
		}

	}




	public static function SaveTablesInDB($nameTableInDB, $table, $ReportID)
	{
		$queryAllId= "SELECT ID FROM ". $nameTableInDB;
		$AllID = ConnectDB::SendQuery($queryAllId);
		/////// доделать!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		$s='';
		//echo json_encode($AllID[0]["ID"]);
		//echo "----------------------------------------------";
		//echo $table;
		foreach ($table as $key => $value) 
		{


			$nameColumn="";
			$valueCells="";
			$flagIsNewRow=true;
			$valueForUpdate="";
			$ID_Row="";
			if(!empty($value))
			{

				foreach ($value as $key2 => $value2) 
				{



					if( ($key2=="ID")||($key2=="ReportID"))
					{
						if($key2=="ID") 
						{
							$ID_Row=$value2;
						}
					 	if($flagIsNewRow)	$flagIsNewRow=false;
					}
					else
					{

						if($flagIsNewRow)
						{
							if(empty($value2)&&(($value2!=0)||($value2!='0'))) $value2="null";

							if($nameColumn=="")
							{
								$nameColumn=$key2;
								if($key2=="CA")
								{
									$valueCells.="'".$value2."'";
								}
								else
								{
									$valueCells.=$value2;
								}
							}
							else
							{
								if($key2=="CA")
								{
									$nameColumn.=",".$key2;
									$valueCells.=",'".$value2."'";
								}
								else
								{
									$nameColumn.=",".$key2;
									$valueCells.=",".$value2;
								}
								
							}
						}
						else
						{

							if(empty($value2)&&(($value2!=0)||($value2!='0'))) $value2="null";

							if($valueForUpdate=="")
							{

								$nameColumn=$key2;
								if($key2=="CA")
								{
									$valueForUpdate="`".$key2."` = '".$value2."'";
								}
								else
								{
									$valueForUpdate="`".$key2."` = ".$value2;
								}

							}
							else
							{
								if($key2=="CA")
								{
									$valueForUpdate.=",`".$key2."` = '".$value2."'";
								}
								else
								{
									$valueForUpdate.=",`".$key2."` = ".$value2;
								}
								
							}

						}				

					}
				
				}


				$query="";
				if($flagIsNewRow)
				{
					$query= "INSERT INTO ". $nameTableInDB." ( ReportID,".$nameColumn.") VALUES(".$ReportID.",".$valueCells.");";
				}
				else
				{
					$query=" UPDATE `". $nameTableInDB."` SET ".$valueForUpdate." WHERE ID=".  $ID_Row;
				}
				//UPDATE `Companies` SET `UNP`=666 WHERE ID= 3

				//echo $query."                                                                                          ";
				ConnectDB::SendQuery($query);

				$s.= $query."    ";

			}
		}

 	

	





		return $s;
	}
	
}
?>