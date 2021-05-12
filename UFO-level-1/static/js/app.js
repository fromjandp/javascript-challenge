// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!
// Get reference to the table body
var tbody = d3.select("tbody");

// Get the UFO data values and show in the table columns
tableData.forEach(function (UfoSightingData) {
    console.log(UfoSightingData);

    // Append one table row(tr) for each UFO sighting
    var RowOfData = tbody.append("tr");

    // User 'Object.entries to write each UFO row to the console area
    Object.entries(UfoSightingData).forEach(function ([key, value]) {
        console.log(key, value);

        // Append a cell to the row of data
        var DataCell = RowOfData.append("td");
        DataCell.text(value);
    });
});

// Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");
    // Work on filtering the data.


    // assign the input date data and get related data.
    var inputElement = d3.select("#datetime");

    // Get the input value of the input date
    var inputvalue = inputElement.property("value");

    //print the input value to the console
    console.log(inputvalue);

    // Filter the datetime field based on the input date value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);

    filteredData.forEach(function (selections) {
        console.log(selections);

        // Append one table row(tr) for each UFO sighting
        var RowOfData = tbody.append("tr");

        // User 'Object.entries to write each UFO row to the console area
        Object.entries(selections).forEach(function ([key, value]) {
            console.log(key, value);

            // Append a cell to the row of data
            var DataCell = RowOfData.append("td");
            DataCell.text(value);
        });
    });













