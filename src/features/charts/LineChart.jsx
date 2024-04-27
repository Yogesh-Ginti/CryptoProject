import React from 'react';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js modules
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function LineChart() {
  const { chartData } = useSelector((state) => state.chart);
  const { format } = useSelector((state) => state.time);
  const { baseCoin } = useSelector((state) => state.coins);
  const { baseCurrency } = useSelector((state) => state.currency);

  if (!chartData || !chartData.prices) {
    return <div>Loading...</div>;
  }

  let times;

  // Determine time format
  if (format === 'minHr') {
    times = chartData.prices.map((item) =>
      new Date(item[0]).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: true })
    );
  } else if (format === 'minHrDay') {
    times = chartData.prices.map((item) =>
      new Date(item[0]).toLocaleString('en-GB', { hour: '2-digit', minute: '2-digit', weekday: 'short', hour12: true })
    );
  } else if (format === 'dateMonName') {
    times = chartData.prices.map((item) =>
      new Date(item[0]).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
      })
    );
  } else {
    times = chartData.prices.map((item) =>
      new Date(item[0]).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
    );
  }

  const prices = chartData.prices.map((item) => item[1]);

  const data = {
    labels: times,
    datasets: [
      {
        label: baseCoin,
        data: prices,
        fill: false,
        backgroundColor:'rgb(84, 191, 55)',
        borderColor: 'rgb(84, 191, 55)', // line color
        pointStyle: 'circle', // circular points on the chart
        pointRadius: 0.5, // point radius on the chart
        borderWidth: 2, // line thickness
        tension: 0.1, // smoothness of the line
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          usePointStyle: true, // use point style in legend
          font: {
            size: 15, // larger font size indirectly makes legend point larger
          }
        },
      },
      title: {
        display: true,
        text: baseCurrency.toUpperCase(),
        align: 'start',
        padding: { top: 5, bottom: 0 },
      },
    },
  };

  return <Line data={data} options={options} />;
}

export default LineChart;
