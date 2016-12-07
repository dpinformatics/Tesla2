<!DOCTYPE html>
<html lang="en">

<head>
    <?php
    $images = "images";
    $incl = "inc";
    $title = "Test pagina voor GPS en Locaties";
    //include("{$incl}/headinclude.html");

    $user_ip = getenv('REMOTE_ADDR');
    $geo = unserialize(file_get_contents("http://www.geoplugin.net/php.gp?ip=$user_ip"));
    $country = $geo["geoplugin_countryName"];
    $city = $geo["geoplugin_city"];

    /*$country=file_get_contents('http://api.hostip.info/get_html.php?ip=');
    echo $country;

    // Reformat the data returned (Keep only country and country abbr.)
    $only_country=explode (" ", $country);

    echo "Country : ".$only_country[1]." ".substr($only_country[2],0,4);
    */
    ?>
    <title><?php echo($title); ?></title>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <style>

        td,
        th {
            font-size: medium;
        }
        .xlargefont {
            font-size: x-large;
        }
    </style>
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <!--[if lt IE 9]>
    <script type="text/javascript" src="js/html5.js"></script>
    <link rel="stylesheet" href="css/ie.css" type="text/css" media="all">
    <![endif]-->

</head>

<body id="head">
<h1><?php echo("$title.(u bent in .$city., .$country.)"); ?></h1>

<p>Click the button to get your coordinates.</p>

<button onclick="getLocation()">Try It</button>

<div>
    <p id="demo"></p>

</div>


<div id="mapholder"></div>

</body>

<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
<script type="text/javascript">
    function DetermineDayNight(){

        getLocation();

        var sunrise = [7, 23];
        var sunset = [17, 49];

        var sunrise_m = sunrise[0] * 60 + sunrise[1];
        var sunset_m = sunset[0] * 60 + sunset[1];
        //alert('sunrise : ' + sunrise_m + ' sunset : ' + sunset_m);

        var now = new Date();
        var now_m = now.getHours() * 60 + now.getMinutes();

        if (now_m > sunset_m - 60 && now_m <= sunset_m + 60) {
            //alert("dusk");
            changeCSS('N');
        } else if (now_m > sunrise_m - 60 && now_m <= sunrise_m + 60) {
            //alert("dawn");
            changeCSS('D');
        } else if (now_m > sunrise_m + 60 && now_m <= sunset_m - 60) {
            //alert("day");
            changeCSS('D');
        } else {
            //alert("night");
            changeCSS('N');
        }

    }

    function changeCSS(type) {

        var oldlink = document.getElementsByTagName('link').item(0);

        var newlink = document.createElement('link')
        newlink.setAttribute('rel', 'stylesheet');
        newlink.setAttribute("type", "text/css");
        if (type == 'D'){
            newlink.setAttribute("href", "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css");
            document.getElementById("day").style = "visibility: hidden";
            document.getElementById("night").style = "visibility: visible";
        }else{
            newlink.setAttribute("href", "css/slate.css");
            document.getElementById("day").style = "visibility: visible";
            document.getElementById("night").style = "visibility: hidden";
        }

        document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
    }

    var x = document.getElementById("demo");
    var geocoder;

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        var latlon = position.coords.latitude + "," + position.coords.longitude;

        x.innerHTML = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;

        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        codeLatLng(lat, lng);


        var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
            +latlon+"&zoom=14&size=400x300&sensor=false";
        //alert(img_url);
        document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
    }

    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                x.innerHTML = "User denied the request for Geolocation."
                break;
            case error.POSITION_UNAVAILABLE:
                x.innerHTML = "Location information is unavailable."
                break;
            case error.TIMEOUT:
                x.innerHTML = "The request to get user location timed out."
                break;
            case error.UNKNOWN_ERROR:
                x.innerHTML = "An unknown error occurred."
                break;
        }
    }

    function initialize() {
        geocoder = new google.maps.Geocoder();
    }
    function codeLatLng(lat, lng) {

        var latlng = new google.maps.LatLng(lat, lng);
        geocoder.geocode({'latLng': latlng}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                console.log(results)
                if (results[1]) {
                    //formatted address
                    alert(results[0].formatted_address)
                    //find country name
                    for (var i = 0; i < results[0].address_components.length; i++) {
                        for (var b = 0; b < results[0].address_components[i].types.length; b++) {

                            //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
                            if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                                //this is the object you are looking for
                                city = results[0].address_components[i];
                                break;
                            }
                        }
                    }
                    //city data
                    alert(city.short_name + " " + city.long_name)

                } else {
                    alert("No results found");
                }
            } else {
                alert("Geocoder failed due to: " + status);
            }
        });
    }
</script>
</html>
