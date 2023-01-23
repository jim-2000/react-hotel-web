import React from 'react'

const Gellary = () => {
  return (
    <>
<section class="overflow-hidden text-gray-700">
  <div class="container grid grid-cols-2 md:grid-cols-3 gap-3">
      {
        [1,2,3,4,5,6,7,8,9,10,11,12].map((item, index) => (
          <>
            <img key={index}
          alt="gallery" 
          width={300}
          height={300}
          layout="responsive"
          class="block object-cover object-center w-full h-96 md:h[280px] rounded-lg transform easy-in-out duration-500 hover:scale-105"
          src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
          />
          </>
        ))
      }
  </div>
</section>
    </>
  )
}

export default Gellary