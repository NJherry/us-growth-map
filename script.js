// Store your history notes here
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
// Add labels (abbreviations)
Object.keys(stateLabels).forEach(state => {
    let s = stateLabels[state];
    let label = L.marker([s.lat, s.lon], {
        icon: L.divIcon({
            className: 'state-label',
            html: `<b>${s.abbr}</b>`
        })
    });
    label.addTo(map);
});

const historyData = {
  1776: "The original 13 colonies declared independence and became the first U.S. states.",
  1800: "New states such as Kentucky and Tennessee were added as settlers moved west.",
  1850: "Expansion continued rapidly, including Texas, California, and others.",
  1900: "Most western territories transitioned into full statehood.",
  1959: "Hawaii and Alaska were added, completing the 50 states."
};

// This function updates the text whenever the dropdown changes
function updateHistory() {
  let year = document.getElementById("yearSelect").value;
  let box = document.getElementById("historyBox");

  box.innerHTML = historyData[year] || "No data available.";
}
