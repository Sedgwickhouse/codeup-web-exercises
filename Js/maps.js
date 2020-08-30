mapboxgl.accessToken = MAPBOX_TOKEN;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 4 // starting zoom
});

var MaxPhilly = new mapboxgl.Marker()
    .setLngLat([-75.150214, 40.012915])
    .addTo(map);

var popPhilly = new mapboxgl.Popup()
    .setLngLat([-75.150214, 40.012915])
    .setHTML("<p>Max's Philly Cheesesteak!</p>");

//popPhilly.setPopUp(popPhilly);

let bestPlacesToEat = [
    {
        Lnglatt: [-75.150214, 40.012915],
        location: "Philidelphia, PA",
        Food: "Philly Cheesesteaks",
        Year: 2019
    },
    {
        LngLatt: [-98.597313, 29.620078],
        location: "San Antonio, TX",
        Food: "Pizza",
        Year:"2019"
    },

    {
        LngLatt: [-98.449052, 34.624039],
        location: "Lawton, OK",
        Food: "Pizza",
        Year: 2000
    }
    ]

bestPlacesToEat.forEach(function(food) {
    var popup = new mapboxg1.Popup()
        .setHTML(food.location);
    new mapboxgl.Marker()
        .setLngLat(food.LngLatt)
        .addTo(map)
        .setPopup(popup);
})
