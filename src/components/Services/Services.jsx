import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import w3 from "../../img/w3.png";
import d1 from "../../img/d1.png";
import e1 from "../../img/e1.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Experience the difference at</span>
        <span>Autopec</span>
        <spane>
        Your one-stop solution for all your car maintenance and repair needs
          <br />
          Drive with confidence; drive with Autopec!
        </spane>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={w3}
            heading={"Skilled and Certified Technicians"}
            detail={" Trust your vehicle to our certified experts who have the knowledge and experience to handle any car issue"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={d1}
            heading={"State-of-the-Art Equipment"}
            detail={"We use cutting-edge equipment and technology to diagnose and repair vehicles with precision"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={e1}
            heading={"Fast and Efficient Turnaround Times"}
            detail={
              "Count on us for quick and efficient service, minimizing downtime for your vehicle"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
