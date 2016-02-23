<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>SBL - CRM</title>

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

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.5.0/css/bootstrap-datepicker3.css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- CUSTOM STYLES  -->
    <style>
      .datepicker table tbody tr:hover > td.day{background: #04c}

/*       .weekHover {background: #428BCA} */

      .ellipsis {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .form-filter {
        margin-bottom: 12px;
      }

      table.report {
        font-size: 12px;
      }

      table.report th {
        text-align: center;
        vertical-align: middle !important;
      }

      table.report td {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .form-filter .form-group {
        margin-bottom: 8px;
      }

      .form-filter .control-label {
        margin-bottom: 8px;
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
          <a class="navbar-brand" href="/">SBL - CRM</a>
      </div>
      <!-- Top Menu Items -->
      <ul class="nav navbar-right top-nav">
        <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i> {{ manager.shortName }} <b class="caret"></b></a>
            <ul class="dropdown-menu">
                <li>
                    <a href="/logout?next=login"><i class="fa fa-fw fa-power-off"></i> Log Out</a>
                </li>
            </ul>
        </li>
      </ul>
      <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
      <div class="collapse navbar-collapse navbar-ex1-collapse">
        <ul class="nav navbar-nav side-nav">
          <li>
            <a data-toggle="pill" data-target="#main" href="#main"><i class="fa fa-fw fa-dashboard"></i> Главная</a>
          </li>
          <li>
            <a href="#dictionary" data-toggle="collapse"><i class="fa fa-fw fa-database"></i> База<i class="fa fa-fw fa-caret-down"></i></a>
            <ul  id="dictionary" class="collapse in active" class="nav nav-pills">
              <li><a data-toggle="pill" href="#merchants" ng-model="menuMerchants" ng-click="update_merchants()">Мерчендайзеры</a></li>
              <li><a data-toggle="pill" href="#territories" ng-model="menuTerritories" ng-click="update_territories()">Территории</a></li>
              <li><a data-toggle="pill" href="#pharmacies" ng-model="menuPharmacies" ng-click="update_pharmacies()">Аптеки</a></li>
              <li><a data-toggle="pill" href="#drugs" ng-model="menuDrugs" ng-click="update_drugs()">Препараты</a></li>
              <li><a data-toggle="pill" href="#druginfotypes" ng-model="menuDrugInfoTypes" ng-click="update_druginfotypes()">Типы информации</a></li>
              <li><a data-toggle="pill" href="#projects" ng-model="menuProjects" ng-click="update_projects()">Проекты</a></li>
             </ul>
          </li>
          <li>
            <a href="#reports" data-toggle="collapse"><i class="fa fa-fw fa-file-text"></i> Отчеты<i class="fa fa-fw fa-caret-down"></i></a>
            <ul id="reports" class="collapse in active" class="nav nav-pills">
              <li><a data-toggle="pill" href="#merchBase">База аптек</a></li>
              <li><a data-toggle="pill" href="#merchVisits">Норма визитов</a></li>
              <li><a data-toggle="pill" href="#merchVisitsFreq">Частота визитов</a></li>
              <li><a data-toggle="pill" href="#teamVisits">Норма визитов по команде</a></li>
              <li><a data-toggle="pill" href="#defect">Дефектура</a></li>
              <li><a data-toggle="pill" href="#display">Выкладка</a></li>
              <li><a data-toggle="pill" href="#pos">POS</a></li>
              <li><a data-toggle="pill" href="#claim">Претензионные акты</a></li>
              <li><a data-toggle="pill" href="#defect_claim">Деф. журнал и <br> прет. акты</a></li>
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
          <!-- Merchant -->
					<div id="merchants" class="tab-pane fade" ng-controller="MerchantController as merchCntrl">
            <page-with-tiles page-header="Мерчендайзеры" add-button-caption="Добавить нового мерчендайзера" model-meta="merchCntrl.meta" items="merchCntrl.merchants" loaded="merchCntrl.loaded" tile-class="panel-primary" tile-icon="fa fa-user fa-5x" field-for-tile-caption="fullName" field-for-tile-r-row-1="project.fullName" create-id="merch_add" create-caption="Новый мерчендайзер" before-create-params="merchCntrl.params" modal-create-template="/templates/modal/merchant.html" update-id="merch_update" update-caption="Обновление:" field-for-update-caption="shortName" modal-update-template="/templates/modal/merchant.html"></page-with-tiles>
					</div>
          <!-- ./Merchant -->
          <!-- Tradenet -->
					<div  id="tradenets" class="tab-pane fade" ng-controller="TradenetController as netCntrl">
            <page-with-tiles page-header="Аптечные сети" add-button-caption="Добавить новую аптечную сеть" model-meta="netCntrl.meta" items="netCntrl.tradenets" loaded="netCntrl.loaded" tile-class="panel-yellow" tile-icon="fa fa-hospital-o fa-5x" field-for-tile-caption="fullName" field-for-tile-r-row-1="description" create-id="net_add" create-caption="Новая аптечная сеть" modal-create-template="/templates/modal/tradenet.html" update-id="net_update" update-caption="Обновление:" field-for-update-caption="shortName" modal-update-template="/templates/modal/tradenet.html"></page-with-tiles>
					</div>
          <!-- ./Tradenet -->
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
          <!-- CategoryInNet -->
					<div  id="categories" class="tab-pane fade" ng-controller="CategoryInNetController as catCntrl">
            <page-with-tiles page-header="Категории в сети" add-button-caption="Добавить категорию в сети" model-meta="catCntrl.meta" items="catCntrl.categories" loaded="catCntrl.loaded" tile-class="panel-yellow" tile-icon="fa fa-hospital-o fa-5x" field-for-tile-caption="name" field-for-tile-r-row-1="key" create-id="cat_add" create-caption="Новая категория в сети" modal-create-template="/templates/modal/categoryInNet.html" update-id="cat_update" update-caption="Обновление:" field-for-update-caption="key" modal-update-template="/templates/modal/categoryInNet.html"></page-with-tiles>
					</div>
          <!-- ./CategoryInNet -->
          <!-- Drug -->
					<div id="drugs" class="tab-pane fade" ng-controller="DrugController as drugCntrl">
            <page-with-tiles page-header="Препараты" add-button-caption="Добавить новый препарат" model-meta="drugCntrl.meta" items="drugCntrl.drugs" loaded="drugCntrl.loaded" tile-class="panel-green" tile-icon="fa fa-flask fa-5x" field-for-tile-caption="fullName" field-for-tile-r-row-1="description" create-id="drug_add" create-caption="Новый препарат" modal-create-template="/templates/modal/drug.html" update-id="drug_update" update-caption="Обновление:" field-for-update-caption="fullName" modal-update-template="/templates/modal/drug.html"></page-with-tiles>
					</div>
          <!-- ./Drug -->
          <!-- DrugInfoType -->
					<div id="druginfotypes" class="tab-pane fade" ng-controller="DrugInfoTypeController as ditCntrl">
            <page-with-tiles page-header="Типы информации" add-button-caption="Добавить новый тип информации" model-meta="ditCntrl.meta" items="ditCntrl.druginfotypes" loaded="ditCntrl.loaded" tile-class="panel-green" tile-icon="fa fa-cubes fa-5x" field-for-tile-caption="name" field-for-tile-r-row-1="valueType" create-id="druginfotype_add" create-caption="Новый тип информации" modal-create-template="/templates/modal/drugInfoType.html" update-id="druginfotype_upd" update-caption="Обновление:" field-for-update-caption="name" modal-update-template="/templates/modal/drugInfoType.html"></page-with-tiles>
					</div>
          <!-- ./DrugInfoType -->
          <!-- Project -->
					<div id="projects" class="tab-pane fade" ng-controller="ProjectController as projCntrl">
            <page-with-tiles page-header="Проекты" add-button-caption="Добавить новый проект" model-meta="projCntrl.meta" items="projCntrl.projects" loaded="projCntrl.loaded" tile-class="panel-red" tile-icon="fa fa-users fa-5x" field-for-tile-caption="fullName" field-for-tile-r-row-1="description" create-id="project_add" create-caption="Новый проект" modal-create-template="/templates/modal/project.html" update-id="project_upd" update-caption="Обновление:" field-for-update-caption="fullName" modal-update-template="/templates/modal/project.html"></page-with-tiles>
						</div>
          <!-- ./Project -->
          <!-- Territory -->
					<div id="territories" class="tab-pane fade" ng-controller="TerritoryController as terrCntrl">
            <page-with-tiles page-header="Территории" add-button-caption="Добавить новую территорию" model-meta="terrCntrl.meta" items="terrCntrl.territories" loaded="terrCntrl.loaded" tile-class="panel-green" tile-icon="fa fa-map fa-5x" field-for-tile-caption="name" field-for-tile-r-row-1="baseCity" create-id="territory_add" create-caption="Новая территория" modal-create-template="/templates/modal/territory.html" update-id="territory_upd" update-caption="Обновление:" field-for-update-caption="name" modal-update-template="/templates/modal/territory.html"></page-with-tiles>
          <!-- ./Territory -->
					</div>
          <!-- ./Territory -->
          <!-- Promo -->
					<div  id="promos" class="tab-pane fade" ng-controller="PromoController as promoCntrl">
            <page-with-tiles page-header="ТМ акции" add-button-caption="Добавить новую ТМ акцию" model-meta="promoCntrl.meta" items="promoCntrl.promos" loaded="promoCntrl.loaded" tile-class="panel-yellow" tile-icon="fa fa-picture-o fa-5x" field-for-tile-caption="name" field-for-tile-r-row-1="key" create-id="promo_add" create-caption="Новая ТМ акция" modal-create-template="/templates/modal/promo.html" update-id="promo_upd" update-caption="Обновление:" field-for-update-caption="key" modal-update-template="/templates/modal/promo.html"></page-with-tiles>
					</div>
          <!-- ./Promo -->
          <!-- PhotoType -->
					<div  id="phototypes" class="tab-pane fade" ng-controller="PhotoTypeController as ptCntrl">
            <page-with-tiles page-header="Типы фотографий" add-button-caption="Добавить новый тип фотографии" model-meta="ptCntrl.meta" items="ptCntrl.phototypes" loaded="ptCntrl.loaded" tile-class="panel-yellow" tile-icon="fa fa-file-image-o fa-5x" field-for-tile-caption="name" create-id="phototype_add" create-caption="Новый тип фотографии" modal-create-template="/templates/modal/phototype.html" update-id="phototype_upd" update-caption="Обновление:" field-for-update-caption="name" modal-update-template="/templates/modal/phototype.html"></page-with-tiles>
					</div>
          <!-- ./PhotoType -->
          <!-- PhotoSubType -->
					<div  id="photosubtypes" class="tab-pane fade" ng-controller="PhotoSubTypeController as pstCntrl">
            <page-with-tiles page-header="Подтипы фотографий" add-button-caption="Добавить новый подтип фотографии" model-meta="pstCntrl.meta" items="pstCntrl.photosubtypes" loaded="pstCntrl.loaded" tile-class="panel-yellow" tile-icon="fa fa-file-image-o fa-5x" field-for-tile-caption="name" field-for-tile-r-row1="type.name" create-id="photosubtype_add" create-caption="Новый подтип фотографии" modal-create-template="/templates/modal/photosubtype.html" update-id="photosubtype_upd" update-caption="Обновление:" field-for-update-caption="name" modal-update-template="/templates/modal/photosubtype.html"></page-with-tiles>
					</div>
          <!-- ./PhotoSubType -->

          <!--  REPORTS -->
          <div  id="merchBase" class="tab-pane fade" ng-controller="merchBaseController">
            <!-- Page Heading -->
            <div class="row">
              <div class="col-lg-12">
                <h1 class="page-header">
                    База аптек + ТМ Акции
                </h1>
              </div>
            </div>
            <!-- /.row -->
            <!--Filters-->
            <div class="row">
              <div class="col-lg-12">
                <form class="form-inline form-filter">
                  <div class="form-group">
                    <label for="merchant">Мерчендайзер:</label>
                    <select class="form-control" name="merchant" id="merchant" ng-change="change()" ng-options="merch.shortName for merch in merchantList" ng-model="merchant">
                    </select>
                  </div>
                  <div class="form-group">
                    <button class="btn btn-danger" ng-click="refresh()" ng-disabled="refreshing || !canRefresh"><i ng-class="{'fa fa-refresh': !refreshing, 'fa fa-refresh fa-spin': refreshing}"></i> Обновить</button>
                    <button class="btn btn-success" ng-click="download()" ng-disabled="results.length == 0"><i ng-class="{'fa fa-file-excel-o': !downloading, 'fa fa-file-excel-o fa-spin': downloading}"></i> Выгрузить</button>
                  </div>
                </form>
              </div>
            </div>
            <!-- /.row -->
            <!-- Report -->
            <div class="row">
              <div class="col-lg-12">
                <report  results="results" meta="meta" ng-model="results" />
              </div>
            </div>
            <!-- /.row -->
          </div>
            <div  id="merchVisits" class="tab-pane fade" ng-controller="merchVisitsController">
						{% raw %}
              <!-- Page Heading -->
              <div class="row">
                <div class="col-lg-12">
                  <h1 class="page-header">
                      Выполнение норма визитов
                  </h1>
                </div>
              </div>
              <!-- /.row -->
              <!--Filters-->
              <div class="row">
                <div class="col-lg-12">
                  <form class="form-inline form-filter">
                    <div class="form-group">
                        <label for="merchant">Мерчендайзер:</label>
                        <select class="form-control" name="merchant" id="merchant" ng-change="change()" ng-options="merch.shortName for merch in merchantList" ng-model="merchant">
                        </select>
                    </div>
                    <div class="form-group">
                      <label for="month">Месяц:</label>
                      <input class="form-control datepicker-month" name="month" id="month" ng-change="change()" ng-model="month" type="text">
                    </div>
                    <div class="form-group">
                      <button class="btn btn-danger" ng-click="refresh()" ng-disabled="refreshing || !canRefresh"><i ng-class="{'fa fa-refresh': !refreshing, 'fa fa-refresh fa-spin': refreshing}"></i> Обновить</button>
                      <button class="btn btn-success" ng-click="download()" ng-disabled="results.length == 0"><i ng-class="{'fa fa-file-excel-o': !downloading, 'fa fa-file-excel-o fa-spin': downloading}"></i> Выгрузить</button>
                    </div>
                  </form>
                </div>
              </div>
              <!-- /.row -->
              <!-- Report -->
              <div class="row">
                <div class="col-lg-12">
                  <report  results="results" meta="meta" ng-model="results" />
                </div>
              </div>
              <!-- /.row -->
            {% endraw %}
            </div>
            <div  id="merchVisitsFreq" class="tab-pane fade" ng-controller="merchVisitsFreqController">
						{% raw %}
              <!-- Page Heading -->
              <div class="row">
                <div class="col-lg-12">
                  <h1 class="page-header">
                      Частота визитов
                  </h1>
                </div>
              </div>
              <!-- /.row -->
              <!--Filters-->
              <div class="row">
                <div class="col-lg-12">
                  <form class="form-inline form-filter">
                    <div class="form-group">
                        <label for="merchant">Мерчендайзер:</label>
                        <select class="form-control" name="merchant" id="merchant" ng-change="change()" ng-options="merch.shortName for merch in merchantList" ng-model="merchant">
                        </select>
                    </div>
                    <div class="form-group">
                      <label for="month">Месяц:</label>
                      <input class="form-control datepicker-month" name="month" id="month" ng-change="change()" ng-model="month" type="text" />
                    </div>
                    <div class="form-group">
                      <button class="btn btn-danger" ng-click="refresh()" ng-disabled="refreshing || !canRefresh"><i ng-class="{'fa fa-refresh': !refreshing, 'fa fa-refresh fa-spin': refreshing}"></i> Обновить</button>
                      <button class="btn btn-success" ng-click="download()" ng-disabled="results.length == 0"><i ng-class="{'fa fa-file-excel-o': !downloading, 'fa fa-file-excel-o fa-spin': downloading}"></i> Выгрузить</button>
                    </div>
                  </form>
                </div>
              </div>
              <!-- /.row -->
              <!-- Report -->
              <div class="row">
                <div class="col-lg-12">
                  <report  results="results" meta="meta" ng-model="results" />
                </div>
              </div>
              <!-- /.row -->
            {% endraw %}
            </div>
            <div  id="teamVisits" class="tab-pane fade" ng-controller="teamVisitsController">
						{% raw %}
              <!-- Page Heading -->
              <div class="row">
                <div class="col-lg-12">
                  <h1 class="page-header">
                      Норма визитов по команде
                  </h1>
                </div>
              </div>
              <!-- /.row -->
              <!--Filters-->
              <div class="row">
                <div class="col-lg-12">
                  <form class="form-inline form-filter">
                    <div class="form-group">
                      <label for="week">Неделя:</label>
                      <input class="form-control datepicker-week" name="week" id="week" ng-change="change()" ng-model="week" type="text" />
                    </div>
                    <div class="form-group">
                      <button class="btn btn-danger" ng-click="refresh()" ng-disabled="refreshing || !canRefresh"><i ng-class="{'fa fa-refresh': !refreshing, 'fa fa-refresh fa-spin': refreshing}"></i> Обновить</button>
                      <button class="btn btn-success" ng-click="download()" ng-disabled="results.length == 0"><i ng-class="{'fa fa-file-excel-o': !downloading, 'fa fa-file-excel-o fa-spin': downloading}"></i> Выгрузить</button>
                    </div>
                  </form>
                </div>
              </div>
              <!-- /.row -->
              <!-- Report -->
              <div class="row">
                <div class="col-lg-12">
                  <report  results="results" meta="meta" ng-model="results" />
                </div>
              </div>
              <!-- /.row -->
            {% endraw %}
            </div>
            <div  id="defect" class="tab-pane fade" ng-controller="defectController">
						{% raw %}
              <!-- Page Heading -->
              <div class="row">
                <div class="col-lg-12">
                  <h1 class="page-header">
                      Дефектура по сети
                  </h1>
                </div>
              </div>
              <!-- /.row -->
              <!--Filters-->
              <div class="row">
                <div class="col-lg-12">
                  <form class="form-inline form-filter">
                    <div class="form-group">
                        <label for="tradenet">Аптечная сеть:</label>
                        <select class="form-control" name="tradenet" id="tradenet" ng-change="change()" ng-options="tradenet.fullName for tradenet in tradenetList" ng-model="tradenet">
                        </select>
                    </div>
                    <div class="form-group">
                      <label for="month">Месяц:</label>
                      <input class="form-control datepicker-month" name="month" id="month" ng-change="change()" ng-model="month" type="text" />
                    </div>
                    <div class="form-group">
                      <label for="drug">Препарат:</label>
                      <select class="form-control" name="drug" id="drug" ng-change="change()" ng-options="drug.fullName for drug in drugList" ng-model="drug">
                        </select>
                    </div>
                    <div class="form-group">
                      <button class="btn btn-danger" ng-click="refresh()" ng-disabled="refreshing || !canRefresh"><i ng-class="{'fa fa-refresh': !refreshing, 'fa fa-refresh fa-spin': refreshing}"></i> Обновить</button>
                      <button class="btn btn-success" ng-click="download()" ng-disabled="results.length == 0"><i ng-class="{'fa fa-file-excel-o': !downloading, 'fa fa-file-excel-o fa-spin': downloading}"></i> Выгрузить</button>
                    </div>
                  </form>
                </div>
              </div>
              <!-- /.row -->
              <!-- Report -->
              <div class="row">
                <div class="col-lg-12">
                  <report  results="results" meta="meta" ng-model="results" />
                </div>
              </div>
              <!-- /.row -->
            {% endraw %}
            </div>
            <div  id="display" class="tab-pane fade" ng-controller="displayController">
						{% raw %}
              <!-- Page Heading -->
              <div class="row">
                <div class="col-lg-12">
                  <h1 class="page-header">
                      Выкладка по сети
                  </h1>
                </div>
              </div>
              <!-- /.row -->
              <!--Filters-->
              <div class="row">
                <div class="col-lg-12">
                  <form class="form-inline form-filter">
                    <div class="form-group">
                        <label for="tradenet">Аптечная сеть:</label>
                        <select class="form-control" name="tradenet" id="tradenet" ng-change="change()" ng-options="tradenet.fullName for tradenet in tradenetList" ng-model="tradenet">
                        </select>
                    </div>
                    <div class="form-group">
                      <label for="month">Месяц:</label>
                      <input class="form-control datepicker-month" name="month" id="month" ng-change="change()" ng-model="month" type="text" />
                    </div>
                    <div class="form-group">
                        <label for="drug">Препарат:</label>
                        <select class="form-control" name="drug" id="drug" ng-change="change()" ng-options="drug.fullName for drug in drugList" ng-model="drug">
                        </select>
                    </div>
                    <div class="form-group">
                      <button class="btn btn-danger" ng-click="refresh()" ng-disabled="refreshing || !canRefresh"><i ng-class="{'fa fa-refresh': !refreshing, 'fa fa-refresh fa-spin': refreshing}"></i> Обновить</button>
                      <button class="btn btn-success" ng-click="download()" ng-disabled="results.length == 0"><i ng-class="{'fa fa-file-excel-o': !downloading, 'fa fa-file-excel-o fa-spin': downloading}"></i> Выгрузить</button>
                    </div>
                  </form>
                </div>
              </div>
              <!-- /.row -->
              <!-- Report -->
              <div class="row">
                <div class="col-lg-12">
                  <report  results="results" meta="meta" ng-model="results" />
                </div>
              </div>
              <!-- /.row -->
            {% endraw %}
            </div>
            <div  id="pos" class="tab-pane fade" ng-controller="posController">
						{% raw %}
              <!-- Page Heading -->
              <div class="row">
                <div class="col-lg-12">
                  <h1 class="page-header">
                      Выкладка по сети
                  </h1>
                </div>
              </div>
              <!-- /.row -->
              <!--Filters-->
              <div class="row">
                <div class="col-lg-12">
                  <form class="form-inline form-filter">
                    <div class="form-group">
                        <label for="tradenet">Аптечная сеть:</label>
                        <select class="form-control" name="tradenet" id="tradenet" ng-change="change()" ng-options="tradenet.fullName for tradenet in tradenetList" ng-model="tradenet">
                        </select>
                    </div>
                    <div class="form-group">
                      <label for="month">Месяц:</label>
                      <input class="form-control datepicker-month" name="month" id="month" ng-change="change()" ng-model="month" type="text" />
                    </div>
                    <div class="form-group">
                        <label for="drug">Препарат:</label>
                        <select class="form-control" name="drug" id="drug" ng-change="change()" ng-options="drug.fullName for drug in drugList" ng-model="drug">
                        </select>
                    </div>
                    <div class="form-group">
                      <button class="btn btn-danger" ng-click="refresh()" ng-disabled="refreshing || !canRefresh"><i ng-class="{'fa fa-refresh': !refreshing, 'fa fa-refresh fa-spin': refreshing}"></i> Обновить</button>
                      <button class="btn btn-success" ng-click="download()" ng-disabled="results.length == 0"><i ng-class="{'fa fa-file-excel-o': !downloading, 'fa fa-file-excel-o fa-spin': downloading}"></i> Выгрузить</button>
                    </div>
                   </form>
                </div>
              </div>
              <!-- /.row -->
              <!-- Report -->
              <div class="row">
                <div class="col-lg-12">
                  <report  results="results" meta="meta" ng-model="results" />
                </div>
              </div>
              <!-- /.row -->
            {% endraw %}
            </div>
            <div  id="claim" class="tab-pane fade" ng-controller="claimController">
						{% raw %}
              <!-- Page Heading -->
              <div class="row">
                <div class="col-lg-12">
                  <h1 class="page-header">
                      Претензионные акты по сети
                  </h1>
                </div>
              </div>
              <!-- /.row -->
              <!--Filters-->
              <div class="row">
                <div class="col-lg-12">
                  <form class="form-inline form-filter">
                    <div class="form-group">
                      <label for="tradenet">Аптечная сеть:</label>
                      <select class="form-control" name="tradenet" id="tradenet" ng-change="change()" ng-options="tradenet.fullName for tradenet in tradenetList" ng-model="tradenet">
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="month">Месяц:</label>
                      <input class="form-control datepicker-month" name="month" id="month" ng-change="change()" ng-model="month" type="text">
                    </div>
                    <div class="form-group">
                      <label for="drug">Препарат:</label>
                      <select class="form-control" name="drug" id="drug" ng-change="change()" ng-options="drug.fullName for drug in drugList" ng-model="drug">
                      </select>
                    </div>
                    <div class="form-group">
                      <button class="btn btn-danger" ng-click="refresh()" ng-disabled="refreshing || !canRefresh"><i ng-class="{'fa fa-refresh': !refreshing, 'fa fa-refresh fa-spin': refreshing}"></i> Обновить</button>
                      <button class="btn btn-success" ng-click="download()" ng-disabled="results.length == 0"><i ng-class="{'fa fa-file-excel-o': !downloading, 'fa fa-file-excel-o fa-spin': downloading}"></i> Выгрузить</button>
                    </div>
                  </form>
                </div>
              </div>
              <!-- /.row -->
              <!-- Report -->
              <div class="row">
                <div class="col-lg-12">
                  <report results="results" meta="meta" ng-model="results" />
                </div>
              </div>
              <!-- /.row -->
            {% endraw %}
            </div>
            <div  id="defect_claim" class="tab-pane fade" ng-controller="defect_claimController">
						{% raw %}
              <!-- Page Heading -->
              <div class="row">
                <div class="col-lg-12">
                  <h1 class="page-header">
                      Деф. журнал и прет. акты по сети
                  </h1>
                </div>
              </div>
              <!-- /.row -->
              <!--Filters-->
              <div class="row">
                <div class="col-lg-12">
                  <form class="form-inline form-filter">
                    <div class="form-group">
                        <label for="tradenet">Аптечная сеть:</label>
                        <select class="form-control" name="tradenet" id="tradenet" ng-change="change()" ng-options="tradenet.fullName for tradenet in tradenetList" ng-model="tradenet">
                        </select>
                    </div>
                    <div class="form-group">
                      <label for="month">Месяц:</label>
                      <input class="form-control datepicker-month" name="month" id="month" ng-change="change()" ng-model="month" type="text" />
                    </div>
                    <div class="form-group">
                        <label for="drug">Препарат:</label>
                        <select class="form-control" name="drug" id="drug" ng-change="change()" ng-options="drug.fullName for drug in drugList" ng-model="drug">
                        </select>
                    </div>
                    <div class="form-group">
                      <button class="btn btn-danger" ng-click="refresh()" ng-disabled="refreshing || !canRefresh"><i ng-class="{'fa fa-refresh': !refreshing, 'fa fa-refresh fa-spin': refreshing}"></i> Обновить</button>
                      <button class="btn btn-success" ng-click="download()" ng-disabled="results.length == 0"><i ng-class="{'fa fa-file-excel-o': !downloading, 'fa fa-file-excel-o fa-spin': downloading}"></i> Выгрузить</button>
                    </div>
                  </form>
                </div>
              </div>
              <!-- /.row -->
              <!-- Report -->
              <div class="row">
                <div class="col-lg-12">
                  <report  results="results" meta="meta" ng-model="results" />
                </div>
              </div>
              <!-- /.row -->
            {% endraw %}
            </div>
        </div>
        <!-- ./tab-content -->
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

    <!-- Lo-Dash -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.1.0/lodash.min.js"></script>

    <!-- AngularJS -->
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>

	<!-- jQuery -->
<!--     <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script> -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
    <!-- Bootstrap Core JavaScript -->
<!--     <script src="/js/bootstrap.min.js"></script> -->
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

     <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?libraries=places"></script>

	<!-- Angular application -->
  <script src="/js/angular/app.module.js"></script>
  <script src="/js/angular/factories/getdata.js"></script>
  <script src="/js/angular/factories/lodash.js"></script>
  <script src="/js/angular/factories/dataservice.js"></script>
  <script src="/js/angular/directives/pageWithTiles.js"></script>
  <script src="/js/angular/controllers/MerchantController.js"></script>
  <script src="/js/angular/controllers/ManagerController.js"></script>
  <script src="/js/angular/controllers/TradenetController.js"></script>
  <script src="/js/angular/controllers/CategoryInNetController.js"></script>
  <script src="/js/angular/controllers/DrugController.js"></script>
  <script src="/js/angular/controllers/DrugInfoTypeController.js"></script>
  <script src="/js/angular/controllers/ProjectController.js"></script>
  <script src="/js/angular/controllers/TerritoryController.js"></script>
  <script src="/js/angular/controllers/PromoController.js"></script>
  <script src="/js/angular/controllers/PhotoTypeController.js"></script>
  <script src="/js/angular/controllers/PhotoSubTypeController.js"></script>
	<script src="/js/app.js"></script>
	<script src="/js/admin.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.5.0/js/bootstrap-datepicker.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.5.0/locales/bootstrap-datepicker.ru.min.js"></script>

	<script src="/js/rpt.js"></script>
    <!-- Morris Charts JavaScript -->
	<!--
    <script src="/js/plugins/morris/raphael.min.js"></script>
    <script src="/js/plugins/morris/morris.min.js"></script>
    <script src="/js/plugins/morris/morris-data.js"></script>
	-->

  <script>
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});
</script>

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