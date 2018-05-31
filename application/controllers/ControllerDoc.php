<?php
/**
* 
*/
class ControllerDoc extends Controller
{
	
	public function actionIndex()
	{
		$this->view->title="Документация";
		$this->view->nameCurrentPage="doc";
		$this->view->generate('docView.php','templateView.php');
	} 
}



?>