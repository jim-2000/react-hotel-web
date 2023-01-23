import React from 'react'
import GoogleMapReact from 'google-map-react';
import { IoIosPin } from "react-icons/io";

const MapMarker = ({ text }) => {
  <div className='flex flex-col justify-center items-center'>
       {/* <IoIosPin 
       color='#ff0000'
        size='30px'

       /> */}
        <p className='text-xs'>{text}</p>
  </div>
};
const OurMapLocation = () => {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
    };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        center={true}
        >
        <MapMarker text="My Marker" />
        </GoogleMapReact>
    </div>
  )
}

export default OurMapLocation