import React, { useState } from "react";
import styles from "./Navbar.module.css";
import profileImage from "../../assets/images/logo.svg"; // Добавьте изображение профиля в ту же папку
import { Link } from "react-router-dom";
import userLogo from "../../assets/images/user logo.webp";

const Navbar = () => {
  // сonst [(isModalOpen, setModalOpen)] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
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
          <div className={styles.InputContainer}>
            <input
              placeholder="Search.."
              id="input"
              className={styles.input}
              name="text"
              type="text"
            />
          </div>
          <img
            onClick={openModal}
            src={userLogo}
            alt="Profile"
            className={styles.navbarProfile}
          />
        </div>
      </nav>
      {isModalOpen && (
        <div className={styles.modalContainer}>
          <div className={styles.modalOverlay} onClick={closeModal}>
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={userLogo}
                alt="Profile"
                className={styles.profileImage}
              />
              <p>Ruslan Alisherov</p>
              <ul className={styles.menu}>
                <li>Upload design work</li>
                <li>Work preferences</li>
                <li id={styles.setting}>Settings</li>
                <hr />
                <li>Sign out</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
