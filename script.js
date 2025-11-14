// Historical summary for the 5 stages
const historyData = {
    1776: "In 1776, the United States began with the original 13 colonies declaring independence from Britain. These colonies later became the first U.S. states along the Atlantic coast.",
    1800: "By 1800, early expansion included Vermont (1791), Kentucky (1792), Tennessee (1796), and Ohio (1803), marking the start of westward growth.",
    1850: "By 1850, major expansions included Louisiana (1812), Indiana (1816), Mississippi (1817), Illinois (1818), Alabama (1819), Missouri (1821), Arkansas (1836), Michigan (1837), Florida (1845), Texas (1845), Iowa (1846), Wisconsin (1848), and California (1850).",
    1900: "By 1900, most continental territories had achieved statehood, including Minnesota (1858), Oregon (1859), Kansas (1861), West Virginia (1863), Nevada (1864), Nebraska (1867), Colorado (1876), and western states admitted 1889–1896.",
    1959: "In 1959, Alaska (Jan 3) and Hawaii (Aug 21) became the last states, completing the modern 50-state USA."
};

// Function to update map and history text
function updateTimeline() {
    const year = parseInt(document.getElementById("yearSelect").value);
    document.getElementById("historyBox").innerHTML = historyData[year];

    const states = document.querySelectorAll(".state");
    states.forEach(state => {
        const admissionYear = parseInt(state.getAttribute("data-year"));
        if(admissionYear <= year) {
            state.classList.add("highlight");
        } else {
            state.classList.remove("highlight");
        }
    });
}

// Initialize map
updateTimeline();
