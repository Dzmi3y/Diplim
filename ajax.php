<?php
	
	
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

	session_start();
	include "application/models/ConnectionDB/ConnectDB.php"; 
	include 'application/models/Authorization.php';
	include 'application/models/Registration.php';
	include 'application/models/ProcessingSentReports.php';
	include 'application/models/LoaderReports.php';
	include 'application/models/Searcher.php';
	include 'application/models/NewPasswordGenerator.php';


   
	if(isset($_POST['registration'])) 
	{
		
		//error_reporting(E_ALL);
		//header("Content-type: text/txt; charset=UTF-8");
		
		$RegistrationData= json_decode($_POST['registration']);
		//echo $RegistrationData;
		echo Registration::Register($RegistrationData);
		//echo "lol";

	}


	if(isset($_POST['authorize'])) 
	{
		
		//error_reporting(E_ALL);
			$auth= $_POST['authorize']; 
			//echo "fuuu";
			//echo json_decode($auth);
			echo Authorization::SignIn($auth);
				
	

	}



	if(isset($_POST['exit'])) 
	{
		Authorization::SignOut();	
	}


	if(isset($_POST['ReportOfUser'])) 
	{
		
		$reportArray= $_POST['ReportOfUser']; 
		$year=$reportArray['year'];
		$report=$reportArray['report'];
		
		//echo  json_encode($report["table1"]["Add"]) ;
		//echo json_encode($report) ;

		echo ProcessingSentReports::SaveReports($year,$report);
				
	

	}



	if(isset($_POST['reportAdmin'])) 
	{
		
		$reportAdmin= $_POST['reportAdmin']; 
		
		//echo  json_encode($report["table1"]["Add"]) ;


		echo ProcessingSentReports::SaveReportsAdmin($reportAdmin);
				
	

	}




	if(isset($_POST['IDCompanyForLoadCurrentReport'])) 
	{
		
		$CompanyID= $_SESSION['ID']; 
		
		//echo  json_encode( $report["table1"][1]);

		//echo "Company: ". $CompanyID ;
		$ReportID= Searcher::SearchCurrentReport($CompanyID);
		
		if (empty($ReportID))
		{
	 		echo "";	
		}
		else
		{
			echo LoaderReports::Load($ReportID);
		}
		//
				
	///echo "im is loaded!";


	}


	if(isset($_POST['GetArrayYearId'])) 
	{
		
		$CompanyID= $_SESSION['ID']; 
		//echo  json_encode( $report["table1"][1]);
		//echo $CompanyID;
		echo  json_encode( Searcher::GetArrayYearId($CompanyID));

		//echo $ReportID;
		//echo LoaderReports::Load($ReportID);
				
	///echo "im is loaded!";


	}





	if(isset($_POST['GetWasteTables'])) 
	{
		
		$ReportID= $_POST['GetWasteTables'];

		$tables["table1"]=Searcher::GetWasteTable("WasteTable1",$ReportID);
		$tables["table2"]=Searcher::GetWasteTable("WasteTable2",$ReportID);
		echo json_encode($tables);

	}


	

	if(isset($_POST['SettingChange'])) 
	{
		
		$CompanyID= $_SESSION['ID']; 
		$SettingData= json_decode($_POST['SettingChange']);
		echo Registration::ChangeSetting($SettingData,$CompanyID);
		//echo "lol";

	}



	if(isset($_POST['SettingLoad'])) 
	{
		
		$CompanyID= $_SESSION['ID']; 
		echo Registration::LoadRegisterData($CompanyID);
		//echo "lol";

	}





if(isset($_POST['GetArrayYearIdForAdmin'])) 
	{
		
		
		//echo  json_encode( $report["table1"][1]);
		$CompanyID= $_SESSION['ID']; 
		//echo $CompanyID;

		echo  json_encode(Searcher::GetAllArrayYearId($CompanyID));
		//echo Searcher::GetAllArrayYearId($CompanyID);

		//echo $ReportID;
		//echo LoaderReports::Load($ReportID);
				
	///echo "im is loaded!";


	}


	if(isset($_POST['AdminIDCompanyForLoadCurrentReport'])) 
	{
		
		//$CompanyID= $_POST['AdminIDCompanyForLoadCurrentReport'];
		
		//echo  json_encode( $report["table1"][1]);
		//echo $CompanyID;
		$ReportID= $_POST['AdminIDCompanyForLoadCurrentReport'];
		//echo $ReportID;
		echo LoaderReports::Load($ReportID);
				
	///echo "im is loaded!";


	}


	


	if(isset($_POST['GetListDataSearch'])) 
	{
		
		//$CompanyID= $_POST['AdminIDCompanyForLoadCurrentReport'];
		
		//echo  json_encode( $report["table1"][1]);
		//echo $CompanyID;


		$queryGetAllNameCompanies = "SELECT NameCompany FROM Companies";
		$queryGetAllYears ="SELECT DISTINCT Year FROM Reports";

		$getData["NameCompany"]= ConnectDB::SendQuery($queryGetAllNameCompanies);
		$getData["Year"]= ConnectDB::SendQuery($queryGetAllYears);

		//echo $ReportID;
		echo json_encode($getData);
				
	///echo "im is loaded!";


	}


	if(isset($_POST['GetListDataSearchUser'])) 
	{
		
		//$CompanyID= $_POST['AdminIDCompanyForLoadCurrentReport'];
		
		//echo  json_encode( $report["table1"][1]);
		//echo $CompanyID;


		
		$queryGetAllYears ="SELECT DISTINCT Year FROM Reports where  CompanyID= ".$_SESSION['ID'].";";

		$getData["Year"]= ConnectDB::SendQuery($queryGetAllYears);

		//echo $ReportID;
		echo json_encode($getData);
				
	///echo "im is loaded!";


	}


	if(isset($_POST['GetAllCompanies'])) 
	{
		
		//$CompanyID= $_POST['AdminIDCompanyForLoadCurrentReport'];
		
		//echo  json_encode( $report["table1"][1]);
		//echo $CompanyID;
		$queryGetAllNameCompanies = "SELECT * FROM Companies";


		$getData= ConnectDB::SendQuery($queryGetAllNameCompanies);
		

		//echo $ReportID;
		echo json_encode($getData);
				
		///echo "im is loaded!";
	}

	if(isset($_POST['resetPassword'])) 
	{
		$Email= $_POST['resetPassword']; 

		 
		

		echo  NewPasswordGenerator::Generate($Email);
	}

	/*if(isset($_POST['LoadSearchReports'])) 
	{
		
		//$CompanyID= $_POST['AdminIDCompanyForLoadCurrentReport'];
		
		//echo  json_encode( $report["table1"][1]);
		//echo $CompanyID;
		
		

		//echo $ReportID;
		echo "Перешол";
				
		///echo "im is loaded!";
	}*/



	


	if(isset($_POST['GetIDYearReport'])) 
	{
		
		//$CompanyID= $_POST['AdminIDCompanyForLoadCurrentReport'];
		
		//echo  json_encode( $report["table1"][1]);
		//echo $CompanyID;
		$CompanyID= $_POST['GetIDYearReport'];
		//echo $ReportID;

		$queryIdYear = "SELECT ID,Year FROM Reports WHERE CompanyID=".$CompanyID;
		$getData= ConnectDB::SendQuery($queryIdYear);
		
		//echo $ReportID;
		echo json_encode($getData);
		

	///echo "im is loaded!";
	}


	if(isset($_POST['DeleteReport']))
	{
		$IDReport =	$_POST['DeleteReport'];
		echo Searcher::DeleteReport($IDReport);
	}

	

?>
