import React from 'react'
import Banner from '../../components/common/banner'
import GridTwoLayout from '../../components/common/gridTwoLayout'
import InputFiled from '../../components/common/inputFiled'
import ContactInfo from '../../components/contact/contactInfo'

const DawonloadInvoice = () => {
  return (
    <div className='h-full'>
        <div className='container py-5 grid grid-cols-1 md:grid-cols-2 gap-1' >
           <Banner 
           Title={"Download Booking Details"}
           imgcls={"https://images.unsplash.com/photo-1568045244282-e63a8b6b2b3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
           subtitle={"We were asked if we could build an overview of all the free website templates that are featured in the Free CSS website, with the latest templates shown first, here it is"}
           />
           <div className='p-2 w-full border-l-2 flex flex-col'>
                   <div className='pb-2'>
                   <InputFiled 
                        isrequired={true}
                        title={'Booking ID '}
                        type={'text'}
                        placeholder={'cvd**'}
                    />
                   </div>                    
                    <button className='w-full btn btn-secondary text-text font-bold rounded-md border-2 border-main hover:border-none' style={{
                         letterSpacing: '1px',
                    }}>Download</button>
                    <div className='border hidden md:block border-gray  w-full  h-full p-3 shadow mt-5  bg-cover bg-center'
                    style={{
                        backgroundImage: `url(/imgs/room/room6.jpg)`,
                    }}
                    >
                    <h6 className='absolute font-bold text-text'>Google Advirtisement &amp;</h6>
                </div> 
           </div>
        </div>
        {/* // GridTwoLayout  */}
        <ContactInfo />
        <div className='container py-5'>
        <div className='flex flex-col md:flex-row gap-1'>
                <div className='border border-gray  w-full md:w-96 md:h-44 p-3 shadow mt-5 h-24 bg-cover bg-center'
                    style={{
                        backgroundImage: `url(/imgs/room/room6.jpg)`,
                    }}
                    >
                    <h6 className='absolute font-bold text-text'>Google Advirtisement &amp;</h6>
                </div>       
                <div className='border border-gray  w-full md:w-96 md:h-44 p-3 shadow mt-5 h-24 bg-cover bg-center'
                    style={{
                        backgroundImage: `url(/imgs/room/room6.jpg)`,
                    }}
                    >
                    <h6 className='absolute font-bold text-text'>Google Advirtisement &amp;</h6>
                </div>   
                <div className='border border-gray  w-full md:w-96 md:h-44 p-3 shadow mt-5 h-24 bg-cover bg-center'
                    style={{
                        backgroundImage: `url(/imgs/room/room6.jpg)`,
                    }}
                    >
                    <h6 className='absolute font-bold text-text'>Google Advirtisement &amp;</h6>
                </div>   
                         
             </div>
        </div>
    </div>
  )
}

export default DawonloadInvoice