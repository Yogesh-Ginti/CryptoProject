import React from 'react';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the Chart.js modules
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function LineChart() {
  const { chartData } = useSelector((state) => state.chart);
  const {format} = useSelector(state =>state.time)
  const { baseCoin } = useSelector((state) => state.coins);
  const {baseCurrency} = useSelector(state=> state.currency)

  if (!chartData || !chartData.prices) {
    // Return a loading state or placeholder if 'chartData.prices' is undefined
    return <div>Loading...</div>;
  }

  let times;

  if(format ==='minHr'){
    times = chartData.prices.map((item) => new Date(item[0]).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: true }));
    
  }else if(format ==='minHrDay'){
    times = chartData.prices.map((item) => new Date(item[0]).toLocaleString('en-GB', { hour: '2-digit', minute: '2-digit', weekday: 'short', hour12: true  }));
    
  }else if(format==='dateMonName'){
    times = chartData.prices.map((item) => new Date(item[0]).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
    }));
    
  }else{
    times = chartData.prices.map((item) => new Date(item[0]).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }));
  }

  const prices = chartData.prices.map((item) => item[1]); // Should work now

  const data = {
    labels: times,
    datasets: [
      {
        label: baseCoin,
        data: prices,
        fill: false,
        borderColor: 'rgb(84, 191, 55)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        align :'end',
      },
      title: {
        display: true,
        text: baseCurrency.toUpperCase(),
        align: 'start',
        padding: { top: 5, bottom:0}
      },
    },
  };

  return <Line data={data} options={options} />;
}

export default LineChart;
