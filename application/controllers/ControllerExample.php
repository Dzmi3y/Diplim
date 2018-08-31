<?php
class ControllerExample extends Controller
{
	function __construct()
	{
		$this->model= new ModelExample();
		$this->view= new View();
	}

	function actionIndex()
	{
		$data=$this->model->getData();
		$this->view->title="Пример";
		$this->view->nameCurrentPage="example";
		$this->view->generate('exampleView.php','templateView.php',$data);
	}
}
?>