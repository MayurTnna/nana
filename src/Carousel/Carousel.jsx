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

import n1 from "../assets/images/n1.jpg";
import n2 from "../assets/images/n2.jpg";

import n3 from "../assets/images/n3.jpg";
import n4 from "../assets/images/n4.jpg";
import n5 from "../assets/images/n5.jpg";
import n6 from "../assets/images/n6.jpg";
import n7 from "../assets/images/n7.jpg";

const Carousel = () => {
  return (
    <>
      {" "}
      <h1 className="carousel-title  ">
        "Ninu, you mean the world to me. Just like your name, which signifies
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
                <img src={n1} />
              </div>
              <div className="card-text">
                <h2>N</h2>
                <p>Nurturing</p>
                <div>
                  <div>
                    <span>N</span>
                    <span>oble</span>
                  </div>
                  <div>
                    <span>21st</span>
                    <span>Dec</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card mx-auto" id="spiderman">
              <div className="card-image">
                <img src={n4} />
              </div>
              <div className="card-text">
                <h2>A</h2>

                <div>
                  <div>
                    <span>Ambitious</span>
                    <span>Amazing</span>
                  </div>
                  <div>
                    <span>12</span>
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
                  <span>N</span>
                  <span>uetral</span>
                </div>
                <div>
                  <span>2004</span>
                  <span>Nice</span>
                </div>
              </div>
              <div className="card-image">
                <p>&copy; Nandini Odedra</p>
                <img src={n3} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card mx-auto" id="spiderman">
              <div className="card-image">
                <img src={n2} />
              </div>
              <div className="card-text">
                <h2>D</h2>

                <div>
                  <div>
                    <span>Devoted</span>
                    <span>Dynamic</span>
                  </div>
                  <div>
                    <span>D</span>
                    <span className="pr-3">ecent</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card mx-auto" id="spiderman">
              <div className="card-image">
                <img src={n5} />
              </div>
              <div className="card-text">
                <h2>I</h2>

                <div>
                  <div>
                    <span>Intelliegent</span>
                    <span>Impacting</span>
                  </div>
                  <div>
                    <span>I</span>
                    <span className="pr-3">dyllic</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card mx-auto" id="spiderman">
              <div className="card-image">
                <img src={n6} />
              </div>
              <div className="card-text">
                <h2>N</h2>

                <div>
                  <div>
                    <span>Nicest</span>
                    <span>Natural</span>
                  </div>
                  <div>
                    <span>N</span>
                    <span className="pr-3">ourishing</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card mx-auto" id="spiderman">
              <div className="card-image">
                <img src={n7} />
              </div>
              <div className="card-text">
                <h2>I</h2>

                <div>
                  <div>
                    <span>Inspirational</span>
                    <span>Inventive</span>
                  </div>
                  <div>
                    <span>I</span>
                    <span className="pr-3">deal</span>
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
