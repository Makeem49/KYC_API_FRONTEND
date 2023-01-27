import React from 'react';
import {
  HighmapsProvider,
  HighchartsMapChart,
  MapSeries,
  ColorAxis,
  Legend,
  Tooltip,
} from 'react-jsx-highmaps';
import nigeriamap from '@highcharts/map-collection/countries/ng/ng-all.geo.json';
import HighMaps from 'highcharts/highmaps';

const HeatMap = () => {
  const map_data: [string, number][] = [
    ['ng-ri', 10000],
    ['ng-kt', 11000],
    ['ng-so', 12000],
    ['ng-za', 13000],
    ['ng-yo', 14000],
    ['ng-ke', 15000],
    ['ng-ad', 16000],
    ['ng-bo', 57000],
    ['ng-ak', 180000],
    ['ng-ab', 190000],
    ['ng-im', 200000],
    ['ng-by', 210000],
    ['ng-be', 220000],
    ['ng-cr', 230000],
    ['ng-ta', 240000],
    ['ng-kw', 250000],
    ['ng-la', 260000],
    ['ng-ni', 270000],
    ['ng-fc', 280000],
    ['ng-og', 290000],
    ['ng-on', 300000],
    ['ng-ek', 310000],
    ['ng-os', 320000],
    ['ng-oy', 330000],
    ['ng-an', 340000],
    ['ng-ba', 350000],
    ['ng-go', 360000],
    ['ng-de', 370000],
    ['ng-ed', 380000],
    ['ng-en', 390000],
    ['ng-eb', 400000],
    ['ng-kd', 410000],
    ['ng-ko', 420000],
    ['ng-pl', 430000],
    ['ng-na', 440000],
    ['ng-ji', 450000],
    ['ng-kn', 460000],
  ];
  return (
    <HighmapsProvider Highcharts={HighMaps}>
      <HighchartsMapChart
        map={nigeriamap}
        chart={{ backgroundColor: 'transparent', height: '500px' }}>
        <MapSeries
          name='States'
          states={{
            // hover: {

            // },
            inactive: {},
          }}
          data={map_data}
          dataLabels={{
            enabled: true,
            color: '#FFFFFF',
            style: { fontSize: '14px' },
            format: '{point.name}',
          }}
        />
        <ColorAxis
          minColor='#8390A3'
          maxColor='#1D925D'
          range={150000}
          visible={false}
          gridLineWidth={1}
          dataClassColor='category'
          dataClasses={[
            { color: '#801610', from: 200000 },
            { color: '#E1261C', from: 100000, to: 199999 },
            { color: '#EC7670', from: 50000, to: 99999 },
            { color: '#F2A29D', from: 10000, to: 49999 },
            { color: '#FCE9E8', from: 9999, to: 0 },
          ]}
        />
        <Legend layout='horizontal' verticalAlign='bottom' align='right' />
        <Tooltip />
      </HighchartsMapChart>
    </HighmapsProvider>
  );
};

export default HeatMap;
