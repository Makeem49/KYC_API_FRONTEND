import { useQuery } from 'react-query';
import { get_dashboard_stats_query } from '../../../../queries/dash_board';
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
      display: false,
      position: 'bottom' as const,
    },
    title: {
      display: false,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};

export default function ChanneSource() {
  const {
    data: list,
    isLoading,
    isError,
  } = useQuery(get_dashboard_stats_query());

  if (isLoading) return <p>Loading....</p>;

  if (isError) return <p>Error!!!</p>;

  const providers = list!.serviceProviderStatus.map((el) => el.name);
  const provData = list!.serviceProviderStatus.map((el) =>
    nFormatter(el.value)
  );

  const colors = {
    MTN: '#ffcc00',
    Airtel: '#f34749',
    'Globacom (GLO)': '#208b1e',
    '9Mobile': '#006847',
    VMobile: '#C9B7A5',
    Safaricom: '#C9B7A5',
  };

  const labels = providers;
  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: provData,
        backgroundColor: providers.map((prov) => colors[prov]),
        borderRadius: Number.MAX_VALUE,
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
