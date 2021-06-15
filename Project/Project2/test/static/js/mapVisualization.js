var countryList = []
var olympicGlobalData ;
var medalDetails;


function createMap(countrydata)
{
console.log('in create map');

// Adding tile layer
var mapLayer = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
})


  // Creating map object
var myMap = L.map("map", {
  center: [6.6,-20.9],
  zoom: 2.5,
  layers: [mapLayer, countrydata]
});

}

function getRandomColor(country) {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function populateParticipatingCountries(olympicCountriesData)
{
  var countryData = olympicCountriesData.map(countryListFn => countryListFn.NOC);
  countryData.forEach((countryName) => {
      if (!(countryList.includes(countryName))){     
          countryList.push(countryName);
      }
  })

}

function setMedalDetails(countryCode)
{
 
  var countryMedalLst = [];

  
  for(i=0;i<olympicGlobalData.length;i++ )
  {

    if(olympicGlobalData[i].NOC == countryCode)
    {
     
      var dict = {};
          dict["Country"]=countryCode;
          dict["Gold"] = 0;
          dict["Silver"] = 0;
          dict["Bronze"] = 0;
          countryMedalLst.push(dict);

    var countryDict = countryMedalLst[0];
    if(olympicGlobalData[i].NOC == 'FIN'){
    console.log(olympicGlobalData[i].NOC);
    console.log(olympicGlobalData[i].Medal );
    }
    if(olympicGlobalData[i].Medal == 'None');
    else{
      console.log('Medal other than none');
      if(olympicGlobalData[i].Medal == 'Gold'){
      console.log(countryDict["Gold"]);
      countryDict["Gold"] = countryDict["Gold"] + 1;}
      else if(olympicGlobalData[i].Medal == 'Silver')
      countryDict["Silver"] =  countryDict["Silver"]+ 1;
      else if(olympicGlobalData[i].Medal == 'Bronze')
      countryDict["Bronze"] = countryDict["Bronze"] + 1;
    }
  }

}
return countryMedalLst;
}

function createFeatures(countrydata) {

   function onEachFeature(feature, layer) {
  layer.on({
    // When a user's mouse touches a map feature, the mouseover event calls this function, that feature's opacity changes to 90% so that it stands out
    mouseover: function(event) {
      layer = event.target;
      layer.setStyle({
        fillOpacity: 0.4
      });
      medalDetails = setMedalDetails(feature.properties.adm0_a3);
      //console.log('in mouse hover ')
      //console.log(medalDetails);
      if(medalDetails.length > 0){
      layer.bindPopup("<p>" + feature.properties.sovereignt + "</p>"
       + "Gold:" + "</strong>🥇 </font>" + + medalDetails[0].Gold +"</p>" 
       + "Silver:" + "</strong>🥈 </font>" +  medalDetails[0].Silver+ "</p>" 
      + "Bronze:"  + "</strong>🥉 </font>" + medalDetails[0].Bronze +  "</p>" );
    }},
    
    // When the cursor no longer hovers over a map feature - when the mouseout event occurs - the feature's opacity reverts back to 50%
    mouseout: function(event) {
      layer = event.target;
      layer.setStyle({
        fillOpacity: 5
      });
    },
  
  });

   
}

// Grabbing our GeoJSON data..
  var countries = L.geoJson(countrydata, {
    // Style each feature (in this case a neighborhood)
    style: function(feature) {
      if(countryList.includes(feature.properties.adm0_a3))
      {
        return {
          color: "white",
          // Call the chooseColor function to decide which color to color our neighborhood (color based on borough)
          fillColor: getRandomColor(feature.properties.sovereignt),
          fillOpacity: 5,
          weight: 0.5
        };
    }
    },
    onEachFeature: onEachFeature
       
  })

createMap(countries);
};

function mapChart(olympicData){
// Use this link to get the geojson data.
var link = "static/data/countries.geojson";

//dataUrl = "static/data/data.json"

d3.json(link, function(data) {
    //d3.json(dataUrl, function(olympicData) {
      olympicGlobalData = olympicData; 
      console.log(olympicData);
      console.log(data);
      populateParticipatingCountries(olympicData);
      console.log(countryList);
      createFeatures(data);
    //});

});
}