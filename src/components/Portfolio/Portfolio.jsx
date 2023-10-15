import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import n1 from "../../img/n1.jpg";
import g1 from "../../img/g1.jpg";
import s1 from "../../img/s1.jpg";
import p1 from "../../img/p1.jpg";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>AUTOPEC</span>
      <span>SERVICE GALLERY</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={n1} alt="" />
          <h1>Engine Overhaul:</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={g1} alt="" />
          <h1>Gearbox Repairs:</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={p1} alt="" />
          <h1>Paint Spraying:</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={s1} alt="" />
          <h1>Brake and Suspension Services</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
