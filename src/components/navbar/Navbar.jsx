import React, { useState } from "react";
import styles from "./Navbar.module.css";
import profileImage from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import userLogo from "../../assets/images/user logo.webp";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/Auth.slice";

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { isLoggedIn, user, token } = useSelector((state) => state.auth);
  console.log(user, "user навбар  ");
  console.log(isLoggedIn, "isLoggedIn  навбар");
  console.log(token, "token  навбар");

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    closeModal();
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
          {isLoggedIn ? (
            <img
              onClick={openModal}
              src={userLogo}
              alt="Profile"
              className={styles.navbarProfile}
            />
          ) : (
            <div className={styles.authButtons}>
              <Link to="/login">
                <span className={styles.logIn}>Log In </span>
              </Link>
              <Link to="/register">
                <button className={styles.btn}>Sign Up</button>
              </Link>
            </div>
          )}
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
              <p>{user ? user.name : "User"}</p>
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
