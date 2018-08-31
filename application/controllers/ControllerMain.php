<?php
class ControllerMain extends Controller
{
	public function actionIndex()
	{
		$this->view->title="Главная";
		$this->view->nameCurrentPage="main";
		$this->view->generate('mainView.php','templateView.php');
	} 
}
?>