import React from 'react';
import ReactApexChart from 'react-apexcharts';

const TraitsOfCharacter = () => {
  const seriesData = [
    {
      name: 'Series 1',
      data: [80, 50, 30, 40, 100, 20],
    },
    {
      name: 'Series 2',
      data: [20, 30, 40, 80, 20, 80],
    },
    {
      name: 'Series 3',
      data: [44, 76, 78, 13, 43, 10],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: 'radar',
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        // top: ,
      },
    },
    title: {
      text: 'Traits of Character',
    },
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.1,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: ['Conscientiousness', 'Neuroticism', 'Extraversion', 'Agreeableness', 'Openness', 'Stability'],
    },
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={seriesData} type="radar" height={300} />
    </div>
  );
};

export default TraitsOfCharacter;
