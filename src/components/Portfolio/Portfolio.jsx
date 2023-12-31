import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
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
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        grabCursor={true}
        pagination={{ clickable: true }}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={n1} alt="" />
          <h1>Engine Overhaul:</h1>
          <h2>
            Our certified technicians specialize in engine overhauls, breathing new life into your vehicle's heart.
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={g1} alt="" />
          <h1>Gearbox Repairs:</h1>
          <h2>
            Our gearbox repair experts are equipped to diagnose and fix any transmission issues, whether it's a manual or automatic gearbox.
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={p1} alt="" />
          <h1>Paint Spraying:</h1>
          <h2>Restore your vehicle's appearance with our top-notch paint spraying services.</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={s1} alt="" />
          <h1>Brake and Suspension Services</h1>
          <h2>From brake pad replacements to suspension system upgrades, we've got you covered.</h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
