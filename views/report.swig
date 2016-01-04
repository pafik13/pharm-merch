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
    <!--<link href="/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.5.0/css/bootstrap-datepicker3.css">

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

.table th {
    text-align: center;
}

</style>

    <div id="wrapper">

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
                    <li>
                        <a href="/"><i class="fa fa-fw fa-dashboard"></i> Главная</a>
                    </li>
                    <li class="active">
                        <a href="#reports" data-toggle="collapse" data-target="#dictionary"><i class="fa fa-fw fa-file-text"></i> Отчеты<i class="fa fa-fw fa-caret-down"></i></a>

						<ul  id="reports" class="collapse in active" class="nav nav-pills">
							<li><a data-toggle="pill" href="#base">База аптек</a></li>
							<li><a data-toggle="pill" href="#visits">МЧ_Визиты</a></li>
							<li><a data-toggle="pill" href="#dailyAll">Ежедневный +</a></li>
							<li><a data-toggle="pill" href="#weekly">Недельный</a></li>
							<li><a data-toggle="pill" href="#monthly">Месячный</a></li>
						</ul>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </nav>

        <div id="page-wrapper" >

            <div class="container-fluid">
				<div class="tab-content">
					<div  id="base" class="tab-pane fade" ng-controller="baseQueryController">
						{% raw %}
                        <!-- Page Heading -->
                        <div class="row">
                            <div class="col-lg-12">
                                <h1 class="page-header">
                                    Мерчендайзеры <small>Аптечная база</small>
                                </h1>

                                <form class="form-inline">
                                    <div class="form-group">
                                        <label for="reportMerchant">Мерчендайзер:</label>
                                        <select class="form-control" name="reportMerchant" id="reportMerchant" ng-options="merch.lastName for merch in merchantList" ng-model="merchant">
                                        </select>

                                        <div type="button" class="btn btn-danger" ng-click="admin_query()"><span class="glyphicon glyphicon-refresh" aria-hidden="true"></span> Обновить</div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <!-- /.row -->
						<div class="row">
							<report  results="results" meta="meta" ng-model="results" />
						</div>

						{% endraw %}
					</div>
					<div  id="visits" class="tab-pane fade" ng-controller="visitsQueryController">
				    {% raw %}
                     <!-- Page Heading -->
                        <div class="row">
                            <div class="col-lg-12">
                                <h1 class="page-header">
                                    Мерчендайзеры <small>Выполнение нормы за неделю</small>
                                </h1>

                                <form class="form-inline">
                                    <div class="form-group">
                                        <label for="reportMerchant">Мерчендайзер:</label>
                                        <select class="form-control" name="reportMerchant" id="reportMerchant" ng-options="merch.lastName for merch in merchantList" ng-model="merchant">
                                        </select>
                                        <label for="yearSelect"> Год: </label>
                                        <select class="form-control" name="yearSelect" id="yearSelect" ng-change="wp.yearChange()"
                                          ng-options="option.year for option in wp.data.availableYears track by option.year"
                                          ng-model="wp.data.selectedYear">
                                        </select>
                                        <label for="weekSelect"> Неделя: </label>
                                        <select class="form-control" name="weekSelect" id="weekSelect"
                                          ng-options="option.name for option in wp.data.availableWeeks track by option.week"
                                          ng-model="wp.data.selectedWeek">
                                        </select>
                                        <div type="button" class="btn btn-danger" ng-click="admin_query()"><span class="glyphicon glyphicon-refresh" aria-hidden="true"></span> Обновить</div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <!-- /.row -->
						<div class="row">
							<report  results="results" meta="meta" ng-model="results" />
						</div>
						{% endraw %}
					</div>
					<div  id="dailyAll" class="tab-pane fade" style="height: 500px" ng-controller="dailyAllQueryController">
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
							<div class="col-md-1 col-lg-6 ">
								<form class="form-horizontal pull-left">
									<div class="span12">
										<label for="reportMerchant">Лекарственные препараты:</label>
										<select class="form-control" name="reportMerchant" id="reportMerchant"  ng-options="option.fullName for option in merchantList track by option.id">
										</select>
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
									<report  results="results" ng-model="results" />
								</div>
							</div>
						</div>

						{% endraw %}
					</div>
					<div  id="weekly" class="tab-pane fade" style="height: 500px" ng-controller="weeklyQueryController">
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
							<div class="col-md-1 col-lg-6 ">
								<form class="form-horizontal pull-left">
									<div class="form-group">
										<label for="reportMerchant">Лекарственные препараты:</label>
										<select class="form-control" name="reportMerchant" id="reportMerchant"  ng-options="option.fullName for option in merchantList track by option.id">
										</select>
									</div>
									<div class="form-group">
										<label for="reportMerchant">Дата:</label>
										<input class="form-control datepicker-week" name="reportDate" id="monthMerchDate" ng-model="week" type="text" />
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
									<report  results="results" ng-model="results" />
								</div>
							</div>
						</div>

						{% endraw %}
					</div>
					<div  id="monthly" class="tab-pane fade" style="height: 500px" ng-controller="monthlyQueryController">
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
							<div class="col-md-1 col-lg-6 ">
								<form class="form-horizontal pull-left">
									<div class="form-group">
										<label for="reportMerchant">Мерчендайзер:</label>
										<select class="form-control" name="reportMerchant" id="reportMerchant"  ng-options="option.firstName for option in merchantList track by option.id">
										</select>
									</div>
									<div class="form-group">
										<label for="monthMerchDate">Месяц:</label>
										<input class="form-control datepicker-month" name="reportDate" id="monthMerchDate" ng-model="month" type="text" />
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
									<report  results="results" ng-model="results" />
								</div>
							</div>
						</div>

						{% endraw %}
					</div>
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

	<!-- jQuery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.js"></script>

  <!-- AngularJS -->
    <script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/moment.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/locale/ru.js"></script>

    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
	<!-- Angular application -->
	<script src="/js/report.js"></script>
</body>

</html>