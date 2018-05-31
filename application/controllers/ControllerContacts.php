<?php
/**
* 
*/
class ControllerContacts extends Controller
{
	
	public function actionIndex()
	{
		$this->view->title="Контакты";
		$this->view->nameCurrentPage="contacts";
		$this->view->generate('contactsView.php','templateView.php');
	} 
}



?>