import React from 'react'
import logo from '/images/logo.png' // Path to the logo image file

function Header() { // Component for the header section
  return (
    <>
      {/* Header section with a shadowed style */}
      <div className='flex items-center justify-start shadow-lg shadow-gray-300'>
        {/* Display logo image in the header */}
        <img src={logo} alt="logo" height='80px' width='90px' /> 
        {/* Header title with unique styling */}
        <span className='text-rose-500 text-2xl font-bold m-[-5px]'>
          Crypto<span className='text-yellow-500'>V</span>erse
        </span> 
      </div>
    </>
  )
}

export default Header
