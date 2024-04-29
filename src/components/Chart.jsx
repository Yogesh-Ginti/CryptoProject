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
  }, [dispatch, baseCoin, baseCurrency, fromTime, toTime]);

  if (status === 'loading') {
    return <div className='flex items-center justify-center text-xl h-[30rem]' >Loading...</div>;
  }

  if (error) {
    return <div className='flex items-center justify-center text-xl h-[30rem]'>Error: {error}</div>; 
  }

  return (
    <>
      <div className='h-[30rem]'>
      {/* Render chart content here, based on chartData */}
      { usedChart==='lineChart'? <LineChart/> : <BarChart/> }
    </div>
    </>
  );
}

export default Chart;
