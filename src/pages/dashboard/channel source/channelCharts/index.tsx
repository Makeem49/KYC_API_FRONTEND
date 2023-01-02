import React from 'react';
import { useDashboardCtx } from '../../../../context';
import { nFormatter } from '../../../../utils/formatter';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  // Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip
  // Legend
);

export const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 0,
    },
  },
  scales: {
    // x: {
    //   grid: {
    //     drawBorder: false,
    //   },
    // },
    y: {
      grid: {
        display: false,
        drawBorder: false,
        drawOnChartArea: false,
        drawTicks: false,
      },
    },
  },
  barThickness: 20,
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    title: {
      display: false,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};

export default function ChanneSource() {
  const { list } = useDashboardCtx();

  const providers = list.serviceProviderStatus.map((el) => el.name);
  const provData = list.serviceProviderStatus.map((el) => nFormatter(el.value));

  const labels = providers;
  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: provData,
        borderColor: [
          'rgba(249, 195, 98, 1)',
          'rgba(237, 85, 86, 1)',
          'rgba(101, 214, 191, 1)',
          'rgba(119, 56, 221, 1)',
        ],
        backgroundColor: [
          'rgba(249, 195, 98, 1)',
          'rgba(237, 85, 86, 1)',
          'rgba(101, 214, 191, 1)',
          'rgba(119, 56, 221, 1)',
        ],
        borderRadius: Number.MAX_VALUE,
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
