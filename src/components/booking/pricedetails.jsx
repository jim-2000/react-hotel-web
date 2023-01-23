import React from 'react'

const Pricedetails = () => {
  return (
    <div>
                    <div className='py-2  space-y-1'>
                        <div className='flex justify-between items-start'>
                            <div className='flex flex-col'>
                                <p>Price</p>
                                <p className='m-0 p-0 text-[10px]'>1 Night <span className='text-main'>(tax incl.)</span></p>
                            </div>
                            <p>BDT 5,493.42 *</p>                             
                        </div>
                        <hr className='divide-x-2 mt-1'/>     
                    </div> 
                    <div className='py-2  space-y-1'>
                        <div className='flex justify-between items-start'>
                            <div className='flex flex-col'>
                                <p>Property currency</p>
                                <p className='m-0 p-0 text-[10px]'>in US$</p>
                                <p className='m-0 p-0 text-[10px]'>(for all guests)</p>
                            </div>
                            <p>US$54</p>                             
                        </div>
                        <hr className='divide-x-2 mt-1'/>     
                    </div> 
                    <div className='py-2  space-y-1'>
                        <div className=''>                           
                                <p>Excluded charges</p>                                 
                                <div className='flex justify-between items-center'>
                                    <p className='m-0 p-0 text-[10px]'>Tax</p>
                                    <p className='m-0 p-0 text-[10px]'>BDT 906</p>
                                </div>    
                                <div className='flex justify-between items-center'>
                                    <p className='m-0 p-0 text-[10px]'>City tax</p>
                                    <p className='m-0 p-0 text-[10px]'>BDT 549</p>
                                </div>                                       
                        </div>
                        <hr className='divide-x-2 mt-1'/>     
                    </div> 
    </div>
  )
}

export default Pricedetails