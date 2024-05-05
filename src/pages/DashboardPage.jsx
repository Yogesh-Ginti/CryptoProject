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
    <div className='sm:p-4'>
      <div className='flex flex-col sm:grid sm:grid-cols-4  gap-4 bg-slate-100 m-2'>
        <section className='sm:col-span-3 p-4  '>
          <div className='grid grid-cols-12'>
            <div className='col-start-1 col-end-4'><Currency /></div>
            <div className='col-start-5 col-end-13'><SearchBar /></div>
          </div>

          <div className='grid grid-cols-12 bg-white p-4 gap-3'>
            <div className='col-start-2 col-end-12 sm:col-start-2 sm:col-end-8'><TimeFrames /></div>
            <div className='col-start-4 col-end-9 sm:col-start-8 sm:col-end-10 '><CryptoCurrency /></div>
            <div className='col-start-5 col-end-7 sm:col-start-11 sm:col-end-12 '><ChartDropdown /></div>
            <div className='col-span-12 p-2'>
              <Chart />
            </div>
          </div>

          <div className='flex flex-col sm:grid grid-cols-2 gap-4 mt-4'>
            <div className='bg-white p-2'><Portfolio /></div>
            <div className='bg-white'><Exchanger /></div>
          </div>

        </section>

        <section className='sm:col-start-4 sm:h-[64rem] h-[40rem] bg-white m-3'>
          <Market />
        </section>


      </div>
    </div>
  )
}

export default DashboardPage
