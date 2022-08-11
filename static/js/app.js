// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody"); // use de.select to tell JavaScript to look for the <tbody> tags in the HTML

// Create a function for data table
// tbody.html("") tells JavaScript to use an empty string when creating table. in other word, create a blank canvas
function buildTable(data) {
    tbody.html(""); // clean the prefiltered data

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    // foreach methond require a single call back function in the (function (element) {console.log(element **2)});
    data.forEach((dataRow) => {
        //Append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add
        // each value as a table cell (<td>)
        Object.values(dataRow).forEach((val) => {
            let cell= row.append("td");
            cell.text(val);
            }
        );
    }); 
};

// define a click function
function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // if-statement: check to see if a date was entered and filter the data use that date.
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);  // show only the rows where the date is equal to the date filter we created
        
    };
    // rebuild the table using the fultered data. @Note: if no date was entered, then filteredData will just be the original tableData
    buildTable(filteredData);
};

//attach an event to listen for the form button #filter-button is a unique id assigned to a button element in the HTML code
// we are linking our code directly to the filter button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
