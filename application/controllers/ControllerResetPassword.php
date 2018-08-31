<?php
class ControllerResetPassword extends Controller
{
	public function actionIndex()
	{
		$this->view->title="Сброс пароля";
		$this->view->generate('resetPasswordView.php','templateView.php');
	} 
}