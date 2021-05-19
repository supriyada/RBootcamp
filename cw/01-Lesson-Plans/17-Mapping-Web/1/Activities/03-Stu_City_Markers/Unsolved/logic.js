// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// City markers

// Add code to create a marker for each city below and add it to the map

// newyork; 40.7128 , -74.0060
// chicago; 41.8781, -87.6298
// houston; 29.7604, -95.3698
// la; 34.0522, -118.2437
// omaha; 41.2565, -95.9345
var cities = [{location:[40.7128 , -74.0060], name: "New York", population: "8,100,000"},
              {location:[41.8781, -87.6298], name: "Chicago", population: "8,400,000"},
              {location:[29.7604, -95.3698], name: "Houston", population: "8,500,000"},
              {location:[34.0522, -118.2437], name: "Los Angeles", population: "800,000"},
              {location:[41.2565, -95.9345], name: "Omaha", population: "8,700,000"}]



for (var i = 0; i < cities.length; i++){
  city = cities[i];
  L.marker(city.location)
  .bindPopup("<h1>City:" +city.name+"</h1><br><h2>"+"Population:" +city.population + "</h2>")
  .addTo(myMap);
}