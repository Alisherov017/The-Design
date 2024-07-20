import React from "react";
import styles from "./Footer.module.css";
import logo from "../assets/image.svg";
import twitterIcon from "../assets/twitter-icon.webp";
import facebookIcon from "../assets/facebook-app-round-icon.webp";
import instagramIcon from "../assets/images (1).png";
import pinterestIcon from "../assets/Pinterest_font_awesome.svg.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <img src={logo} alt="Logo" className={styles.footerLogo} />{" "}
        <ul className={styles.footerList}>
          <li>
            <a href="#">For designers</a>
          </li>
          <li>
            <a href="#">Hire talent</a>
          </li>
          <li>
            <a href="#">Inspiration</a>
          </li>
          <li>
            <a href="#">Advertising</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#" className={styles.support}>
              Support
            </a>
          </li>

          <li>
            <a href="#">
              <img
                src={twitterIcon}
                alt="Twitter"
                className={styles.socialIcon}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src={facebookIcon}
                alt="Facebook"
                className={styles.socialIcon}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src={instagramIcon}
                alt="Instagram"
                className={styles.socialIcon}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src={pinterestIcon}
                alt="Pinterest"
                className={styles.socialIcon}
              />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.footerBottom}>
        <ul className={styles.footerBottomList}>
          <li>
            <a href="#">© 2024 Dribbble</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Cookies</a>
          </li>
          <li className={styles.spacer}></li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Designers</a>
          </li>
          <li>
            <a href="#">Freelancers</a>
          </li>
          <li>
            <a href="#">Tags</a>
          </li>
          <li>
            <a href="#">Places</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
