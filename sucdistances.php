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

<body id="main">
<div class="container-fluid" style="max-width: 1200px">
    <div class="row" align="center">
        <div class="col-md-12 hidden-xs">
            <img class="img-responsive" src="<?php echo($images . "/tesla_" . rand(0, 0) .".jpg"); ?>" alt="">
            <h1 >Overzicht afstanden tussen SuperChargers</h1>
        </div>
    </div>
    <div class="row" align="center">
        <div class="col-md-12">
            <h1 >
                <a class="btn btn-lg btn-default pull-left" href="index.php"><i class="fa fa-undo"></i> Terug naar startpagina</a>
                <a class="btn btn-lg btn-default pull-left" href="#"><i  class="fa fa-refresh"></i> Verfrissen </a>
                <a class="btn btn-lg btn-default pull-right" href="#" onclick="changeCSS()"><i class="fa fa-undo"></i> Dag - Nacht</a>
            </h1>
        </div>
    </div>

    <div id="app">
        <div class="row">

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
        <div class="row">

            <div class="col-xs-12">
                <!--p>
                <ul v-if="activedest < 4" id="example-1">
                    <li v-for="leg in destinations[activedest].legs" v-if="direction == leg.dir || direction=='A'">
                        <span v-if="leg.dir != ''">{{ leg.dest }} - {{ leg.distance }} - {{ leg.typical }}</span>
                    </li>
                </ul>
                </p -->

                <h2>Mogelijke locaties </h2>
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
                    </tr>
                    <tr v-for="leg in destinations[activedest].legs" v-if="direction == leg.dir || direction=='A'">
                        <td><!--a class="open-WayPointDetail btn btn-primary btn-lg" data-toggle="modal"
                               data-target="#myWayPointDetail" ng-click="tc.activewaypoint = $index">Detail</a-->
                        </td>
                        <td>
                            <i class="fa fa-car text-primary" v-if="leg.dir == ''"></i>
                            <i class="fa fa-arrow-up text-primary" v-if="leg.dir == 'N'"></i>
                            <i class="fa fa-arrow-down text-primary" v-if="leg.dir == 'S'"></i>
                        </td>
                        <td>{{ leg.dest }}</td>
                        <td class="text-center">{{ leg.distance}}</td>
                        <td class="text-center">{{ leg.typical}}</td>
                        <td class="text-center">{{ leg.consumption}}</td>
                        <td class="text-center">{{ leg.average}}</td>
                        <td class="text-center">{{ leg.drivetime}}</td>
                    </tr>
                </table>

            </div>
        </div>
    </div>

</div>
</body>

<script>
    new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue.js! test	',
            destinations:[
                { name:''
                    , legs:[]
                },
                { name:'Brecht'
                    , legs:[
                    { dest:'Brecht'      		, distance:0          , typical:0, dir:''}
                    , { dest:'Aartselaar'      		, distance:100          , typical:105, dir:'S'}
                    , { dest:'Machelen'          , distance:150          , typical:180, dir:'S'}
                ]
                },
                { name:'Aartselaar'
                    , legs:[
                    { dest:'Brecht'      		, distance:100          , typical:95, dir:'N'}
                    , { dest:'Aartselaar'      		, distance:0          , typical:0, dir:''}
                    , { dest:'Machelen'          , distance:50          , typical:75, dir:'S'}
                ]
                },
                { name:'Machelen'
                    , legs:[
                    { dest:'Brecht'      		, distance:150          , typical:170, dir:'N'}
                    , { dest:'Aartselaar'          , distance:50          , typical:40, dir:'N'}
                ]
                }
            ],
            activedest:0,
            direction: 'A'
        }
    })</script>

</html>
