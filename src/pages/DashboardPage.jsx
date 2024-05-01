import React from 'react'
import Chart from '../components/Chart'
import CryptoCurrency from '../components/CryptoCurrency'
import Currency from '../components/Currency'
import Exchanger from '../components/Exchanger'
import Portfolio from '../components/Portfolio'
import TimeFrames from '../components/TimeFrames'
import ChartDropdown from '../components/ChartDropdown'
import SearchBar from '../components/SearchBar'
import Market from '../components/Market'


function DashboardPage() {
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 bg-slate-100 p-4'>

        <div className='col-span-3 '>

          <div className='grid grid-cols-6'>
            <div className='col-span-1'><Currency /></div>
            <div className='col-start-3 col-span-6'><SearchBar /></div>
          </div>

          <div className='bg-white'>
            <div className='grid grid-cols-12 gap-10 p-4'>
              <div className='col-start-1 col-span-6 pl-10'><TimeFrames /></div>
              <div className='col-start-9 col-span-3'><CryptoCurrency /></div>
              <div className='col-start-12 col-span-3'><ChartDropdown /></div>
            </div>

            
            <div className='p-2'>
              <Chart />
            </div>
            

          </div>


          <div className='grid grid-cols-12 gap-6 mt-5'>
            <div className='p-4 col-span-6 bg-white'><Portfolio /></div>
            <div className='col-end-13 bg-white  col-start-7 '><Exchanger /></div>
          </div>

        </div>

        <div className='col-span-1 h-[65em] bg-white'>
          <Market />
        </div>




      </div>
    </>
  )
}

export default DashboardPage