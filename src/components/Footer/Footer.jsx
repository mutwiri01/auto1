import React from "react";
import "./Footer.css";
import wa1 from "../../img/wa1.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";

const Footer = () => {
  return (
    <div className="footer">
      <img src={wa1} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>AUTOPEC </span>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
