<!DOCTYPE html>
<html lang="en">

<head>
    <?php
    $images = "images";
    $incl = "inc";
    $title = "Tesla afstanden tussen superchargers";
    include("{$incl}/headinclude.html");
    ?>
</head>

<body id="head" onload="DetermineDayNight()">
<div id="app" class="container-fluid" style="max-width: 1200px">
    <div class="row" align="center">
        <div class="col-md-12 visible-lg visible-md">
            <img class="img-responsive" src="<?php echo($images . "/tesla_" . rand(0, 0) .".jpg"); ?>" alt="">
            <h1 >Overzicht afstanden tussen SuperChargers</h1>
        </div>
    </div>

    <div class="row" align="center">
        <div class="col-md-12">
            <h1 >
                <a class="btn btn-lg btn-default pull-left" href="index.php"><i class="fa fa-undo"></i> Terug naar startpagina</a>
                <a  v-if="device != 'CAR'" class="btn btn-lg btn-default pull-left" href="#" v-on:click.prevent="device = 'CAR'"><i  class="fa fa-car"></i> Tesla </a>
                <a  v-if="device != 'PC'" class="btn btn-lg btn-default pull-left" href="#" v-on:click.prevent="device = 'PC'"><i  class="fa fa-desktop"></i> PC </a>
                <a id="day" style="visibility: hidden" class="btn btn-lg btn-default pull-right" href="#" onclick="changeCSS('D')"><i class="fa fa-sun-o"></i> Dag</a>
                <a id="night" style="visibility: visible" class="btn btn-lg btn-default pull-right" href="#" onclick="changeCSS('N')"><i class="fa fa-moon-o"></i> Nacht</a>
            </h1>
        </div>
    </div>

    <div>
        <div class="row" v-if="device == 'PC'">
            <div class="col-md-2 hidden-xs"></div>
            <div class="col-xs-6 col-md-4" >
                <div class="form-group" align="left">
                    <label for="destination" class="control-label xlargefont">Locatie :</label>
                    <select class="form-control input-lg xlargefont" id="direction" v-model="activedest">
                        <option v-for="(dest, i) in destinations" v-bind:value="i">{{ dest.name }}</option>
                    </select>
                </div>
            </div>
            <div class="col-xs-6 col-md-4" >
                <div class="form-group" align="left">
                    <label for="direction" class="control-label xlargefont">Richting :</label>
                    <select class="form-control input-lg xlargefont" id="direction" v-model="direction">
                        <option value='A'>Alles</option>
                        <option value='N'>Noord</option>
                        <option value='S'>South</option>
                    </select>
                </div>
            </div>
            <div class="col-md-2 hidden-xs" >
            </div>
        </div>

        <div class="row" v-if="activedest > 0">
            <div class="col-xs-12" >

                <h2>Mogelijke locaties voor {{ destinations[activedest].name }}</h2>
                <table class="table table-striped table-hover">
                    <tr class="bg-success">
                        <th>&nbsp</th>
                        <th>&nbsp</th>
                        <th>&nbsp</th>
                        <th class="text-center">Afstand<br>km</th>
                        <th class="text-center">Typical<br>km</th>
                        <th class="text-center">Verbruik<br>kWh</th>
                        <th class="text-center">Gemiddeld<br>kWh</th>
                        <th class="text-center">Rijtijd<br>u</th>
                        <th class="text-center">Laadtijd<br>u</th>
                    </tr>
                    <tr v-for="leg in destinations[activedest].legs" v-if="direction == leg.dir || direction=='A' || leg.dir == ''">
                        <td><!--a class="open-WayPointDetail btn btn-primary btn-lg" data-toggle="modal"
                               data-target="#myWayPointDetail" ng-click="tc.activewaypoint = $index">Detail</a-->
                        </td>
                        <td>
                            <i class="fa fa-car text-primary" v-if="leg.dir == ''"></i>
                            <i class="fa fa-arrow-up text-primary" v-if="leg.dir == 'N'"></i>
                            <i class="fa fa-arrow-down text-primary" v-if="leg.dir == 'S'"></i>
                        </td>
                        <td><a v-on:click.prevent="activedest = leg.destid + 1">{{ leg.dest }}</a></td>
                        <td class="text-center">{{ leg.distance}}</td>
                        <td class="text-center">{{ leg.typical}}</td>
                        <td class="text-center">{{ leg.consumption}}</td>
                        <td class="text-center">{{ leg.average}}</td>
                        <td class="text-center">{{ leg.drivetime}}</td>
                        <td class="text-center">{{ leg.chargetime}}</td>
                    </tr>
                </table>

            </div>
        </div>
    </div>

</div>
</body>

<script src="js/sucdistances.js"></script>

</html>
