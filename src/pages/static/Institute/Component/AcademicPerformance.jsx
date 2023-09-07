import React from 'react';
import ReactApexChart from 'react-apexcharts';

const AcademicPerformance = () => {
  const seriesData = [
    {
      name: 'TEAM C',
      type: 'line',
      data: [3, 26, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
    },
  ];

  const options = {
    title: {
        text: 'Academic Performance',
        align: 'left',
        offsetX: 14
      },
    chart: {
      height: 350,
      type: 'line',
      stacked: false,
    },
    stroke: {
      width: [2],
      curve: 'smooth',
    },
    plotOptions: {
      bar: {},
    },
    fill: {
      opacity: [1],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: 'vertical',
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    labels: [
      '01/01/2003',
      '02/01/2003',
      '03/01/2003',
      '04/01/2003',
      '05/01/2003',
      '06/01/2003',
      '07/01/2003',
      '08/01/2003',
      '09/01/2003',
      '10/01/2003',
      '11/01/2003',
    ],
    markers: {
      size: 0,
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      
      min: 0,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== 'undefined') {
            return y.toFixed(0) + ' points';
          }
          return y;
        },
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={seriesData} type="line" height={190} />
    </div>
  );
};

export default AcademicPerformance;
