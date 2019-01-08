var totalChartData = [];
var yearChartData = [];
var crimeType = ["theft", "assault", "battery", "narcotics", "robbery"];

$(document).ready(function() {
  $("#chart2div").hide();
});

function getCrimeCount(crime, year) {
  $.ajax({
    url: "/api/crimes/" + crime,
    type: "get"
  })
    .then(function(response) {
      console.log(response);
      totalChartData.push({
        totalCount: response.data.count,
        crime: response.data.crime
      });
    })
    .then(function(response) {
      renderTotalChart();
    });
}

//Console log for total chart
console.log(totalChartData);

for (var i = 0; i < crimeType.length; i++) {
  getCrimeCount(crimeType[i]);
}

function renderTotalChart() {
  am4core.useTheme(am4themes_animated);

  var chart = am4core.create(
    document.getElementById("chartdiv"),
    am4charts.XYChart3D
  );

  chart.data = [
    {
      crime: totalChartData[4].crime,
      total: totalChartData[4].totalCount
    },
    {
      crime: totalChartData[2].crime,
      total: totalChartData[2].totalCount
    },
    {
      crime: totalChartData[0].crime,
      total: totalChartData[0].totalCount
    },
    {
      crime: totalChartData[1].crime,
      total: totalChartData[1].totalCount
    },
    {
      crime: totalChartData[3].crime,
      total: totalChartData[3].totalCount
    }
  ];

  let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "crime";
  categoryAxis.renderer.labels.template.rotation = 270;
  categoryAxis.renderer.labels.template.hideOversized = false;
  categoryAxis.renderer.minGridDistance = 20;
  categoryAxis.renderer.labels.template.horizontalCenter = "right";
  categoryAxis.renderer.labels.template.verticalCenter = "middle";
  categoryAxis.tooltip.label.rotation = 270;
  categoryAxis.tooltip.label.horizontalCenter = "right";
  categoryAxis.tooltip.label.verticalCenter = "middle";

  let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.title.text = "Crime";
  valueAxis.title.fontWeight = "bold";

  // Create series
  var series = chart.series.push(new am4charts.ColumnSeries3D());
  series.dataFields.valueY = "total";
  series.dataFields.categoryX = "crime";
  series.name = "total";
  series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
  series.columns.template.fillOpacity = 0.8;

  var columnTemplate = series.columns.template;
  columnTemplate.strokeWidth = 2;
  columnTemplate.strokeOpacity = 1;
  columnTemplate.stroke = am4core.color("#FFFFFF");

  columnTemplate.adapter.add("fill", (fill, target) => {
    return chart.colors.getIndex(target.dataItem.index);
  });

  columnTemplate.adapter.add("stroke", (stroke, target) => {
    return chart.colors.getIndex(target.dataItem.index);
  });

  chart.cursor = new am4charts.XYCursor();
  chart.cursor.lineX.strokeOpacity = 0;
  chart.cursor.lineY.strokeOpacity = 0;
}

$(".form-inline").submit(function(event) {
  event.preventDefault();
  var inputValues = $(":input").serializeArray();
  var crime = inputValues[0].value;
  var year = inputValues[1].value;
  $.ajax({
    url: `/api/crimes/${crime}/${year}`,
    type: "get"
  }).then(function(response) {
    console.log(response);
    yearChartData.push({
      count: response.data.count,
      crime: response.data.crime,
      year: response.data.year
    });
    console.log(yearChartData);
  });

  $("#render").on("click", function() {
    renderYearChart();
    $("#chartdiv").hide();
    $("#chart2div").show();
  });

  function renderYearChart() {
    am4core.useTheme(am4themes_animated);

    var chart = am4core.create(
      document.getElementById("chart2div"),
      am4charts.XYChart3D
    );

    chart.data = [
      //Crime 1
      {
        crime: yearChartData[0].crime,
        year2015: yearChartData[0].count
      },
      {
        crime: yearChartData[1].crime,
        year2014: yearChartData[1].count
      },

      //Crime 2
      {
        crime: yearChartData[3].crime,
        year2015: yearChartData[3].count
      },
      {
        crime: yearChartData[4].crime,
        year2014: yearChartData[4].count
      },

      //Crime 3
      {
        crime: yearChartData[6].crime,
        year2015: yearChartData[6].count
      },
      {
        crime: yearChartData[7].crime,
        year2014: yearChartData[7].count
      }
    ];
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "crime";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Crime Yearly Comparision";
    valueAxis.renderer.labels.template.adapter.add("text", function(text) {
      return text;
    });

    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "year2015";
    series.dataFields.categoryX = "crime";
    series.name = "Year 2015";
    series.clustered = false;
    series.columns.template.tooltipText =
      "Total Crimes {category} (2015): [bold]{valueY}[/]";
    series.columns.template.fillOpacity = 0.9;

    var series2 = chart.series.push(new am4charts.ColumnSeries3D());
    series2.dataFields.valueY = "year2014";
    series2.dataFields.categoryX = "crime";
    series2.name = "Year 2014";
    series2.clustered = false;
    series2.columns.template.tooltipText =
      "Total Crimes {category} (2014): [bold]{valueY}[/]";
  }
});
