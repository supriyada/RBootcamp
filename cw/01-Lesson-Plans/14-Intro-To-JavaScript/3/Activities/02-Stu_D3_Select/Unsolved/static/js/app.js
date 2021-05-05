// The new student and grade to add to the table
var newGrade = ["Wash", 79];

// Use D3 to select the table
var table = d3.select(".table")
console.log(table)

/* var table = d3.select(".grades_table").select("tbody").select("tr").
                select("td").text());*/

// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped
table.attr("class", "table table-striped");

// Use D3 to select the table body
var table_body = d3.select("tbody");
// Append one table row `tr` to the table body
var table_row = table_body.append("tr")
// Append one cell for the student name
table_row.append("td").text(newGrade[0]);
// Append one cell for the student grade
table_row.append("td").text(newGrade[1]);
//Add new row to table
var table_row1 = table_body.append("tr")
table_row1.append("td").text("Priya");
table_row1.append("td").text(90);
