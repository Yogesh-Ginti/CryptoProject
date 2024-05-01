import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setChart } from '../redux/sync/chartTypeSlice'

function ChartDropdown() { // Component to switch between chart types
  const dispatch = useDispatch() // Get the Redux dispatch function
  const { usedChart } = useSelector((state) => state.chartType) // Get the current chart type from Redux state

  // Handle change in chart type
  const handleChartType = (e) => {
    dispatch(setChart(e.target.value)) // Dispatch action to change chart type
  }

  return (
    <>
      <div>
        {/* Dropdown for selecting chart type */}
        <select 
          value={usedChart} // Current selected chart type
          onChange={handleChartType} // Handler to update chart type on change
          className='bg-slate-100 p-2' // Basic styling for dropdown
        >
          <option value="lineChart">Line Chart</option> // Line chart option
          <option value="barChart">Bar Chart</option> // Bar chart option
        </select>
      </div>
    </>
  )
}

export default ChartDropdown 