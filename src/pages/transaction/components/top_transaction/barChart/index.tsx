// import { useTransactionCtx } from '../../../../../context';
import { t } from 'i18next';
import React from 'react';
import { Bar } from 'react-chartjs-2';

import { useThemeCtx } from '../../../../../context/theme_context';
import { useGetTransLocation } from '../../../../../queries';

const BarChart = () => {
  const { theme } = useThemeCtx();
  const { data: stats } = useGetTransLocation();

  // Sort the data array in descending order based on total_transactions_value
  // Filter out items with null total_transactions_value
  const filteredData = stats!?.data.filter(
    (item) => item.total_transactions_value !== null
  );

  // Sort the filteredData array in descending order based on total_transactions_value
  const sortedData = filteredData?.sort(
    (a, b) =>
      parseFloat(b.total_transactions_value) -
      parseFloat(a.total_transactions_value)
  );

  // Get the top 5 highest items
  const topFive = sortedData?.slice(0, 5);

  const OPTIONS = {
    plugins: {
      legend: {
        position: 'bottom' as const,
        display: false,
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

    barThickness: 25,

    scales: {
      x: {
        gridLines: {
          skip: function (index: any, gridLines: any) {
            return index % 2 === 0;
          },
        },
        grid: {
          display: false,

          drawBorder: false,

          drawOnChartArea: false,

          drawTicks: false,
        },
        ticks: {
          display: false,
        },
      },

      y: {
        grid: {
          color: theme === 'dark' ? '#333233' : '#F0F0F0',

          drawBorder: false,
        },
      },
    },
  };
  const data = {
    labels: topFive?.map((el): string => t(el.name)),

    datasets: [
      {
        label: '',
        backgroundColor: ['#38CB89', '#38CB89', '#38CB89', '#38CB89'],
        borderWidth: 1,
        hoverBackgroundColor: ['#38CB89', '#38CB89', '#38CB89', '#38CB89'],
        hoverBorderColor: ['#38CB89', '#38CB89', '#38CB89', '#38CB89'],
        data: topFive?.map(
          (el): string | number => el.total_transactions_value
        ),
        borderRadius: Number.MAX_VALUE,
      },
    ],
  };
  return (
    <div className=" w-[100%]">
      <Bar options={OPTIONS} data={data} />
    </div>
  );
};

export default BarChart;
