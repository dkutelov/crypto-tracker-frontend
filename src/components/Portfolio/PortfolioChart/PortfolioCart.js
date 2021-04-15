import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const PortfolioChart = ({ data }) => {
  console.log(data);
  const coins = data.length > 0 ? Object.keys(data[0]).slice(1) : [];
  const colors = ['#8884d8', '#82ca9d', '#fbe300', '#ff6ec7', '#9bedff'];
  console.log(coins);
  return (
    <BarChart
      width={750}
      height={500}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Legend />
      {coins.map((coin, i) => (
        <Bar
          key={coin}
          dataKey={coin}
          stackId='a'
          fill={colors[i < colors.length ? i : i % colors.length]}
        />
      ))}
    </BarChart>
  );
};

export default PortfolioChart;
