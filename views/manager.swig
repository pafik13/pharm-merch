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

<body>

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
                                        <img class="media-object" src="http://placehold.it/50x50" alt="">
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
                                        <img class="media-object" src="http://placehold.it/50x50" alt="">
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
                                        <img class="media-object" src="http://placehold.it/50x50" alt="">
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
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i> {{ user.username }} <b class="caret"></b></a>
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
                        <a href="javascript:;" data-toggle="collapse" data-target="#demo"><i class="fa fa-fw fa-arrows-v"></i> Пример выпадающего меню<i class="fa fa-fw fa-caret-down"></i></a>
                        <ul id="demo" class="collapse">
                            <li>
                                <a href="#">Dropdown Item</a>
                            </li>
                            <li>
                                <a href="#">Dropdown Item</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </nav>

        <div id="page-wrapper" ng-app="App">

            <div class="container-fluid">
				<ul class="nav nav-pills">
					<li class="active"><a data-toggle="pill" href="#merchants">Мерчендайзеры</a></li>
					<li><a data-toggle="pill" href="#pharmacies">Аптеки</a></li>
					<li><a data-toggle="pill" href="#hospitals">Поликлиники</a></li>
					<li><a data-toggle="pill" href="#tradenets">Сети</a></li>
				</ul>
				<div class="tab-content">
					<div  id="merchants" class="tab-pane fade in active">
					<!-- Page Heading -->
						<div class="row">
							<div class="col-lg-12">
								<h1 class="page-header">
									Мерчендайзеры <small>Основная информация</small>													
									<p data-placement="top" data-toggle="tooltip" title="Добавить нового мерчендайзера"><button class="btn btn-danger btn-xs" data-title="user_add" data-toggle="modal" id="add_plugin" data-target="#add" ><i class="fa fa-plus"></i></button</p>
								</h1>
							</div>

						</div>
						<!-- /.row -->
					
						<div class="row" ng-controller="merchantList" >
						{% raw %}
							<h3>Кол-во: {{users.count()}}</h3>
							<div class="col-lg-6 col-md-6" >					
								<div class="panel panel-primary" ng-repeat="x in users" ng-if="usersLoaded">
									<div class="panel-heading">
										<div class="row">
											<div class="col-xs-3">
												<i class="fa fa-user-md fa-5x"></i>
												<h3>{{x.email}}</h3>
											</div>
											<div class="col-xs-9 text-right">
												<div class="huge">{{x.id}}</div>
												<div>{{x.username}}</div>										
											</div>
										</div>
									</div>
									<a href="#">
										<div class="panel-footer">
											<span class="pull-left">Отчеты</span>
											<span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
											<div class="clearfix"></div>
										</div>
									</a>
								</div>
							</div>
						{% endraw %}	
						</div>
						<!-- /.row -->
					</div>

					<div  id="pharmacies" class="tab-pane fade">
						<!-- Page Heading -->
						<div class="row">
							<div class="col-lg-12">
								<h1 class="page-header">
									Аптеки <small>Основная информация</small>													
									<p data-placement="top" data-toggle="tooltip" title="Добавить аптеку"><button class="btn btn-danger btn-xs" data-title="pharmacy_add" data-toggle="modal" data-target="#pharmacy_add" ><i class="fa fa-plus"></i></button</p>
								</h1>
							</div>

						</div>
						<!-- /.row -->
					
						<div class="row" ng-controller="pharmaciesList">
						{% raw %}
							<h3>Кол-во: {{pharmacies.count()}}</h3>
							<div class="col-lg-6 col-md-6" >					
								<div class="panel panel-primary" ng-repeat="x in pharmacies" ng-if="pharmaciesLoaded">
									<div class="panel-heading">
										<div class="row">
											<div class="col-xs-3">
												<i class="fa fa-building fa-5x"></i>
												<h3>{{x.email}}</h3>
											</div>
											<div class="col-xs-9 text-right">
												<div class="huge">{{x.id}}</div>
												<div>{{x.fullName}}</div>										
												<div>{{x.address}}</div>	
											</div>
										</div>
									</div>
									<a href="#pharmacy_upd" data-toggle="modal" data-placement="top" data-toggle="tooltip" title="Просмотр дополнительных сведений" data-id="{{x.id}}">
										<div class="panel-footer">
										<span class="pull-left"><h4>Подробнее</h4></span>
										<span class="pull-right"><i class="fa fa-arrow-circle-right fa-2x"></i></span>
										<div class="clearfix"></div>
										</div>
									</a>
								</div>
							</div>
						{% endraw %}	
						</div>
						<!-- /.row -->
						
						<!-- Button HTML (to Trigger Modal) -->
    					
					</div>
				</div>				
            </div>
            <!-- /.container-fluid -->

        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->
	
	<div class="modal fade" id="add" tabindex="-1" role="dialog" aria-labelledby="add" aria-hidden="true">
        <div class="modal-dialog">		    
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
					<h4 class="modal-title custom_align" id="Heading">Новый мерчендайзер</h4>
				</div>
				<div class="modal-body">
					<div class="form-group">
						<input class="form-control " type="text" id="name" placeholder="Имя Фамилия Отчество">
					</div>
					<div class="form-group">
						<input class="form-control " type="text" id="phone" placeholder="Телефон">
					</div>
					<div class="form-group">
						<input class="form-control " type="text" id="email" placeholder="Эл. почта">
					</div>					
				</div>
				<div class="modal-footer ">
					<button id="addMerchant" type="button" class="btn btn-warning btn-lg" style="width: 100%;"><span class="glyphicon glyphicon-ok-sign"></span> Добавить</button>
				</div>

			</div>
		</div>
    </div>
	
	<div class="modal fade" id="pharmacy_add" tabindex="-1" role="dialog" aria-labelledby="pharmacy_add" aria-hidden="true">
        <div class="modal-dialog">		    
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
					<h4 class="modal-title custom_align" id="Heading">Новая аптека</h4>
				</div>
				<div class="modal-body">
					<div class="form-group">
						<input class="form-control " type="text" id="p_fullName" placeholder="Полное наименование">
					</div>
					<div class="form-group">
						<input class="form-control " type="text" id="p_phone" placeholder="Телефон">
					</div>
					<div class="form-group">
						<input class="form-control " type="text" id="p_address" placeholder="Адрес">
					</div>					
					<div class="form-group">
						<input class="form-control " type="text" id="p_email" placeholder="Эл. почта">
					</div>					
				</div>
				<div class="modal-footer ">
					<button id="addPharmacy" type="button" class="btn btn-warning btn-lg" style="width: 100%;"><span class="glyphicon glyphicon-ok-sign"></span> Добавить</button>
				</div>

			</div>
		</div>
    </div>	
	
	<div class="modal fade" id="pharmacy_upd" tabindex="-1" role="dialog" aria-labelledby="pharmacy_add" aria-hidden="true">
        <div class="modal-dialog">		    
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
					<h4 class="modal-title custom_align" id="modal-title">Новая аптека</h4>
				</div>
				<div class="modal-body">
					<div class="form-group">
						<input class="form-control " type="text" id="p_fullName" placeholder="Полное наименование">
					</div>
					<div class="form-group">
						<input class="form-control " type="text" id="p_phone" placeholder="Телефон">
					</div>
					<div class="form-group">
						<input class="form-control " type="text" id="p_address" placeholder="Адрес">
					</div>					
					<div class="form-group">
						<input class="form-control " type="text" id="p_email" placeholder="Эл. почта">
					</div>					
				</div>
				<div class="modal-footer ">
					<button id="updPharmacy" type="button" class="btn btn-success"><span class="glyphicon glyphicon-ok-sign"></span> Сохранить</button>
					<button type="button" data-dismiss="modal" class="btn btn-default" ><span class="glyphicon glyphicon-remove"></span> Закрыть</button>
				</div>

			</div>
		</div>
    </div>		

    <!-- AngularJS -->
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
	
	<!-- jQuery -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="/js/bootstrap.min.js"></script>

    <!-- Morris Charts JavaScript -->
    <script src="/js/plugins/morris/raphael.min.js"></script>
    <script src="/js/plugins/morris/morris.min.js"></script>
    <script src="/js/plugins/morris/morris-data.js"></script>
	
	<script>
      var app = angular.module('App', []);
      app.controller('merchantList', function($scope, $http) {
          $http.get("/User/find?")
          .success(function (response) {
		    $scope.users = response;	
			$scope.usersLoaded = true;
			//alert(JSON.stringify(response));
          })
          .error(function(data, status){
			$scope.usersLoaded = false;
		    alert(status + "\n" + data);
		  });
      });
      app.controller('pharmaciesList', function($scope, $http) {
          $http.get("/Pharmacy/find?")
          .success(function (response) {
		    $scope.pharmacies = response;	
			$scope.pharmaciesLoaded = true;
			//alert(JSON.stringify(response));
          })
          .error(function(data, status){
			$scope.pharmaciesLoaded = false;
		    alert(status + "\n" + data);
		  });
      });	  

				 
	 $("button#addPharmacy").click(function(){
		var data = {fullName: $('input#p_fullName').val(), 
					address: $('input#p_address').val(), 
					phone: $('input#p_phone').val(),
					email: $('input#p_email').val()}; 
			$.ajax({
				type: "POST",
				url:  "/Pharmacy/create?",
				dataType: 'json',
				data: data,
				success: function(msg){
				   $("#pharmacy_add").modal('hide'); 
				},
				error: function(err){
				   alert(JSON.stringify(err));
				}
			});
	 });
	 
	 $("button#updPharmacy").click(function(){
	    var modal = $('#pharmacy_upd');
		var button = modal.find('#updPharmacy'); 
	    var id = button.attr('data-id'); 

		var data = {fullName: modal.find('#p_fullName').val(), 
					address: modal.find('#p_address').val(), 
					phone: modal.find('#p_phone').val(),
					email: modal.find('#p_email').val()}; 
			
			$.ajax({
				type: "POST",
				url:  "/Pharmacy/update/"+id,
				dataType: 'json',
				data: data,
				success: function(msg){
				   $("#pharmacy_upd").modal('hide'); 
				},
				error: function(err){
				   alert(JSON.stringify(err));
				}
			});
	 });	 
	 
	 $("button#addMerchant").click(function(){
		var str = $('input#name').val();
		var names = str.split(" ");
		var data = {firstName: names[0], 
					middleName: names[1], 
					lastName: names[2],
					email: $('input#email').val(),
					password: '12345678'}; 
			$.ajax({
				type: "POST",
				url: "/User/create?",
				dataType: 'json',
				data: data,
				success: function(msg){
				   $("#add").modal('hide'); 
				},
				error: function(err){
				   alert(JSON.stringify(err));
				}
			});
	 });	 

	$('#pharmacy_upd').on('show.bs.modal', function (event) {
	  var button = $(event.relatedTarget); 
	  var id = button.data('id'); 
	  $.ajax({
			url:  "/Pharmacy/find/"+id,
			dataType: 'json',
			success: function(data){		
				
				var modal = $('#pharmacy_upd');
				
				modal.find('.modal-title').text(data.fullName);
				modal.find('#p_fullName').val(data.fullName);
				modal.find('#p_address').val(data.address);
				modal.find('#p_phone').val(data.phone);
				modal.find('#p_email').val(data.email);
				modal.find('#updPharmacy').attr('data-id',id);
			   
			},
			error: function(err){
			   alert(JSON.stringify(err));
			}
		});

	});	
 
	$(document).ready(function(){
	    $("[data-toggle=tooltip]").tooltip();
		
			
	});	    	
	</script>	  

</body>

</html>
