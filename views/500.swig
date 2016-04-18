<!DOCTYPE html>
<!--


555555555555555555      000000000          000000000
5::::::::::::::::5    00:::::::::00      00:::::::::00
5::::::::::::::::5  00:::::::::::::00  00:::::::::::::00
5:::::555555555555 0:::::::000:::::::00:::::::000:::::::0
5:::::5            0::::::0   0::::::00::::::0   0::::::0
5:::::5            0:::::0     0:::::00:::::0     0:::::0
5:::::5555555555   0:::::0     0:::::00:::::0     0:::::0
5:::::::::::::::5  0:::::0 000 0:::::00:::::0 000 0:::::0
555555555555:::::5 0:::::0 000 0:::::00:::::0 000 0:::::0
            5:::::50:::::0     0:::::00:::::0     0:::::0
            5:::::50:::::0     0:::::00:::::0     0:::::0
5555555     5:::::50::::::0   0::::::00::::::0   0::::::0
5::::::55555::::::50:::::::000:::::::00:::::::000:::::::0
 55:::::::::::::55  00:::::::::::::00  00:::::::::::::00
   55:::::::::55      00:::::::::00      00:::::::::00
     555555555          000000000          000000000



  This is the default "500: Server Error" page.
  User agents that don't "Accept" HTML will see a JSON version instead.
  You can customize the control logic for your needs in `config/500.js`

  Sails considers a request in a "500: Server Error" state when
  your app throws a catchable error (not inside of an asynchronous callback).

  You can also trigger this response from one of your controllers or policies with:
  `return res.serverError( e );`
  (where `e` is an optional message, error, or array of errors to include in the response)

-->
<html>
  <head>
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
	  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

    <title>Ошибка на сервере!</title>

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
              Ошибка на сервере!
            </h1>

            <div class="code_img">
              <img class="whale" title='Ошибка на сервере!' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAADICAYAAAAwXDJ6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADrWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBSaWdodHM9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9yaWdodHMvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wUmlnaHRzOk1hcmtlZD0iRmFsc2UiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0idXVpZDpFRkIxOTUwMkU3NTBFMjExOEVDNEE5NDhEOEI1QzJFMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMzM2NDE1RDhCQTQxMUUyQUM0NTlDNzE3MjY0QTU0MyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMzM2NDE1QzhCQTQxMUUyQUM0NTlDNzE3MjY0QTU0MyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1MzIFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFu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'/>
            </div>
            <h2>
          {% if error %}
            <pre class="error"><code>
        	    {{ error }}
            </code></pre>
          {% else %}
            <p class="error">
              Ошибка на сервере. <a href="/">Попробуйте перейти на Главную</a><br>
              Если ошибка повторяется, то свяжитесь с администратором портала по почте <a href="mailto://lyubin.p@gmail.com">.
            </p>
          {% endif %}
            </h2>
            <p class="help">
              <a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2_%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F_HTTP#500">Почему</a> это могло произойти?
            </p>
          </div>

          <div class="logo">
            <a href="/">
              <img src="/logo.png">
            </a>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>