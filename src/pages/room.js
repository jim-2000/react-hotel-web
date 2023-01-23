import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FotterPart from '../components/common/footer'
import HeroSection from '../components/common/Hero'
import Pageloader from '../components/common/loader'
import RoomCard from '../components/room/roomCard'
import RoomrowCard from '../components/room/roomrowCard'
import data from '../data.json'
import { getAllRoom } from '../redux/slice/roomSlice'
const Room = () => {
  const dispatch = useDispatch();
  const {Rloading,rooms} = useSelector(state => ({...state.room}));
  const [roomData, setroomData] = useState(data.roomData)
  
  useEffect(() => {
    dispatch(getAllRoom());  
  },[])
    
 
  if (Rloading || !rooms) {
    return  <Pageloader isloading={Rloading} />
  }
  return (
    <div>
        <HeroSection 
        Title={"OUR ROOM & RATE"}        
        imgcls={'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'}  
        />
        <div className='container py-10 grid grid-cols-1 gap-2 md:grid-cols-1 '>
            {
              rooms &&  rooms.map((item,index)=>(
                  
                  <RoomrowCard key={index} roomData={item} />
                 
                ))
            }
        </div>
        <div className='container py-5 flex items-center justify-center'>
              
            {
              rooms.result?.length > 6 && <button className='bnt btn-primary rounded-full text-white px-4 py-2'>Load More</button>
            }
            
        </div>
    </div>
  )
}

export default Room