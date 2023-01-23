import Image from 'next/image'
import React from 'react'

const BgImage = () => {
  return (
    <div className='fixed w-full h-96 -z-10'>
        <Image 
        src={'/imgs/bg-main.jpg'}
        layout="fill"
        objectFit='cover'
        />
        <div className='pt-10 flex'>
            <h1 className='title text-white' >{"Lorem ipsum"}</h1>
            <p className='subtitle text-white'>{"something is cool"}</p>
        </div>
    </div>
  )
}

export default BgImage