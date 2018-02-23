jQuery(function($) {
    "use strict";

    function initialize() {
        //add map, the type of map
        var mapOptions = {
            zoom: 16,
            draggable: true,
            scrollwheel: false,
            animation: google.maps.Animation.DROP,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: new google.maps.LatLng(13.033418, 80.2084686), // area location
            styles: [{ "stylers": [{ "saturation": -100 }, { "gamma": 1 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.business", "elementType": "labels.text", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.business", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.place_of_worship", "elementType": "labels.text", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.place_of_worship", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "water", "stylers": [{ "visibility": "on" }, { "saturation": 50 }, { "gamma": 0 }, { "hue": "#50a5d1" }] }, { "featureType": "administrative.neighborhood", "elementType": "labels.text.fill", "stylers": [{ "color": "#c5c5c5" }] }, { "featureType": "road.local", "elementType": "labels.text", "stylers": [{ "weight": 0.5 }, { "color": "#ff0000" }] }, { "featureType": "transit.station", "elementType": "labels.icon", "stylers": [{ "gamma": 1 }, { "saturation": 50 }] }]
        };
        var mapElement = document.getElementById('map_canvas');
        var map = new google.maps.Map(mapElement, mapOptions);

        //add locations
        var locations = [
            ['MSTC SRM', 13.033418, 80.2084686, 'images/pin.png'],
        ];
        //declare marker call it 'i'
        var marker, i;
        //declare infowindow
        var infowindow = new google.maps.InfoWindow();
        //add marker to each locations
        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map,
                icon: locations[i][3]
            });
            //click function to marker, pops up infowindow
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }
    }
    google.maps.event.addDomListener(window, 'load', initialize);
});