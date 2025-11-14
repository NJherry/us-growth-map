// Accurate historical summary based on the 5 major stages of U.S. growth
const historyData = {
  1776: "In 1776, the United States began with the original 13 colonies declaring independence from Britain. These colonies—such as Virginia, Massachusetts, Pennsylvania, New York, and Georgia—later became the first U.S. states and formed the foundation of the new nation along the Atlantic coast.",

  1800: "By 1800, the United States had begun to expand beyond its original colonies. Vermont (1791), Kentucky (1792), and Tennessee (1796) had already joined the Union. Soon after, Ohio (1803) also entered as the first state carved out of the Northwest Territory, signaling the start of steady westward expansion.",

  1850: "By 1850, U.S. growth accelerated significantly through the Louisiana Purchase, territorial settlement, and westward migration. Major additions included Louisiana (1812), Indiana (1816), Mississippi (1817), Illinois (1818), Alabama (1819), Missouri (1821), Arkansas (1836), Michigan (1837), Florida (1845), Texas (1845), Iowa (1846), Wisconsin (1848), and California (1850). These expansions reshaped the country and extended U.S. territory to the Pacific coast.",

  1900: "By 1900, most of the continental United States had achieved statehood. Key additions included Minnesota (1858), Oregon (1859), Kansas (1861), West Virginia (1863), Nevada (1864), Nebraska (1867), Colorado (1876), and the cluster of western states admitted between 1889 and 1890—North Dakota, South Dakota, Montana, Washington, Idaho, and Wyoming. Utah (1896) completed the continental framework of the nation by the end of the century.",

  1959: "In 1959, the United States reached its current total of 50 states. Alaska was admitted on January 3, 1959, followed by Hawaii on August 21, 1959. These were the last states added, completing U.S. expansion beyond the continental mainland and marking the final stage of national growth."
};

// Function to update text when year changes
function updateHistory() {
  let year = document.getElementById("yearSelect").value;
  document.getElementById("historyBox").innerHTML = historyData[year];
}

// Load default year on page load
updateHistory();
