import React from 'react';
import { Bar } from 'react-chartjs-2';
import //  capitalizeWords,
// commaformatter,
// dayDateFormatter,
'../../../../utils';
import { useQuery } from 'react-query';
import { get_dashboard_stats_query } from '../../../../queries/dash_board';
import { useTranslation } from 'react-i18next';
import { useThemeCtx } from '../../../../context/theme_context';
// import { nFormatter } from '../../../../utils/formatter';

const Chart1 = () => {
  const {
    data: list,
    isLoading,
    isError,
  } = useQuery(get_dashboard_stats_query());
  // console.log(list?.performanceOverview, 'here');
  const { t } = useTranslation();
  const { theme } = useThemeCtx();
  if (isLoading) return <p>Loading....</p>;

  if (isError) return <p>Error!!!</p>;

  const OPTIONS = {
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
    responsive: true,

    barThickness: 8,

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
          drawBorder: true,
        },
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

        backgroundColor: '#EC7670',
      },

      {
        label: `${t('Total Deposits')}`,

        data: list!.performanceOverview.map((d): any => d.stats.deposit),

        backgroundColor: '#38CB89',
      },

      {
        label: `${t('Total Transfers')}`,

        data: list!.performanceOverview.map((t): any => t.stats.transfer),

        backgroundColor: '#F9C362',
      },
    ],
  };
  return <Bar options={OPTIONS} data={data} />;
};

export default Chart1;
