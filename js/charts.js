// chart
var options = {
  series: [44, 55, 41, 17],
  labels: ["HVAC", "Lighting", "Receptacles", "Others"],
  tooltip: { enabled: false },
  chart: {
    width: 300,
    type: "donut",
  },
  dataLabels: {
    enabled: true,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          name: {
            show: true,
          },

          total: {
            show: true,
            label: "Total",
          },
        },
      },
    },
  },

  fill: {
    // type: 'gradient',
    colors: ["#c3d105","#f7c600",  "#109aa6","#ec8a05"]
  },
  stroke: {
    show: false,
    width: 0,
  },
  legend: {
    show: false,
  },

  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: "100%",
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
// one
var options = {
  series: [44, 55],
  tooltip: { enabled: false },
  chart: {
    width: 80,
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    // type: 'gradient',
    colors: ["#2262C6", "#EEEEEE"],
  },
  stroke: {
    show: false,
    width: 0,
  },
  legend: {
    show: false,
  },

  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 80,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();
// two
var options = {
  series: [44, 55],
  tooltip: { enabled: false },
  chart: {
    width: 80,
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    // type: 'gradient',
    colors: ["#F76F2C", "#EEEEEE"],
  },
  stroke: {
    show: false,
    width: 0,
  },
  legend: {
    show: false,
  },

  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 80,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();
// three
var options = {
  series: [44, 55],
  tooltip: { enabled: false },
  chart: {
    width: 80,
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    // type: 'gradient',
    colors: ["#FF001B", "#EEEEEE"],
  },
  stroke: {
    show: false,
    width: 0,
  },
  legend: {
    show: false,
  },

  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 80,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chart3"), options);
chart.render();
// four
var options = {
  series: [44, 55],
  tooltip: { enabled: false },
  chart: {
    width: 80,
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    // type: 'gradient',
    colors: ["#04B042", "#EEEEEE"],
  },
  stroke: {
    show: false,
    width: 0,
  },
  legend: {
    show: false,
  },

  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 80,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chart4"), options);
chart.render();
// second
var options = {
  series: [44, 55, 41, 17],
  labels: ["HVAC", "Lighting", "Receptacles", "Others"],
  tooltip: { enabled: false },
  chart: {
    width: 300,
    type: "donut",
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          name: {
            show: true,
          },

          total: {
            show: true,
            label: "Total",
          },
        },
      },
    },
  },
  dataLabels: {
    enabled: true,
  },
  fill: {
    // type: 'gradient',
    colors: ["#c3d105","#f7c600",  "#109aa6","#ec8a05"]
  },
  stroke: {
    show: false,
    width: 0,
  },
  legend: {
    show: false,
  },

  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: "100%",
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chart5"), options);
chart.render();
// one
var options = {
  series: [44, 55],
  tooltip: { enabled: false },
  chart: {
    width: 80,
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    // type: 'gradient',
    colors: ["#2262C6", "#EEEEEE"],
  },
  stroke: {
    show: false,
    width: 0,
  },
  legend: {
    show: false,
  },

  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 80,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chart6"), options);
chart.render();
// two
var options = {
  series: [44, 55],
  tooltip: { enabled: false },
  chart: {
    width: 80,
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    // type: 'gradient',
    colors: ["#F76F2C", "#EEEEEE"],
  },
  stroke: {
    show: false,
    width: 0,
  },
  legend: {
    show: false,
  },

  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 80,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chart7"), options);
chart.render();
// three
var options = {
  series: [44, 55],
  tooltip: { enabled: false },
  chart: {
    width: 80,
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    // type: 'gradient',
    colors: ["#FF001B", "#EEEEEE"],
  },
  stroke: {
    show: false,
    width: 0,
  },
  legend: {
    show: false,
  },

  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 80,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chart8"), options);
chart.render();
// four
var options = {
  series: [44, 55],
  tooltip: { enabled: false },
  chart: {
    width: 80,
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    // type: 'gradient',
    colors: ["#04B042", "#EEEEEE"],
  },
  stroke: {
    show: false,
    width: 0,
  },
  legend: {
    show: false,
  },

  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 80,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chart9"), options);
chart.render();
// third
var options = {
  series: [44, 55, 41, 17],
  labels: ["HVAC", "Lighting", "Receptacles", "Others"],
  tooltip: { enabled: false },
  chart: {
    width: 300,
    type: "donut",
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          name: {
            show: true,
          },

          total: {
            show: true,
            label: "Total",
          },
        },
      },
    },
  },
  dataLabels: {
    enabled: true,
  },
  fill: {
    // type: 'gradient',
    colors: ["#c3d105","#f7c600",  "#109aa6","#ec8a05"]
  },
  stroke: {
    show: false,
    width: 0,
  },
  legend: {
    show: false,
  },

  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: "100%",
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chart11"), options);
chart.render();
// one
var options = {
  series: [44, 55],
  tooltip: { enabled: false },
  chart: {
    width: 80,
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    // type: 'gradient',
    colors: ["#2262C6", "#EEEEEE"],
  },
  stroke: {
    show: false,
    width: 0,
  },
  legend: {
    show: false,
  },

  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 80,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chart12"), options);
chart.render();
// two
var options = {
  series: [44, 55],
  tooltip: { enabled: false },
  chart: {
    width: 80,
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    // type: 'gradient',
    colors: ["#F76F2C", "#EEEEEE"],
  },
  stroke: {
    show: false,
    width: 0,
  },
  legend: {
    show: false,
  },

  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 80,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chart13"), options);
chart.render();
// three
var options = {
  series: [44, 55],
  tooltip: { enabled: false },
  chart: {
    width: 80,
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    // type: 'gradient',
    colors: ["#FF001B", "#EEEEEE"],
  },
  stroke: {
    show: false,
    width: 0,
  },
  legend: {
    show: false,
  },

  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 80,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chart14"), options);
chart.render();
// four
var options = {
  series: [44, 55],
  tooltip: { enabled: false },
  chart: {
    width: 80,
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    // type: 'gradient',
    colors: ["#04B042", "#EEEEEE"],
  },
  stroke: {
    show: false,
    width: 0,
  },
  legend: {
    show: false,
  },

  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 80,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chart15"), options);
chart.render();
// fourth
var options = {
  series: [44, 55, 41, 17],
  labels: ["HVAC", "Lighting", "Receptacles", "Others"],
  tooltip: { enabled: false },
  chart: {
    width: 300,
    type: "donut",
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          name: {
            show: true,
          },

          total: {
            show: true,
            label: "Total",
          },
        },
      },
    },
  },
  dataLabels: {
    enabled: true,
  },
  fill: {
    // type: 'gradient',
    colors: ["#c3d105","#f7c600",  "#109aa6","#ec8a05"]
  },
  stroke: {
    show: false,
    width: 0,
  },
  legend: {
    show: false,
  },

  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: "100%",
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chart16"), options);
chart.render();
// one
var options = {
  series: [44, 55],
  tooltip: { enabled: false },
  chart: {
    width: 80,
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    // type: 'gradient',
    colors: ["#2262C6", "#EEEEEE"],
  },
  stroke: {
    show: false,
    width: 0,
  },
  legend: {
    show: false,
  },

  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 80,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chart17"), options);
chart.render();
// two
var options = {
  series: [44, 55],
  tooltip: { enabled: false },
  chart: {
    width: 80,
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    // type: 'gradient',
    colors: ["#F76F2C", "#EEEEEE"],
  },
  stroke: {
    show: false,
    width: 0,
  },
  legend: {
    show: false,
  },

  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 80,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chart18"), options);
chart.render();
// three
var options = {
  series: [44, 55],
  tooltip: { enabled: false },
  chart: {
    width: 80,
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    // type: 'gradient',
    colors: ["#FF001B", "#EEEEEE"],
  },
  stroke: {
    show: false,
    width: 0,
  },
  legend: {
    show: false,
  },

  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 80,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chart19"), options);
chart.render();
// four
var options = {
  series: [44, 55],
  tooltip: { enabled: false },
  chart: {
    width: 80,
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    // type: 'gradient',
    colors: ["#04B042", "#EEEEEE"],
  },
  stroke: {
    show: false,
    width: 0,
  },
  legend: {
    show: false,
  },

  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 80,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chart20"), options);
chart.render();
