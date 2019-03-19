// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");
//console.log(data);

data.forEach((sightings) => {
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
  
var submit = d3.select("#filter-btn");

submit.on("click", function() {
 console.log("test")
 d3.event.preventDefault();

 var inputElement = d3.select("#datetime");

 var inputValue = inputElement.property("value");

 console.log(inputValue);
 console.log(tableData);

 var filteredData = data.filter(Data1 => Data1.datetime === inputValue);

 var tbody = d3.select("tbody");
//console.log(filteredData);
tbody.html("")
filteredData.forEach((filteredData) => {
    var row = tbody.append("tr");
    Object.entries(filteredData).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });

 console.log(filteredData);

  });
});
  



