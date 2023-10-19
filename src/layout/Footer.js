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
import twitterLogo from "../assets/adv-aseets/icons/twitter-logo.png";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="left-container">
            <h3>
              Teknolojik <br />
              Yemekler
            </h3>
            <address>
              <div className="location">
                <img src={locationIcon} alt="location" />
                <p> 341 Londonderry Road, İstanbul Türkiye</p>
              </div>
              <div className="mail">
                <img src={mailIcon} alt="mail" />
                <p> aciktim@teknolojikyemekler.com</p>
              </div>
              <div className="phone">
                <img src={phoneIcon} alt="phone" />
                <p> +90 216 123 45 67</p>
              </div>
            </address>
          </div>
          <div className="middle-container">
            <div className="middle-header">
              <h4>Hot Menu</h4>
            </div>
            <div className="menu-links">
              <Link>Terminal Pizza</Link>
              <Link>5 Kişilik Hackathlon Pizza</Link>
              <Link>useEffect Tavuklu Pizza</Link>
              <Link>Beyaz Console Frosty</Link>
              <Link>Testler Geçti Mutlu Burger</Link>
              <Link>Position Absolute Acı Burger</Link>
            </div>
          </div>
          <div className="right-container">
            <div className="right-header">
              <h4>Instagram</h4>
            </div>
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
      </div>

      <div className="copyright">
        <div>©2023 Teknolojik Yemekler.</div>
        <img src={twitterLogo} alt="twitter" />
      </div>
    </footer>
  );
};

export default Footer;
