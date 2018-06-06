<?php
/**
* base class view
*/
class View
{
	// Can specify a template
	public $title;
	public $nameCurrentPage;
	
	// method for overriding
	public function generate($contentView, $templateView=null, $data=null)
	{

		if($templateView!=null)
		{
			//session_start();
			$title=$this->title;
			$active[$this->nameCurrentPage]="active";
			$pathAuthorize = Authorization::getPathContentAuthorizeBlock();
		

			/* закинуть в отдельный файл*/
			//include 'application/models/CheckAuthorization.php';
			
			
			include 'application/views/template/'.$templateView;
		}
		else
		{
			include 'application/views/'.$contentView;
		}
	}


	


}
?>