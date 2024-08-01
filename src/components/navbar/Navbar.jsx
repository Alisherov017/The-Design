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
              <div>
                <Link to="/profile">
                  <img
                    onClick={closeModal}
                    // src={userLogo}
                    src={user ? user.user_profile_image : userLogo}
                    alt="Profile"
                    className={styles.profileImage}
                  />
                </Link>
              </div>
              <p>{user ? user.user_first_name : user.first_name}</p>
              <ul className={styles.menu}>
                <Link to="/addProduct">
                  <li>Upload design work</li>
                </Link>
                <Link to="/editProfile">
                  <li onClick={closeModal}> Edit profile</li>
                </Link>
                <li id={styles.setting}>Settings</li>
                <hr />
                <li onClick={handleLogout}>Sign out</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
