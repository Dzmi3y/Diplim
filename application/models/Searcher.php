<?php
class Searcher
{
	public static function SearchCurrentReport($ID_Company)
	{
		$currentYear = date('Y');
		$currentMonth=date('m');
		$currentDay=date('d');

		$searchYear;
		if($currentMonth>1)
		{
			$searchYear=$currentYear;
		}

		if(($currentMonth=1)&&($currentDay<=20))
		{
			$searchYear=$currentYear-1;
			
		}

		
		$query= "SELECT ID FROM Reports WHERE  CompanyID = ".$ID_Company." and Year <=".$searchYear;

		$report=ConnectDB::SendQuery($query);

		return $report[0]["ID"];
	}


	public static function GetArrayYearId($ID_Company)
	{	
		$query= "SELECT ID,Year FROM Reports WHERE  CompanyID = ".$ID_Company;
		return ConnectDB::SendQuery($query);
	}


	public static function GetWasteTable($NameWasteTable,$ID_Report)
	{
		$query= "SELECT * FROM ".$NameWasteTable." WHERE  ReportID = ".$ID_Report;
		return ConnectDB::SendQuery($query);
	}




	public static function GetAllArrayYearId()
	{	
		$query= "select C.ID as IDCompany,  C.NameCompany, R.ID as IDReport , R.Year  from Companies as C INNER JOIN Reports as R on C.ID = R.CompanyID;"; 
		return ConnectDB::SendQuery($query);
	}


}
?>