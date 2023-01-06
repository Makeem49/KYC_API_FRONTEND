import React from 'react';
import { Chart as ChartJS, LinearScale, PointElement, Tooltip } from 'chart.js';
import { Bubble } from 'react-chartjs-2';

import { useDashboardCtx } from '../../../../context';

ChartJS.register(LinearScale, PointElement, Tooltip);

export default function BubbleChart() {
  const { list } = useDashboardCtx();

  const transactionStatus = {
    successful: list?.transactionStatus?.successful,
    failed: list?.transactionStatus?.failed,
    pending: list?.transactionStatus?.pending,
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return context.dataset.label + ': ' + context.dataset.extra;
          },
        },
      },
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

  const data = {
    datasets: [
      {
        label: 'Success',
        extra: transactionStatus.successful,
        data: [
          {
            x: 190,
            y: 150,
            r: 30,
          },
        ],
        backgroundColor: 'rgba(101, 214, 191, 1)',
      },
      {
        label: 'Pending',
        extra: transactionStatus.pending,
        data: [
          {
            x: 100,
            y: 300,
            r: 30,
          },
        ],
        backgroundColor: 'rgba(249, 195, 98, 1)',
      },

      {
        label: 'Failed',
        extra: transactionStatus.failed,
        data: [
          {
            x: 300,
            y: 400,
            r: 30,
          },
        ],
        backgroundColor: 'rgba(237, 85, 86, 1)',
      },
    ],
  };

  return <Bubble options={options} data={data} />;
}
