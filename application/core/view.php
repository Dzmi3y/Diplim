<?php
class View
{
	public $title;
	public $nameCurrentPage;

	public function generate($contentView, $templateView, $data=null)
	{
		$title=$this->title;
		$active[$this->nameCurrentPage]="active";
		$pathAuthorize = Authorization::getPathContentAuthorizeBlock();
		include 'application/views/template/'.$templateView;
	}
}
?>