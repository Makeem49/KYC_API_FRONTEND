import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const options = {
  plugins: {
    legend: {
      display: true,
      // position: 'bottom',
      labels: {
        usePointStyle: true,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      padding: 500,
      grid: {
        color: '#F0F0F0',
        drawBorder: false,
      },
      ticks: {
        display: false,
      },
    },
    x: {
      beginAtZero: true,
      grid: {
        display: false,
        drawBorder: false,
        drawOnChartArea: false,
        drawTicks: false,
        gridLines: {
          drawBorder: false,
        },
      },
      ticks: {
        display: false,
      },
    },
  },
};

export const data = {
  datasets: [
    {
      label: 'Success',
      data: [
        {
          x: 300,
          y: 400,
          r: 20,
        },
      ],
      backgroundColor: 'rgba(101, 214, 191, 1)',
    },
    {
      label: 'Pending',
      data: [
        {
          x: 400,
          y: 500,
          r: 20,
        },
      ],
      backgroundColor: 'rgba(249, 195, 98, 1)',
    },

    {
      label: 'Failed',
      data: [
        {
          x: 500,
          y: 600,
          r: 20,
        },
      ],
      backgroundColor: 'rgba(237, 85, 86, 1)',
    },
  ],
};

export default function BubbleChart() {
  return <Bubble options={options} data={data} />;
}
