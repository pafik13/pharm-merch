<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Full Page Sign In - Bootsnipp.com</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link id="bootstrap-css" href="/styles/bootstrap.min.css" rel="stylesheet">
		<link href="/styles/login.css" rel="stylesheet">
		<!-- <script src="/js/jquery-1.10.2.min.js"></script> -->
		<script src="/js/jquery-1.11.3.js"></script>
		<script src="/js/bootstrap.min.js"></script>
		<script type="text/javascript">
			window.alert = function() {};
			var defaultCSS = document.getElementById('bootstrap-css');

			function changeCSS(css) {
				if (css) $('head > link').filter(':first').replaceWith('<link rel="stylesheet" href="' + css + '" type="text/css" />');
				else $('head > link').filter(':first').replaceWith(defaultCSS);
			}
			$(document).ready(function() {
				var iframe_height = parseInt($('html').height());
				window.parent.postMessage(iframe_height, 'http://bootsnipp.com');
			});
		</script>
	</head>
	<body>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="pr-wrap">
						<div class="pass-reset">
							<label>
								Enter the email you signed up with</label>
							<input type="email" placeholder="Email">
							<input class="pass-reset-submit btn btn-success btn-sm" type="submit" value="Submit">
						</div>
					</div>
					<div class="wrap">
						<p class="form-title">
							Sign In</p>
						<form class="login">
						<input type="text" placeholder="Username">
						<input type="password" placeholder="Password">
						<input class="btn btn-success btn-sm" type="submit" value="Sign In">
						<div class="remember-forgot">
							<div class="row">
								<div class="col-md-6">
									<div class="checkbox">
										<label>
											<input type="checkbox">
											Remember Me
										</label>
									</div>
								</div>
								<div class="col-md-6 forgot-pass-content">
									<a class="forgot-pass" href="javascription:void(0)">Forgot Password</a>
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