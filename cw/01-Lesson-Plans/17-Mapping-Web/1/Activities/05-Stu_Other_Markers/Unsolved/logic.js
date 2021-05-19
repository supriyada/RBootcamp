// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map").setView([39.8283, -98.5795], 5);

// Add a tile layer (the background map image) to our map
// Use the addTo method to add objects to our map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Create a red circle over Dallas -- 32.7767° N, 96.7970° W

L.marker([32.7767, -96.7970]).addTo(myMap);

L.circle([32.7767, -96.7970], {
  color: "green",
  fillColor: "green",
  fillOpacity: 0.75,
  radius: 100000
}).addTo(myMap);

// Connect a black line from NYC to Toronto

var line = [
  [40.7128, -74.0060],
  [74.0060, -79.3832],
  [32.0809, -81.0912],
  [40.7128, -74.0060]
];
L.polyline([
  [40.7128, -74.0060],
  [43.6532, -79.3832]
], {
  color: "black",
}).addTo(myMap);



// Create a purple polygon that covers the area in Atlanta, Savannah, Jacksonville and Montgomery
L.polygon([
  [33.7490, -84.3880],
  [32.0809, -81.0912],
  [30.3322, -81.6557],
  [32.3792, -86.3077]
], {
  color: "purple",
  fillColor: "purple",
  fillOpacity: 0.75
}).addTo(myMap);