import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  //  capitalizeWords,
  // commaformatter,
  dayDateFormatter,
} from '../../../../utils';
import { useQuery } from 'react-query';
import { get_dashboard_stats_query } from '../../../../queries/dash_board';
// import { nFormatter } from '../../../../utils/formatter';

const Chart1 = () => {
  const {
    data: list,
    isLoading,
    isError,
  } = useQuery(get_dashboard_stats_query());

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
          color: '#F0F0F0',

          drawBorder: false,
        },
      },
    },
  };

  const data = {
    labels: list!.performanceOverview.map((d): any =>
      dayDateFormatter(d.date).split(' ')
    ),

    datasets: [
      {
        label: 'Total Withdrawals',

        data: list!.performanceOverview.map((w): any => w.stats.withdrawals),

        backgroundColor: '#EC7670',
      },

      {
        label: 'Total Deposits',

        data: list!.performanceOverview.map((d): any => d.stats.deposit),

        backgroundColor: '#38CB89',
      },

      {
        label: 'Total Transfer',

        data: list!.performanceOverview.map((t): any => t.stats.transfer),

        backgroundColor: '#F9C362',
      },
    ],
  };
  return <Bar options={OPTIONS} data={data} />;
};

export default Chart1;

// import React from 'react';
// import {
//   ResponsiveContainer,
//   ComposedChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   Bar, // Scatter,
//   // LegendProps,
// } from 'recharts';
// import {
//   //  capitalizeWords,
//   // commaformatter,
//   dayDateFormatter,
// } from '../../../../utils';
// import { nFormatter } from '../../../../utils/formatter';

// import { useDashboardCtx } from '../../../../context';

// type TChart1 = {
//   showBar: boolean;
//   showLine: boolean;
// };

// export default function Chart1({ showBar, showLine }: TChart1) {
//   const { list } = useDashboardCtx();
//   // console.log(list);

//   // console.log({ showBar, showLine });
//   const renderLengend = (props: any) => {
//     const { payload } = props;
//     const labels = payload.filter(
//       (elem: any, index: number) =>
//         payload.findIndex((obj: any) => obj.dataKey === elem.dataKey) === index
//     );
//     console.log(labels);
//     return (
//       <div className='flex items-center justify-center space-x-4'>
//         {labels.map((el: any) => {
//           // console.log(el);
//           return (
//             <div className='flex items-center space-x-1'>
//               <span
//                 className={`p-2 rounded-full w-4 h-4`}
//                 style={{ backgroundColor: el.payload.fill }}></span>
//               <span className='capitalize'>{el.dataKey.split('.')[1]}</span>
//             </div>
//           );
//         })}
//       </div>
//     );
//   };
//   return (
//     <div style={{ width: '100%', height: 300 }}>
//       <ResponsiveContainer>
//         <ComposedChart
//           width={500}
//           height={400}
//           data={list.performanceOverview}
//           barGap={0}
//           barSize={7}
//           margin={{
//             top: 20,
//             right: 20,
//             bottom: 20,
//             left: 20,
//           }}>
//           <CartesianGrid stroke='#f5f5f5' vertical={false} />
//           <XAxis
//             dataKey='date'
//             type='category'
//             scale='band'
//             axisLine={false}
//             tickLine={false}
//             tickFormatter={dayDateFormatter}
//           />
//           <YAxis axisLine={false} tickLine={false} tickFormatter={nFormatter} />
//           <Tooltip />
//           <Legend content={renderLengend} />

//           <Bar dataKey='stats.withdrawals' fill='#EC7670' hide={showLine} />
//           <Bar dataKey='stats.deposit' fill='#F9C362' hide={showLine} />
//           <Bar dataKey='stats.transfer' fill='#70A8EC' hide={showLine} />

//           <Line
//             type='monotone'
//             dataKey='stats.withdrawals'
//             stroke='#EC7670'
//             hide={showBar}
//           />
//           <Line
//             type='monotone'
//             dataKey='stats.deposit'
//             stroke='#F9C362'
//             hide={showBar}
//           />
//           <Line
//             type='monotone'
//             dataKey='stats.transfer'
//             stroke='#70A8EC'
//             hide={showBar}
//           />

//           {/* <Scatter dataKey='transfer' fill='#3bc939' />
//           <Scatter dataKey='total_withdrawal' fill='#ff7300' />
//           <Scatter dataKey='total_deposit' fill='#82ca9d' /> */}
//         </ComposedChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }
