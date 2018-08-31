<?php
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
		$RegistrationData= json_decode($_POST['registration']);
		echo Registration::Register($RegistrationData);
	}

	if(isset($_POST['authorize'])) 
	{
		error_reporting(E_ALL);
		$auth= $_POST['authorize']; 
		echo Authorization::SignIn($auth);
	}

	if(isset($_POST['exit'])) 
	{
		Authorization::SignOut();	
	}

	if(isset($_POST['report'])) 
	{
		$report= $_POST['report']; 
		echo ProcessingSentReports::SaveReports($report);
	}

	if(isset($_POST['reportAdmin'])) 
	{
		$reportAdmin= $_POST['reportAdmin']; 
		echo ProcessingSentReports::SaveReportsAdmin($reportAdmin);
	}

	if(isset($_POST['IDCompanyForLoadCurrentReport'])) 
	{
		
		$CompanyID= $_SESSION['ID']; 
		$ReportID= Searcher::SearchCurrentReport($CompanyID);
		
		if (empty($ReportID))
		{
	 		echo "";	
		}
		else
		{
			echo LoaderReports::Load($ReportID);
		}
	}


	if(isset($_POST['GetArrayYearId'])) 
	{
		$CompanyID= $_SESSION['ID']; 
		echo  json_encode( Searcher::GetArrayYearId($CompanyID));
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
	}

	if(isset($_POST['SettingLoad'])) 
	{
		$CompanyID= $_SESSION['ID']; 
		echo Registration::LoadRegisterData($CompanyID);
	}

	if(isset($_POST['GetArrayYearIdForAdmin'])) 
	{
		echo  json_encode(Searcher::GetAllArrayYearId());
	}


	if(isset($_POST['AdminIDCompanyForLoadCurrentReport'])) 
	{
		$ReportID= $_POST['AdminIDCompanyForLoadCurrentReport'];
		echo LoaderReports::Load($ReportID);

	}

	if(isset($_POST['GetListDataSearch'])) 
	{
		$queryGetAllNameCompanies = "SELECT NameCompany FROM Companies";
		$queryGetAllYears ="SELECT DISTINCT Year FROM Reports";

		$getData["NameCompany"]= ConnectDB::SendQuery($queryGetAllNameCompanies);
		$getData["Year"]= ConnectDB::SendQuery($queryGetAllYears);

		echo json_encode($getData);
	}



	if(isset($_POST['GetAllCompanies'])) 
	{
		$queryGetAllNameCompanies = "SELECT * FROM Companies";
		$getData= ConnectDB::SendQuery($queryGetAllNameCompanies);
		
		echo json_encode($getData);
	}

	if(isset($_POST['resetPassword'])) 
	{
		$Email= $_POST['resetPassword']; 
		echo  NewPasswordGenerator::Generate($Email);
	}
	

	if(isset($_POST['GetIDYearReport'])) 
	{
		$CompanyID= $_POST['GetIDYearReport'];

		$queryIdYear = "SELECT ID,Year FROM Reports WHERE CompanyID=".$CompanyID;
		$getData= ConnectDB::SendQuery($queryIdYear);

		echo json_encode($getData);
	}
?>