import React from "react";
import facebookImg from "./images/facebook.png";
import twitterImg from "./images/twitter.png";
import youtubeImg from "./images/youtube.png";
import cardsImg from "./images/Card images.svg";
import './Footer.css'
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footerMain">
      <div className="upperFooter">
        <div className="upperFootLeft">
          <div className="footerCategoryList">
            <div className="footerCategory">Categories</div>
            <div className="footerCategoryList">
              <ul>
                <li>
                  <Link to="/groceries">Groceries</Link>
                </li>
                <li>
                  <Link to="/smartphones">Smartphones</Link>
                </li>
                <li>
                  <Link to="/laptops">Laptops</Link>
                </li>
                <li>
                  <Link to="/furniture">Furniture</Link>
                </li>
                <li>
                  <Link to="/beauty">Beauty</Link>
                </li>
                <li>
                  <Link to="/vehicle">Vehicle</Link>
                </li>
                <li>
                  <Link to="fragrances">Fragrances</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="groupCompnies">
            <div className="footerCompnies">Group Compnies</div>
            <div className="comniesList">
              <ul>
                <li>
                  <a href="https://www.myntra.com/" target="_blank">Myntra</a>
                </li>
                <li>
                  <a href="https://www.cleartrip.com/" target="_blank">Cleartrip</a>
                </li>
                <li>
                  <a href="https://www.shopsy.in/" target="_blank">Shopsy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="upperFootMiddle"></div>
        <div className="upperFootRight">
          <div className="flipkartMailSection">
            <div className="flipkartMail">
              <div className="mailText">Mail Us:</div>
              <div className="mailAddress">
                <p>ShopNow Internet Private Limited, </p>
                <p> Buildings Alyssa, Begonia &amp; </p>
                <p> Clove Embassy Tech Village, </p>
                <p>Outer Ring Road, Devarabeesanahalli Village,</p>
                <p> Bengaluru, 560103, </p>
                <p> Karnataka, India</p>
              </div>
            </div>
            <div className="social">
              <div className="socialText">Social:</div>
              <div className="socialLogos">
                <div className="facebookLogo">
                  <a href="/">
                    <img src={facebookImg} alt="facebook" />
                  </a>
                </div>
                <div className="twitterLogo">
                  <a href="/">
                    <img src={twitterImg} alt="twitter" />
                  </a>
                </div>
                <div className="youtubeLogo">
                  <a href="/">
                    <img src={youtubeImg} alt="youtube" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flipkartOfficeAddress">
            <div className="AddressText">Registered Office Address:</div>
            <div className="flipkartAddress">
                <p>ShopNow Internet Private Limited, </p>
                <p> Buildings Alyssa, Begonia &amp; </p>
                <p> Clove Embassy Tech Village, </p>
                <p>Outer Ring Road, Devarabeesanahalli Village,</p>
                <p> Bengaluru, 560103, </p>
                <p> Karnataka, India </p>
                <p> CIN : U51109KA2012PTC066107 </p>
                <p></p>
                <p>
                  Telephone: <a href="tel:044-45614700">044-45614700</a> /
                  <a href="tel:044-67415800">044-67415800</a>
                </p>
            </div>
          </div>
        </div>
      </div>
      <div className="middleFooter"> </div>
      <div className="lowerFooter">
        <div className="copyRight"><span>© 2007-2024 <span>ShopNow.com </span><span> -  Made By Harsh Deep</span></span></div>
        <div className="cardImages"><img src={cardsImg} alt="cardImages" /></div>
      </div>
    </div>
  );
};
