import { AreaChart, XAxis, YAxis, Tooltip, Area } from 'recharts';

import { getChartsData } from '../../utils/getCoinChartData';
const CoinChart = ({ data }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'inline-block' }}>
        <AreaChart
          width={950}
          height={500}
          data={getChartsData(data.price)}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          style={{ display: 'inline:block' }}
        >
          <defs>
            <linearGradient id='colorAve' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#9427be' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#9427be' stopOpacity={0} />
            </linearGradient>
            <linearGradient id='colorMax' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#27be94' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#27be94' stopOpacity={0} />
            </linearGradient>
            <linearGradient id='colorMin' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#fbe300' stopOpacity={1} />
              <stop offset='95%' stopColor='#fbe300' stopOpacity={0.5} />
            </linearGradient>
          </defs>
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='max'
            stroke='#27be94'
            fillOpacity={0.8}
            fill='url(#colorMax)'
          />
          <Area
            type='monotone'
            dataKey='avg'
            stroke='#9427be'
            fillOpacity={1}
            fill='url(#colorAve)'
          />
          <Area
            type='monotone'
            dataKey='min'
            stroke='#fbe300'
            fillOpacity={1}
            fill='url(#colorMin)'
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default CoinChart;
