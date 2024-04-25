import { useSelector, useDispatch } from 'react-redux'
import { setTime1D, setTime1W, setTime1M, setTime6M, setTime1Y } from '../redux/sync/timeframeSlice'



function TimeFrames() {
  
  const dispatch = useDispatch()
  //Remove it
  const {toTime, fromTime} = useSelector((state)=> state.time)
  console.log(toTime,fromTime)
  

  return (
    <div className='flex gap-5'>
      <button onClick={()=>dispatch(setTime1D())}>1D</button>
      <button onClick={()=>dispatch(setTime1W())} >1W</button>
      <button onClick={()=>dispatch(setTime1M())} >1M</button>
      <button onClick={()=>dispatch(setTime6M())}>6M</button>
      <button onClick={()=>dispatch(setTime1Y())} >1Y</button>

    </div>
  )
}

export default TimeFrames
