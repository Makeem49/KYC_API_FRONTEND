import React from 'react';
import { Chart as ChartJS, LinearScale, PointElement, Tooltip } from 'chart.js';
import { Bubble } from 'react-chartjs-2';
import { calculatePercentageRadius } from '../../../../../utils';
import { useQuery } from 'react-query';
import { get_transaction_stats_query } from '../../../../../queries/transaction_stats';
import { t } from 'i18next';
ChartJS.register(LinearScale, PointElement, Tooltip);

export default function BubbleChart() {
  const {
    data: stats,
    isLoading,
    isError,
  } = useQuery(get_transaction_stats_query());

  if (isLoading) return <p>Loading....</p>;

  if (isError) return <p>Error!!!</p>;

  const total =
    (stats?.transactionCounts?.withdrawals ?? 0) +
    (stats?.transactionCounts?.deposit ?? 0) +
    (stats?.transactionCounts?.transfer ?? 0);

  const withdrawalRadius = calculatePercentageRadius(
    stats?.transactionCounts?.withdrawals ?? 0,
    total
  );

  const depositRadius = calculatePercentageRadius(
    stats?.transactionCounts?.deposit ?? 0,
    total
  );
  const transferRadius = calculatePercentageRadius(
    stats?.transactionCounts?.transfer ?? 0,
    total
  );

  const transactionCounts = {
    withdrawal: stats?.transactionCounts?.withdrawals ?? 0,
    deposit: stats?.transactionCounts?.deposit ?? 0,
    transfer: stats?.transactionCounts?.transfer ?? 0,
  };

  const data = {
    datasets: [
      {
        label: `${t('Withdrawal')}`,
        extra: transactionCounts?.withdrawal,
        data: [
          {
            x: 190,
            y: 90,
            r: withdrawalRadius,
          },
        ],
        backgroundColor: '#EC7670',
      },
      {
        label: `${t('Deposit')}`,
        extra: transactionCounts?.deposit,
        data: [
          {
            x: 100,
            y: 200,
            r: depositRadius,
          },
        ],
        backgroundColor: '#38CB89',
      },

      {
        label: `${t('Transfer')}`,
        extra: transactionCounts?.transfer,
        data: [
          {
            x: 310,
            y: 210,
            r: transferRadius,
          },
        ],
        backgroundColor: '#F9C362',
      },
    ],
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
        // labels: {
        //   usePointStyle: true,
        // },

        labels: {
          usePointStyle: true,
          generateLabels: (chart: any) => {
            const datasets = chart.data.datasets;

            return datasets.map((data: any, i: any) => ({
              text: `${data.label} ${data.extra}`,
              fillStyle: data.backgroundColor,
              strokeStyle: data.backgroundColor,
              fontColor: data.backgroundColor,
            }));
          },
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

  return <Bubble options={options} data={data} />;
}
