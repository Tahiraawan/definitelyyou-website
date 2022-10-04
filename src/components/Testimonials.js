import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";

function Testimonials() {
  return (
    <div className="myslider">
      <div className="heading">
      <h1>Testimonial</h1>
      <p>A carousel that we designed for a project that never ended up 
For more work, visit my website.</p>
      </div>
      <Swiper
        className="mySwiper"
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
      >
        
        <SwiperSlide className="swipper-slide">
          <div className="img">
            <img src="/assets/img1.jpg" alt="" />
            <div className="user">
                <span>Tahira Malik</span> 
                <p>TopCamp</p>
              
            </div>
          </div>
          <div className="info">
            <div className="detail">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempora, doloribus adipisci! Omnis enim repudiandae animi quo
                voluptate saepe quaerat consequatur.
              </p>
            </div>
            
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipper-slide">
          <div className="img">
            <img src="/assets/img2.jpg" alt="" />
            <div className="user">
                <span>Seerat Ali</span> 
                <p>Tungsten Software House</p>
              
            </div>
          </div>
          <div className="info">
            <div className="detail">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempora, doloribus adipisci! Omnis enim repudiandae animi quo
                voluptate saepe quaerat consequatur.
              </p>
            </div>
            
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipper-slide">
          <div className="img">
            <img src="/assets/img3.jpg" alt="" />
            <div className="user">
                <span>Mahnoor</span> 
                <p>TopCamp</p>
              
            </div>
          </div>
          <div className="info">
            <div className="detail">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempora, doloribus adipisci! Omnis enim repudiandae animi quo
                voluptate saepe quaerat consequatur.
              </p>
            </div>
            
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipper-slide">
          <div className="img">
            <img src="/assets/img4.jpg" alt="" />
            <div className="user">
                <span>Mujtaba</span> 
                <p>TopCamp</p>
              
            </div>
          </div>
          <div className="info">
            <div className="detail">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempora, doloribus adipisci! Omnis enim repudiandae animi quo
                voluptate saepe quaerat consequatur.
              </p>
            </div>
            
          </div>
        </SwiperSlide>
      </Swiper>
      
    </div>
  );
}

export default Testimonials;
