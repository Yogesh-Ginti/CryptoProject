import { useSelector, useDispatch } from 'react-redux'
import { setTime1D, setTime1W, setTime1M, setTime6M, setTime1Y } from '../redux/sync/timeframeSlice'



function TimeFrames() { // Component to select timeframes for data visualization

  const dispatch = useDispatch()
  
  return (
    <>
      {/* Container for timeframe buttons */}
      <div className='flex gap-5'>
        {/* Buttons to select different timeframes */}
        <button onClick={() => dispatch(setTime1D())} className='bg-slate-100 p-2 focus:outline '>1D</button>
        <button onClick={() => dispatch(setTime1W())} className='bg-slate-100 p-2  focus:outline'>1W</button>
        <button onClick={() => dispatch(setTime1M())} className='bg-slate-100 p-2 focus:outline '>1M</button>
        <button onClick={() => dispatch(setTime6M())} className='bg-slate-100 p-2  focus:outline'>6M</button>
        <button onClick={() => dispatch(setTime1Y())} className='bg-slate-100 p-2  focus:outline'>1Y</button>

      </div>
    </>
  )
}

export default TimeFrames
