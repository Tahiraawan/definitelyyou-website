import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";

function Testimonials() {
  return (
    // <div className="testimonial">
    //   <div className="img">
    //     <img src="/assets/img1.jpg" alt="" style={{width: 90,height:90}}/>
    //   </div>
    //   <div className="detail">
    //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda explicabo illo sit.</p>
    //   </div>
    //   <div className="user">
    //     <p><span>Lorem, ipsum.</span>Lorem ipsum</p>
    //   </div>
    // </div>
    <div className="testimonial">
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
          <img src="/asssets/img1.jpg" alt="" />
          <div className="detail">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              facere recusandae unde?
            </p>
          </div>
          <div className="user">
            <p>
              <span>lorem lorem</span>Lorem ipsum dolor sit.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipper-slide">
          <img src="/asssets/img2.jpg" alt="" />
          <div className="detail">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              facere recusandae unde?
            </p>
          </div>
          <div className="user">
            <p>
              <span>lorem lorem</span>Lorem ipsum dolor sit.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipper-slide">
          <img src="/asssets/img3.jpg" alt="" />
          <div className="detail">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              facere recusandae unde?
            </p>
          </div>
          <div className="user">
            <p>
              <span>lorem lorem</span>Lorem ipsum dolor sit.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipper-slide">
          <img src="/asssets/img4.jpg" alt="" />
          <div className="detail">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              facere recusandae unde?
            </p>
          </div>
          <div className="user">
            <p>
              <span>lorem lorem</span>Lorem ipsum dolor sit.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

    </div>
  );
}

export default Testimonials;
