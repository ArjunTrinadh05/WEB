
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);


function drawChart(x,y,z,w) {
  var data = google.visualization.arrayToDataTable([
    ["confrimed", "Number of people"],
    ["Indians", x],
    ["Forgins", y],
    ["deaths", z],
    ["recovered", w],
  ]);

  
    var options = { title: "State Pie", width: 450, height: 400 };
  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
    );
    if (document.getElementById('stateinfo').innerHTML !== '') {
        chart.draw(data, options);
        console.log(google.visualization)
    }
}
function barChart() {
    var data = google.visualization.DataTable();
    data.addColumn("string", "Indians");
    data.addColumn("string", "Forgins");
    data.addColumn("string", "deaths");
    data.addColumn("string", "recovered");
    data.addRows()
}