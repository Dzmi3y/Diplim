<?php
class ControllerRegistration extends Controller
{
	function actionIndex()
	{
		$this->view->title="Регистрация";
		$this->view->nameCurrentPage="registration";
		$this->view->generate('registrationView.php','templateView.php');
	}
}
?>