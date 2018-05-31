<?php
/**
 * base class for controllers
 */
 class Controller 
 {
 	
 	public $view;
 	public $model;

 	function __construct()
 	{
 		$this->view= new View();
 	}


 	// method for overriding
 	public function actionIndex()
 	{

 	}


 } 


?>