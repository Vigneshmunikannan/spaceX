import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation'; // Import Swiper Navigation styles
import 'swiper/css/pagination'; // Import Swiper Pagination styles
import SwiperCore from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Configure Swiper to use modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Hero() {
  return (
    <Swiper
      // navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>
        <div className="hero hero1">
          <h1>Elevating Environments, <br></br> Enriching Experiences</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero hero2">
          <h1>Crafting Designs <br></br>That Speak Volumes</h1>
          <p></p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero hero3">
          <h1>Designing Tomorrow's <br></br>Workplaces, Today</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero hero4">
          <h1>Where Vision Meets <br></br>Innovation in Every Space</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero hero5">
          <h1>Infusing Creativity <br></br>into Every Corner</h1>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
