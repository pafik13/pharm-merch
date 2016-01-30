<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>ИС - "Аптечные мерчендайзеры"</title>

    <!-- Bootstrap Core CSS -->
<!--     <link href="/styles/bootstrap.min.css" rel="stylesheet"> -->

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

    <!-- Custom CSS -->
    <link href="/styles/main.css" rel="stylesheet">

    <!-- Morris Charts CSS -->
    <link href="/styles/plugins/morris.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <!--<link href="/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- CUSTOM STYLES  -->
    <style>
      .ellipsis {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    </style>

</head>

<body ng-app="App">
  <div id="wrapper"  ng-controller="menuController">
    <!-- Navigation -->
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">ИС - "Аптечные мерчендайзеры"</a>
      </div>
      <!-- Top Menu Items -->
      <ul class="nav navbar-right top-nav">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-envelope"></i> <b class="caret"></b></a>
            <ul class="dropdown-menu message-dropdown">
                <li class="message-preview">
                    <a href="#">
                        <div class="media">
                            <span class="pull-left">
                                <img class="media-object" src="" alt="">
                            </span>
                            <div class="media-body">
                                <h5 class="media-heading"><strong> {{ user.username }}</strong>
                                </h5>
                                <p class="small text-muted"><i class="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                                <p>Lorem ipsum dolor sit amet, consectetur...</p>
                            </div>
                        </div>
                    </a>
                </li>
                <li class="message-preview">
                    <a href="#">
                        <div class="media">
                            <span class="pull-left">
                                <img class="media-object" src="" alt="">
                            </span>
                            <div class="media-body">
                                <h5 class="media-heading"><strong>{{ user.username }}</strong>
                                </h5>
                                <p class="small text-muted"><i class="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                                <p>Lorem ipsum dolor sit amet, consectetur...</p>
                            </div>
                        </div>
                    </a>
                </li>
                <li class="message-preview">
                    <a href="#">
                        <div class="media">
                            <span class="pull-left">
                                <img class="media-object" src="" alt="">
                            </span>
                            <div class="media-body">
                                <h5 class="media-heading"><strong>{{ user.username }}</strong>
                                </h5>
                                <p class="small text-muted"><i class="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                                <p>Lorem ipsum dolor sit amet, consectetur...</p>
                            </div>
                        </div>
                    </a>
                </li>
                <li class="message-footer">
                    <a href="#">Read All New Messages</a>
                </li>
            </ul>
        </li>
        <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-bell"></i> <b class="caret"></b></a>
            <ul class="dropdown-menu alert-dropdown">
                <li>
                    <a href="#">Alert Name <span class="label label-default">Alert Badge</span></a>
                </li>
                <li>
                    <a href="#">Alert Name <span class="label label-primary">Alert Badge</span></a>
                </li>
                <li>
                    <a href="#">Alert Name <span class="label label-success">Alert Badge</span></a>
                </li>
                <li>
                    <a href="#">Alert Name <span class="label label-info">Alert Badge</span></a>
                </li>
                <li>
                    <a href="#">Alert Name <span class="label label-warning">Alert Badge</span></a>
                </li>
                <li>
                    <a href="#">Alert Name <span class="label label-danger">Alert Badge</span></a>
                </li>
                <li class="divider"></li>
                <li>
                    <a href="#">View All</a>
                </li>
            </ul>
        </li>
        <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i> {{ manager.shortName }} <b class="caret"></b></a>
            <ul class="dropdown-menu">
                <li>
                    <a href="#"><i class="fa fa-fw fa-user"></i> Profile</a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-fw fa-envelope"></i> Inbox</a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-fw fa-gear"></i> Settings</a>
                </li>
                <li class="divider"></li>
                <li>
                    <a href="/logout?next=login"><i class="fa fa-fw fa-power-off"></i> Log Out</a>
                </li>
            </ul>
        </li>
      </ul>
      <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
      <div class="collapse navbar-collapse navbar-ex1-collapse">
        <ul class="nav navbar-nav side-nav">
          <li><a data-toggle="pill" href="#main"><i class="fa fa-fw fa-dashboard"></i> Главная</a></li>
          <li class="divider"></li>
					<li><a data-toggle="pill" href="#projects" ng-model="menuProjects" ng-click="update_projects()">Проекты</a></li>
					<li><a data-toggle="pill" href="#merchants" ng-model="menuMerchants" ng-click="update_merchants()">Мерчендайзеры</a></li>
					<li><a data-toggle="pill" href="#managers" ng-model="menuManagers" ng-click="update_managers()">Менеджеры</a></li>
					<li><a data-toggle="pill" href="#pharmacies" ng-model="menuPharmacies" ng-click="update_pharmacies()">Аптеки</a></li>
					<li><a data-toggle="pill" href="#drugs" ng-model="menuDrugs" ng-click="update_drugs()">Препараты</a></li>
					<li><a data-toggle="pill" href="#companies" ng-model="menuCompanies" ng-click="update_companies()">Компании</a></li>
					<li><a data-toggle="pill" href="#territories" ng-model="menuTerritories" ng-click="update_territories()">Территории</a></li>
					<li><a data-toggle="pill" href="#druginfotypes" ng-model="menuDrugInfoTypes" ng-click="update_druginfotypes()">Типы данных</a></li>
					<li><a data-toggle="pill" href="#hospitals" ng-model="menuHospitals" ng-click="update_hospitals()">Поликлиники</a></li>
					<li><a data-toggle="pill" href="#tradenets" ng-model="menuTradenets" ng-click="update_tradenets()">Сети</a></li>
          <li>
            <a href="#reports" data-toggle="collapse" data-target="#reports"><i class="fa fa-fw fa-database"></i> Отчеты <i class="fa fa-fw fa-caret-down"></i></a>
            <ul  id="reports" class="collapse in active">
              <li><a href="/Report/Merchants">Мерчендайзеры</a></li>
              <li><a href="/Report/DailyAll?date={{dDate|date('Y-m-d')}}">Отчет ежедневный</a></li>
            </ul>
          </li>
          <li>
            <a href="#admin" data-toggle="collapse" data-target="#admin"><i class="fa fa-fw fa-gears"></i> Tools<i class="fa fa-fw fa-caret-down"></i></a>
						<ul id="admin" class="collapse in active">
							<li><a data-toggle="pill" href="#sql">Запросы</a></li>
						</ul>
          </li>
        </ul>
      </div>
    <!-- /.navbar-collapse -->
    </nav>

    <div id="page-wrapper">
      <div class="container-fluid">
        <div class="tab-content">
          <div id="main" class="tab-pane fade in active">
                <!-- Page Heading -->
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">
                            Blank Page
                            <small>Subheading</small>
                        </h1>
                        <ol class="breadcrumb">
                            <li>
                                <i class="fa fa-dashboard"></i>  <a href="index.html">Dashboard</a>
                            </li>
                            <li class="active">
                                <i class="fa fa-file"></i> Blank Page
                            </li>
                        </ol>
                    </div>
                </div>
                <!-- /.row -->
          </div>
					<div id="merchants" class="tab-pane fade" ng-controller="merchantList">
            <page-with-tiles page-header="Мерчендайзеры" add-button-caption="Добавить нового мерчендайзера" items="users" tile-class="panel-primary" tile-icon="fa fa-user-md fa-5x" field-for-tile-caption="lastName" field-for-tile-r-row-1="email" update="init_update(id)" create="init_create()" create-id="add" update-id="update"></page-with-tiles>

            <modal caption="Новый мерчендайзер" modal-id="add" action="create()" content-url='/templates/modal/merchant.html' last="last_user"></modal>

            <modal caption="Обновление:" modal-id="update" action="update(id)" content-url='/templates/modal/merchant.html' last="last_user"></modal>
					</div>
					<!-- START MANAGERS -->
					<div id="managers" class="tab-pane fade" ng-controller="managersList">
            <page-with-tiles page-header="Менеджеры" add-button-caption="Добавить нового менеджера" items="managers" tile-class="panel-primary" tile-icon="fa fa-user-md fa-5x" field-for-tile-caption="fullName" field-for-tile-r-row-1="email" update="init_update(id)" create="init_create()" create-id="manager_add" update-id="manager_update"></page-with-tiles>

						<div class="modal fade" id="manager_add" tabindex="-1" role="dialog" aria-labelledby="add" aria-hidden="true">
							<div class="modal-dialog">
								<div class="modal-content">
									<div class="modal-header">
										<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
										<h4 class="modal-title custom_align" id="Heading">Новый мерчендайзер</h4>
									</div>
									<div class="modal-body">
										<div class="form-group">
											<input class="form-control" ng-model="last_manager.firstName" type="text" placeholder="Имя">
										</div>
										<div class="form-group">
											<input class="form-control" ng-model="last_manager.middleName" type="text" placeholder="Отчество">
										</div>
										<div class="form-group">
											<input class="form-control" ng-model="last_manager.lastName" type="text" placeholder="Фамилия">
										</div>
										<div class="checkbox">
											<label><input type="checkbox" ng-model="last_manager.sex" ng-checked="last_manager.sex == 1" ng-true-value="1" ng-false-value="0">Мужчина</label>
										</div>
										<div class="form-group">
											<input class="form-control" ng-model="last_manager.phone" type="text" placeholder="Телефон">
										</div>
										<div class="form-group">
											<input class="form-control" ng-model="last_manager.email"  type="text" placeholder="Эл. почта">
										</div>
									</div>
									<div class="modal-footer ">
										<button ng-click="create()" type="button" class="btn btn-warning btn-lg"><span class="glyphicon glyphicon-ok-sign"></span> Добавить</button>
									</div>
								</div>
							</div>
						</div>
						<div class="modal fade" id="manager_update" tabindex="-1" role="dialog" aria-labelledby="add" aria-hidden="true">
							<div class="modal-dialog">
								<div class="modal-content">
									<div class="modal-header">
										<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
										<h4 ng-bind="last_manager.firstName" class="modal-title custom_align" id="Heading"></h4>
									</div>
									<div class="modal-body">
										<div class="form-group">
											<input class="form-control " ng-model="last_manager.firstName" type="text" placeholder="Имя">
										</div>
										<div class="form-group">
											<input class="form-control " ng-model="last_manager.middleName" type="text" placeholder="Отчество">
										</div>
										<div class="form-group">
											<input class="form-control " ng-model="last_manager.lastName" type="text" placeholder="Фамилия">
										</div>
										<div class="checkbox">
											<label><input type="checkbox" ng-model="last_manager.sex" ng-checked="last_manager.sex == 1" ng-true-value="1" ng-false-value="0">Мужчина</label>
										</div>
										<div class="form-group">
											<input class="form-control " ng-model="last_manager.phone" type="text" placeholder="Телефон">
										</div>
										<div class="form-group">
											<input class="form-control " ng-model="last_manager.email"  type="text" placeholder="Эл. почта">
										</div>
									</div>
									<div class="modal-footer ">
										<button ng-click="update(last_manager.id)" type="button" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-ok-sign"></span> Сохранить</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- END MANAGERS -->
					<div id="pharmacies" class="tab-pane fade" ng-controller="pharmaciesList">
					  <dataview caption="Аптеки"
					        update="init_update(id)"
					        create="init_create()"
					        create-id="pharmacy_add"
					        update-id="pharmacy_upd"
					        items="pharmacies"
					        meta="meta"
					        show-grid='true'
					        tile-class="panel-yellow"
					        pagination-mode="client"
					        content-url="/templates/tile/pharmacy.html"></dataview>

	  				<modal caption="Новая аптека" modal-id='pharmacy_add' action="create()" content-url='/templates/modal/pharmacy.html' last="last_pharmacy"></modal>
					  <modal caption="Обновление:" modal-id='pharmacy_upd' action="update(id)" content-url='/templates/modal/pharmacy.html' last="last_pharmacy"></modal>
					</div>
					<div id="drugs" class="tab-pane fade" ng-controller="drugsList">
            <page-with-tiles page-header="Лекарственные препараты" add-button-caption="Добавить новый препарат" items="drugs" tile-class="panel-green" tile-icon="fa fa-flask fa-5x" field-for-tile-caption="fullName" field-for-tile-r-row-1="description" update="init_update(id)" create="init_create()" create-id="drug_add" update-id="drug_upd"></page-with-tiles>
						<!-- MODAL -->
            {% raw %}
					  <div class="modal fade" id="drug_add" tabindex="-1" role="dialog" aria-labelledby="drug_add" aria-hidden="true">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
											<h4 class="modal-title custom_align" id="Heading">Новый препарат</h4>
										</div>
										<div class="modal-body">
											<div class="form-group">
												<input class="form-control " type="text" ng-model="last_drug.fullName" placeholder="Полное наименование">
											</div>
											<div class="form-group">
												<input class="form-control " type="text" ng-model="last_drug.officialName" placeholder="Оффициальное наименование">
											</div>
											<div class="form-group">
												<textarea class="form-control " type="text" ng-model="last_drug.description" placeholder="Описание"></textarea>
											</div>
											<div class="form-group">
												<input class="form-control " type="text" ng-model="last_drug.barcode" placeholder="Штрихкод">
											</div>
										</div>
										<div class="modal-footer ">
											<button ng-click="create()" type="button" class="btn btn-warning btn-lg" style="width: 100%;"><span class="glyphicon glyphicon-ok-sign"></span> Добавить</button>
										</div>

									</div>
								</div>
							</div>

						<div class="modal fade" id="drug_upd" tabindex="-1" role="dialog" aria-labelledby="drug_upd" aria-hidden="true">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
											<h4 class="modal-title custom_align" ng-bind="last_drug.fullName" id="modal-title"></h4>
										</div>
										<div class="modal-body">
											<div class="form-group">
												<input class="form-control " type="text" ng-model="last_drug.fullName" placeholder="Полное наименование">
											</div>
											<div class="form-group">
												<input class="form-control " type="text" ng-model="last_drug.officialName" placeholder="Оффициальное наименование">
											</div>
											<div class="form-group">
												<textarea class="form-control " type="text" ng-model="last_drug.description" placeholder="Описание"></textarea>
											</div>
											<div class="form-group">
												<input class="form-control " type="text" ng-model="last_drug.barcode" placeholder="Штрихкод">
											</div>
										</div>
										<div class="modal-footer ">
											<button ng-click="update(last_drug.id)" type="button" class="btn btn-success"><span class="glyphicon glyphicon-ok-sign"></span> Сохранить</button>
											<button type="button" data-dismiss="modal" class="btn btn-default" ><span class="glyphicon glyphicon-remove"></span> Закрыть</button>
										</div>

									</div>
								</div>
							</div>
						{% endraw %}

					</div>
					<div id="companies" class="tab-pane fade" ng-controller="companiesList">
						<!-- Page Heading -->
						<div class="row">
							<div class="col-lg-12">
								<h1 class="page-header">
									Поставщики <small>Основная информация</small>
									<p data-placement="top" data-toggle="tooltip" title="Добавить компанию"><button class="btn btn-danger btn-xs" data-title="company_add" data-toggle="modal" data-target="#company_add" ><i class="fa fa-plus"></i></button></p>
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
						{% raw %}
						<div class="row">
							<div class="col-md-1 text-right">
								<div class="panel">
									<div class="label label-default">Кол-во компаний: {{companies.length}}</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-6 col-md-6" ng-repeat="company in companies | filter: search">
								<div class="panel panel-red">
									<div class="panel-heading">
										<div class="row">
											<div class="col-xs-3">
												<i class="fa fa-ambulance fa-5x"></i>
												<h3 ng-bind="company.shortName"></h3>
											</div>
											<div class="col-xs-9 text-right">
												<div class="huge" ng-bind="company.id"></div>
												<div ng-bind="company.fullName"></div>
												<div ng-bind="company.description"></div>
											</div>
										</div>
									</div>
									<a ng-click="init_update(company.id)" href="#company_upd" data-toggle="modal" data-placement="top" data-toggle="tooltip" title="Просмотр дополнительных сведений">
										<div class="panel-footer">
										<span class="pull-left"><h4>Подробнее</h4></span>
										<span class="pull-right"><i class="fa fa-arrow-circle-right fa-2x"></i></span>
										<div class="clearfix"></div>
										</div>
									</a>
								</div>
							</div>
						<!-- MODAL -->
							<div class="modal fade" id="company_add" tabindex="-1" role="dialog" aria-labelledby="company_add" aria-hidden="true">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
											<h4 class="modal-title custom_align" id="Heading">Новая компания</h4>
										</div>
										<div class="modal-body">
											<div class="form-group">
												<input class="form-control " type="text" ng-model="last_company.fullName" placeholder="Полное наименование">
											</div>
											<div class="form-group">
												<input class="form-control " type="text" ng-model="last_company.shortName" placeholder="Краткое наименование">
											</div>
											<div class="form-group">
												<input class="form-control " type="text" ng-model="last_company.officialName" placeholder="Оффициальное наименование">
											</div>
											<div class="form-group">
												<textarea class="form-control " type="text" ng-model="last_company.description" placeholder="Описание"></textarea>
											</div>
										</div>
										<div class="modal-footer ">
											<button ng-click="create()" type="button" class="btn btn-warning btn-lg" style="width: 100%;"><span class="glyphicon glyphicon-ok-sign"></span> Добавить</button>
										</div>

									</div>
								</div>
							</div>

							<div class="modal fade" id="company_upd" tabindex="-1" role="dialog" aria-labelledby="company_upd" aria-hidden="true">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
											<h4 class="modal-title custom_align" ng-bind="last_company.fullName" id="modal-title"></h4>
										</div>
										<div class="modal-body">
											<div class="form-group">
												<input class="form-control" type="text" ng-model="last_company.fullName" placeholder="Полное наименование">
											</div>
											<div class="form-group">
												<input class="form-control" type="text" ng-model="last_company.shortName" placeholder="Краткое наименование">
											</div>
											<div class="form-group">
												<input class="form-control" type="text" ng-model="last_company.officialName" placeholder="Оффициальное наименование">
											</div>
											<div class="form-group">
												<textarea class="form-control" type="text" ng-model="last_company.description" placeholder="Описание"></textarea>
											</div>
										</div>
										<div class="modal-footer ">
											<button ng-click="update(last_company.id)" type="button" class="btn btn-success"><span class="glyphicon glyphicon-ok-sign"></span> Сохранить</button>
											<button type="button" data-dismiss="modal" class="btn btn-default" ><span class="glyphicon glyphicon-remove"></span> Закрыть</button>
										</div>

									</div>
								</div>
							</div>

						{% endraw %}
						</div>
						<!-- /.row -->

					</div>
					<div id="projects" class="tab-pane fade" ng-controller="projectsList">
            <page-with-tiles page-header="Проекты" add-button-caption="Добавить новый проект" items="projects" tile-class="panel-yellow" tile-icon="fa fa-users fa-5x" field-for-tile-caption="fullName" field-for-tile-r-row-1="description" update="init_update(id)" create="init_create()" create-id="project_add" update-id="project_upd"></page-with-tiles>
						<!-- MODAL -->
            {% raw %}
							<div class="modal fade" id="project_add" tabindex="-1" role="dialog" aria-labelledby="company_add" aria-hidden="true">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
											<h4 class="modal-title custom_align" id="Heading">Новый проект</h4>
										</div>
										<div class="modal-body">
											<div class="form-group">
												<input class="form-control " type="text" ng-model="last_project.fullName" placeholder="Полное наименование">
											</div>
											<div class="form-group">
												<textarea class="form-control " type="text" ng-model="last_project.description" placeholder="Описание"></textarea>
											</div>
											<div class="form-group">
												<div class="form-group">
													<label for="projectDrugs">Лекарственные препараты:</label>
													<select class="form-control" name="projectDrugs" id="projectDrugs"  ng-options="option.fullName for option in last_project.drugList track by option.id" ng-model="last_project.drugs" multiple>
													</select>
												</div>
											</div>
											<div class="form-group">
												<div class="form-group">
													<label for="projectDrugInfoTypes">Тип информации:</label>
													<select class="form-control" name="projectDrugInfoTypes" id="projectDrugInfoTypes"  ng-options="option.name for option in last_project.drugInfoTypesList track by option.id" ng-model="last_project.druginfotypes" multiple>
													</select>
												</div>
											</div>
										</div>
										<div class="modal-footer ">
											<button ng-click="create()" type="button" class="btn btn-warning btn-lg" style="width: 100%;"><span class="glyphicon glyphicon-ok-sign"></span> Добавить</button>
										</div>

									</div>
								</div>
							</div>

							<div class="modal fade" id="project_upd" tabindex="-1" role="dialog" aria-labelledby="project_upd" aria-hidden="true">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
											<h4 class="modal-title custom_align" ng-bind="last_project.fullName" id="modal-title"></h4>
										</div>
										<div class="modal-body">
											<div class="form-group">
												<input class="form-control " type="text" ng-model="last_project.fullName" placeholder="Полное наименование">
											</div>
											<div class="form-group">
												<textarea class="form-control " type="text" ng-model="last_project.description" placeholder="Описание"></textarea>
											</div>
											<div class="form-group">
												<div class="form-group">
													<label for="projectDrugs">Лекарственные препараты:</label>
													<select class="form-control" name="projectDrugs" id="projectDrugs"  ng-options="option.fullName for option in last_project.drugList track by option.id" ng-model="last_project.drugs" multiple>
													</select>
												</div>
											</div>
											<div class="form-group">
												<div class="form-group">
													<label for="projectDrugInfoTypes">Тип информации:</label>
													<select class="form-control" name="projectDrugInfoTypes" id="projectDrugInfoTypes"  ng-options="option.name for option in last_project.grugInfoTypesList track by option.id" ng-model="last_project.druginfotypes" multiple>
													</select>
												</div>
											</div>
										</div>
										<div class="modal-footer ">
											<button ng-click="update(last_project.id)" type="button" class="btn btn-success"><span class="glyphicon glyphicon-ok-sign"></span> Сохранить</button>
											<button type="button" data-dismiss="modal" class="btn btn-default" ><span class="glyphicon glyphicon-remove"></span> Закрыть</button>
										</div>

									</div>
								</div>
							</div>
						{% endraw %}
						</div>
					<div id="territories" class="tab-pane fade" ng-controller="territoriesList">
            <page-with-tiles page-header="Территории" add-button-caption="Добавить новую территорию" items="territories" tile-class="panel-green" tile-icon="fa fa-map fa-5x" field-for-tile-caption="name" field-for-tile-r-row-1="info" update="init_update(id)" create="init_create()" create-id="territory_add" update-id="territory_upd"></page-with-tiles>
						<!-- MODAL -->
            {% raw %}
							<div class="modal fade" id="territory_add" tabindex="-1" role="dialog" aria-labelledby="territory_add" aria-hidden="true">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
											<h4 class="modal-title custom_align" id="Heading">Новая территория</h4>
										</div>
										<div class="modal-body">
											<div class="form-group">
												<input class="form-control " type="text" ng-model="last_territory.name" placeholder="Наименование">
											</div>
											<div class="form-group">
												<textarea class="form-control " type="text" ng-model="last_territory.info" placeholder="Описание"></textarea>
											</div>
											<div class="form-group">
												<textarea class="form-control " type="text" ng-model="last_territory.baseCity" placeholder="Основной город"></textarea>
											</div>
										</div>
										<div class="modal-footer ">
											<button ng-click="create()" type="button" class="btn btn-warning btn-lg" style="width: 100%;"><span class="glyphicon glyphicon-ok-sign"></span> Добавить</button>
										</div>

									</div>
								</div>
							</div>

							<div class="modal fade" id="territory_upd" tabindex="-1" role="dialog" aria-labelledby="territory_upd" aria-hidden="true">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
											<h4 class="modal-title custom_align" ng-bind="last_territory.name" id="modal-title"></h4>
										</div>
										<div class="modal-body">
											<div class="form-group">
												<input class="form-control " type="text" ng-model="last_territory.name" placeholder="Наименование">
											</div>
											<div class="form-group">
												<textarea class="form-control " type="text" ng-model="last_territory.info" placeholder="Описание"></textarea>
											</div>
											<div class="form-group">
												<textarea class="form-control " type="text" ng-model="last_territory.baseCity" placeholder="Основной город"></textarea>
											</div>
										</div>
										<div class="modal-footer ">
											<button ng-click="update(last_territory.id)" type="button" class="btn btn-success"><span class="glyphicon glyphicon-ok-sign"></span> Сохранить</button>
											<button type="button" data-dismiss="modal" class="btn btn-default" ><span class="glyphicon glyphicon-remove"></span> Закрыть</button>
										</div>

									</div>
								</div>
							</div>
						{% endraw %}

					</div>
					<div id="druginfotypes" class="tab-pane fade" ng-controller="drugInfoTypesList">
            <page-with-tiles page-header="Типы информации" add-button-caption="Добавить новый тип информации" items="druginfotypes" tile-class="panel-green" tile-icon="fa fa-cubes fa-5x" field-for-tile-caption="name" field-for-tile-r-row-1="valueType" update="init_update(id)" create="init_create()" create-id="druginfotype_add" update-id="druginfotype_upd"></page-with-tiles>

						<!-- MODAL -->
            {% raw %}
							<div class="modal fade" id="druginfotype_add" tabindex="-1" role="dialog" aria-labelledby="druginfotype_add" aria-hidden="true">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
											<h4 class="modal-title custom_align" id="Heading">Новый тип</h4>
										</div>
										<div class="modal-body">
											<div class="form-group">
												<input class="form-control " type="text" ng-model="last_drugInfoType.name" placeholder="Наименование">
											</div>
											<div class="form-group">
												<select class="form-control " type="text" ng-model="last_drugInfoType.valueType" placeholder="Значение">
													<option>boolean</option>
													<option>number</option>
													<option>list</option>
													<option>string</option>
												</select>
											</div>
										</div>
										<div class="modal-footer ">
											<button ng-click="create()" type="button" class="btn btn-warning btn-lg" style="width: 100%;"><span class="glyphicon glyphicon-ok-sign"></span> Добавить</button>
										</div>

									</div>
								</div>
							</div>

							<div class="modal fade" id="druginfotype_upd" tabindex="-1" role="dialog" aria-labelledby="druginfotype_upd" aria-hidden="true">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
											<h4 class="modal-title custom_align" ng-bind="last_drugInfoType.name" id="modal-title"></h4>
										</div>
										<div class="modal-body">
											<div class="form-group">
												<input class="form-control " type="text" ng-model="last_drugInfoType.name" placeholder="Наименование">
											</div>
											<div class="form-group">
												<select class="form-control " type="text" ng-model="last_drugInfoType.valueType" placeholder="Значение">
													<option>boolean</option>
													<option>number</option>
													<option>list</option>
													<option>string</option>
												</select>
											</div>
										</div>
										<div class="modal-footer ">
											<button ng-click="update(last_drugInfoType.id)" type="button" class="btn btn-success"><span class="glyphicon glyphicon-ok-sign"></span> Сохранить</button>
											<button type="button" data-dismiss="modal" class="btn btn-default" ><span class="glyphicon glyphicon-remove"></span> Закрыть</button>
										</div>

									</div>
								</div>
							</div>
						{% endraw %}

					</div>
					<div  id="hospitals" class="tab-pane fade" style="height: 500px">
					</div>
					<div  id="tradenets" class="tab-pane fade" style="height: 500px">
					</div>
					<div  id="sql" class="tab-pane fade" style="height: 500px" ng-controller="adminQueryController">
						{% raw %}
						<div class="row">
							<div class="col-md-1 col-lg-6 ">
								<form class="form-horizontal pull-left">
									<div class="span12">
										<textarea ng-model="query" class="mac-style"></textarea>
									</div>
								</form>
							</div>
						</div>
						<div class="row">
							<div class="col-md-1 col-lg-6">
								<div class="span12">
									<div type="button" class="btn btn-danger" ng-click="admin_query()"><i class="icon-search"></i> Выполнить</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-1 col-lg-6">
								<div class="span12">
									<table class="table table-bordered table-striped">
										<thead>
											<tr>
												<th ng-model="results" ng-repeat="(key, data) in results[0]">
													{{key}}
												</th>
											</tr>
										</thead>
										<tbody>
											<tr ng-model="results" ng-repeat="(key, data) in results">
												<td ng-repeat="d in data">
													{{d}}
												</td>
											</tr>
										</tbody>
									</table>

								</div>
							</div>
              {% endraw %}
						</div>
            </div>
            <!-- /.container-fluid -->
        </div>
        <!-- /#page-wrapper -->
      </div>
      <!-- /#wrapper -->
	<script>
      var manager = {};
	  //SWIG Injection!!! How to another get manager.id in the page?
	  manager.id = 0{{manager.id}};
	</script>
    <!-- AngularJS -->
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>

	<!-- jQuery -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
<!--     <script src="/js/bootstrap.min.js"></script> -->
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

     <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?libraries=places"></script>

	<!-- Angular application -->
	<script src="/js/app.js"></script>
	<script src="/js/admin.js"></script>
    <!-- Morris Charts JavaScript -->
	<!--
    <script src="/js/plugins/morris/raphael.min.js"></script>
    <script src="/js/plugins/morris/morris.min.js"></script>
    <script src="/js/plugins/morris/morris-data.js"></script>
	-->

<style>
#autocomp_map {
	height: 400px;
    bottom: 0;
}
#map-canvas {
	height: 400px;
    bottom: 0;
}
.pac-container {
    background-color: #FFF;
    z-index: 20;
    position: fixed;
    display: inline-block;
    float: left;
}
.modal{
    z-index: 20;
}
.modal-backdrop{
    z-index: 10;
}

.modal-dialog {
    margin: 80px auto; !important;
}

</style>

</body>

</html>
