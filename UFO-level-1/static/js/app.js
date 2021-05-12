// from data.js
var tableData = data;
console.log(tableData):

// YOUR CODE HERE!
// Get reference to the table body
var tbody = d3.select("tbody");

// Get the UFO data values and show in the table columns
tableData.forEach(function(UfoSightingData) {
    console.log(UfoSightingData);

    // Append one table row(tr) for each UFO sighting
    var RowOfData = tbody.append("tr");

    // User 'Object.entries to write each UFO row to the console area
    Object.entries(UfoSightingData).forEach(function([key, value]) {
        console.log(key,value);

        // Append a cell to the row of data
        var DataCell = RowOfData.append("td");
        DataCell.text(value);
    });
});
