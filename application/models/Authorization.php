<?php


class Authorization 
{
	
	
	public static function getPathContentAuthorizeBlock()
	{
		if(!empty($_SESSION['Email']))
		{
			if ( !empty($_SESSION['IsAdmin']))
			{
				if ( $_SESSION['IsAdmin']==true)
				{
					return 'adminBlok.php';
				}
				else
				{
					return 'userBlok.php';
				}
			}
			else
			{
				return 'userBlok.php';
			}
		}
		else
		{
			return 'autorizeBlok.php';
		}

	}


	public static function SignIn($auth)
	{


		
		
		
		header("Content-type: text/txt; charset=UTF-8");
		
		if(($auth["email"]=="Admin@gmail.com")&&($auth["pass"]=="12345"))
		{
			$_SESSION['Email']=$auth["email"];
			$_SESSION['IsAdmin']=true;
				return true;
		}
		else
		{

			$query='select ID,Password from Companies where Email="'.$auth["email"].'";';
			//echo $query;
			$conn=ConnectDB::SendQuery($query);

			
			//echo json_encode($conn);
			if(!empty($conn) )
			{
				if(md5(md5($auth["pass"]))==$conn[0]["Password"] )
				{
					$_SESSION['Email']=$auth["email"];
					$_SESSION['ID']=$conn[0]["ID"];
					return true;
				}
			
				return false;
				

			}
			else
			{

				$query2='select Address from Companies ;';
				$co=ConnectDB::SendQuery($query2);
				$jso= json_encode($co);
				//echo "2!!";
				return $jso;
				
			}
		}

		/*if(($auth["email"]=="fff@gmail.com")&&($auth["pass"]=="1234"))
		{
			$_SESSION['Email']="Nic";
			echo "true";		
		}
		else
		{
			echo "false";
		} */
	}

	public static function SignOut()
	{
		session_start();
		unset($_SESSION['Email']);
		unset($_SESSION['IsAdmin']);
		unset($_SESSION['ID']);
	}


}

?>