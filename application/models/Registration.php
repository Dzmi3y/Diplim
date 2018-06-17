<?php

class Registration
{
	public static function Register($RegistrationData)
	{
	session_start();
	//include "ConnectionDB/ConnectDB.php"; 
	//throw new Exception("Error Processing Request", 1);
	

		//echo  $RegistrationData;
		$queryCheckEmailAndCompany = "SELECT ID FROM Companies WHERE Email='".$RegistrationData->Email."';";
		//echo $queryCheckEmailAndCompany;
		$CheckEmail=ConnectDB::SendQuery($queryCheckEmailAndCompany);
		//echo ;
		if(count( $CheckEmail)>0) 
		{
			$Message["Error"]="Ошибка! Пользователь с данным электронным адресом уже зарегестрирован.";
			//echo $Message["Error"];
			return '{"Error":"Ошибка! Пользователь с данным электронным адресом уже зарегестрирован."}';
		}

	  $PassValue=$RegistrationData->Password;
	  $RegistrationData->Password=md5(md5($PassValue));
	  $query= self::getQuery($RegistrationData);
	 

	  ConnectDB::SendQuery($query);
	  return(true);

	}


	public static function getQuery($RegistrationData)
	{

		$columnsDB="";
		$valuesDB="";

		

		foreach ($RegistrationData as $key => $value) 
		{
			
			if($columnsDB=="")
			{
				//if(($key=="Email")||( $key=="Password")|| ($key=="NameCompany")|| ($key=="Address"))
				if(($key!="UNP"))
				{
					$valuesDB="'".$value."'";	
				}
				else
				{
					$valuesDB=$value;
				}

				$columnsDB=$key;
				
			}
			else
			{
				//if(($key=="Email")||( $key=="Password")|| ($key=="NameCompany")|| ($key=="Address"))
				if(($key!="UNP"))
				{
					$valuesDB.=", '".$value."'";	
				}
				else
				{
					$valuesDB.=", ".$value;
				}
				$columnsDB.=", ".$key;
				
			}
			//echo $value;

		}

		$query= "INSERT INTO Companies (".$columnsDB.") VALUES(".$valuesDB.");";
		return $query;
	}



	public static function ChangeSetting($SettingData,$IDCompany)
	{


		if($SettingData->Email!=$_SESSION['Email'])
		{
			$queryCheckEmailAndCompany = "SELECT ID FROM Companies WHERE Email='".$SettingData->Email."';";
			//echo $queryCheckEmailAndCompany;
			$CheckEmail=ConnectDB::SendQuery($queryCheckEmailAndCompany);
			//echo ;
			if(count( $CheckEmail)>0) 
			{

				//$Message["Error"]="Ошибка! Пользователь с данным электронным адресом уже зарегестрирован.";
				//echo $Message["Error"];
				return '{"Error":"Ошибка! Пользователь с данным электронным адресом уже зарегестрирован."}';
			}
		}

		if(!empty($SettingData->Password))
		{
			$PassValue=$SettingData->Password;
		  	$SettingData->Password=md5(md5($PassValue));
		}

		$query = self::getQueryChangeSetting($SettingData,$IDCompany);
		ConnectDB::SendQuery($query);
	 	return(true);

	}


	public static function getQueryChangeSetting($SettingData,$IDCompany)
	{
		$flagFirst= true;
		$DataForUpdate="";
		$valuesDB = "";
		foreach ($SettingData as $key => $value) 
		{

			//if(($key=="Email")||( $key=="Password")|| ($key=="NameCompany")|| ($key=="Address"))
			if(!(($key=="Password")&&(empty($value))))
			{
				if(($key!="UNP"))
				{
					$valuesDB="'".$value."'";	
				}
				else
				{
					$valuesDB=$value;
				}


				if($flagFirst)
				{
		
					$DataForUpdate.= $key.'='.$valuesDB;
					$flagFirst=false;
				}
				else
				{	
					$DataForUpdate.= ', '.$key.'='.$valuesDB;
				}
			}

		}

		$query= "UPDATE Companies SET ".$DataForUpdate." WHERE ID=".$IDCompany;
		//echo $query;
		return $query;
	}


	public static function LoadRegisterData($CompanyID)
	{

		$query = "SELECT * FROM  Companies WHERE ID=".$CompanyID;
		return json_encode( ConnectDB::SendQuery($query));

	} 



}

	
		//include 'ConnectionDB/InfoForConnectingDB.php';
	

		// подключаем скрипт
 
		// подключаемся к серверу
		
		
		
		

	









	


	






?>