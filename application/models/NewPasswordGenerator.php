<?php
require "application/models/SendEmail/SendEmail.php"; 
class NewPasswordGenerator 
{
	public static function Generate($email)
	{
		$EmailIsCorrect=self::CheckEmail($email);
		if($EmailIsCorrect)
		{
			$NewPass= self::GetNewPassword();
			$Message= self::CreateMessage($email,$NewPass);
			$SendingWasSuccessfull=self::SendPasswordOnEmail($email,$Message);
			if($SendingWasSuccessfull)
			{
				self::SavePassword($email,$NewPass);
				return true;
			}
			else
			{
				return '{"Error":"Ошибка! Неверный Email."}';
			}
		}
		else
		{
			return '{"Error":"Ошибка! Пользователь с данным адресом не зарегистрирован."}';
		}	
	}

	public static function GetNewPassword()
	{
		$arr = array('a','b','c','d','e','f',
                 'g','h','i','j','k','l',
                 'm','n','o','p','r','s',
                 't','u','v','x','y','z',
                 'A','B','C','D','E','F',
                 'G','H','I','J','K','L',
                 'M','N','O','P','R','S',
                 'T','U','V','X','Y','Z',
                 '1','2','3','4','5','6',
                 '7','8','9','0','.',',',
                 '(',')','[',']','!','?',
                 '&','^','%','@','*','$',
                 '<','>','/','|','+','-',
                 '{','}','`','~');
    	$pass = "";
    	for($i = 0; $i < 8; $i++)
    	{
    	  $index = rand(0, count($arr) - 1);
    	  $pass .= $arr[$index];
    	}
    	return $pass;	
	}

	public static function CheckEmail($email)
	{
		$queryCheckEmail ="SELECT ID FROM Companies WHERE Email='".$email."';" ;

		$AnswerFromDB=ConnectDB::SendQuery($queryCheckEmail);
		if(count($AnswerFromDB)>0)
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	public static function CreateMessage($email,$password)
	{
		$msg="Новый пароль для входа да сайт заполнения госстатотчетности 1-отходы:</br> <strong>(".$password.")</strong>. </br> Вы можете поменять пароль в настройках личного кабинета.";
		return $msg;
	}

	public static function SendPasswordOnEmail($email,$message)
	{
		return	SendEmail::Send($email,$message);
	}

	public static function SavePassword($email,$password)
	{
		$shPassword=md5(md5($password));
		$query= "UPDATE Companies SET Password='".$shPassword."' WHERE Email='".$email."';";
		ConnectDB::SendQuery($query);	
	}
}
?>