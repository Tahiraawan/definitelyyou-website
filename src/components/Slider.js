import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SearchOutlined  } from "@ant-design/icons";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";

function Slider() {
  return (
    <div className="slider">
      <Swiper
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
        className="mySwiper"
      >
        <SwiperSlide className="swipper-slide">
          <img src="/assets/img1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swipper-slide">
          <img src="/assets/img2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swipper-slide">
          <img src="/assets/img3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swipper-slide">
          <img src="/assets/img4.jpg" alt="" />
        </SwiperSlide>
      </Swiper>

      <div className="search-container">
        
        <div className="search-bar">  <input type="text" placeholder="Search Product" />
          <SearchOutlined className="search-icon"/>
        </div>
      </div>
    </div>
  );
}

export default Slider;
