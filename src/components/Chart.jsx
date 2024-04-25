import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchChart } from '../redux/async/chartSlice';
import LineChart from '../features/charts/LineChart';
import BarChart from '../features/charts/BarChart';

function Chart() {
  const dispatch = useDispatch();

  // Ensure default values and handle potential undefined states
  const { chartData = [], error, status } = useSelector((state) => state.chart);
  const { baseCoin } = useSelector((state) => state.coins);
  const { baseCurrency } = useSelector((state) => state.currency);
  const {fromTime, toTime} = useSelector(state=> state.time)
  const {usedChart} = useSelector((state)=> state.chartType)



  useEffect(() => {
    // Avoid dispatching if baseCoin or baseCurrency is missing
    if (baseCoin && baseCurrency && fromTime && toTime ) {
      const args = { baseCoin, baseCurrency,fromTime, toTime };
      dispatch(fetchChart(args));
    }
  }, [dispatch, baseCoin, baseCurrency, fromTime, toTime]); // Ensure all dependencies are listed

  if (status === 'loading') {
    return <div>Loading...</div>; // Show loading indicator
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Show error message
  }

  // If no issues, render the chart data
  return (
    <div>
      <h2>{baseCoin} Chart</h2>
      {/* Render chart content here, based on chartData */}
      { usedChart==='lineChart'? <LineChart/> : <BarChart/> }
    </div>
  );
}

export default Chart;
