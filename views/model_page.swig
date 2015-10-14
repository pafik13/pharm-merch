{% if data %}
	<div id="{{ data.tab_id }}" class="tab-pane fade" ng-controller="{{ data.angularController }}">
						<!-- Page Heading -->
						<div class="row">
							<div class="col-lg-12">
								<h1 class="page-header">
									 {{ data.pageCaption }}<small>Основная информация</small>													
									<p data-placement="top" data-toggle="tooltip" title="Добавить аптеку"><button class="btn btn-danger btn-xs" data-title="{{ data.add_form_id }}" data-toggle="modal" data-target="#{{ data.add_form_id }}" ><i class="fa fa-plus"></i></button></p>
								</h1>
							</div>
						</div>
						
						<!-- /.row -->
						<!-- FILTER -->
						<div class="row">
							<div class="col-md-1 col-lg-6 ">
								<form id="custom-search-form" class="form-search form-horizontal pull-left">
									<div class="input-append span12">
										<input type="text" ng-model="search" class="search-query mac-style" placeholder="Поиск">
										<button type="submit" class="btn"><i class="icon-search"></i></button>
									</div>
								</form>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-8 pull-left">
								<div class="panel">
									<div class="label label-default">Кол-во: <span ng-bind="drugs.length"></span></div>
								</div>
							</div>
							<div class="col-lg-1 pull-right">
								<div class="btn btn-checkbox" ng-model="view" ng-click="view = view == 'grid'? 'tile': 'grid'">
									<span class="glyphicon" ng-class="view == 'grid'? 'glyphicon glyphicon-list':'glyphicon glyphicon-th'"></span>
								</div>
							</div>
						</div>	
						<div class="row" ng-switch on="view">
							<div ng-switch-when="tile">
								<div class="col-lg-6 col-md-6" ng-repeat="{{ data.angularRepeat }} | filter: search">					
										<div class="panel panel-green">
											{% include 'partials/tile.swig' with data%} 
											<a ng-click="init_update({{ data.angularElement }}.id)" href="#{{ data.update_form_id }}" data-toggle="modal" data-placement="top" data-toggle="tooltip" title="Просмотр дополнительных сведений">
												<div class="panel-footer">
												<span class="pull-left"><h4>Подробнее</h4></span>
												<span class="pull-right"><i class="fa fa-arrow-circle-right fa-2x"></i></span>
												<div class="clearfix"></div>
												</div>
											</a>
										</div>
								</div>
							</div>
								<div ng-switch-when="grid">
									<div class="table-responsive">
									  <table id="mytable" class="table table-bordered table-striped">
										<tr ng-repeat="{{ data.angularRepeat }} | filter: search">
										 {% include 'partials/table.swig' with data %} 
										</tr>
									  </table>
									</div>								
								</div>
							<!-- MODAL -->	
							<div class="modal fade" id="{{ data.add_form_id }}" tabindex="-1" role="dialog" aria-labelledby="{{ data.add_form_id }}" aria-hidden="true">
								<div class="modal-dialog">		    
									<div class="modal-content">
										<div class="modal-header">
											<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
											<h4 class="modal-title custom_align" id="Heading">{{ data.modal_caption }}</h4>
										</div>
										<div class="modal-body">
				                         {% include 'partials/modal.swig' with data %} 
										</div>
										<div class="modal-footer ">
											<button ng-click="create()" type="button" class="btn btn-warning btn-lg" style="width: 100%;"><span class="glyphicon glyphicon-ok-sign"></span> Добавить</button>
										</div>
									</div>
								</div>
							</div>	
							
							<div class="modal fade" id="{{ data.upd_form_id }}" tabindex="-1" role="dialog" aria-labelledby="{{ data.upd_form_id }}" aria-hidden="true">
								<div class="modal-dialog">		    
									<div class="modal-content">
										<div class="modal-header">
											<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
											<h4 class="modal-title custom_align" ng-bind="{{ data.angularElementLast }}.fullName" id="modal-title"></h4>
										</div>
										<div class="modal-body">
											{% include 'partials/modal.swig' with data %} 				
										</div>
										<div class="modal-footer ">
											<button ng-click="update({{ data.angularElementLast }}.id)" type="button" class="btn btn-success"><span class="glyphicon glyphicon-ok-sign"></span> Сохранить</button>
											<button type="button" data-dismiss="modal" class="btn btn-default" ><span class="glyphicon glyphicon-remove"></span> Закрыть</button>
										</div>

									</div>
								</div>
							</div>	
						</div>
						<!-- /.row -->
					</div>
{% endif %}					