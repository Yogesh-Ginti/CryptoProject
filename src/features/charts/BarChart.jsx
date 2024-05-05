import React from 'react';
import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart() {
  const { chartData } = useSelector((state) => state.chart);
  const {format} = useSelector(state =>state.time)
  const { baseCoin } = useSelector((state) => state.coins);
  const {baseCurrency} = useSelector(state=> state.currency)

  if (!chartData || !chartData.prices) {
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
  const prices = chartData.prices.map((item) => item[1]);

  const data = {
    labels: times,
    datasets: [
      {
        label: baseCoin,
        data: prices,
        backgroundColor: 'rgba(54, 162, 235, 0.5)', 
        borderColor: 'rgba(54, 162, 235, 1)', 
        borderWidth: 1, 
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        padding: {bottom: 5 }
      },
      title: {
        display: true,
        text: baseCurrency.toUpperCase(),
        align: 'start',
        padding: {top: 5 }
      },
    },
    scales: {
      y: {
        beginAtZero: true, 
      },
    },
  };

  return <div className='h-[480px]'>
    <Bar data={data} options={options} />
  </div>;
}

export default BarChart;
