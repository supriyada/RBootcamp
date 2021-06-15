var myMap = L.map("map", {
    center: [40.7128, -74.0059],
    zoom: 11
  });
  
  // Adding tile layer
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);
  
  // Use this link to get the geojson data.
  var link = "static/data/nyc.geojson";
  function pickColor(borough) {
    switch (borough) {
    case "Brooklyn":
      return "yellow";
    case "Bronx":
      return "red";
    case "Manhattan":
      return "orange";
    case "Queens":
      return "green";
    case "Staten Island":
      return "purple";
    default:
      return "black";
    }
  }
  /*var mapStyle = {
      color: "white",
      fillColor: "red",
      fillOpacity:0.5
  }*/

  d3.json(link).then(function(data){
    
    L.geoJson(data,{
        style: function(feature){
           // console.log(feature.properties.borough)
           return{
            color: "white",
            fillColor: pickColor(feature.properties.borough),
            fillOpacity:0.5
           }
        },

        onEachFeature : function(feature, layer){
            layer.on({
                mouseover: function(event){
                    layer = event.target;
                    layer.setStyle({
                        fillOpacity: 0.9
                    });
                },
                mouseout: function(event){
                    layer = event.target;
                    layer.setStyle({
                        fillOpacity: 0.5
                    });
                },
                click: function(event){
                    myMap.fitBounds(event.target.getBounds());
                }
            });
            layer.bindPopup(feature.properties.borough)
        }
    }).addTo(myMap)
  });