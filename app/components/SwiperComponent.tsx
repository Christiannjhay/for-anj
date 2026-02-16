import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import '@/app/components/SwiperStyles.css'


// import required modules
import { EffectCards } from 'swiper/modules';

export default function SwiperComponent() {
  return (
    <>
      <h1 className="text-white text-center mb-4 text-xl font-bold">TOP 10 FACTS I KNOW ABOUT YOU 💖</h1>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper select-none"
      >
        <SwiperSlide>You Kain faster than me</SwiperSlide>
        <SwiperSlide>You love flowers</SwiperSlide>
        <SwiperSlide>You want lambing always</SwiperSlide>
        <SwiperSlide>You're stronger than me</SwiperSlide>
        <SwiperSlide>You hate it when i'm gahig ulo</SwiperSlide>
        <SwiperSlide>You hate it pag mabalusan tika ug sungog</SwiperSlide>
        <SwiperSlide>You always like to dress up when you go out</SwiperSlide>
        <SwiperSlide>You pretend to not hear what I said when you don't have idea about it</SwiperSlide>
        <SwiperSlide>You go quiet when you're mad</SwiperSlide>
        <SwiperSlide>You love taking photos</SwiperSlide>
      </Swiper>
    </>
  );
}
