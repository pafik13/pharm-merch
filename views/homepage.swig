<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Авторизация</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link id="bootstrap-css" href="/styles/bootstrap.min.css" rel="stylesheet">
		<link href="/styles/login.css" rel="stylesheet">
		<!-- <script src="/js/jquery-1.10.2.min.js"></script> -->
		<script src="/js/jquery-1.11.3.js"></script>
		<script src="/js/bootstrap.min.js"></script>
	</head>
	<body>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="pr-wrap">
						<div class="pass-reset">
							<label>
								Введите свой Email</label>
							<input type="email" placeholder="Email">
							<input class="pass-reset-submit btn btn-success btn-sm" type="submit" value="Восстановить">
						</div>
					</div>
					<div class="wrap">
						<p class="form-title">
							Авторизация</p>
						<form class="login" action="/auth/local?next=/" method="POST">
							<input id="identifier" name="identifier" type="text" placeholder="Пользователь">
							<input id="password" name="password" type="password" placeholder="Пароль">
							<input class="btn btn-success btn-sm" name="signIn" type="submit" value="Войти">
							<div class="remember-forgot">
								<div class="row">
									<div class="col-md-6">
										<div class="checkbox">
											<label>
												<input type="checkbox">
												Запомнить
											</label>
										</div>
									</div>
									<div class="col-md-6 forgot-pass-content">
										<a class="forgot-pass" href="#">Забыли пароль</a>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div class="posted-by">Posted By: <a href="http://www.jquery2dotnet.com">Bhaumik Patel</a></div>
		</div>

		<script type="text/javascript">
			$(document).ready(function() {
				$('.forgot-pass').click(function(event) {
					$(".pr-wrap").toggleClass("show-pass-reset");
				});

				$('.pass-reset-submit').click(function(event) {
					$(".pr-wrap").removeClass("show-pass-reset");
				});
			});
		</script>
	</body>
</html>