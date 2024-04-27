import { useSelector, useDispatch } from 'react-redux'
import { setTime1D, setTime1W, setTime1M, setTime6M, setTime1Y } from '../redux/sync/timeframeSlice'



function TimeFrames() {

  const dispatch = useDispatch()
  
  return (
    <>
      <div className='flex gap-5'>
        <button onClick={() => dispatch(setTime1D())} className='bg-slate-100 p-2'>1D</button>
        <button onClick={() => dispatch(setTime1W())} className='bg-slate-100 p-2'>1W</button>
        <button onClick={() => dispatch(setTime1M())} className='bg-slate-100 p-2'>1M</button>
        <button onClick={() => dispatch(setTime6M())} className='bg-slate-100 p-2'>6M</button>
        <button onClick={() => dispatch(setTime1Y())} className='bg-slate-100 p-2'>1Y</button>

      </div>
    </>
  )
}

export default TimeFrames
