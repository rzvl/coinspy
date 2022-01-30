import { ChartTitles, StyledLineChart } from './styles/LineChart.styled';
import { Line } from 'react-chartjs-2';
import { chart as ChartJs} from 'chart.js/auto';

const LineChart = ({coinHistory, currentPrice, coinName}) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for(let i = 0; i < coinHistory?.data?.history?.length; i++) {
    coinPrice.unshift(coinHistory?.data?.history[i]?.price);
  }

  for(let i = 0; i < coinHistory?.data?.history?.length; i++) {
    coinTimestamp.unshift(new Date(coinHistory?.data?.history[i]?.timestamp * 1000).toLocaleDateString());
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#7c3aed',
        borderColor: '#7c3aed',
        pointBorderColor: 'rgb(0, 0, 0, 0)',
        pointBackgroundColor: 'rgb(0, 0, 0, 0)',
        pointHoverBackgroundColor: '#7c3aed',
        color: '#374151'
      },
    ],
  };

  const options = {
    scales: {
      y: {
            beginAtZero: false,
        },
    },
  };

  return (
    <StyledLineChart>
      <ChartTitles>
        <h3>{coinName} Price Chart</h3>
        <h4>{coinHistory?.data?.change}%</h4>
        <h4>Current {coinName} Price: ${currentPrice}</h4>
      </ChartTitles>
      <Line data={data}/>
    </StyledLineChart>
  );
};

export default LineChart;
