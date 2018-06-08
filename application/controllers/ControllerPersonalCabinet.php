<?php
/**
* 
*/
class ControllerPersonalCabinet extends Controller
{
	
	public function actionIndex()
	{
		//$this->view->title="Личный кабинет";
		//$this->view->nameCurrentPage="personalCabinet";
		$this->view->generate('personalCabinetView.php');
	} 

	public function actionReportEditor()
	{

		$this->view->title="Редактор отчетов";
		$this->view->nameCurrentPage="reportEditor";
		$this->view->generate('reportEditorView.php','templatePersonalCabinet.php');
	} 
	public function actionSettings()
	{
		$this->view->title="Настройки";
		$this->view->nameCurrentPage="settings";
		$this->view->generate('settingsView.php','templatePersonalCabinet.php');
	} 
	public function actionAllReports()
	{
		$this->view->title="Просмотр отчетов";
		$this->view->nameCurrentPage="allReports";
		$this->view->generate('allReportsView.php','templatePersonalCabinet.php');
	} 
}






?>