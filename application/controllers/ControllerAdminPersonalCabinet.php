<?php
/**
* 
*/
class ControllerAdminPersonalCabinet extends Controller
{
	
	public function actionIndex()
	{
		$this->view->title="Личный кабинет администратора";
		$this->view->nameCurrentPage="AdminPersonalCabinet";
		$this->view->generate('personalCabinetView.php','templatePersonalCabinet.php');
	} 

	public function actionSearchReport()
	{
		$this->view->title="Поиск отчетов";
		$this->view->nameCurrentPage="searchReport";
		$this->view->generate('searchReportView.php','templatePersonalCabinet.php');
	} 
	public function actionSearchCompanies()
	{
		$this->view->title="Поиск предприятий";
		$this->view->nameCurrentPage="searchCompanies";
		$this->view->generate('searchCompaniesView.php','templatePersonalCabinet.php');
	} 

}






?>