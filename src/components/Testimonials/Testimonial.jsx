import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";

const Testimonial = () => {
  const clients = [
    {
      
      review:
        "We adhere to the highest standards of quality in every service we provide. From sourcing premium parts to using the latest equipment, our commitment to excellence is unwavering",
    },
    {
      
      review:
        " Our customers are at the heart of everything we do. We prioritize open communication, honesty, and transparency to build trust with our clients. Your satisfaction is our ultimate goal",
    },
    {
      
      review:
        "Our state-of-the-art facility is equipped with the latest diagnostic tools and repair equipment. We maintain a clean, organized workspace to ensure efficiency and safety in all our operations. When you visit Autopec, you can rest assured that your vehicle is in capable hands.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Why Choose Autopec? </span>
        <span>we prioritize </span>
        <span>customer satisfaction</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
