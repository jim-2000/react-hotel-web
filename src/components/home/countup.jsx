import React from 'react'
import CountUp from 'react-countup';
const CountupClient = () => {
  return (
    <div className='flex  items-center justify-between py-5  flex-wrap'>
            <div className='flex flex-col items-center space-y-4 md:space-y-1 '>
            <CountUp 
            end={28}
            className='text-4xl font-bold text-main'
            duration={5}
            />
            <h4 className='text-sm font-body text-text uppercase'>Today booking</h4>
        </div>
        <div className='flex flex-col items-center space-y-4 md:space-y-1 '>
            <CountUp 
            end={1628}
            className='text-4xl font-bold text-main'
            duration={5}
            />
            <h4 className='text-sm font-body text-text uppercase'>total booking</h4>
        </div>
        <div className='flex flex-col items-center space-y-4 md:space-y-1 '>
            <CountUp 
            end={2412}
            className='text-4xl font-bold text-main'
            duration={5}
            />
            <h4 className='text-sm font-body text-text uppercase'>Booked/year</h4>
        </div>
    </div>
  )
}

export default CountupClient