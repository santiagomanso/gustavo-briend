import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'
import Header from './Header'

const Carousel = () => {
  return (
    <div className='relative'>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className=' bg-white h-[80vh] md:h-[60vh]'
      >
        <SwiperSlide className='flex items-center justify-center bg-red-500'>
          <Header />
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center bg-amber-500'>
          Slide 2
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center bg-blue-500'>
          Slide 3
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center bg-gray-500'>
          Slide 4
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center bg-green-500'>
          Slide 5
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center bg-red-500'>
          Slide 6
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center bg-red-500'>
          Slide 7
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center bg-red-500'>
          Slide 8
        </SwiperSlide>
        <SwiperSlide className='flex items-center justify-center bg-red-500'>
          Slide 9
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel
