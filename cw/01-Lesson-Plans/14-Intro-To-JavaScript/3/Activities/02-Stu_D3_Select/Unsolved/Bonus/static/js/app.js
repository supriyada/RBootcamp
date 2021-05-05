// The new student and grade to add to the table
var newGrade = ["Wash", 79];

// Use D3 to select the table
var table = d3.select("table")
console.log(table)

/* var table = d3.select(".grades_table").select("tbody").select("tr").
                select("td").text());*/

// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped
table.attr("class", "table table-striped");

// Use D3 to select the table body
var table_body = d3.select("tbody");
// Append one table row `tr` to the table body

// BONUS: Dynamic table
// Loop through an array of grades and build the entire table body from scratch
var grades = [["Priya", 80], ["Zoe", 85], ["Kaylee", 99], ["Simon", 99], ["Wash", 79]];

for(var i = 0;i<grades.length;i++){
    var new_row = grades[i];
    console.log(new_row);
    var table_row = table_body.append("tr");
    table_row.append("td").text(new_row[0]);
    table_row.append("td").text(new_row[1]);
}