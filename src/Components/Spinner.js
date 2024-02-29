import React from 'react'
import './Spinner.css'
function Spinner() {
  return (
    <div className='w-full h-full flex flex-col flex-grow justify-center items-center gap-8'>
        <div className="spinner"></div>
        <h2 className='text-white text-3xl'>Loading Data</h2>
    </div>
  )
}

export default Spinner