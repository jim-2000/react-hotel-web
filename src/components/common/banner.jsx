import React from 'react'

const Banner = ({imgcls,Title,subtitle, css,anyComponent}) => {
 
  return (
    <div className={`   
    ${css ? css : `h-[300px]  
    py-20 lg:h-[400px] xl:h-[500px] 2xl:h-[600px]
    flex flex-col justify-center items-center 

    `} 
    object-cover w-full bg-cover bg-center   
    `} 
    style={{
      backgroundImage: `url(${imgcls})`,
    }}
    >
     <div className={`
     flex flex-col justify-center items-center space-y-1 md:space-y-4  py-10 px-4 md:p-10
     `}>
         <h1 className={`cursor-pointer text-[26px] md:text-2xl text-white text-opacity-80 font-bold text-center`} >{Title}</h1>
        <p className={`cursor-pointer text-text font-semibold text-center text-[16px] md:text-base`}>{subtitle}</p>
    {
      anyComponent ? <>{anyComponent}</> : <></>
    }
     </div>
 
           
    </div>
  )
}

export default Banner;