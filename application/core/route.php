<?php
/**
* Singltone class for routers
*/
class Route 
{
	
	static function start()
	{
		session_start();
		$controllerName='Main';
		$actionName='index';

		$routes= explode('/', $_SERVER['REQUEST_URI']);
		


		/**
		*Get controller name
		*/
		if (!empty($routes[1]))
		{
			$controllerName=$routes[1];
		
		}


		/**
		*Get action name
		*/
		if (!empty($routes[2]))
		{
			$actionName=$routes[2];
		}

		if(($controllerName=="Registration")||($controllerName=="registration")||($controllerName=="resetPassword"))
		{
			if(!empty($_SESSION['Email']))
			{
				header("Location: http://".$_SERVER['HTTP_HOST']."/main");
			}
		}
			

		if(($controllerName=="PersonalCabinet")||($controllerName=="personalCabinet"))
		{
			if(empty($_SESSION['Email']))
			{
				header("Location: http://".$_SERVER['HTTP_HOST']."/main");
			}
		}
		if(($controllerName=="AdminPersonalCabinet")||($controllerName=="adminPersonalCabinet"))
		{
			if(empty($_SESSION['IsAdmin']))
			{
				header("Location: http://".$_SERVER['HTTP_HOST']."/main");
			}
		}

		/**
		* Add prefixes
		*/
		$modelName='Model'.ucfirst($controllerName);
		$controllerName='Controller'.ucfirst($controllerName);
		$actionName='action'.ucfirst($actionName);



		/**
		*Add file with controller class
		*/
		$controllerFile=$controllerName.'.php';
		$controllerPath=realpath(__DIR__ . '/..')."/controllers/".$controllerFile;
		Route::AddFileWithClass($controllerPath);



		/**
		*Add file with model class
		*/
		
		$modelFile=$modelName.'.php';
		$modelPath=realpath(__DIR__ . '/..')."/models/".$modelFile;
		Route::AddFileWithClass($modelPath,true);



		/**
		*Create controller
		*/
		$controller= new $controllerName;
		$action = $actionName;

		if(method_exists($controller, $action))
		{

			$controller->$action();
		}
		else
		{
			// need to throw an exception
			Route::ErrorPage404();
		}

	}

	function AddFileWithClass($fileDirectory,$isModel=false)
	{


		if(file_exists($fileDirectory))
		{

			include $fileDirectory;
		}
		else
		{
			// need to throw an exception
			if(!$isModel)
			{
				Route::ErrorPage404();
			}
		}
	}



	function ErrorPage404()
	{
        $host = 'http://'.$_SERVER['HTTP_HOST'].'/';
        header('HTTP/1.1 404 Not Found');
		header("Status: 404 Not Found");
		header('Location:'.$host.'404');
    }
}

?>