import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/5482647.jpg";
import img2 from "../../assets/27202.jpg";
import img3 from "../../assets/2205.i511.020.S.m009.c13.baby room realistic collage.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div>
       
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-[900px]"
      >
        <SwiperSlide>
          <img src={img1} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[100px] h-[100px]" src={img3} alt="Slide 3" />
         
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
