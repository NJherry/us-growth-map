var map = L.map('map').setView([37.8, -96], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 6
}).addTo(map);

let statesLayer;

// Admission years for each state
const stateYears = {
  "Delaware": 1787, "Pennsylvania": 1787, "New Jersey": 1787,
  "Georgia": 1788, "Connecticut": 1788, "Massachusetts": 1788,
  "Maryland": 1788, "South Carolina": 1788, "New Hampshire": 1788,
  "Virginia": 1788, "New York": 1788, "North Carolina": 1789,
  "Rhode Island": 1790, "Vermont": 1791, "Kentucky": 1792,
  "Tennessee": 1796, "Ohio": 1803, "Louisiana": 1812, "Indiana": 1816,
  "Mississippi": 1817, "Illinois": 1818, "Alabama": 1819, "Maine": 1820,
  "Missouri": 1821, "Arkansas": 1836, "Michigan": 1837, "Florida": 1845,
  "Texas": 1845, "Iowa": 1846, "Wisconsin": 1848, "California": 1850,
  "Minnesota": 1858, "Oregon": 1859, "Kansas": 1861, "West Virginia": 1863,
  "Nevada": 1864, "Nebraska": 1867, "Colorado": 1876, "North Dakota": 1889,
  "South Dakota": 1889, "Montana": 1889, "Washington": 1889,
  "Idaho": 1890, "Wyoming": 1890, "Utah": 1896, "Oklahoma": 1907,
  "New Mexico": 1912, "Arizona": 1912, "Alaska": 1959, "Hawaii": 1959
};

// State centers + abbreviations
const stateLabels = {
  "Alabama": {abbr: "AL", lat: 32.8067, lon: -86.7911},
  "Alaska": {abbr: "AK", lat: 61.3707, lon: -152.4044},
  "Arizona": {abbr: "AZ", lat: 33.7298, lon: -111.4312},
  "Arkansas": {abbr: "AR", lat: 34.9697, lon: -92.3731},
  "California": {abbr: "CA", lat: 36.1162, lon: -119.6816},
  "Colorado": {abbr: "CO", lat: 39.0598, lon: -105.3111},
  "Connecticut": {abbr: "CT", lat: 41.5978, lon: -72.7554},
  "Delaware": {abbr: "DE", lat: 39.3185, lon: -75.5071},
  "Florida": {abbr: "FL", lat: 27.7663, lon: -81.6868},
  "Georgia": {abbr: "GA", lat: 33.0406, lon: -83.6431},
  "Hawaii": {abbr: "HI", lat: 21.0943, lon: -157.4983},
  "Idaho": {abbr: "ID", lat: 44.2405, lon: -114.4788},
  "Illinois": {abbr: "IL", lat: 40.3495, lon: -88.9861},
  "Indiana": {abbr: "IN", lat: 39.8494, lon: -86.2583},
  "Iowa": {abbr: "IA", lat: 42.0115, lon: -93.2105},
  "Kansas": {abbr: "KS", lat: 38.5266, lon: -96.7265},
  "Kentucky": {abbr: "KY", lat: 37.6681, lon: -84.6701},
  "Louisiana": {abbr: "LA", lat: 31.1695, lon: -91.8678},
  "Maine": {abbr: "ME", lat: 44.6939, lon: -69.3819},
  "Maryland": {abbr: "MD", lat: 39.0639, lon: -76.8021},
  "Massachusetts": {abbr: "MA", lat: 42.2302, lon: -71.5301},
  "Michigan": {abbr: "MI", lat: 43.3266, lon: -84.5361},
  "Minnesota": {abbr: "MN", lat: 45.6945, lon: -93.9002},
  "Mississippi": {abbr: "MS", lat: 32.7416, lon: -89.6787},
  "Missouri": {abbr: "MO", lat: 38.4561, lon: -92.2884},
  "Montana": {abbr: "MT", lat: 46.9219, lon: -110.4544},
  "Nebraska": {abbr: "NE", lat: 41.1254, lon: -98.2681},
  "Nevada": {abbr: "NV", lat: 38.3135, lon: -117.0554},
  "New Hampshire": {abbr: "NH", lat: 43.4525, lon: -71.5639},
  "New Jersey": {abbr: "NJ", lat: 40.2989, lon: -74.5210},
  "New Mexico": {abbr: "NM", lat: 34.8405, lon: -106.2485},
  "New York": {abbr: "NY", lat: 42.1657, lon: -74.9481},
  "North Carolina": {abbr: "NC", lat: 35.6301, lon: -79.8064},
  "North Dakota": {abbr: "ND", lat: 47.5289, lon: -99.7840},
  "Ohio": {abbr: "OH", lat: 40.3888, lon: -82.7649},
  "Oklahoma": {abbr: "OK", lat: 35.5653, lon: -96.9289},
  "Oregon": {abbr: "OR", lat: 44.5720, lon: -122.0709},
  "Pennsylvania": {abbr: "PA", lat: 40.5908, lon: -77.2098},
  "Rhode Island": {abbr: "RI", lat: 41.6809, lon: -71.5118},
  "South Carolina": {abbr: "SC", lat: 33.8569, lon: -80.9450},
  "South Dakota": {abbr: "SD", lat: 44.2998, lon: -99.4388},
  "Tennessee": {abbr: "TN", lat: 35.7478, lon: -86.6923},
  "Texas": {abbr: "TX", lat: 31.0545, lon: -97.5635},
  "Utah": {abbr: "UT", lat: 40.1500, lon: -111.8624},
  "Vermont": {abbr: "VT", lat: 44.0459, lon: -72.7107},
  "Virginia": {abbr: "VA", lat: 37.7693, lon: -78.1690},
  "Washington": {abbr: "WA", lat: 47.4009, lon: -121.4905},
  "West Virginia": {abbr: "WV", lat: 38.4912, lon: -80.9545},
  "Wisconsin": {abbr: "WI", lat: 44.2685, lon: -89.6165},
  "Wyoming": {abbr: "WY", lat: 42.7560, lon: -107.3025}
};



function loadMap(year) {
  fetch("https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json")
    .then(res => res.json())
    .then(data => {
      if (statesLayer) map.removeLayer(statesLayer);
      
      statesLayer = L.geoJSON(data, {
        style: function(feature) {
          let name = feature.properties.name;
          let joinYear = stateYears[name];

          return {
            color: "black",
            weight: 1,
            fillColor: (joinYear <= year) ? "#1e90ff" : "#cccccc",
            fillOpacity: 0.7
          };
        },
        onEachFeature: function (feature, layer) {
          let name = feature.properties.name;
          layer.bindPopup(`<b>${name}</b><br>Joined: ${stateYears[name]}`);
        }
      }).addTo(map);
    });
}

loadMap(1783);

document.getElementById("yearSelect").addEventListener("change", function() {
  loadMap(parseInt(this.value));
});
