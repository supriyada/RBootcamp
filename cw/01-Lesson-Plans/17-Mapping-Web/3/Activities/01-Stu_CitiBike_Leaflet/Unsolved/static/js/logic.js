// var newYorkCoords = [40.73, -74.0059];
// var mapZoomLevel = 12;

// Create the createMap function
function createMap(bikeStations){
  
  // Create the tile layer that will be the background of our map
  var light = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
  });

  // Create a baseMaps object to hold the lightmap layer
  var baseMaps = {
    Light: light
    //Dark: dark
  };

  // Create an overlayMaps object to hold the bikeStations layer
  var overlayMaps = {
    "Bike Stations": bikeStations
  };

  // Create the map object with options
  var myMap = L.map("map-id", {
    center: [40.73, -74.0059],
    zoom: 12,
    layers: [light, bikeStations]
  });

  // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
}

// Create the createMarkers function
function createMarkers(response){
  console.log(response)
  // Pull the "stations" property off of response.data
  var stations = response.data.stations
  // Initialize an array to hold bike markers
  var bikeMarkers = []
  // Loop through the stations array
  for(var i = 0; i< stations.length;i++){
    // For each station, create a marker and bind a popup with the station's name
    var station = stations[i]
    // Add the marker to the bikeMarkers array
    var bikeMarker = L.marker([station.lat, station.lon])
      .bindPopup("<h3>" + stations.name + "<h3><h3>Capacity: " + stations.capacity + "</h3>");

    bikeMarkers.push(bikeMarker)
  }
  // Create a layer group made from the bike markers array, pass it into the createMap function
  createMap(L.layerGroup(bikeMarkers));
}
// Perform an API call to the Citi Bike API to get station information. Call createMarkers when complete
d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_information.json").then(createMarkers)