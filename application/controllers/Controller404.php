<?php
/**
* 
*/
class Controller404 extends Controller
{
	
	public function actionIndex()
	{
		$this->view->title="Ошибка 404";
		$this->view->generate('404View.php','templateView.php');
	} 
}

?>