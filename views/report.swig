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
<<<<<<< HEAD
    .weekHover {background: #428BCA}
    
=======
    .datepicker table tbody tr:hover > td.day{background: #04c}

>>>>>>> 0623562bda38a850d49c04e429c50165d6584aed
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


  .form-filter {
    margin-bottom: 20px;
  }

</style>

    <div id="wrapper">

<<<<<<< HEAD
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
							<li><a data-toggle="pill" href="#merchants">Мерчендайзеры</a></li>
							<li><a data-toggle="pill" href="#daily">Ежедневный</a></li>
							<li><a data-toggle="pill" href="#dailyAll">Ежедневный +</a></li>
							<li><a data-toggle="pill" href="#weekly">Недельный</a></li>
							<li><a data-toggle="pill" href="#monthly">Месячный</a></li>
							<li><a data-toggle="pill" href="#dateinterval">За интервал дат</a></li>
						</ul>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </nav>
=======
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
>>>>>>> 0623562bda38a850d49c04e429c50165d6584aed

          <ul id="reports" class="collapse in active" class="nav nav-pills">
            <li><a data-toggle="pill" href="#merchBase">База аптек</a></li>
            <li><a data-toggle="pill" href="#merchVisits">Нормы визитов</a></li>
            <li><a data-toggle="pill" href="#merchVisitsFreq">Частота визитов</a></li>
            <li><a data-toggle="pill" href="#teamVisits">Нормы визитов по команде</a></li>
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

      <div id="page-wrapper" >
        <div class="container-fluid">
          <div class="tab-content">
            <div  id="merchBase" class="tab-pane fade" ng-controller="merchBaseController">
						{% raw %}
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
                        <select class="form-control" name="merchant" id="merchant" ng-options="merch.lastName for merch in merchantList" ng-model="merchant">
                        </select>
                    </div>
                    <button class="btn btn-danger" ng-click="admin_query()"><span class="glyphicon glyphicon-refresh" aria-hidden="true"></span> Обновить</button>
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
            <div  id="merchVisits" class="tab-pane fade" ng-controller="merchVisitsController">
						{% raw %}
              <!-- Page Heading -->
              <div class="row">
                <div class="col-lg-12">
                  <h1 class="page-header">
                      Выполнение нормы визитов
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
                        <select class="form-control" name="merchant" id="merchant" ng-options="merch.lastName for merch in merchantList" ng-model="merchant">
                        </select>
                    </div>
                    <div class="form-group">
                      <label for="month">Месяц:</label>
                      <input class="form-control datepicker-month" name="month" id="month" ng-model="month" type="text" />
                    </div>
                    <button class="btn btn-danger" ng-click="admin_query()"><span class="glyphicon glyphicon-refresh" aria-hidden="true"></span> Обновить</button>
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
                        <select class="form-control" name="merchant" id="merchant" ng-options="merch.lastName for merch in merchantList" ng-model="merchant">
                        </select>
                    </div>
                    <div class="form-group">
                      <label for="month">Месяц:</label>
                      <input class="form-control datepicker-month" name="month" id="month" ng-model="month" type="text" />
                    </div>
                    <button class="btn btn-danger" ng-click="admin_query()"><span class="glyphicon glyphicon-refresh" aria-hidden="true"></span> Обновить</button>
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
                      Нормы визитов по команде
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
                      <input class="form-control datepicker-week" name="week" id="week" ng-model="week" type="text" />
                    </div>
                    <button class="btn btn-danger" ng-click="admin_query()"><span class="glyphicon glyphicon-refresh" aria-hidden="true"></span> Обновить</button>
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
                        <select class="form-control" name="tradenet" id="tradenet" ng-options="tradenet.fullName for tradenet in tradenetList" ng-model="tradenet">
                        </select>
                    </div>
                    <div class="form-group">
                      <label for="month">Месяц:</label>
                      <input class="form-control datepicker-month" name="month" id="month" ng-model="month" type="text" />
                    </div>
                    <div class="form-group">
                        <label for="drug">Препарат:</label>
                        <select class="form-control" name="drug" id="drug" ng-options="drug.fullName for drug in drugList" ng-model="drug">
                        </select>
                    </div>
                    <button class="btn btn-danger" ng-click="admin_query()"><span class="glyphicon glyphicon-refresh" aria-hidden="true"></span> Обновить</button>
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
                        <select class="form-control" name="tradenet" id="tradenet" ng-options="tradenet.fullName for tradenet in tradenetList" ng-model="tradenet">
                        </select>
                    </div>
                    <div class="form-group">
                      <label for="month">Месяц:</label>
                      <input class="form-control datepicker-month" name="month" id="month" ng-model="month" type="text" />
                    </div>
                    <div class="form-group">
                        <label for="drug">Препарат:</label>
                        <select class="form-control" name="drug" id="drug" ng-options="drug.fullName for drug in drugList" ng-model="drug">
                        </select>
                    </div>
                    <button class="btn btn-danger" ng-click="admin_query()"><span class="glyphicon glyphicon-refresh" aria-hidden="true"></span> Обновить</button>
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
                        <select class="form-control" name="tradenet" id="tradenet" ng-options="tradenet.fullName for tradenet in tradenetList" ng-model="tradenet">
                        </select>
                    </div>
                    <div class="form-group">
                      <label for="month">Месяц:</label>
                      <input class="form-control datepicker-month" name="month" id="month" ng-model="month" type="text" />
                    </div>
                    <div class="form-group">
                        <label for="drug">Препарат:</label>
                        <select class="form-control" name="drug" id="drug" ng-options="drug.fullName for drug in drugList" ng-model="drug">
                        </select>
                    </div>
                    <button class="btn btn-danger" ng-click="admin_query()"><span class="glyphicon glyphicon-refresh" aria-hidden="true"></span> Обновить</button>
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
                        <select class="form-control" name="tradenet" id="tradenet" ng-options="tradenet.fullName for tradenet in tradenetList" ng-model="tradenet">
                        </select>
                    </div>
                    <div class="form-group">
                      <label for="month">Месяц:</label>
                      <input class="form-control datepicker-month" name="month" id="month" ng-model="month" type="text" />
                    </div>
                    <div class="form-group">
                        <label for="drug">Препарат:</label>
                        <select class="form-control" name="drug" id="drug" ng-options="drug.fullName for drug in drugList" ng-model="drug">
                        </select>
                    </div>
                    <button class="btn btn-danger" ng-click="admin_query()"><span class="glyphicon glyphicon-refresh" aria-hidden="true"></span> Обновить</button>
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
                        <select class="form-control" name="tradenet" id="tradenet" ng-options="tradenet.fullName for tradenet in tradenetList" ng-model="tradenet">
                        </select>
                    </div>
                    <div class="form-group">
                      <label for="month">Месяц:</label>
                      <input class="form-control datepicker-month" name="month" id="month" ng-model="month" type="text" />
                    </div>
                    <div class="form-group">
                        <label for="drug">Препарат:</label>
                        <select class="form-control" name="drug" id="drug" ng-options="drug.fullName for drug in drugList" ng-model="drug">
                        </select>
                    </div>
                    <button class="btn btn-danger" ng-click="admin_query()"><span class="glyphicon glyphicon-refresh" aria-hidden="true"></span> Обновить</button>
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
          <!-- /.tab-content -->
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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.5.0/js/bootstrap-datepicker.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.5.0/locales/bootstrap-datepicker.ru.min.js"></script>

	<!-- Angular application -->
	<script src="/js/report.js"></script>

</body>

</html>