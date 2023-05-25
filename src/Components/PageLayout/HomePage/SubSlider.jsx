import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";

const SubSlider = () => {
  return (
    <div className="mb-5">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        onChange={true}
        loop={true}
        className="mySwiper h-[400px]"
      >
        <SwiperSlide>
          <div>
            <img src={slider1} alt="" />
            <h1 className="uppercase font-Cinzel font-bold -mt-10 text-center text-2xl text-white">Salads</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={slider2} alt="" />
            <h1 className="uppercase font-Cinzel font-bold -mt-10 text-center text-2xl text-white">Soups</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={slider3} alt="" />
            <h1 className="uppercase font-Cinzel font-bold -mt-10 text-center text-2xl text-white">pizzas</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={slider4} alt="" />
            <h1 className="uppercase font-Cinzel font-bold -mt-10 text-center text-2xl text-white">Desserts</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={slider5} alt="" />
            <h1 className="uppercase font-Cinzel font-bold -mt-10 text-center text-2xl text-white">Salads</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SubSlider;
