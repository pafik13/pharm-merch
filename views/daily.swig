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

.table th {
    text-align: center;
}

/*
    Carusel
 */
.modal-dialog {}
.thumbnail {margin-bottom:6px;}

.carousel-control.left,.carousel-control.right{
  background-image:none;
  margin-top:10%;
  width:5%;
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
                        <a href="#reports" data-toggle="collapse" data-target="#reports"><i class="fa fa-fw fa-database"></i> Отчеты <i class="fa fa-fw fa-caret-down"></i></a>
                   
                        <ul  id="reports" class="collapse in active" class="nav nav-pills">    <li class="active"><a href="/Report/Merchants">Мерчендайзеры</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </nav>

        <div id="page-wrapper" >

            <div class="container-fluid">
				<div class="tab-content">		
					
					<div id="report" class="tab-pane fade in active" ng-controller="projectsList">
						<!-- Page Heading -->
						<div class="row">
							<div class="col-lg-12">
								<h1 class="page-header">
									Отчеты <small>Мерчендайзеры - {{title}}</small>
								</h1>
							</div>

						</div>
						<!-- /.row -->
						<!-- FILTER -->
						<div class="row">
							<div class="col-md-1 col-lg-6 ">
                                <button type="button" id="bExport" class="btn btn-success">
                                    <i class="glyphicon glyphicon-download-alt"></i>
                                    Выгрузить в Excel
                                </button> 
								<form id="custom-search-form" class="form-search form-horizontal pull-left">
									<div class="input-append span12">
										<input type="text" ng-model="search" class="search-query mac-style" placeholder="Поиск">
										<button type="submit" class="btn"><i class="icon-search"></i></button>
									</div>
								</form>
							</div>
						</div>
						<div class="row">
						  <div class="col-lg-12">
                            <h2>{{ subtitle }}</h2>
                                <div id="tData" class="table-responsive">
                                    <table class="table table-bordered table-hover table-striped">
                                        <thead>
                                            <tr>
                                                <th>ФИО мерчендайзера</th>
                                                <th>Город</th>
                                                <th>Название аптеки</th>
                                                <th>Адрес аптеки</th>
                                                <th>Название АС</th>
                                                <th>Расстояние до аптеки </br> по GPS (метры)
                                                </th>
                                                <th>Дата визита</th>
                                                <th>Фото</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {% for row in reportRows %}

                                              <tr
                                                {% if row.gpsDist %}
                                                    {% if row.gpsDist < 701 %}
                                                        class="success"
                                                    {% elseif row.gpsDist >= 701&& row.gpsDist <= 1000 %}
                                                      class="warning"
                                                    {% elseif row.gpsDist > 1000 %}
                                                      class="danger"
                                                    {% else %}
                                                    {% endif %}
                                                {% endif %}
                                              >
                                                <td> {{ row.merchant.lastName + ' ' + row.merchant.firstName}} </td> 
                                                <td> {{ row.baseCity }} </td>
                                                <td> {{ row.pharmacy.fullName }} </td>
                                                <td> {{ row.pharmacy.address }} </td>
                                                <td> {{ row.pharmacy.tradeNet }} </td>
                                                <td> {{ row.gpsDist.toString() }} </td>
                                                <td class="text-center"> {{ row.date | date('d.m.y')}} </td>
                                                <td> 
                                                    {% if row.photos.length %}
                                                        <button type="button" id="image-{{row.id}}" class="btn-photo btn btn-primary btn-md" title="Посмотреть фото"> 
                                                            <i class="glyphicon glyphicon-eye-open"></i> Фото
                                                        </button>
                                                    {% endif %}
                                                </td>
                                              </tr>
                                            {% endfor %}
                                        </tbody>
                                    </table>
                                </div>
                            </div>					
						</div>
						<!-- /.row -->
													
					</div>

				</div>				
            </div>
            <!-- /.container-fluid -->
        </div>
        <!-- /#page-wrapper -->


        <!-- Image Repository -->
        <div class="hidden" id="img-repo">
            {% for row in reportRows %}
                {% for photo in row.photos %}
                    <div class="item" id="image-{{ row.id }}">
                        <img class="thumbnail img-responsive" 
                        title="Аптека: {{row.pharmacy.fullName}}, Адрес: {{row.pharmacy.address}}, Дата: {{ row.date | date('d.m.y')  }}"
                        imagetitle="Фото : {{ loop.index }}"
                        src="{{ photo.relPath }}">
                    </div>     
                {% endfor %}
            {% endfor %}      
        </div>
        <!-- /#Image Repository -->

        <!-- Image Modal Form -->
        <div class="modal" id="modal-gallery" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                  <button class="close" type="button" data-dismiss="modal">×</button>
                  <h5 class="modal-title"></h5>
              </div>
              <div class="modal-body">
                  <div id="modal-carousel" class="carousel">
           
                    <div class="carousel-inner">           
                    </div>
                    
                    <a class="carousel-control left" href="#modal-carousel" data-slide="prev"><i class="glyphicon glyphicon-chevron-left"></i></a>
                    <a class="carousel-control right" href="#modal-carousel" data-slide="next"><i class="glyphicon glyphicon-chevron-right"></i></a>
                    <b class="image-title"></b>

                  </div>

              </div>
              <div class="modal-footer">
                  <button class="btn btn-default" data-dismiss="modal">Закрыть</button>
              </div>
            </div>
          </div>
        </div>
        <!-- Image Modal Form -->

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
    <script src="/js/bootstrap.min.js"></script>

    <!-- Morris Charts JavaScript -->
	<!--
    <script src="/js/plugins/morris/raphael.min.js"></script>
    <script src="/js/plugins/morris/morris.min.js"></script>
    <script src="/js/plugins/morris/morris-data.js"></script>
	-->

    <script type="text/javascript">
        // Export to Excel
        $('#bExport').click(function (e){
            window.open('data:application/vnd.ms-excel,' + 
                encodeURIComponent($('#tData').html()));
            e.preventDefault();
        });

        /* activate the carousel */
        $("#modal-carousel").carousel({interval:false});

        /* change modal title when slide changes */
        $("#modal-carousel").on("slid.bs.carousel", function () {
          $(".modal-title").html($(this).find(".active img").attr("title"));
          $(".image-title").html($(this).find(".active img").attr("imagetitle"));
        })

        /* when clicking a thumbnail */
        $(".row .btn-photo").click(function(){
            var content = $(".carousel-inner");
            var title = $(".modal-title");
            var i_title = $(".image-title");

            content.empty();  
            title.empty();
          
            var id = this.id;  
            var repo = $("#img-repo .item");
            var repoCopy = repo.filter("#" + id).clone();
            var active = repoCopy.first();
          
            active.addClass("active");
            title.html(active.find("img").attr("title"));
            i_title.html(active.find("img").attr("imagetitle"));
            content.append(repoCopy);

            // show the modal
            $("#modal-gallery").modal("show");
        });
    </script>  

</body>

</html>