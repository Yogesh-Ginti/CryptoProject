import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setChart } from '../redux/sync/chartTypeSlice'

function chartDropdown() {
  const dispatch = useDispatch()
  const { usedChart } = useSelector((state) => state.chartType)

  const handleChartType = (e) => {
    dispatch(setChart(e.target.value))
  }
  

  return (
    <>
      <div>
        <select value={usedChart} onChange={handleChartType}
        className='bg-slate-100 p-2'
        
        >
          <option value="lineChart">Line Chart</option>
          <option value="barChart">Bar chart</option>
        </select>
      </div>
    </>
  )
}

export default chartDropdown
