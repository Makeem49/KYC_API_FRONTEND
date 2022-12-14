import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  // Scatter,
  // LegendProps,
} from 'recharts';
import { capitalizeWords } from '../../../../utils';

const data = [
  {
    name: 'Sun 15',
    total_withdrawal: 590,
    total_deposit: 800,
    transfer: 1400,
  },
  {
    name: '16 Mon',
    total_withdrawal: 868,
    total_deposit: 967,
    transfer: 1506,
  },
  {
    name: '17 Tue',
    total_withdrawal: 1397,
    total_deposit: 1098,
    transfer: 989,
  },
  {
    name: '18 Wed',
    total_withdrawal: 1480,
    total_deposit: 1200,
    transfer: 1228,
  },
  {
    name: '19 Thur',
    total_withdrawal: 1520,
    total_deposit: 1108,
    transfer: 1100,
  },
  {
    name: '20 Fri',
    total_withdrawal: 1400,
    total_deposit: 680,
    transfer: 1700,
  },
];

type TChart1 = {
  showBar: boolean;
  showLine: boolean;
};

export default function Chart1({ showBar, showLine }: TChart1) {
  // console.log({ showBar, showLine });
  const renderLengend = (props: any) => {
    const { payload } = props;
    const labels = payload.filter(
      (elem: any, index: number) =>
        payload.findIndex((obj: any) => obj.dataKey === elem.dataKey) === index
    );
    return (
      <div className='flex items-center justify-center space-x-4'>
        {labels.map((el: any) => (
          <div className='flex items-center space-x-1'>
            <span
              className={`p-2 rounded-full w-4 h-4 bg-[${el.color}]`}></span>
            <span>{capitalizeWords(el.dataKey)}</span>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          barGap={0}
          barSize={12}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}>
          <CartesianGrid stroke='#f5f5f5' vertical={false} />
          <XAxis
            dataKey='name'
            type='category'
            // scale='band'
            axisLine={false}
            tickLine={false}
          />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          <Legend content={renderLengend} />

          <Bar dataKey='total_deposit' fill='#7738DD' hide={showLine} />
          <Bar dataKey='total_withdrawal' fill='#ED5556' hide={showLine} />
          <Bar dataKey='transfer' fill='#E1891C' hide={showLine} />

          <Line
            type='monotone'
            dataKey='total_deposit'
            stroke='#7738DD'
            hide={showBar}
          />
          <Line
            type='monotone'
            dataKey='total_withdrawal'
            stroke='#ED5556'
            hide={showBar}
          />
          <Line
            type='monotone'
            dataKey='transfer'
            stroke='#E1891C'
            hide={showBar}
          />

          {/* <Scatter dataKey='transfer' fill='#3bc939' />
          <Scatter dataKey='total_withdrawal' fill='#ff7300' />
          <Scatter dataKey='total_deposit' fill='#82ca9d' /> */}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
