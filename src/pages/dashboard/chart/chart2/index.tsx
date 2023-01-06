import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useDashboardCtx } from '../../../../context';
import { dayDateFormatter } from '../../../../utils';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart2() {
  const { list } = useDashboardCtx();

  const options = {
    responsive: true,

    scales: {
      x: {
        grid: {
          display: false,

          drawBorder: false,

          drawOnChartArea: false,

          drawTicks: false,
        },
      },

      y: {
        grid: {
          color: '#F0F0F0',

          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          usePointStyle: true,
          pointStyle: 'rounded',
        },
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
  };

  const data = {
    labels: list.performanceOverview.map((d): any => dayDateFormatter(d.date)),
    datasets: [
      {
        label: 'Total Withdrawals',
        data: list.performanceOverview.map((w): any => w.stats.withdrawals),
        borderColor: '#EC7670',
        backgroundColor: '#EC7670',
      },
      {
        label: 'Total Deposits',
        data: list.performanceOverview.map((d): any => d.stats.deposit),
        borderColor: '#F9C362',
        backgroundColor: '#F9C362',
      },

      {
        label: 'Total Transfers',
        data: list.performanceOverview.map((t): any => t.stats.transfer),
        borderColor: '#70A8EC',
        backgroundColor: '#70A8EC',
      },
    ],
  };

  return <Line options={options} data={data} />;
}
