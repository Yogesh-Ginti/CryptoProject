import React from 'react'
import logo from '/images/logo.png'

function Header() {
  return (
    <>
      <div className='flex items-center justify-start shadow-lg shadow-gray-300' >
        <img src={logo} alt="logo" height='80px' width='90px' />
        <span className='text-rose-500 text-2xl font-bold m-[-5px]'>Crypto<span className='text-yellow-500'>V</span>erse</span>
      </div>
    </>
  )
}

export default Header
