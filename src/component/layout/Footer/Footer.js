import React from "react";
import playStore from "../../Images/playstore.png";
import appStore from "../../Images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2023 &copy; Pranit_Dalavi</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/pranit_dalavi27">Instagram</a>
        <a href="http://youtube.com/pranitdalavi27">Youtube</a>
        <a href="http://instagram.com/pranit_dalavi27">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;