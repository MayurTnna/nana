import React from "react";
import "./Carousel.scss";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCards,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import j1 from "../assets/images/j1.jpg";
import j2 from "../assets/images/j2.jpg";

import j3 from "../assets/images/j3.jpg";
import j4 from "../assets/images/j4.jpg";

const Carousel = () => {
  return (
    <>
      {" "}
      <h1 className="carousel-title  ">
        "Jiyu, you mean the world to me. Just like your name, which signifies
        'life' , 'existence' and 'everything,' So, spill the beans, what's the
        secret behind your amazingness?"
      </h1>
      <div className="swiper-div">
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            EffectCards,
          ]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          // navigation
          autoplay={true}
          // loop={true}
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          effect={"cards"}
        >
          <SwiperSlide>
            <div className="card mx-auto" id="hulk">
              <div className="card-image">
                <img src={j2} />
              </div>
              <div className="card-text">
                <h2>J</h2>
                <p>JOYFUL</p>
                <div>
                  <div>
                    <span>J</span>
                    <span>olly</span>
                  </div>
                  <div>
                    <span>23</span>
                    <span>Sept</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card mx-auto" id="spiderman">
              <div className="card-image">
                <img src={j1} />
              </div>
              <div className="card-text">
                <h2>I</h2>

                <div>
                  <div>
                    <span>Inspiring</span>
                    <span>Innocent</span>
                  </div>
                  <div>
                    <span>09</span>
                    <span>th</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card mx-auto" id="deadpool">
              <div className="card-text">
                <div>
                  <span>Y</span>
                  <span>are</span>
                </div>
                <div>
                  <span>2004</span>
                  <span>Yugen</span>
                </div>
              </div>
              <div className="card-image">
                <p>&copy; Jiya Radia</p>
                <img src={j3} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card mx-auto" id="spiderman">
              <div className="card-image">
                <img src={j4} />
              </div>
              <div className="card-text">
                <h2>A</h2>

                <div>
                  <div>
                    <span>Ambitious</span>
                    <span>Adorable</span>
                  </div>
                  <div>
                    <span>A</span>
                    <span className="pr-3">uthentic</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
