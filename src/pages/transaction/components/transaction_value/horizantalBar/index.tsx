import React from 'react';
import { nFormatter } from '../../../../../utils/formatter';
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
import { useQuery } from 'react-query';
import { get_transaction_stats_query } from '../../../../../queries/transaction_stats';
import { t } from 'i18next';
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
    x: {
      ticks: {
        callback: (value: any) => {
          return nFormatter(value);
        },
      },
    },
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
      display: false,
      position: 'bottom' as const,
    },
    title: {
      display: false,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};

export default function BarChart() {
  const {
    data: stats,
    isLoading,
    isError,
  } = useQuery(get_transaction_stats_query());

  if (isLoading) return <p>Loading....</p>;

  if (isError) return <p>Error!!!</p>;
  const labels = [`${t('Transfer')}`, `${t('Deposit')}`, `${t('Withdrawal')}`];
  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: [
          // nFormatter(200000),
          // nFormatter(300000),
          // nFormatter(400000),
          stats?.transactionValues?.transfer,
          stats?.transactionValues?.deposit,
          stats?.transactionValues?.withdrawals,
        ],
        borderColor: ['#F9C362', '#38CB89', '#EC7670'],
        backgroundColor: ['#F9C362', '#38CB89', '#EC7670'],
        borderRadius: Number.MAX_VALUE,
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
