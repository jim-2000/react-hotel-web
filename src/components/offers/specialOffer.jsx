import React from 'react'

const SpecialOffer = ({imgcls,Title,subtitle, css,anyComponent,isright}) => {
  isright = isright || false
  return (
    <div className={`   
    ${css ? css : `h-[300px]  
    py-20 lg:h-[400px] xl:h-[500px] 2xl:h-[600px]
    flex flex-col justify-center items-center 
    `} 
    object-cover w-full bg-cover bg-center 
    cursor-pointer hover:scale-95 transition duration-500 ease-in-out   
    overflow-hidden
     
    `}
    style={{
      backgroundImage: `url(${imgcls})`,
    }}
    >
     <div className={`
     flex flex-col  justify-start space-y-2  py-10 px-4 md:p-10
      ${isright ? 'items-end' : 'items-start'}
     `}>
         <h1 className={`text-[26px] md:text-2xl text-white text-center`} >{Title}</h1>
        <p className={`text-white text-center text-[14px] md:text-base`}>{subtitle}</p>
        <ul class="list-disc text-white text-start text-[10px] md:text-base items-end  ">
            <li>Free Wifi</li>
            <li>Private Pool</li>
            <li>Gymnasiam</li>
           
        </ul>
    {
      anyComponent ? <>{anyComponent}</> : <></>
    }
     </div>
 
           
    </div>
  )
}

 

export default SpecialOffer