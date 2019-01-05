var totalChartData = [];
var yearChartData = [];
var crimeType = ["theft", "assault", "battery", "narcotics", "robbery"];
var year = [2013, 2014, 2015, 2016, 2017, 2018];

function getCrimeCount(crime, year) {
  $.ajax({
    url: "/api/crimes/" + crime,
    type: "get"
  }).then(function(response) {
    console.log(response);
    totalChartData.push({ totalCount: response.data.count });
    yearChartData.push({
      year: parseInt(response.data.year)
    });
  });
}

console.log(totalChartData);
console.log(yearChartData);

for (var i = 0; i < crimeType.length; i++) {
  getCrimeCount(crimeType[i], year[i]);
}

//     }).then(function(response) {
//       console.log(response);
//       chartData.push(response);
//       console.log(chartData);
//       var chart = AmCharts.makeChart("chartdiv", {
//         theme: "light",
//         type: "serial",
//         dataProvider: [
//           {
//             country: "Theft",
//             year2004: 3.5,
//             year2005: chartData[1].year2014
//           },
//           {
//             country: "UK",
//             year2004: 1.7,
//             year2005: 3.1
//           },
//           {
//             country: "Canada",
//             year2004: 2.8,
//             year2005: 2.9
//           },
//           {
//             country: "Japan",
//             year2004: 2.6,
//             year2005: 2.3
//           },
//           {
//             country: "France",
//             year2004: 1.4,
//             year2005: 2.1
//           },
//           {
//             country: "Brazil",
//             year2004: 2.6,
//             year2005: 4.9
//           }
//         ],
//         valueAxes: [
//           {
//             unit: "numbers",
//             position: "left",
//             title: "GDP growth rate"
//           }
//         ],
//         startDuration: 1,
//         graphs: [
//           {
//             balloonText: "GDP grow in [[category]] (2004): <b>[[value]]</b>",
//             fillAlphas: 0.9,
//             lineAlpha: 0.2,
//             title: "2004",
//             type: "column",
//             valueField: "year2004"
//           },
//           {
//             balloonText: "GDP grow in [[category]] (2005): <b>[[value]]</b>",
//             fillAlphas: 0.9,
//             lineAlpha: 0.2,
//             title: "2005",
//             type: "column",
//             clustered: false,
//             columnWidth: 0.5,
//             valueField: "year2005"
//           }
//         ],
//         plotAreaFillAlphas: 0.1,
//         categoryField: "country",
//         categoryAxis: {
//           gridPosition: "start"
//         },
//         export: {
//           enabled: true
//         }
//       });
//     });
//   });
// });
// }

// $.ajax({
//   url: "/api/theft-17",
//   type: "get"
// }).then(function(response) {
//   console.log(response);
//   chartData.push(response);
// });

// $.ajax({
//   url: "/api/theft-16",
//   type: "get"
// }).then(function(response) {
//   chartData.push(response);
// });

// chartData.year2014 = 3.4;

// var chart = AmCharts.makeChart("chartdiv", {
//   theme: "light",
//   type: "serial",
//   dataProvider: [
//     {
//       country: "USA",
//       year2004: 3.5,
//       year2005: chartData[0]
//     },
//     {
//       country: "UK",
//       year2004: 1.7,
//       year2005: 3.1
//     },
//     {
//       country: "Canada",
//       year2004: 2.8,
//       year2005: 2.9
//     },
//     {
//       country: "Japan",
//       year2004: 2.6,
//       year2005: 2.3
//     },
//     {
//       country: "France",
//       year2004: 1.4,
//       year2005: 2.1
//     },
//     {
//       country: "Brazil",
//       year2004: 2.6,
//       year2005: 4.9
//     }
//   ],
//   valueAxes: [
//     {
//       unit: "%",
//       position: "left",
//       title: "GDP growth rate"
//     }
//   ],
//   startDuration: 1,
//   graphs: [
//     {
//       balloonText: "GDP grow in [[category]] (2004): <b>[[value]]</b>",
//       fillAlphas: 0.9,
//       lineAlpha: 0.2,
//       title: "2004",
//       type: "column",
//       valueField: "year2004"
//     },
//     {
//       balloonText: "GDP grow in [[category]] (2005): <b>[[value]]</b>",
//       fillAlphas: 0.9,
//       lineAlpha: 0.2,
//       title: "2005",
//       type: "column",
//       clustered: false,
//       columnWidth: 0.5,
//       valueField: "year2005"
//     }
//   ],
//   plotAreaFillAlphas: 0.1,
//   categoryField: "country",
//   categoryAxis: {
//     gridPosition: "start"
//   },
//   export: {
//     enabled: true
//   }
// });

// am4core.useTheme(am4themes_animated);
// // Themes end

// // Create chart instance
// var chart = am4core.create("chartdiv", am4charts.XYChart);

// // Add percent sign to all numbers
// chart.numberFormatter.numberFormat = "#.3'%'";

// // Add data
// chart.data = [
//   {
//     country: "USA",
//     year2004: 3.5,
//     year2005: chartData.year2014
//   },
//   {
//     country: "UK",
//     year2004: 1.7,
//     year2005: 3.1
//   },
//   {
//     country: "Canada",
//     year2004: 2.8,
//     year2005: 2.9
//   },
//   {
//     country: "Japan",
//     year2004: 2.6,
//     year2005: 2.3
//   },
//   {
//     country: "France",
//     year2004: 1.4,
//     year2005: 2.1
//   },
//   {
//     country: "Brazil",
//     year2004: 2.6,
//     year2005: 4.9
//   }
// ];

// // Create axes
// var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
// categoryAxis.dataFields.category = "country";
// categoryAxis.renderer.grid.template.location = 0;
// categoryAxis.renderer.minGridDistance = 30;

// var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
// valueAxis.title.text = "GDP growth rate";
// valueAxis.title.fontWeight = 800;

// // Create series
// var series = chart.series.push(new am4charts.ColumnSeries());
// series.dataFields.valueY = "year2004";
// series.dataFields.categoryX = "country";
// series.clustered = false;
// series.tooltipText = "GDP grow in {categoryX} (2004): [bold]{valueY}[/]";

// var series2 = chart.series.push(new am4charts.ColumnSeries());
// series2.dataFields.valueY = "year2005";
// series2.dataFields.categoryX = "country";
// series2.clustered = false;
// series2.columns.template.width = am4core.percent(50);
// series2.tooltipText = "GDP grow in {categoryX} (2005): [bold]{valueY}[/]";

// chart.cursor = new am4charts.XYCursor();
// chart.cursor.lineX.disabled = true;
// chart.cursor.lineY.disabled = true;

// $("#chartdiv").append(chart);
