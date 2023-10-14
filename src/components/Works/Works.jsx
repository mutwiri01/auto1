import React, { useContext } from "react";
import "./Works.css";
import merc1 from "../../img/merc1.jpg";
import mit1 from "../../img/mit1.png";
import lgo2 from "../../img/lgo2.jpg";
import bm1 from "../../img/bm1.jpg";
import toy1 from "../../img/toy1.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
          Autopec 
          </span>
          <span>Mutiple Brands</span>
          <spane>
           we understand that the automotive world 
            <br />
            is a tapestry woven with various car brands.
            <br />
            Autopec expertly incorporates
            <br />
            multiple car brands into our automotive care
          </spane>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={merc1} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={mit1} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={lgo2} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={bm1} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={toy1} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
