<?php


class LoaderReports 
{
	
	public static function Load($ID_Report)
	{

		
		$QueryTable1= "SELECT * FROM WasteTable1 WHERE  ReportID=".$ID_Report;	
		$QueryTable2= "SELECT * FROM WasteTable2 WHERE  ReportID=".$ID_Report;

		$WasteTable1=ConnectDB::SendQuery($QueryTable1);
		$WasteTable2=ConnectDB::SendQuery($QueryTable2);


		$Report["Table1"]=$WasteTable1;
		$Report["Table2"]=$WasteTable2;

		return json_encode($Report);


		
	}
}


?>