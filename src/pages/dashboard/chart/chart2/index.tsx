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

import { useQuery } from 'react-query';
import { get_dashboard_stats_query } from '../../../../queries/dash_board';
import { useTranslation } from 'react-i18next';
import { useThemeCtx } from '../../../../context/theme_context';

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
  const { theme } = useThemeCtx();
  const { t } = useTranslation();
  const {
    data: list,
    isLoading,
    isError,
  } = useQuery(get_dashboard_stats_query());

  if (isLoading) return <p>Loading....</p>;

  if (isError) return <p>Error!!!</p>;

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
          color: theme === 'dark' ? '#333233' : '#F0F0F0',

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
    labels: list!.performanceOverview.map(
      (d): any => d.dayOfWeekAndDateInMonth
    ),
    datasets: [
      {
        label: `${t('Total Withdrawals')}`,
        data: list!.performanceOverview.map((w): any => w.stats.withdrawals),
        borderColor: ' #EC7670',
        backgroundColor: ' #EC7670',
        tension: 0.8,
        pointRadius: 1,
        borderWidth: 1.5,
      },
      {
        label: `${t('Total Deposits')}`,
        data: list!.performanceOverview.map((d): any => d.stats.deposit),
        borderColor: ' #38CB89',
        backgroundColor: ' #38CB89',
        tension: 0.8,
        pointRadius: 1,
        borderWidth: 1.5,
      },

      {
        label: `${t('Total Transfers')}`,
        data: list!.performanceOverview.map((t): any => t.stats.transfer),
        borderColor: '#F9C362',
        backgroundColor: '#F9C362',
        tension: 0.8,
        pointRadius: 1,
        borderWidth: 1.5,
      },
    ],
  };

  return <Line options={options} data={data} />;
}
