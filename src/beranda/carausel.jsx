import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import './index.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from './../assets/image/slide1.jpeg';
import slide_image_2 from './../assets/image/slide2.jpeg';
import slide_image_3 from './../assets/image/slide3.jpeg';

export default function CarauselBeranda() {

    return (
        <div className="items-center justify-center pt-10 pl-20 pr-20">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={false}
                slidesPerView={2.7}
                spaceBetween={50} 
                coverflowEffect={{
                    rotate: 0,
                    stretch: -1,
                    depth: 50,
                    modifier: 2.5,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                initialSlide={1}
                className="swiper_container"
            >
                <SwiperSlide style={{
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.5)",
                borderRadius: "20px"
                 }}>
                    <img src={slide_image_1} alt="slide_image drop-shadow-xl"  />
                </SwiperSlide>
                <SwiperSlide style={{
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.5)",
                borderRadius: "20px"
                 }}>
                    <img src={slide_image_2} alt="slide_image drop-shadow-xl" />
                </SwiperSlide>
                <SwiperSlide style={{
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.5)",
                borderRadius: "20px"
                 }}>
                    <img src={slide_image_3} alt="slide_image drop-shadow-xl"  />
                </SwiperSlide>
                <SwiperSlide style={{
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.5)",
                borderRadius: "20px"
                 }}>
                    <img src={slide_image_1} alt="slide_image drop-shadow-xl"  />
                </SwiperSlide>
                <SwiperSlide style={{
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.5)",
                borderRadius: "20px"
                 }}>
                    <img src={slide_image_2} alt="slide_image drop-shadow-xl" />
                </SwiperSlide>
                <SwiperSlide style={{
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.5)",
                borderRadius: "20px"
                 }}>
                    <img src={slide_image_3} alt="slide_image" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
