// Use D3 to create an event handler
d3.selectAll("body").on("change",updatePage);

function updatePage() {
  // Use D3 to select the dropdown menu
  var ddMenu = d3.selectAll("#selectOption").node();
  // Assign the dropdown menu item ID to a variable
  var ddMenuID = ddMenu.id;
  // Assign the dropdown menu option to a variable
  var ddMenuSelected  = ddMenu.value
  console.log(ddMenuSelected);
 
}
