#!/usr/bin/php
<?php
$sSuperChargers = $sOtherChargers = "";
$aTeslaChargers = json_decode(file_get_contents('http://www.teslamotors.com/all-locations?type=supercharger&country=belgium'), true);
$sFormat = "%-60.60s %-15s %-15s %s<br>";

foreach($aTeslaChargers as $aTeslaCharger) {
    $sFormattedData = sprintf($sFormat, $aTeslaCharger['title'],
        sprintf('%15s', $aTeslaCharger['latitude']),
        sprintf('%15s', $aTeslaCharger['longitude']),
        trim(preg_replace('/\s+/', ' ', $aTeslaCharger['address']))
    );
    $sSuperChargers .= $sFormattedData.'<br>';
/*
    if($aTeslaCharger['charger_stalls'] > 0 && $aTeslaCharger['open_soon'] == 0) {
        $sSuperChargers .= $sFormattedData;
    } else {
        $sOtherChargers .= $sFormattedData;
    }*/
}

printf($sFormat, 'Name', 'Latitude', 'Longitude', 'Address');
echo $sSuperChargers;
echo "Other Chargers:<br>";
echo $sOtherChargers."<br>";
