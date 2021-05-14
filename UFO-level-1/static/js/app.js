// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!
// Get reference to the table body
var tbody = d3.select("tbody");

// Get the UFO sightings data and show in the table columns on the screen.
tableData.forEach(function (ufoSightingData) {
    console.log(ufoSightingData);

    // Append one table row(tr) for each UFO sighting
    var rowOfData = tbody.append("tr");
    console.log(rowOfData);

    // User 'Object.entries to write each UFO row to the console area
    Object.entries(ufoSightingData).forEach(function ([key, value]) {
        console.log("Key, Value");
        console.log(key, value);

        // Append a table data cell(td) to the row of data
        var dataCell = rowOfData.append("td");
        dataCell.text(value);
    });


    // Select the button
    var button = d3.select("#filter-btn");
    button.on("click", function () {

        tbody.html("");
        // Filter the data by date
        // assign the input date data and get related data.
        var inputElement = d3.select("#datetime");

        // Get the input value of the input date
        var inputValue = inputElement.property("value");

        //print the input value to the console
        console.log(inputValue);

        // Filter the datetime field based on the input date value
        var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
        console.log(filteredData);

        filteredData.forEach(function (selections) {
            console.log(selections);

            // Append one table row(tr) for each UFO sighting
            var rowOfData = tbody.append("tr");

            // User 'Object.entries to write each UFO row to the console area
            Object.entries(selections).forEach(function ([key, value]) {
                console.log(key, value);

                // Append a cell to the row of data           
                var dataCell = rowOfData.append("td");
                dataCell.text(value);
            });
        });



    };
