import React from 'react'
import { IoIosPeople } from 'react-icons/io'
import { Icon } from '@iconify/react';
const Roomservices = ({item}) => {
 
  return (
    <>
        <div className='flex flex-wrap items-center justify-start p-2  border-dotted border-2 border-text'>
            <div className='px-2'>
                {/* <IoIosPeople 
                size={26}
                className='text-gray '
                />                      */}
                <Icon icon={item.icon} color={'teal'} size={30} />           
            </div>
            <p className='text-sm text-text font-semibold' >{item.name}</p>
        </div>
    </>
  )
}

export default Roomservices