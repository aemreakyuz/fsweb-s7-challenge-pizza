import React from "react";
import "./Footer.css";
import locationIcon from "../assets/adv-aseets/icons/icon-1.png";
import mailIcon from "../assets/adv-aseets/icons/icon-2.png";
import phoneIcon from "../assets/adv-aseets/icons/icon-3.png";
import Insta1 from "../assets/adv-aseets/insta/li-0.png";
import Insta2 from "../assets/adv-aseets/insta/li-1.png";
import Insta3 from "../assets/adv-aseets/insta/li-2.png";
import Insta4 from "../assets/adv-aseets/insta/li-3.png";
import Insta5 from "../assets/adv-aseets/insta/li-4.png";
import Insta6 from "../assets/adv-aseets/insta/li-5.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="left-container">
            <h3>Teknolojik Yemekler</h3>
            <br></br>
            <div>
              <img src={locationIcon} alt="location" />
              <p> 341 Londonderry Road, İstanbul Türkiye</p>
            </div>
            <div>
              <img src={mailIcon} alt="mail" />
              <p> aciktim@teknolojikyemekler.com</p>
            </div>
            <div>
              <img src={phoneIcon} alt="phone" />
              <p> +90 216 123 45 67</p>
            </div>
          </div>
          <div className="middle-container">
            <h4>Hot Menu</h4>
            <p>Terminal Pizza</p>
            <p>5 Kişilik Hackathlon Pizza</p>
            <p>useEffect Tavuklu Pizza</p>
            <p>Beyaz Console Frosty</p>
            <p>Testler Geçti Mutlu Burger</p>
            <p>Position Absolute Acı Burger</p>
          </div>
          <div className="right-container">
            <p>Instagram</p>
            <div className="img-container">
              <li className="insta-list">
                <img src={Insta1} alt="instagram" />
              </li>
              <li className="insta-list">
                <img src={Insta2} alt="instagram" />
              </li>
              <li className="insta-list">
                <img src={Insta3} alt="instagram" />
              </li>
              <li className="insta-list">
                <img src={Insta4} alt="instagram" />
              </li>
              <li className="insta-list">
                <img src={Insta5} alt="instagram" />
              </li>
              <li className="insta-list">
                <img src={Insta6} alt="instagram" />
              </li>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <p>Copyright</p>
      </div>
    </>
  );
};

export default Footer;
