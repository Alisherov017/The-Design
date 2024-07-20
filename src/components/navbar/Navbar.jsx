import React from "react";
import styles from "./Navbar.module.css";
import profileImage from "../../assets/images/logo.svg"; // Добавьте изображение профиля в ту же папку
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarMenu}>
        <li className={styles.navbarItem}>
          <Link to="/designers">
            Find designers <span>&#x25BC;</span>
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link to="/inspiration">Inspiration</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link to="/jobs">Jobs</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link to="/gopro">Go Pro</Link>
        </li>
      </ul>
      <div className={styles.navbarLogo}>
        <Link to="/">
          <img src={profileImage} alt="" />
        </Link>
      </div>
      <div className={styles.navbarSearch}>
        <input type="text" placeholder="Search..." />
        <img
          src={profileImage}
          alt="Profile"
          className={styles.navbarProfile}
        />
      </div>
    </nav>
  );
};

export default Navbar;
