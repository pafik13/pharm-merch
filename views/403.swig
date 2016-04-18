<!DOCTYPE html>
<!--


       444444444       000000000      333333333333333
      4::::::::4     00:::::::::00   3:::::::::::::::33
     4:::::::::4   00:::::::::::::00 3::::::33333::::::3
    4::::44::::4  0:::::::000:::::::03333333     3:::::3
   4::::4 4::::4  0::::::0   0::::::0            3:::::3
  4::::4  4::::4  0:::::0     0:::::0            3:::::3
 4::::4   4::::4  0:::::0     0:::::0    33333333:::::3
4::::444444::::4440:::::0 000 0:::::0    3:::::::::::3
4::::::::::::::::40:::::0 000 0:::::0    33333333:::::3
4444444444:::::4440:::::0     0:::::0            3:::::3
          4::::4  0:::::0     0:::::0            3:::::3
          4::::4  0::::::0   0::::::0            3:::::3
          4::::4  0:::::::000:::::::03333333     3:::::3
        44::::::44 00:::::::::::::00 3::::::33333::::::3
        4::::::::4   00:::::::::00   3:::::::::::::::33
        4444444444     000000000      333333333333333



  This is the default "403: Forbidden" page.
  User agents that don't "Accept" HTML will see a JSON version instead.
  You can customize the control logic for your needs in `config/403.js`

  You can trigger this response from one of your controllers or policies with:
  `return res.forbidden( msg );`
  (where `msg` is an optional error message to include in the response)




-->
<html>
  <head>
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
	  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

    <title>Отказано в доступе</title>

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
      div.content {
        text-align: center;
      }

      div.code_img {
        margin-top: 40px;
        margin-bottom: 40px;
      }

      div.logo {
        margin-top: 40px;
        margin-bottom: 20px;
      }
    </style>

  </head>
  <body>
    <div id="page-wrapper">
      <div class="container-fluid">
        <div class="content">
          <div class="main">
            <h1>
              Отказано в доступе
            </h1>
            <h2>

          <div class="code_img">
            <img class="fishy" title='Отказано в доступе' src="/code_403.png">
          </div>

          {% if data.msg %}
            {{ data.msg }}
          {% else %}
            У Вас нет доступа к содержимому сайта. <br>
            Для начала необходимо пройти <a href="/login">авторизацию</a>.
          {% endif %}
            </h2>
            <p class="help">
              <a href="http://en.wikipedia.org/wiki/HTTP_403">Почему</a> это могло произойти?
            </p>
          </div>

          <div class="logo">
            <a href="/login">
              <img src="/logo.png">
            </a>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>