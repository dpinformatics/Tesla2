<!DOCTYPE html>
<html lang="en">
	<head>
		<?php 
			$images = "images";
			$incl = "inc";
			$title = "Tesla Routes";
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
						<div class="col1" align="center">
							<h2><a href="index.php">Terug naar startpagina</a></h2>
						</div>
					</div>
					<div class="wrapper">
						<div class="col1" align="center">
							<h2><a href="underconstruction.php">Plan een nieuwe route</a></h2>
						</div>
					</div>
					<div class="wrapper">
						<div class="col1" align="center">
							<h2><a href="logroute.php">Log een geplande route</a></h2>
						</div>
					</div>
					<div class="wrapper">
						<div class="col1" align="center">
							<h2><a href="logroute.php">Log een nieuwe route</a></h2>
						</div>
					</div>
				</div>
				
				<div class="box1">
					<div class="wrapper">
						<div class="col1" align="center"><h2>Kies uit bestaande routes (XLS-formaat)</h2></div>

<?php
	$files = array();
	$dir = opendir('routes'); // open the cwd..also do an err check.
	while(false != ($file = readdir($dir))) {
        if(($file != ".") and ($file != "..") and ($file != "index.php")) {
            $files[] = $file; // put in array.
        }   
	}

	natsort($files); // sort.

	foreach($files as $file) {
		$filename = str_replace('.html', '', $file);
        echo("<div class='col1' align='center'><h3><a href='routes/$file'>$filename</a></h3></div>\n");
	}
	closedir($dir);

?>
					</div>
				</div>
			</article>
<!--content end-->
		</div>
	</body>
</html>
