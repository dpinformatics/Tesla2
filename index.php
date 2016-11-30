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
	<body id="main">
		<div class="main">
<!-- content -->
			<article id="content">
				<img src="<?php echo($images . "/tesla_" . rand(0, 10) .".jpg"); ?>" alt="">
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
</html>
