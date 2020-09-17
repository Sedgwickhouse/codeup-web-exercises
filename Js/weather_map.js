mapboxgl.accessToken = MAPBOX_TOKEN;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-84.394513, 33.766266], // starting position [lng, lat]
    zoom: 4 // starting zoom
});
