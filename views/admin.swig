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
    <link href="/styles/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="/styles/main.css" rel="stylesheet">

    <!-- Morris Charts CSS -->
    <link href="/styles/plugins/morris.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body ng-app="App">
<style>
    #custom-search-form {
        margin:0;
        margin-top: 5px;
        padding: 0;
    }
 
    #custom-search-form .search-query {
        padding-right: 3px;
        padding-right: 4px \9;
        padding-left: 3px;
        padding-left: 4px \9;
        /* IE7-8 doesn't have border-radius, so don't indent the padding */
 
        margin-bottom: 0;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        -webkit-transition: width  0.2s ease-in-out;
    -moz-transition:width  0.2s ease-in-out;
    -o-transition: width  0.2s ease-in-out;
    transition: width  0.2s ease-in-out;
    }
 
    #custom-search-form button {
        border: 0;
        background: none;
        /** belows styles are working good */
        padding: 2px 5px;
        margin-top: 2px;
        position: relative;
        left: -28px;
        /* IE7-8 doesn't have border-radius, so don't indent the padding */
        margin-bottom: 0;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
    }
 
    .search-query:focus + button {
        z-index: 3;   
    }   
    .search-query:focus{
        width: 260px;
    }   

.two-columns {
    -moz-column-count: 2;
    -moz-column-gap: 10px;
    -webkit-column-count: 2;
    -webkit-column-gap: 10px;
    column-count: 2;
    column-gap: 10px;
    width: 360px;
}

.two-columns .column {
    display: inline-block;
    width: 100%;
    background-color: #ccc;
   margin:2px;
}	

</style>

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
                    <li class="active">
                        <a href="/"><i class="fa fa-fw fa-dashboard"></i> Главная</a>
                    </li>
                    <li>
                        <a href="/login"><i class="fa fa-fw fa-bar-chart-o"></i> Логин</a>
                    </li>
                    <li>
                        <a href="#dictionary" data-toggle="collapse" data-target="#dictionary"><i class="fa fa-fw fa-database"></i> База<i class="fa fa-fw fa-caret-down"></i></a>
                   
						<ul  id="dictionary" class="collapse in active" class="nav nav-pills">
							<li class="active"><a data-toggle="pill" href="#projects" ng-model="menuProjects" ng-click="update_projects()">Проекты</a></li>					
							<li><a data-toggle="pill" href="#merchants" ng-model="menuMerchants" ng-click="update_merchants()">Мерчендайзеры</a></li>
							<li><a data-toggle="pill" href="#managers" ng-model="menuManagers" ng-click="update_managers()">Менеджеры</a></li>
							<li><a data-toggle="pill" href="#pharmacies" ng-model="menuPharmacies" ng-click="update_pharmacies()">Аптеки</a></li>
							<li><a data-toggle="pill" href="#drugs" ng-model="menuDrugs" ng-click="update_drugs()">Препараты</a></li>
							<li><a data-toggle="pill" href="#companies" ng-model="menuCompanies" ng-click="update_companies()">Компании</a></li>
							<li><a data-toggle="pill" href="#territories" ng-model="menuTerritories" ng-click="update_territories()">Территории</a></li>
							<li><a data-toggle="pill" href="#hospitals" ng-model="menuHospitals" ng-click="update_hospitals()">Поликлиники</a></li>
							<li><a data-toggle="pill" href="#tradenets" ng-model="menuTradenets" ng-click="update_tradenets()">Сети</a></li>
						</ul>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </nav>

        <div id="page-wrapper" >

            <div class="container-fluid">
				<div class="tab-content">

{# DRUGS #}
{% set data = {} %}
{% set data.tab_id = "drugs" %} 
{% set data.angularController = 'drugsList' %}
{% set data.pageCaption = 'Лекарственные препараты' %}
{% set data.add_form_id = 'drug_add' %}
{% set data.tail_template = 'partials/drug_tile.swig' %}
{% set data.grid_template = 'partials/drug_grid.swig' %}
{% set data.modal_body    = 'partials/drug_modal.swig' %}
{% set data.angularRepeat = 'drug in drugs' %}
{% set data.angularElement = 'drug' %}
{% set data.update_form_id = 'drug_upd' %}
{% set data.modal_caption = 'Новый препарат' %}
{% set data.angularElementLast = 'last_drug' %}
   
   
{% include 'model_page.swig' with data %}

                </div>				
            </div>
            <!-- /.container-fluid -->
        </div>
        <!-- /#page-wrapper -->
    </div>
    <!-- /#wrapper -->
	<script>
      var manager = {};
	  //SWIG Injection!!! How to another get user.id in the page?
	  manager.id =  0{{manager.id}};
	</script>		
    <!-- AngularJS -->
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
	
	<!-- jQuery -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="/js/bootstrap.min.js"></script>
	
	<!-- Angular application -->
	<script src="/js/app.js"></script>

    <!-- Morris Charts JavaScript -->
	<!--
    <script src="/js/plugins/morris/raphael.min.js"></script>
    <script src="/js/plugins/morris/morris.min.js"></script>
    <script src="/js/plugins/morris/morris-data.js"></script>
	-->
  

</body>

</html>
   
   
   