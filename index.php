<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">

	<head>
		<?php 
			$images = "images";
			$incl = "inc";
			$title = "Tesla Homepage";
			include("{$incl}/headinclude.html"); 
		?>
	</head>

	<body id="main" onload="DetermineDayNight()">

		<div id="app" class="container-fluid" style="max-width: 1200px">

			<nav class="navbar navbar-default">
				<div class="container-fluid">
					<!-- Brand and toggle get grouped for better mobile display -->
					<div class="navbar-header">
						<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<a class="navbar-brand" href="#">Brand</a>
					</div>

					<!-- Collect the nav links, forms, and other content for toggling -->
					<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul class="nav navbar-nav">
							<li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
							<li><a href="#">Link</a></li>
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
								<ul class="dropdown-menu">
									<li><a href="#">Action</a></li>
									<li><a href="#">Another action</a></li>
									<li><a href="#">Something else here</a></li>
									<li role="separator" class="divider"></li>
									<li><a href="#">Separated link</a></li>
									<li role="separator" class="divider"></li>
									<li><a href="#">One more separated link</a></li>
								</ul>
							</li>
						</ul>
						<form class="navbar-form navbar-left">
							<div class="form-group">
								<input type="text" class="form-control" placeholder="Search">
							</div>
							<button type="submit" class="btn btn-default">Submit</button>
						</form>
						<ul class="nav navbar-nav navbar-right">
							<li><a href="#">Link</a></li>
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
								<ul class="dropdown-menu">
									<li><a href="#">Action</a></li>
									<li><a href="#">Another action</a></li>
									<li><a href="#">Something else here</a></li>
									<li role="separator" class="divider"></li>
									<li><a href="#">Separated link</a></li>
								</ul>
							</li>
						</ul>
					</div><!-- /.navbar-collapse -->
				</div><!-- /.container-fluid -->
			</nav>
			<!--  show the menu  -->
			<div class="row" align="center">
				<div class="col-md-12">
					<h1>
						<a class="btn btn-lg btn-default pull-left" href="index.php"><i class="fa fa-undo"></i> Terug naar startpagina</a>
						<a  v-if="device != 'CAR'" class="btn btn-lg btn-default pull-left" href="#" v-on:click.prevent="device = 'CAR'"><i  class="fa fa-car"></i> Tesla </a>
						<a  v-if="device != 'PC'" class="btn btn-lg btn-default pull-left" href="#" v-on:click.prevent="device = 'PC'"><i  class="fa fa-desktop"></i> PC </a>
						<div class="dropdown pull-left">
							<button class="btn btn-lg btn-default dropdown-toggle" type="button" data-toggle="dropdown">Andere paginas<span class="caret"></span></button>
							<ul class="dropdown-menu">
								<li><a href="#" v-on:click.prevent="device = 'CAR'"><i  class="fa fa-car"></i> Tesla </a></li>
								<li><a href="#" v-on:click.prevent="device = 'PC'"><i  class="fa fa-desktop"></i> PC </a></li>
							</ul>
						</div>
					</h1>
				</div>
			</div>

			<!-- show the pictures -->
			<div class="row" align="center">
				<div class="col-md-12 visible-lg visible-md">
					<img src="<?php echo($images . "/tesla_" . rand(0, 10) .".jpg"); ?>" alt="">
					<h1><?php echo($title); ?></h1>
				</div>
			</div>

			<div class="box1">
					<div class="wrapper">
						<div class="col13" align="center">
							<h2><a href="routes.php">Routes</a></h2>
							<p class="pad_bot1">Ga naar de pagina voor het plannen en loggen van de routes</p>
							<!--a href="routes.php" class="button2">Routes</a -->
						</div>
						<div class="col13 pad_left1" align="center">
							<h2><a href="http://teslaapps.net">Tesla Applications</a></h2>
							<p class="pad_bot1">Apps for your Tesla Model S</p>
							<!--a href="http://teslaapps.net" class="button2">Tesla Apps</a-->
						</div>
						<div class="col13 pad_left1" align="center">
							<h2><a href="sucdistances.php">Supercharger afstanden</a></h2>
							<p class="pad_bot1">Overzicht afstanden tussen superchargers</p>
							<!--a href="sucdistances.php" class="button2">Supercharger afstanden</a-->
						</div>
					</div>
				</div>
			</article>
<!--content end-->
		</div>
	</body>

	<script src="js/sucdistances.js"></script>

</html>
