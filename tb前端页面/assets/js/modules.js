//
// Modules
//

/* ------------------------------------------------------------------
 * Name         : Beid - HTML Template
 * File         : modules.js
 * Author       : ScanThemes
 * Author URI   : scanthemes@gmail.com
 *
 * All Rights Reserved.
 * --------------------------------------------------------------------- */
/* ---------------------------------------------------------------------

  File for working with charts and other plugins.

  [Table of contents]

	- Charts
	-- ChartJS
	-- Apexchart
	- RangeJS
	- DateRangePicker
	- Preloader
	- Shop-Range-Slider
	- JQVMAP

------------------------------------------------------------------------ */

"use strict";

/* Styling */
const	glowLineLightColor = "#ffffff",
		glowLineWarningColor = "#2af270",
		glowLinePrimaryColor = "#2e6ee2";

/* [ charts ] */
function chartJSInit() {

	/* ChartJS */
	if ($('#_chartJS_min').length > 0) {

		/* chart-sm-01 (line-chart) */
		if($("#chart-sm-01").length) {
			let chart_sm_01 = document.querySelector("#chart-sm-01"), // chart ID
				chart_sm_01_chartLineLG = chart_sm_01.getContext("2d"),
				chart_sm_01_gradientFill = chart_sm_01_chartLineLG.createLinearGradient(0, 0, 0, 50),
				chart_sm_01_gradientFill_b = chart_sm_01_chartLineLG.createLinearGradient(0, 20, 0, 50);
				chart_sm_01_gradientFill.addColorStop(0, "rgba(255, 255, 255, 1)");
				chart_sm_01_gradientFill.addColorStop(.5, "rgba(198, 210, 253, 1)");
				chart_sm_01_gradientFill.addColorStop(1, "rgba(162, 255, 194, 1)");
				chart_sm_01_gradientFill_b.addColorStop(0, "rgba(32, 73, 219, .17)");
				chart_sm_01_gradientFill_b.addColorStop(1, "rgba(32, 73, 219, .05)");
			new Chart(chart_sm_01_chartLineLG, {
				type: 'glowLineLight',
				data: {
					labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W'],
					datasets: [{
						borderColor: chart_sm_01_gradientFill,
						backgroundColor: chart_sm_01_gradientFill_b,
						borderWidth: "2",
						data: [6,22,3,21,21.5,29,23,25,16,6],
						label: 'Dataset',
						fill: true,
						radius: 0
					}]
				},
				options: {
					spanGaps: false,
					maintainAspectRatio: false,
					elements: {
						line: {
							tension: 0
						}
					},
					animation: {
						duration: 0
					},
					legend: {
						display: false
					},
					plugins: {
						filler: {
							propagate: false
						}
					},
					tooltips: {
						callbacks: {
							label: function(tooltipItem) {
								return tooltipItem.yLabel;
							}
						}
					},
					scales: {
						xAxes: [{
							display: false,
							ticks: {
								display: false
							},
							gridLines: {
								display: false
							}
						}],
						yAxes: [{
							display: false,
							ticks: {
								display: false,
								min: 0,
								max: 30
							},
							gridLines: {
								display: false
							}
						}]
					},
					title: {
						display: false
					}
				}
			});
		}

		/* chart-sm-02 (line-chart) */
		if($("#chart-sm-02").length) {
			let chart_sm_02 = document.querySelector("#chart-sm-02"), // chart ID
				chart_sm_02_chartLineLG = chart_sm_02.getContext("2d"),
				chart_sm_02_gradientFill = chart_sm_02_chartLineLG.createLinearGradient(0, 0, 0, 50),
				chart_sm_02_gradientFill_b = chart_sm_02_chartLineLG.createLinearGradient(0, 20, 0, 50);
				chart_sm_02_gradientFill.addColorStop(0, "rgba(255, 255, 255, 1)");
				chart_sm_02_gradientFill.addColorStop(.5, "rgba(198, 210, 253, 1)");
				chart_sm_02_gradientFill.addColorStop(1, "rgba(162, 255, 194, 1)");
				chart_sm_02_gradientFill_b.addColorStop(0, "rgba(32, 73, 219, .17)");
				chart_sm_02_gradientFill_b.addColorStop(1, "rgba(32, 73, 219, .05)");
			new Chart(chart_sm_02_chartLineLG, {
				type: 'glowLineLight',
				data: {
				labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W'],
				datasets: [{
					borderColor: chart_sm_02_gradientFill,
					backgroundColor: chart_sm_02_gradientFill_b,
					borderWidth: "2",
					data: [28,27,24,29,22,16,28,23,27,28],
					label: 'Dataset',
					fill: true,
					radius: 0
				}]
				},
				options: {
					spanGaps: false,
					maintainAspectRatio: false,
					elements: {
						line: {
							tension: 0
						}
					},
					animation: {
						duration: 0
					},
					legend: {
						display: false
					},
					plugins: {
						filler: {
							propagate: false
						}
					},
					tooltips: {
						callbacks: {
							label: function(tooltipItem) {
								return tooltipItem.yLabel;
							}
						}
					},
					scales: {
						xAxes: [{
							display: false,
							ticks: {
								display: false
							},
							gridLines: {
								display: false
							}
						}],
						yAxes: [{
							display: false,
							ticks: {
								display: false,
								min: 15,
								max: 30
							},
							gridLines: {
								display: false
							}
						}]
					},
					title: {
						display: false
					}
				}
			});
		}

		/* chart-sm-03 (line-chart) */
		if($("#chart-sm-03").length) {
			let chart_sm_03 = document.querySelector("#chart-sm-03"), // chart ID
				chart_sm_03_chartLineLG = chart_sm_03.getContext("2d"),
				chart_sm_03_gradientFill = chart_sm_03_chartLineLG.createLinearGradient(0, 0, 0, 50),
				chart_sm_03_gradientFill_b = chart_sm_03_chartLineLG.createLinearGradient(0, 20, 0, 50);
				chart_sm_03_gradientFill.addColorStop(0, "rgba(255, 255, 255, 1)");
				chart_sm_03_gradientFill.addColorStop(.5, "rgba(198, 210, 253, 1)");
				chart_sm_03_gradientFill.addColorStop(1, "rgba(162, 255, 194, 1)");
				chart_sm_03_gradientFill_b.addColorStop(0, "rgba(32, 73, 219, .17)");
				chart_sm_03_gradientFill_b.addColorStop(1, "rgba(32, 73, 219, .05)");
			new Chart(chart_sm_03_chartLineLG, {
				type: 'glowLineLight',
				data: {
				labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W'],
				datasets: [{
					borderColor: chart_sm_03_gradientFill,
					backgroundColor: chart_sm_03_gradientFill_b,
					borderWidth: "2",
					data: [35,25,22,27,29,21,25,25,21,35],
					label: 'Dataset',
					fill: true,
					radius: 0
				}]
				},
				options: {
					spanGaps: false,
					maintainAspectRatio: false,
					elements: {
						line: {
							tension: 0
						}
					},
					animation: {
						duration: 0
					},
					legend: {
						display: false
					},
					plugins: {
						filler: {
							propagate: false
						}
					},
					tooltips: {
						callbacks: {
							label: function(tooltipItem) {
								return tooltipItem.yLabel;
							}
						}
					},
					scales: {
						xAxes: [{
							display: false,
							ticks: {
								display: false
							},
							gridLines: {
								display: false
							}
						}],
						yAxes: [{
							display: false,
							ticks: {
								display: false,
								min: 18,
								max: 36
							},
							gridLines: {
								display: false
							}
						}]
					},
					title: {
						display: false
					}
				}
			});
		}

		/* chart-sm-04 (line-chart) */
		if($("#chart-sm-04").length) {
			let chart_sm_04 = document.querySelector("#chart-sm-04"), // chart ID
				chart_sm_04_chartLineLG = chart_sm_04.getContext("2d"),
				chart_sm_04_gradientFill = chart_sm_04_chartLineLG.createLinearGradient(0, 0, 0, 50),
				chart_sm_04_gradientFill_b = chart_sm_04_chartLineLG.createLinearGradient(0, 20, 0, 50);
				chart_sm_04_gradientFill.addColorStop(0, "rgba(255, 255, 255, 1)");
				chart_sm_04_gradientFill.addColorStop(.5, "rgba(198, 210, 253, 1)");
				chart_sm_04_gradientFill.addColorStop(1, "rgba(162, 255, 194, 1)");
				chart_sm_04_gradientFill_b.addColorStop(0, "rgba(32, 73, 219, .17)");
				chart_sm_04_gradientFill_b.addColorStop(1, "rgba(32, 73, 219, .05)");
			new Chart(chart_sm_04_chartLineLG, {
				type: 'glowLineLight',
				data: {
				labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W'],
				datasets: [{
					borderColor: chart_sm_04_gradientFill,
					backgroundColor: chart_sm_04_gradientFill_b,
					borderWidth: "2",
					data: [40,31,34,36,39,32,31,36,32,40],
					label: 'Dataset',
					fill: true,
					radius: 0
				}]
				},
				options: {
					spanGaps: false,
					maintainAspectRatio: false,
					elements: {
						line: {
							tension: 0
						}
					},
					animation: {
						duration: 0
					},
					legend: {
						display: false
					},
					plugins: {
						filler: {
							propagate: false
						}
					},
					tooltips: {
						callbacks: {
							label: function(tooltipItem) {
								return tooltipItem.yLabel;
							}
						}
					},
					scales: {
						xAxes: [{
							display: false,
							ticks: {
								display: false
							},
							gridLines: {
								display: false
							}
						}],
						yAxes: [{
							display: false,
							ticks: {
								display: false,
								min: 30,
								max: 42
							},
							gridLines: {
								display: false
							}
						}]
					},
					title: {
						display: false
					}
				}
			});
		}

		/* radar-chart */
		if($("#chart-radar").length) {
			let chart_radar = document.querySelector("#chart-radar"), // chart ID
				chart_radar_chartLineLG = chart_radar.getContext("2d"),
				chart_radar_gradientFill = chart_radar_chartLineLG.createRadialGradient(275,250,15,290,260, 300),
				chart_radar_gradientFill_02 = chart_radar_chartLineLG.createRadialGradient(275,250,15,290,260, 300);
				chart_radar_gradientFill.addColorStop(0, "rgba(42, 242, 112, .4)");
				chart_radar_gradientFill.addColorStop(.5, "rgba(101, 249, 153, .5)");
				chart_radar_gradientFill.addColorStop(1, "rgba(42, 242, 112, .4)");
				chart_radar_gradientFill_02.addColorStop(0, "rgba(36, 202, 241, .4)");
				chart_radar_gradientFill_02.addColorStop(.5, "rgba(126, 224, 249, .4)");
				chart_radar_gradientFill_02.addColorStop(1, "rgba(36, 202, 241, .4)");
			new Chart(chart_radar_chartLineLG, {
				type: 'radar',
				data: {
				labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W'],
				datasets: [{
					backgroundColor: chart_radar_gradientFill_02,
					borderColor: "rgba(36, 202, 241, 1)",
					borderWidth: "2",
					data: [30,27,24,26,27,25,30,22,27,30],
					label: 'Dataset',
					pointBackgroundColor: "rgba(1, 0, 25, 1)",
					pointBorderColor: "#ffffff"
				}, {
					backgroundColor: chart_radar_gradientFill,
					borderColor: "#2af270",
					borderWidth: "2",
					data: [29,25,27,30,24,28,30,29,24,28],
					label: 'Dataset',
					pointBackgroundColor: "rgba(1, 0, 25, 1)",
					pointBorderColor: "#2af270"
				}]
				},
				options: {
					spanGaps: false,
					maintainAspectRatio: false,
					legend: {
						display: false
					},
					title: {
						display: true
					},
					scale: {
						angleLines: { 
							color: 'rgba(255, 255, 255, .15)'
						},
						gridLines: {
							color: 'rgba(255, 255, 255, .15)'
						},
						ticks: {
							showLabelBackdrop: true,
							backdropColor: "rgba(5,1,54, .95)",
							min: 20
						}
					}
				}
			});
		}
		
		/* line-chart */
		if($("#chart-line-bar").length) {
			var chartLineLG = document.querySelector("#chart-line-bar").getContext("2d"),
				gradientStroke = chartLineLG.createLinearGradient(700, 0, 100, 0),
				gradientgridLines = chartLineLG.createLinearGradient(700, 0, 100, 0),
				gradientFill = chartLineLG.createLinearGradient(0, 0, 0, 400);
			gradientStroke.addColorStop(0, 'rgba(32, 73, 219, .6)');
			gradientStroke.addColorStop(.5, 'rgba(255, 255, 255, 1)');
			gradientStroke.addColorStop(1, 'rgba(42, 242, 112, .4)');
			gradientgridLines.addColorStop(0, 'rgba(255, 255, 255, .1)');
			gradientgridLines.addColorStop(.5, 'rgba(255, 255, 255, .5)');
			gradientgridLines.addColorStop(1, 'rgba(255, 255, 255, .1)');
			gradientFill.addColorStop(0, "rgba(32, 73, 219, 1)");
			gradientFill.addColorStop(1, "rgba(42, 242, 112, 1)");
			new Chart(chartLineLG, {
				type: 'bar',
				data: {
				labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'TODAY'],
				datasets: [{
					type: 'line',
					borderColor: gradientStroke,
					pointBorderColor: gradientStroke,
					pointBackgroundColor: gradientStroke,
					pointHoverBackgroundColor: gradientStroke,
					pointHoverBorderColor: gradientStroke,
					borderWidth: "2",
					data: [50,35,75,100,150,125,175,200,215,250],
					label: 'Dataset 1',
					fill: false,
					radius: 0
				}, {
					type: 'bar',
					hoverBackgroundColor: gradientFill,
					backgroundColor: gradientFill,
					data: [50,35,75,100,150,125,175,200,215,250],
					label: 'Dataset 2',
					fill: gradientFill
				}
				]},
				options: {
					spanGaps: false,
					maintainAspectRatio: false,
					tooltips: {
						intersect: false
					},
					legend: {
						display: false
					},
					scales: {
						xAxes: [{
							barPercentage: 0.1,
							gridLines: {
								color: "rgba(42, 242, 112, 0)",
							}
						}],
						yAxes: [{
							gridLines: {
								color: gradientgridLines,
								zeroLineColor: "rgba(42, 242, 112, .7)",
							}   
						}]
					},
					title: {
						display: true
					},
					plugins: {
						labels: false
					}
				}
			});
		}

		/* header-chart-1 */
		if($("#chart-h-01").length) {
			var chart_h_01 = document.querySelector("#chart-h-01").getContext("2d"),
				chart_h_01_gradientFill = chart_h_01.createLinearGradient(0, 0, 0, 50);
				chart_h_01_gradientFill.addColorStop(0, "rgba(82, 240, 202, 1)");
				chart_h_01_gradientFill.addColorStop(1, "rgba(42, 242, 112, 1)");
			new Chart(chart_h_01, {
				type: 'bar',
				data: {
					labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'TODAY'],
					datasets: [{
						type: 'bar',
						hoverBackgroundColor: chart_h_01_gradientFill,
						backgroundColor: chart_h_01_gradientFill,
						data: [150,135,125,118,150,125,145,140,115,150],
						label: 'Dataset 2',
						fill: chart_h_01_gradientFill
					}]
				},
				options: {
					spanGaps: false,
					tooltips: {
						intersect: false
					},
					legend: {
						display: false
					},
					plugins: {
						labels: false
					},
					scales: {
						xAxes: [{
							ticks: {
								display: false,
							},
							gridLines: {
								color: "rgba(42, 242, 112, 0)",
							}
						}],
						yAxes: [{
							ticks: {
								display: false,
							},
							gridLines: {
								zeroLineColor: "rgba(42, 242, 112, 0)",
							}
						}]
					},
					title: {
						display: false
					}
				}
			});
		}

		/* header-chart-2 */
		if($("#chart-h-02").length) {
			let chart_h_02 = document.querySelector("#chart-h-02").getContext("2d"),
				chart_h_02_gradientFill = chart_h_02.createLinearGradient(0, 0, 0, 50);
			chart_h_02_gradientFill.addColorStop(0, "rgba(82, 240, 202, 1)");
			chart_h_02_gradientFill.addColorStop(1, "rgba(42, 242, 112, 1)");
			new Chart(chart_h_02, {
				type: 'bar',
				data: {
					labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'TODAY'],
					datasets: [{
						type: 'bar',
						hoverBackgroundColor: chart_h_02_gradientFill,
						backgroundColor: chart_h_02_gradientFill,
						data: [133,119,112,129,116,131,141,129,127,141],
						label: 'Dataset 2',
						fill: chart_h_02_gradientFill
					}]
				},
				options: {
					spanGaps: false,
					tooltips: {
						intersect: false
					},
					legend: {
						display: false
					},
					plugins: {
						labels: false
					},
					scales: {
						xAxes: [{
							ticks: {
								display: false,
							},
							gridLines: {
								color: "rgba(42, 242, 112, 0)",
							}
						}],
						yAxes: [{
							ticks: {
								display: false,
							},
							gridLines: {
								zeroLineColor: "rgba(42, 242, 112, 0)",
							}
						}]
					},
					title: {
						display: false
					}
				}
			});
		}

		/* header-chart-3 */
		if($("#chart-h-03").length) {
			let chart_h_03 = document.querySelector("#chart-h-03").getContext("2d"),
				chart_h_03_gradientFill = chart_h_03.createLinearGradient(0, 0, 0, 50);
			chart_h_03_gradientFill.addColorStop(0, "rgba(82, 240, 202, 1)");
			chart_h_03_gradientFill.addColorStop(1, "rgba(42, 242, 112, 1)");
			new Chart(chart_h_03, {
				type: 'bar',
				data: {
					labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'TODAY'],
					datasets: [{
						type: 'bar',
						hoverBackgroundColor: chart_h_03_gradientFill,
						backgroundColor: chart_h_03_gradientFill,
						data: [147,121,132,112,124,145,124,134,127,146],
						label: 'Dataset 2',
						fill: chart_h_03_gradientFill
					}]
				},
				options: {
					spanGaps: false,
					tooltips: {
						intersect: false
					},
					legend: {
						display: false
					},
					plugins: {
						labels: false
					},
					scales: {
						xAxes: [{
							ticks: {
								display: false,
							},
							gridLines: {
								color: "rgba(42, 242, 112, 0)",
							}
						}],
						yAxes: [{
							ticks: {
								display: false,
							},
							gridLines: {
								zeroLineColor: "rgba(42, 242, 112, 0)",
							}
						}]
					},
					title: {
						display: false
					}
				}
			});
		}

		/* header-chart-4 */
		if($("#chart-h-04").length) {
			let chart_h_04 = document.querySelector("#chart-h-04").getContext("2d"),
				chart_h_04_gradientFill = chart_h_04.createLinearGradient(0, 0, 0, 50);
			chart_h_04_gradientFill.addColorStop(0, "rgba(82, 240, 202, 1)");
			chart_h_04_gradientFill.addColorStop(1, "rgba(42, 242, 112, 1)");
			new Chart(chart_h_04, {
				type: 'bar',
				data: {
					labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'TODAY'],
					datasets: [{
						type: 'bar',
						hoverBackgroundColor: chart_h_04_gradientFill,
						backgroundColor: chart_h_04_gradientFill,
						data: [142,139,127,139,119,121,125,142,121,123],
						label: 'Dataset 2',
						fill: chart_h_04_gradientFill
					}]
				},
				options: {
					spanGaps: false,
					tooltips: {
						intersect: false
					},
					legend: {
						display: false
					},
					plugins: {
						labels: false
					},
					scales: {
						xAxes: [{
							ticks: {
								display: false,
							},
							gridLines: {
								color: "rgba(42, 242, 112, 0)",
							}
						}],
						yAxes: [{
							ticks: {
								display: false,
							},
							gridLines: {
								zeroLineColor: "rgba(42, 242, 112, 0)",
							}
						}]
					},
					title: {
						display: false
					}
				}
			});
		}

		/* pie-chart-01 */
		if($("#pie-chart").length) {
			let pieChart = document.querySelector("#pie-chart").getContext("2d"),
				pieChartGradientFill_02 = pieChart.createLinearGradient(0, 160, 0, 270),
				pieChartGradientFill_03 = pieChart.createLinearGradient(0, 160, 0, 270),
				pieChartGradientFill_04 = pieChart.createLinearGradient(0, 10, 0, 270),
				pieChartGradientFill_05 = pieChart.createLinearGradient(0, 10, 0, 270),
				pieChartGradientFill_06 = pieChart.createLinearGradient(0, 10, 0, 270);
			pieChartGradientFill_02.addColorStop(0, "#2BE2A0");
			pieChartGradientFill_02.addColorStop(1, "#149D67");
			pieChartGradientFill_03.addColorStop(0, "#6bb7ea");
			pieChartGradientFill_03.addColorStop(1, "#1b6596");
			pieChartGradientFill_04.addColorStop(0, "#D56B3B");
			pieChartGradientFill_04.addColorStop(1, "#ef976f");
			pieChartGradientFill_05.addColorStop(0, "#397b4e");
			pieChartGradientFill_05.addColorStop(1, "#b0d6bc");
			pieChartGradientFill_06.addColorStop(0, "#c45850");
			pieChartGradientFill_06.addColorStop(1, "#ffa9a3");
			new Chart(pieChart, {
				type: 'pie',
				data: {
					labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
					datasets: [{
						label: "Population (millions)",
						backgroundColor: [pieChartGradientFill_03, pieChartGradientFill_02, pieChartGradientFill_04, pieChartGradientFill_05, pieChartGradientFill_06],
						hoverBackgroundColor: [pieChartGradientFill_03, pieChartGradientFill_02, pieChartGradientFill_04, pieChartGradientFill_05, pieChartGradientFill_06],
						borderWidth: 0,
						data: [3478,5267,1734,1484,833]
					}]
				},
				options: {
					spanGaps: false,
					maintainAspectRatio: false,
					title: {
						display: false,
						text: 'Predicted world population (millions) in 2050'
					},
					tooltips: {
						intersect: false
					},
					legend: {
						display: false
					},
					plugins: {
						labels: {
							render: 'percentage',
							fontColor: '#fff',
							precision: 2,
							position: 'outside',
							textMargin: 12
						}
					}
				}
			});
		}

		/* pie-chart-02 */
		if($("#pie-chart_02").length) {
			let pieChart_02 = document.querySelector("#pie-chart_02").getContext("2d"),
				pie_02_ChartGradientFill_02 = pieChart_02.createLinearGradient(0, 160, 0, 270),
				pie_02_ChartGradientFill_03 = pieChart_02.createLinearGradient(0, 40, 0, 270),
				pie_02_ChartGradientFill_04 = pieChart_02.createLinearGradient(0, 160, 0, 270),
				pie_02_ChartGradientFill_05 = pieChart_02.createLinearGradient(0, 10, 0, 270),
				pie_02_ChartGradientFill_06 = pieChart_02.createLinearGradient(0, 10, 0, 270);
			pie_02_ChartGradientFill_02.addColorStop(0, "#2BE2A0");
			pie_02_ChartGradientFill_02.addColorStop(1, "#149D67");
			pie_02_ChartGradientFill_03.addColorStop(0, "#6bb7ea");
			pie_02_ChartGradientFill_03.addColorStop(1, "#1b6596");
			pie_02_ChartGradientFill_04.addColorStop(0, "#D56B3B");
			pie_02_ChartGradientFill_04.addColorStop(1, "#ef976f");
			pie_02_ChartGradientFill_05.addColorStop(0, "#397b4e");
			pie_02_ChartGradientFill_05.addColorStop(1, "#b0d6bc");
			pie_02_ChartGradientFill_06.addColorStop(0, "#c45850");
			pie_02_ChartGradientFill_06.addColorStop(1, "#ffa9a3");
			new Chart(pieChart_02, {
				type: 'pie',
				data: {
					labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
					datasets: [{
						label: "Population (millions)",
						backgroundColor: [pie_02_ChartGradientFill_03, pie_02_ChartGradientFill_02, pie_02_ChartGradientFill_04, pie_02_ChartGradientFill_05, pie_02_ChartGradientFill_06],
						hoverBackgroundColor: [pie_02_ChartGradientFill_03, pie_02_ChartGradientFill_02, pie_02_ChartGradientFill_04, pie_02_ChartGradientFill_05, pie_02_ChartGradientFill_06],
						borderWidth: 0,
						data: [4478,5267,2734,484,633]
					}]
				},
				options: {
					spanGaps: false,
					maintainAspectRatio: false,
					title: {
						display: false,
						text: 'Predicted world population (millions) in 2050'
					},
					tooltips: {
						intersect: false
					},
					legend: {
						display: false
					},
					plugins: {
						labels: {
							render: 'percentage',
							fontColor: '#fff',
							precision: 2,
							position: 'outside',
							textMargin: 12
						}
					}
				}
			});
		}

		/* pie-chart-03 */
		if($("#pie-chart_03").length) {
			let pieChart_03 = document.querySelector("#pie-chart_03").getContext("2d"),
				pie_03_ChartGradientFill_02 = pieChart_03.createLinearGradient(0, 160, 0, 270),
				pie_03_ChartGradientFill_03 = pieChart_03.createLinearGradient(0, 40, 0, 270),
				pie_03_ChartGradientFill_04 = pieChart_03.createLinearGradient(0, 160, 0, 270),
				pie_03_ChartGradientFill_05 = pieChart_03.createLinearGradient(0, 50, 0, 270),
				pie_03_ChartGradientFill_06 = pieChart_03.createLinearGradient(0, 10, 0, 270);
			pie_03_ChartGradientFill_02.addColorStop(0, "#2BE2A0");
			pie_03_ChartGradientFill_02.addColorStop(1, "#149D67");
			pie_03_ChartGradientFill_03.addColorStop(0, "#6bb7ea");
			pie_03_ChartGradientFill_03.addColorStop(1, "#1b6596");
			pie_03_ChartGradientFill_04.addColorStop(0, "#D56B3B");
			pie_03_ChartGradientFill_04.addColorStop(1, "#ef976f");
			pie_03_ChartGradientFill_05.addColorStop(0, "#397b4e");
			pie_03_ChartGradientFill_05.addColorStop(1, "#b0d6bc");
			pie_03_ChartGradientFill_06.addColorStop(0, "#c45850");
			pie_03_ChartGradientFill_06.addColorStop(1, "#ffa9a3");
			new Chart(pieChart_03, {
				type: 'pie',
				data: {
					labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
					datasets: [{
						label: "Population (millions)",
						backgroundColor: [pie_03_ChartGradientFill_03, pie_03_ChartGradientFill_02, pie_03_ChartGradientFill_04, pie_03_ChartGradientFill_05, pie_03_ChartGradientFill_06],
						hoverBackgroundColor: [pie_03_ChartGradientFill_03, pie_03_ChartGradientFill_02, pie_03_ChartGradientFill_04, pie_03_ChartGradientFill_05, pie_03_ChartGradientFill_06],
						borderWidth: 0,
						data: [1478,2267,1734,1484,833]
					}]
				},
				options: {
					spanGaps: false,
					maintainAspectRatio: false,
					title: {
						display: false,
						text: 'Predicted world population (millions) in 2050'
					},
					tooltips: {
						intersect: false
					},
					legend: {
						display: false
					},
					plugins: {
						labels: {
							render: 'percentage',
							fontColor: '#fff',
							precision: 2,
							position: 'outside',
							textMargin: 12
						}
					}
				}
			});
		}

		/* line-chart */
		if($("#chart-line-sl").length) {
			let chartLineLG_SL = document.querySelector("#chart-line-sl").getContext("2d"),
				gradientStroke_SL = chartLineLG_SL.createLinearGradient(350, 0, 100, 0),
				gradientgridLines_SL = chartLineLG_SL.createLinearGradient(0, 0, 0, 500),
				gradientFill_SL = chartLineLG_SL.createLinearGradient(0, 0, 0, 350);
			gradientStroke_SL.addColorStop(0, 'rgba(42, 242, 112, .9)');
			gradientStroke_SL.addColorStop(.5, 'rgba(0, 255, 90, 1)');
			gradientStroke_SL.addColorStop(1, 'rgba(42, 242, 112, .9)');
			gradientgridLines_SL.addColorStop(0, 'rgba(255, 255, 255, .1)');
			gradientgridLines_SL.addColorStop(.5, 'rgba(255, 255, 255, .3)');
			gradientgridLines_SL.addColorStop(1, 'rgba(255, 255, 255, .1)');
			gradientFill_SL.addColorStop(0, "rgba(42, 242, 112, 1)");
			gradientFill_SL.addColorStop(1, "rgba(42, 242, 112, 1)");
			new Chart(chartLineLG_SL, {
				type: 'line',
				data: {
				labels: ['10:30am', '11:30am', '12:30am', '1:30am', '2:30am'],
				datasets: [{
					type: 'glowLineLight',
					borderColor: '#ffffff',
					pointBorderColor: '#ffffff',
					pointBackgroundColor: '#ffffff',
					pointHoverBackgroundColor: '#ffffff',
					pointHoverBorderColor: '#ffffff',
					borderWidth: "2",
					data: [50,35,55,100,130],
					label: 'Dataset 1',
					fill: false,
					radius: 0
				}, {
					type: 'glowLinePrimary',
					borderColor: "#4b96c8",
					pointBorderColor: "#4b96c8",
					pointBackgroundColor: "#4b96c8",
					pointHoverBackgroundColor: "#4b96c8",
					pointHoverBorderColor: "#4b96c8",
					borderWidth: "2",
					data: [62,45,65,85,52],
					label: 'Dataset 1',
					fill: false,
					radius: 0
				}, {
					type: 'glowLineWarning',
					borderColor: gradientStroke_SL,
					pointBorderColor: gradientStroke_SL,
					pointBackgroundColor: gradientStroke_SL,
					pointHoverBackgroundColor: gradientStroke_SL,
					pointHoverBorderColor: gradientStroke_SL,
					borderWidth: "2",
					data: [82,55,101,122,102],
					label: 'Dataset 1',
					fill: false,
					radius: 0
				}
				]},
				options: {
					spanGaps: false,
					maintainAspectRatio: false,
					tooltips: {
						intersect: false
					},
					legend: {
						display: false
					},
					scales: {
						xAxes: [{
							barPercentage: 0.1,
							gridLines: {
								color: gradientgridLines_SL,
								zeroLineColor: "rgba(42, 242, 112, 0)",
								drawBorder: false
							},
							ticks: {
								beginAtZero: true,
								maxTicksLimit: 5,
								padding: 25,
							}
						}],
						yAxes: [{
							display: false,
							gridLines: {
								display: false,
								drawBorder: false
							}
						}]
					},
					title: {
						display: true
					}
				}
			});
		}

		Chart.defaults.LineWithLine = Chart.defaults.line;
		Chart.controllers.LineWithLine = Chart.controllers.line.extend({
			draw: function(ease) {
				Chart.controllers.line.prototype.draw.call(this, ease);

				if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
					var activePoint = this.chart.tooltip._active[0],
						ctx = this.chart.ctx,
						x = activePoint.tooltipPosition().x,
						topY = this.chart.scales['y-axis-0'].top,
						bottomY = this.chart.scales['y-axis-0'].bottom;

					// draw line
					ctx.save();
					ctx.beginPath();
					ctx.moveTo(x, topY);
					ctx.lineTo(x, bottomY);
					ctx.lineWidth = 1;
					ctx.strokeStyle = 'rgba(42, 242, 112, .7)';
					ctx.stroke();
					ctx.restore();
				}
			}
		});

		/* random number */
		function randomNumber(min, max) {
			return Math.random() * (max - min) + min;
		}

		/* randomBar */
		function randomBar(date, lastClose) {
			let open = randomNumber(lastClose * 0.95, lastClose * 1.05).toFixed(2),
				close = randomNumber(open * 0.95, open * 1.05).toFixed(2);
			return {
				t: date.valueOf(),
				y: close
			};
		}
		let dateFormat = 'MM/DD/YYYY',
			date_line = moment('04/01/2019', dateFormat, true),
			data_line = [randomBar(date_line, 30)];
		while (data_line.length < 100) {
			date_line = date_line.clone().add(1, 'd');
			if (date_line.isoWeekday() <= 5) {
				data_line.push(randomBar(date_line, data_line[data_line.length - 1].y));
			}
		}

		if($("#chart-line-md").length) {
			var chartLineLG = document.querySelector("#chart-line-md").getContext("2d"),
				gradientStroke = chartLineLG.createLinearGradient(700, 0, 100, 0),
				gradientgridLines = chartLineLG.createLinearGradient(0, 0, 0, 300),
				gradientFill = chartLineLG.createLinearGradient(0, 100, 0, 260);
			gradientStroke.addColorStop(0, 'rgba(32, 73, 219, .2)');
			gradientStroke.addColorStop(.5, 'rgba(255, 255, 255, 1)');
			gradientStroke.addColorStop(1, 'rgba(42, 242, 112, .98)');
			gradientgridLines.addColorStop(0, 'rgba(255, 255, 255, .1)');
			gradientgridLines.addColorStop(.5, 'rgba(255, 255, 255, .5)');
			gradientgridLines.addColorStop(1, 'rgba(255, 255, 255, .1)');
			gradientFill.addColorStop(0, "rgba(32, 73, 219, .17)");
			gradientFill.addColorStop(1, "rgba(42, 242, 112, 0)");

			new Chart(chartLineLG, {
				type: 'LineWithLine',
				responsive: true,
					maintainAspectRatio: false,
				data: {
					datasets: [{
						borderColor: gradientStroke,
						pointBorderColor: gradientStroke,
						pointBackgroundColor: gradientStroke,
						pointHoverBackgroundColor: gradientStroke,
						pointHoverBorderColor: gradientStroke,
						borderWidth: "2",
						data: data_line,
						label: 'Dataset 1',
						backgroundColor: gradientFill,
						fill: true,
						radius: 0
					}
				]},
				options: {
					spanGaps: false,
					maintainAspectRatio: false,
					legend: {
						display: false
					},
					elements: {
						line: {
							tension: 0.000001
						}
					},
					scales: {
						xAxes: [{
							type: 'time',
							distribution: 'series',
							gridLines: {
								color: gradientgridLines,
								zeroLineColor: "rgba(42, 242, 112, .7)",
							}
						}],
						yAxes: [{
							gridLines: {
								color: "rgba(42, 242, 112, 0)",
								zeroLineColor: "rgba(42, 242, 112, 0)",
							}
						}]
					},
					title: {
						display: true
					},
					annotation: {
						events: ["click"],
						annotations: [{
							drawTime: "afterDatasetsDraw",
							id: "hline",
							type: "line",
							mode: "horizontal",
							scaleID: "y-axis-0",
							value: "30",
							borderColor: "rgba(42, 242, 112, .5)",
							borderWidth: 1,
							label: {
								backgroundColor: "rgba(42, 242, 112, .9)",
								fontColor: "#3a4048",
								cornerRadius: 2,
								content: "Normal",
								enabled: true
							},
						},
							{
								drawTime: "beforeDatasetsDraw",
								type: "box",
								backgroundColor: "rgba(255, 255, 255, 0)",
								borderColor: "rgba(255, 255, 255, 0)",
								borderWidth: 0
							}
						]}
					}
			});
		}

		/* randomBarTSN */
		function randomBarTSN(dateTSN, lastClose) {
			let open = randomNumber(lastClose * 0.95, lastClose * 1.05).toFixed(2),
					close = randomNumber(open * 0.95, open * 1.05).toFixed(2);
			return {
				t: dateTSN.valueOf(),
				y: close
			};
		}

		let dateFormatTSN = 'D DD',
			dateTSN = moment('May 10 2019', dateFormatTSN),
			dataTSN = [randomBarTSN(dateTSN, 30)];
		while (dataTSN.length < 10) {
			dateTSN = dateTSN.clone().add(1, 'd');
			if (dateTSN.isoWeekday() <= 5) {
				dataTSN.push(randomBarTSN(dateTSN, dataTSN[dataTSN.length - 1].y));
			}
		}

		if($("#chart_line_tension").length) {
			let chartTSN = document.querySelector("#chart_line_tension").getContext("2d"),
				TSNgradientStroke = chartTSN.createLinearGradient(800, 0, 100, 0),
				TSNgradientgridLines = chartTSN.createLinearGradient(0, 0, 0, 300),
				TSNgradientPoint = chartTSN.createLinearGradient(0, 0, 5, 1),
				TSNgradientFill = chartTSN.createLinearGradient(0, 100, 0, 260);
			TSNgradientStroke.addColorStop(0, 'rgba(42, 87, 180, .5)');
			TSNgradientStroke.addColorStop(.5, 'rgba(128, 234, 248, 1)');
			TSNgradientStroke.addColorStop(1, 'rgba(42, 87, 180, .98)');
			TSNgradientgridLines.addColorStop(0, 'rgba(255, 255, 255, .1)');
			TSNgradientgridLines.addColorStop(.5, 'rgba(255, 255, 255, .5)');
			TSNgradientgridLines.addColorStop(1, 'rgba(255, 255, 255, .1)');
			TSNgradientFill.addColorStop(0, "rgba(32, 73, 219, .17)");
			TSNgradientFill.addColorStop(1, "rgba(42, 242, 112, 0)");
			TSNgradientPoint.addColorStop(0, "rgba(0, 99, 212, 1)");
			TSNgradientPoint.addColorStop(1, "rgba(81, 158, 247, 1)");

			new Chart(chartTSN, {
				type: 'LineWithLine',
				responsive: true,
				maintainAspectRatio: false,
				data: {
				datasets: [{
					borderColor: TSNgradientStroke,
					pointBorderColor: "rgba(42, 242, 112, 0)",
					pointBackgroundColor: TSNgradientPoint,
					pointHoverBackgroundColor: TSNgradientStroke,
					pointHoverBorderColor: TSNgradientStroke,
					borderWidth: "2",
					data: dataTSN,
					label: 'Dataset 1',
					backgroundColor: TSNgradientFill,
					fill: true,
					pointRadius: 5
				}
			]},
			options: {
					spanGaps: false,
					responsive: true,
					maintainAspectRatio: false,
					legend: {
						display: false
					},
				scales: {
					xAxes: [{
						type: 'time',
						distribution: 'series',
						gridLines: {
							color: TSNgradientgridLines,
							zeroLineColor: "rgba(42, 242, 112, .7)",
						},
						ticks: {
							autoSkip: true,
							stepSize: .5
						}
					}],
					yAxes: [{
						gridLines: {
							color: "rgba(255, 255, 255, .1)",
							zeroLineColor: "rgba(42, 242, 112, 0)",
						}
					}]
				},
				title: {
					display: true
				},
				annotation: {
					events: ["click"],
					annotations: [
						{
							drawTime: "afterDatasetsDraw",
							id: "hline",
							type: "line",
							mode: "horizontal",
							scaleID: "y-axis-0",
							value: "30",
							borderColor: "rgba(42, 242, 112, .5)",
							borderWidth: 1,
							label: {
								backgroundColor: "rgba(42, 242, 112, .9)",
								fontColor: "#3a4048",
								cornerRadius: 2,
								content: "Normal",
								enabled: true
							}
						},
						{
							drawTime: "beforeDatasetsDraw",
							type: "box",
							backgroundColor: "rgba(255, 255, 255, 0)",
							borderColor: "rgba(255, 255, 255, 0)",
							borderWidth: 0
						}
					]
					}
			}
			});
		}

		/* chart-fie */
		if($("#chart-fie").length) {
			let chart_fie = document.querySelector("#chart-fie").getContext("2d"),
				chart_fie_gradientgridLines = chart_fie.createLinearGradient(700, 0, 100, 0),
				chart_fie_gradientFill = chart_fie.createLinearGradient(0, 0, 0, 400);
			chart_fie_gradientgridLines.addColorStop(0, 'rgba(255, 255, 255, .1)');
			chart_fie_gradientgridLines.addColorStop(.5, 'rgba(255, 255, 255, .5)');
			chart_fie_gradientgridLines.addColorStop(1, 'rgba(255, 255, 255, .1)');
			chart_fie_gradientFill.addColorStop(0, "rgba(32, 73, 219, 1)");
			chart_fie_gradientFill.addColorStop(1, "rgba(42, 242, 112, 1)");
			new Chart(chart_fie, {
				type: 'bar',
				data: {
				labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'TODAY'],
				datasets: [{
					type: 'bar',
					hoverBackgroundColor: chart_fie_gradientFill,
					backgroundColor: chart_fie_gradientFill,
					data: [150,205,175,178,150,175,175,200,215,187],
					label: 'Chart-fie',
					fill: chart_fie_gradientFill
				}
				]},
				options: {
					spanGaps: false,
					maintainAspectRatio: false,
					tooltips: {
						intersect: false
					},
					legend: {
						display: false
					},
					scales: {
						xAxes: [{
							barPercentage: 0.2,
							gridLines: {
								color: "rgba(42, 242, 112, 0)",
							}
						}],
						yAxes: [{
							gridLines: {
								color: chart_fie_gradientgridLines,
								zeroLineColor: "rgba(42, 242, 112, .7)",
							},
							ticks: {
								min: 100
							},
						}]
					},
					title: {
						display: true
					},
					plugins: {
						labels: false
					}
				}
			});
		}

		/* chart-plrCat */
		if($("#chart-plrCat").length) {
			let chart_plrCat = document.querySelector("#chart-plrCat").getContext("2d"),
				chart_plrCat_gradient_01 = chart_plrCat.createLinearGradient(400, 0, 100, 0),
				chart_plrCat_gradient_02 = chart_plrCat.createLinearGradient(350, 0, 100, 0),
				chart_plrCat_gradient_03 = chart_plrCat.createLinearGradient(200, 0, 100, 0);
			chart_plrCat_gradient_02.addColorStop(0, 'rgba(36, 201, 246, 1)');
			chart_plrCat_gradient_02.addColorStop(.5, 'rgba(42, 242, 112, 1)');
			chart_plrCat_gradient_01.addColorStop(.65, "rgba(34, 123, 187, 1)");
			chart_plrCat_gradient_01.addColorStop(1, "rgba(34, 96, 205, 1)");
			new Chart(chart_plrCat, {
				type: 'doughnut',
				responsive: true,
				data: {
					labels: ["Devices", "Apps", "Servers"],
					datasets: [{
							label: "Population (millions)",
							backgroundColor: [chart_plrCat_gradient_01, '#27263b', chart_plrCat_gradient_02],
							hoverBackgroundColor: [chart_plrCat_gradient_01, '#27263b', chart_plrCat_gradient_02],
							data: [1534,567,1534],
							borderColor: 'rgba(255,255,255, 0)'
					}]
				},
				options: {
					cutoutPercentage: 90,
					legend: {
						position: "bottom",
						
						labels: {
							usePointStyle: true,
							padding: 35
						}
					},
					title: {
						display: false
					},
					plugins: {
						labels: false
					},
					elements: {
						center: {
							text: '75%',
							color: '#ffffff',
							fontStyle: 'Open Sans',
							maxFontSize: 30,
							sidePadding: 20
						}
					}
				}
			});
		}

		/* ANS Chart Line */
		if($("#chart-ans-sm-01").length) {
			let ANSchartLine = document.querySelector("#chart-ans-sm-01").getContext("2d"),
					ANSchartLineStroke = ANSchartLine.createLinearGradient(700, 0, 100, 0),
					ANSchartLineLines = ANSchartLine.createLinearGradient(0, 0, 0, 300),
					ANSchartLineFill = ANSchartLine.createLinearGradient(0, 0, 0, 120);
					ANSchartLineStroke.addColorStop(0, 'rgba(32, 73, 219, .2)');
					ANSchartLineStroke.addColorStop(.5, 'rgba(255, 255, 255, 1)');
					ANSchartLineStroke.addColorStop(1, 'rgba(42, 242, 112, .98)');
					ANSchartLineLines.addColorStop(0, 'rgba(255, 255, 255, .1)');
					ANSchartLineLines.addColorStop(.5, 'rgba(255, 255, 255, .5)');
					ANSchartLineLines.addColorStop(1, 'rgba(255, 255, 255, .1)');
					ANSchartLineFill.addColorStop(0, "rgba(42, 242, 112, .17)");
					ANSchartLineFill.addColorStop(1, "rgba(42, 242, 112, .10)");
			new Chart(ANSchartLine, {
				type: 'line',
				responsive: true,
				maintainAspectRatio: false,
				data: {
					labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
					datasets: [{
						borderColor: ANSchartLineStroke,
						pointBorderColor: ANSchartLineStroke,
						pointBackgroundColor: ANSchartLineStroke,
						pointHoverBackgroundColor: ANSchartLineStroke,
						pointHoverBorderColor: ANSchartLineStroke,
						borderWidth: "2",
						data: [86,154,136,196,139,211,153,290,255,272],
						label: 'Dataset 1',
						backgroundColor: ANSchartLineFill,
						fill: true,
						radius: 0
					}
				]},
				options: {
					spanGaps: false,
					maintainAspectRatio: false,
					legend: {
						display: false
					},
					scales: {
						xAxes: [{
							gridLines: {
								color: "rgba(42, 242, 112, 0)",
								zeroLineColor: "rgba(42, 242, 112, 0)",
							},
							ticks: {
								display: false
							}
						}],
						yAxes: [{
							gridLines: {
								color: "rgba(42, 242, 112, 0)",
								zeroLineColor: "rgba(42, 242, 112, 0)",
							},
							ticks: {
								display: false,
								min: 50
							}
						}]
					},
					title: {
						display: false
					}
				}
			});
		}

		/* ANS Chart Line */
		if($("#chart-ans-sm-02").length) {
			let ANSchartLine_02 = document.querySelector("#chart-ans-sm-02").getContext("2d"),
					ANSchartLineStroke_02 = ANSchartLine_02.createLinearGradient(450, 0, 100, 0),
					ANSchartLineLines_02 = ANSchartLine_02.createLinearGradient(0, 0, 0, 300),
					ANSchartLineFill_02 = ANSchartLine_02.createLinearGradient(0, 0, 0, 120);
					ANSchartLineStroke_02.addColorStop(0, 'rgba(75, 215, 249, .98)');
					ANSchartLineStroke_02.addColorStop(.5, 'rgba(35, 201, 241, 1)');
					ANSchartLineStroke_02.addColorStop(1, 'rgba(70, 165, 249, .68)');
					ANSchartLineLines_02.addColorStop(0, 'rgba(255, 255, 255, .1)');
					ANSchartLineLines_02.addColorStop(.5, 'rgba(255, 255, 255, .5)');
					ANSchartLineLines_02.addColorStop(1, 'rgba(255, 255, 255, .1)');
					ANSchartLineFill_02.addColorStop(0, "rgba(42, 242, 112, .17)");
					ANSchartLineFill_02.addColorStop(1, "rgba(42, 242, 112, .10)");
			new Chart(ANSchartLine_02, {
				type: 'line',
				responsive: true,
				maintainAspectRatio: false,
				data: {
					labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
					datasets: [{
						borderColor: ANSchartLineStroke_02,
						pointBorderColor: ANSchartLineStroke_02,
						pointBackgroundColor: ANSchartLineStroke_02,
						pointHoverBackgroundColor: ANSchartLineStroke_02,
						pointHoverBorderColor: ANSchartLineStroke_02,
						borderWidth: "2",
						data: [86,154,136,196,139,211,153,290,255,272],
						label: 'Dataset 1',
						backgroundColor: ANSchartLineFill_02,
						fill: true,
						radius: 0
					}
				]},
				options: {
					spanGaps: false,
					maintainAspectRatio: false,
					legend: {
						display: false
					},
					scales: {
						xAxes: [{
							gridLines: {
								color: "rgba(42, 242, 112, 0)",
								zeroLineColor: "rgba(42, 242, 112, 0)",
							},
							ticks: {
								display: false
							}
						}],
						yAxes: [{
							gridLines: {
								color: "rgba(42, 242, 112, 0)",
								zeroLineColor: "rgba(42, 242, 112, 0)",
							},
							ticks: {
								display: false,
								min: 50
							}
						}]
					},
					title: {
						display: false
					}
				}
			});
		}

		/* ANS Chart Line */
		if($("#chart-ans-sm-03").length) {
			let ANSchartLine_03 = document.querySelector("#chart-ans-sm-03").getContext("2d"),
					ANSchartLineStroke_03 = ANSchartLine_03.createLinearGradient(450, 0, 100, 0),
					ANSchartLineLines_03 = ANSchartLine_03.createLinearGradient(0, 0, 0, 300),
					ANSchartLineFill_03 = ANSchartLine_03.createLinearGradient(0, 0, 0, 120);
					ANSchartLineStroke_03.addColorStop(0, 'rgba(255, 255, 255, .98)');
					ANSchartLineStroke_03.addColorStop(.5, 'rgba(249, 126, 167, 1)');
					ANSchartLineStroke_03.addColorStop(1, 'rgba(218, 47, 105, .98)');
					ANSchartLineLines_03.addColorStop(0, 'rgba(255, 255, 255, .1)');
					ANSchartLineLines_03.addColorStop(.5, 'rgba(255, 255, 255, .5)');
					ANSchartLineLines_03.addColorStop(1, 'rgba(255, 255, 255, .1)');
					ANSchartLineFill_03.addColorStop(0, "rgba(42, 242, 112, .17)");
					ANSchartLineFill_03.addColorStop(1, "rgba(42, 242, 112, .10)");
			new Chart(ANSchartLine_03, {
				type: 'line',
				responsive: true,
					maintainAspectRatio: false,
				data: {
					labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
					datasets: [{
						borderColor: ANSchartLineStroke_03,
						pointBorderColor: ANSchartLineStroke_03,
						pointBackgroundColor: ANSchartLineStroke_03,
						pointHoverBackgroundColor: ANSchartLineStroke_03,
						pointHoverBorderColor: ANSchartLineStroke_03,
						borderWidth: "2",
						data: [86,154,136,196,139,211,153,290,255,272],
						label: 'Dataset 1',
						backgroundColor: ANSchartLineFill_03,
						fill: true,
						radius: 0
					}
				]},
				options: {
					spanGaps: false,
					maintainAspectRatio: false,
					legend: {
						display: false
					},
					scales: {
						xAxes: [{
							gridLines: {
								color: "rgba(42, 242, 112, 0)",
								zeroLineColor: "rgba(42, 242, 112, 0)",
							},
							ticks: {
								display: false
							}
						}],
						yAxes: [{
							gridLines: {
								color: "rgba(42, 242, 112, 0)",
								zeroLineColor: "rgba(42, 242, 112, 0)",
							},
							ticks: {
								display: false,
								min: 50
							}
						}]
					},
					title: {
						display: false
					}
				}
			});
		}

		/* ANS Chart Line */
		if($("#chart-ans-sm-04").length) {
			let ANSchartLine_04 = document.querySelector("#chart-ans-sm-04").getContext("2d"),
					ANSchartLineStroke_04 = ANSchartLine_04.createLinearGradient(700, 0, 100, 0),
					ANSchartLineLines_04 = ANSchartLine_04.createLinearGradient(0, 0, 0, 300),
					ANSchartLineFill_04 = ANSchartLine_04.createLinearGradient(0, 0, 0, 120);
					ANSchartLineStroke_04.addColorStop(0, 'rgba(121, 189, 145, .98)');
					ANSchartLineStroke_04.addColorStop(.5, 'rgba(255, 255, 255, 1)');
					ANSchartLineStroke_04.addColorStop(1, 'rgba(121, 189, 145, .98)');
					ANSchartLineLines_04.addColorStop(0, 'rgba(255, 255, 255, .1)');
					ANSchartLineLines_04.addColorStop(.5, 'rgba(255, 255, 255, .5)');
					ANSchartLineLines_04.addColorStop(1, 'rgba(255, 255, 255, .1)');
					ANSchartLineFill_04.addColorStop(0, "rgba(42, 242, 112, .17)");
					ANSchartLineFill_04.addColorStop(1, "rgba(42, 242, 112, .10)");
			new Chart(ANSchartLine_04, {
				type: 'line',
				responsive: true,
					maintainAspectRatio: false,
				data: {
					labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
					datasets: [{
						borderColor: ANSchartLineStroke_04,
						pointBorderColor: ANSchartLineStroke_04,
						pointBackgroundColor: ANSchartLineStroke_04,
						pointHoverBackgroundColor: ANSchartLineStroke_04,
						pointHoverBorderColor: ANSchartLineStroke_04,
						borderWidth: "2",
						data: [86,154,136,196,139,211,153,290,255,272],
						label: 'Dataset 1',
						backgroundColor: ANSchartLineFill_04,
						fill: true,
						radius: 0
					}
				]},
				options: {
					spanGaps: false,
					maintainAspectRatio: false,
					legend: {
						display: false
					},
					scales: {
						xAxes: [{
							gridLines: {
								color: "rgba(42, 242, 112, 0)",
								zeroLineColor: "rgba(42, 242, 112, 0)",
							},
							ticks: {
								display: false
							}
						}],
						yAxes: [{
							gridLines: {
								color: "rgba(42, 242, 112, 0)",
								zeroLineColor: "rgba(42, 242, 112, 0)",
							},
							ticks: {
								display: false,
								min: 50
							}
						}]
					},
					title: {
						display: false
					}
				}
			});
		}

		/* chart-plr-sm-01 */
		if($("#chart-plr-sm-01").length) {
			let chart_plr_sm_01 = document.querySelector("#chart-plr-sm-01").getContext("2d"),
			chart_plr_sm_01_gradient_01 = chart_plr_sm_01.createLinearGradient(400, 0, 100, 0);
			chart_plr_sm_01_gradient_01.addColorStop(0, 'rgba(36, 201, 246, 1)');
			chart_plr_sm_01_gradient_01.addColorStop(1, 'rgba(42, 242, 112, 1)');
			new Chart(chart_plr_sm_01, {
				type: 'doughnut',
				data: {
					labels: ["Devices", "Apps"],
					datasets: [{
							label: "Population (millions)",
							backgroundColor: [chart_plr_sm_01_gradient_01,'#27263b'],
							hoverBackgroundColor: [chart_plr_sm_01_gradient_01,'#27263b'],
							data: [3978,1067],
							borderColor: 'rgba(255,255,255, 0)'
					}]
				},
				options: {
					responsive: true,
					maintainAspectRatio: true,
					cutoutPercentage: 90,
					legend: {
						display: false
					},
					title: {
						display: false
					},
					plugins: {
						labels: false
					},
					elements: {
						center: {
							text: '82%',
							color: '#ffffff',
							fontStyle: 'Open Sans',
							maxFontSize: 30,
							sidePadding: 20
						}
					}
				}
			});
		}

		/* chart-sed */
		if($("#chart-sed").length) {
			let chart_sed = document.querySelector("#chart-sed").getContext("2d"),
				chart_sed_gradientgridLines = chart_sed.createLinearGradient(700, 0, 100, 0),
				chart_sed_gradientFill_03 = chart_sed.createLinearGradient(0, 100, 0, 200),
				chart_sed_gradientFill_02 = chart_sed.createLinearGradient(0, 100, 0, 200),
				chart_sed_gradientFill = chart_sed.createLinearGradient(0, 100, 0, 200);
			chart_sed_gradientgridLines.addColorStop(0, 'rgba(255, 255, 255, .1)');
			chart_sed_gradientgridLines.addColorStop(.5, 'rgba(255, 255, 255, .5)');
			chart_sed_gradientgridLines.addColorStop(1, 'rgba(255, 255, 255, .1)');
			chart_sed_gradientFill_03.addColorStop(0, "rgba(221, 235, 247, 1)");
			chart_sed_gradientFill_03.addColorStop(1, "rgba(49, 118, 179, 1)");
			chart_sed_gradientFill_02.addColorStop(0, "rgba(225, 73, 125, 1)");
			chart_sed_gradientFill_02.addColorStop(1, "rgba(212, 7, 77, 1)");
			chart_sed_gradientFill.addColorStop(0, "rgba(207, 245, 255, 1)");
			chart_sed_gradientFill.addColorStop(1, "rgba(42, 242, 112, 1)");
			new Chart(chart_sed, {
				type: 'bar',
				data: {
					labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
					datasets: [{
						type: 'bar',
						hoverBackgroundColor: chart_sed_gradientFill,
						backgroundColor: chart_sed_gradientFill,
						data: [280,205,195,228,150,175,175,200,215,187,214,210],
						label: 'Chart-1',
						fill: chart_sed_gradientFill
					},
					{
						type: 'bar',
						hoverBackgroundColor: chart_sed_gradientFill_02,
						backgroundColor: chart_sed_gradientFill_02,
						data: [147,250,175,178,150,175,175,200,215,187,214,210],
						label: 'Chart-2',
						fill: chart_sed_gradientFill
					},
					{
						type: 'bar',
						hoverBackgroundColor:  chart_sed_gradientFill_03,
						backgroundColor: chart_sed_gradientFill_03,
						data: [124,190,225,198,150,175,175,210,215,187,214,210],
						label: 'Chart-3',
						fill: chart_sed_gradientFill
					}
					]
				},
				options: {
					spanGaps: false,
					maintainAspectRatio: false,
					tooltips: {
						intersect: false
					},
					legend: {
						display: false
					},
					scales: {
						xAxes: [{
							stacked: true,
							barPercentage: 0.25,
							gridLines: {
								color: "rgba(42, 242, 112, 0)",
							}
						}],
						yAxes: [{
							stacked: true,
							gridLines: {
								color: "rgba(42, 242, 112, 0)",
								zeroLineColor: "rgba(42, 242, 112, 0)",
							},
							ticks: {
								display: false
							}
						}]
					},
					title: {
						display: true
					},
					plugins: {
						labels: false
					}
				}
			});
		}

		/* Apexcharts */
		window.Apex = {
			chart: {
				toolbar: {
					show: false
				}
			},
			colors: ["#FCCF31", "#17ead9", "#f02fc2"],
			stroke: {
				width: 3
			},
			dataLabels: {
				enabled: false
			},
			grid: {
				borderColor: "rgba(42, 242, 112, 1)",
				xaxis: {
					lines: {
							show: false
					}
				},   
				yaxis: {
						lines: {
								show: false
						}
				}
			},
			xaxis: {
				axisTicks: {
					color: "#333"
				},
				axisBorder: {
					color: "#333"
				}
			},
			yaxis: {
				axisTicks: {
					show: true,
					color: "rgba(255, 255, 255, .5)",
					borderType: 'dotted',
				},
				axisBorder: {
					color: "rgba(255, 255, 255, .5)",
					borderType: 'dotted',
				}
			},
			tooltip: {
				theme: "dark",
				x: {
					formatter: function(val) {
						return moment(new Date(val)).format("HH:mm:ss");
					}
				}
			},
		};

		/* chart-apex */
		function generateDayWiseTimeSeries(baseval, count, yrange) {
			var i = 0;
			var series = [];
			while (i < count) {
				var x = baseval;
				var y =
					Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
		
				series.push([x, y]);
				baseval += 86400000;
				i++;
			}
			return series;
		}

		let data_act = generateDayWiseTimeSeries(new Date("22 May 2019").getTime(), 115, {
			min: 30,
			max: 90
		});
		
		var options_act = {
			chart: {
				id: "chart2",
				type: "area",
				height: 346,
				foreColor: "#ccc",
				toolbar: {
					autoSelected: "pan",
					show: false
				}
			},
			colors: ["#2af270"],
			stroke: {
				width: 3
			},
			grid: {
				borderColor: "#2af270",
				clipMarkers: false,
				yaxis: {
					lines: {
						show: false
					}
				}
			},
			dataLabels: {
				enabled: false
			},
			fill: {
				type: 'gradient',
				gradient: {
					shade: 'dark',
					type: 'vertical',
					shadeIntensity: 1,
					gradientToColors: ['#18c3ac', '#18c3ac'],
					opacityFrom: 0.55,
					opacityTo: 0.55,
					stops: [0, 100]
				}
			},
			markers: {
				size: 5,
				colors: ["#01001a"],
				strokeColor: "#2af270",
				strokeWidth: 3
			},
			series: [
				{
					data: data_act
				}
			],
			tooltip: {
				theme: "dark"
			},
			xaxis: {
				type: "datetime"
			},
			yaxis: {
				min: 0,
				tickAmount: 4
			}
		}

		if($("#achart-line").length) {
			let achart = new ApexCharts(
				document.querySelector("#achart-line"),
				options_act
			);
			achart.render();
		}

		/* chart-bar */
		let options_act_bar = {
			chart: {
				id: "chart1",
				height: 130,
				type: "bar",
				foreColor: "rgba(255, 255, 255, 0.7)",
				brush: {
					target: "chart2",
					enabled: true
				},
				selection: {
					enabled: true,
					fill: {
						color: "#6ddbf9",
						opacity: 0.25
					},
					xaxis: {
						min: new Date("22 May 2019 10:00:00").getTime(),
						max: new Date("29 May 2019 10:00:00").getTime()
					}
				}
			},
			colors: ["#18c3ac"],
			fill: {
				type: 'gradient',
				gradient: {
					shade: 'dark',
					type: 'vertical',
					shadeIntensity: 0.5,
					gradientToColors: ['#2af270'],
					inverseColors: true,
					opacityFrom: 1,
					opacityTo: 1,
					stops: [0, 100]
				}
			},
			series: [
				{
					data: data_act
				}
			],
			stroke: {
				width: 0
			},
			grid: {
				borderColor: "#444"
			},
			markers: {
				size: 0
			},
			xaxis: {
				type: "datetime",
				tooltip: {
					enabled: false
				}
			},
			yaxis: {
				tickAmount: 2
			}
		};

		if($("#achart-bar").length) {
			let achart_bar = new ApexCharts(
				document.querySelector("#achart-bar"),
				options_act_bar
			);
			achart_bar.render();
		}
		
		/* apexCharts */
		if($("#chart-radialBar_B").length) {
			new ApexCharts(
				document.querySelector("#chart-radialBar_B"),
				{
					chart: {
							height: 400,
							type: 'radialBar'
					},
					plotOptions: {
							radialBar: {
									track: {
										background: "#27263b"
									},
									hollow: {
											margin: 15,
											size: '30%',
											background: 'transparent',
											image: undefined,
									},
									dataLabels: {
										name: {
											fontSize: '1rem',
										},
										value: {
												fontSize: '.75rem',
												color: 'rgba(255,255,255, .8)'
										},
										total: {
												show: true,
												label: 'Total',
												color: 'rgba(255,255,255, .98)',
												formatter: function (w) {
														return 249
												}
										}
									}
							}
					},
					colors: ['#0084ff', '#0084ff', '#2af270', '#0077B5'],
					fill: {
						type: 'gradient',
						gradient: {
							shade: 'dark',
							type: 'horizontal',
							shadeIntensity: 0.5,
							gradientToColors: ['#2af270', '#da2f69','#0084ff','#2af270'],
							inverseColors: true,
							opacityFrom: 1,
							opacityTo: 1,
							stops: [0, 100]
						}
					},
					series: [76,67,61,90],
					stroke: {
						lineCap: 'round'
					},
					labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
					responsive: [{
							breakpoint: 480,
							options: {
									legend: {
											show: false
									}
							}
					}]
				}
			).render();
		}

		/* apexCharts */
		if($("#chart-rb").length) {
			new ApexCharts(
				document.querySelector("#chart-rb"),
				{
					chart: {
						height: 350,
						type: 'radialBar'
					},
					plotOptions: {
						radialBar: {
							startAngle: -135,
							endAngle: 225,
							hollow: {
								margin: 0,
								size: '85%',
								background: 'transparent',
								image: undefined,
								imageOffsetX: 0,
								imageOffsetY: 0,
								position: 'front',
								dropShadow: {
									enabled: true,
									top: 3,
									left: 0,
									blur: 4,
									opacity: 0.24
								}
							},
							track: {
								background: '#27263b',
								strokeWidth: '47%',
								margin: 0,
								dropShadow: {
									enabled: true,
									top: -3,
									left: 0,
									blur: 4,
									opacity: 0.35
								}
							},

							dataLabels: {
								name: {
									show: false
								}, 
								value: {
									formatter: function(val) {
										return parseInt(val) + '%';
									},
									color: '#fff',
									fontSize: '36px',
									show: true,
								}
							}
						}
					},
					colors: ['#2af270'],
					fill: {
						type: 'gradient',
						gradient: {
							shade: 'dark',
							type: 'horizontal',
							shadeIntensity: 0.5,
							gradientToColors: ['#0084ff'],
							inverseColors: true,
							opacityFrom: 1,
							opacityTo: 1,
							stops: [0, 100]
						}
					},
					series: [75],
					stroke: {
						lineCap: 'round'
					}
				}
			).render();
		}

		/* initChart */
		let chartA_item = document.querySelectorAll('[data-chart="animated"]');
		initChart(chartA_item);

	}

	/* rangeJS */
	if ($('#_rangeJS_min').length > 0) {
		/* range-slider */
		$('input[type="range"]:not(.range-label)').rangeslider({
			polyfill: false,
			// Default CSS classes
			rangeClass: 'rangeslider',
			disabledClass: 'rangeslider--disabled',
			horizontalClass: 'rangeslider--horizontal',
			verticalClass: 'rangeslider--vertical',
			fillClass: 'rangeslider__fill',
			handleClass: 'rangeslider__handle',
		
			onInit : function() {
				this.output = $( '<div class="range-output" />' ).insertAfter( this.$range ).html( this.$element.val() );
			},
			onSlide : function( position, value ) {
				this.output.html( value );
			}
		});

		$('input[type="range"].range-label').rangeslider({
				polyfill: false,
			
				// Default CSS classes
				rangeClass: 'rangeslider',
				disabledClass: 'rangeslider--disabled',
				horizontalClass: 'rangeslider--horizontal',
				fillClass: 'rangeslider__fill',
				handleClass: 'rangeslider__handle',
			
				// Callback function
				onInit: function() {
				var $rangeEl = this.$range;
				
				// get range index labels 
				var rangeLabels = this.$element.attr('data-labels');
				rangeLabels = rangeLabels.split(', ');
				
				// add labels
				$rangeEl.append('<div class="rangeslider__labels"></div>');
				$(rangeLabels).each(function(index, value) {
					$rangeEl.find('.rangeslider__labels').append('<span class="rangeslider__labels__label">' + value + '</span>');
				})
				},
			
				// Callback function
				onSlide: function(position, value) {
				var $handle = this.$range.find('.rangeslider__handle__value');
				$handle.text(this.value);
				},
			
				// Callback function
				onSlideEnd: function(position, value) {}
		});
	}

	/* dateRangePicker */
	if ($('#_DateRangeJS_min').length > 0) {
		let start = moment().subtract(29, 'days'),
				end = moment();

		function cb(start, end) {
			$('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
		}

		$('#reportrange').daterangepicker({
				opens: "left",
				startDate: start,
				endDate: end,
				ranges: {
						'Today': [moment(), moment()],
						'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
						'Last 7 Days': [moment().subtract(6, 'days'), moment()],
						'Last 30 Days': [moment().subtract(29, 'days'), moment()],
						'This Month': [moment().startOf('month'), moment().endOf('month')],
						'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
				}
		}, cb);
		cb(start, end);
	}

	/* Preloader */
	let preloader = document.getElementsByClassName('preloaderWrapper');
	if (preloader.length > 0) {
    document.querySelector('.preloaderWrapper').classList.add('preloaderOut');
	}

	/* Shop-Range-Slider */
	if ($('.shop-js-range-slider').length > 0) {
		$('.shop-js-range-slider').ionRangeSlider({
			skin: "big",
			type: "double",
			grid: true,
			min: 0,
			max: 1000,
			from: 200,
			to: 800,
			prefix: "$"
		});
	}

	/* JQVMAP */
	if ($('#_JQVMAP').length > 0) {	
		var sample_data={"af":"16.63","al":"11.58","dz":"158.97","ao":"85.81","ag":"1.1","ar":"351.02","am":"8.83","au":"1219.72","at":"366.26","az":"52.17","bs":"7.54","bh":"21.73","bd":"105.4","bb":"3.96","by":"52.89","be":"461.33","bz":"1.43","bj":"6.49","bt":"1.4","bo":"19.18","ba":"16.2","bw":"12.5","br":"2023.53","bn":"11.96","bg":"44.84","bf":"8.67","bi":"1.47","kh":"11.36","cm":"21.88","ca":"1563.66","cv":"1.57","cf":"2.11","td":"7.59","cl":"199.18","cn":"5745.13","co":"283.11","km":"0.56","cd":"12.6","cg":"11.88","cr":"35.02","ci":"22.38","hr":"59.92","cy":"22.75","cz":"195.23","dk":"304.56","dj":"1.14","dm":"0.38","do":"50.87","ec":"61.49","eg":"216.83","sv":"21.8","gq":"14.55","er":"2.25","ee":"19.22","et":"30.94","fj":"3.15","fi":"231.98","fr":"2555.44","ga":"12.56","gm":"1.04","ge":"11.23","de":"3305.9","gh":"18.06","gr":"305.01","gd":"0.65","gt":"40.77","gn":"4.34","gw":"0.83","gy":"2.2","ht":"6.5","hn":"15.34","hk":"226.49","hu":"132.28","is":"12.77","in":"1430.02","id":"695.06","ir":"337.9","iq":"84.14","ie":"204.14","il":"201.25","it":"2036.69","jm":"13.74","jp":"5390.9","jo":"27.13","kz":"129.76","ke":"32.42","ki":"0.15","kr":"986.26","undefined":"5.73","kw":"117.32","kg":"4.44","la":"6.34","lv":"23.39","lb":"39.15","ls":"1.8","lr":"0.98","ly":"77.91","lt":"35.73","lu":"52.43","mk":"9.58","mg":"8.33","mw":"5.04","my":"218.95","mv":"1.43","ml":"9.08","mt":"7.8","mr":"3.49","mu":"9.43","mx":"1004.04","md":"5.36","mn":"5.81","me":"3.88","ma":"91.7","mz":"10.21","mm":"35.65","na":"11.45","np":"15.11","nl":"770.31","nz":"138","ni":"6.38","ne":"5.6","ng":"206.66","no":"413.51","om":"53.78","pk":"174.79","pa":"27.2","pg":"8.81","py":"17.17","pe":"153.55","ph":"189.06","pl":"438.88","pt":"223.7","qa":"126.52","ro":"158.39","ru":"1476.91","rw":"5.69","ws":"0.55","st":"0.19","sa":"434.44","sn":"12.66","rs":"38.92","sc":"0.92","sl":"1.9","sg":"217.38","sk":"86.26","si":"46.44","sb":"0.67","za":"354.41","es":"1374.78","lk":"48.24","kn":"0.56","lc":"1","vc":"0.58","sd":"65.93","sr":"3.3","sz":"3.17","se":"444.59","ch":"522.44","sy":"59.63","tw":"426.98","tj":"5.58","tz":"22.43","th":"312.61","tl":"0.62","tg":"3.07","to":"0.3","tt":"21.2","tn":"43.86","tr":"729.05","tm":0,"ug":"17.12","ua":"136.56","ae":"239.65","gb":"2258.57","us":"14624.18","uy":"40.71","uz":"37.72","vu":"0.72","ve":"285.21","vn":"101.99","ye":"30.02","zm":"15.69","zw":"5.57"};
		jQuery('#vmap').vectorMap({
			map: 'world_en',
			backgroundColor: 'transparent',
			color: '#17245a',
			borderColor: '#0b1644',
			hoverOpacity: 0.7,
			selectedColor: '#2af271',
			enableZoom: true,
			showTooltip: true,
			scaleColors: ['#17245a', '#0b1644'],
			values: sample_data,
			normalizeFunction: 'polynomial'
		});
	}
	
}
window.onload = chartJSInit;



