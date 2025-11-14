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
