// Store your history notes here
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
