// Accurate summary of U.S. state growth milestones
const historyData = {
  1776: "In 1776, the 13 original colonies declared independence from Britain and later became the first U.S. states. These included Massachusetts, Virginia, New York, Pennsylvania, Georgia, and others along the Atlantic coast.",

  1800: "By 1800, the United States had expanded beyond its original colonies. Vermont (1791), Kentucky (1792), Tennessee (1796), and Ohio (1803) joined as new states, marking the beginning of westward expansion.",

  1850: "By 1850, rapid growth had transformed the country. States like Louisiana, Indiana, Mississippi, Texas (1845), and California (1850) entered the Union, driven by migration, the Louisiana Purchase, and the Gold Rush.",

  1900: "By 1900, most of the western territories had become states. Additions included Oregon (1859), Kansas (1861), Nevada (1864), Colorado (1876), and the Dakotas, Montana, Washington, Idaho, and Wyoming (1889–1890).",

  1959: "In 1959, the United States completed its modern form when Alaska (January 1959) and Hawaii (August 1959) became the final two states, bringing the total to 50."
};

// Function to update text when year changes
function updateHistory() {
  let year = document.getElementById("yearSelect").value;
  document.getElementById("historyBox").innerHTML = historyData[year];
}

// Load default year
updateHistory();
