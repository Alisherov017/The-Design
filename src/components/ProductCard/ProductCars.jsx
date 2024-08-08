import React, { useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import profil from "../../assets/images/user logo.webp";
import nature from "../../assets/images/nature-landscape.jpg";
import styles from "./card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchDesigneWorks, fetchUserProfiles } from "../../store/actions";
import { Link } from "react-router-dom";

const ProductCars = () => {
  const designeWorkss = useSelector((state) => state.designe.designeWorks);
  const userProfiles = useSelector((state) => state.users.profiles);
  const usersStatus = useSelector((state) => state.users.status);

  console.log(designeWorkss, "ProductCars designe log");
  console.log(userProfiles, "userProfiles designe log");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDesigneWorks());
    if (usersStatus === "idle") {
      dispatch(fetchUserProfiles());
    }
  }, [dispatch, usersStatus]);

  const getUserName = (userId) => {
    const userProfile = userProfiles.find((profile) => profile.user === userId);
    return userProfile ? userProfile.user_first_name : "Unknown";
  };

  const getUserProfileImage = (userId) => {
    const userProfile = userProfiles.find((profile) => profile.user === userId);
    return userProfile && userProfile.user_profile_image
      ? userProfile.user_profile_image
      : profil;
  };

  return (
    <div className={styles.container}>
      {designeWorkss.map((designe) => (
        <div key={designe.id} className={styles.card}>
          <div>
            <Link to={`/designe/${designe.id}`}>
              <img
                className={styles.picture}
                src={designe.media_data || nature} // Используем изображение по умолчанию, если media_data отсутствует
                alt="Product Image"
                onError={(e) => {
                  e.target.src = nature;
                }} // Если изображение не удалось загрузить, показываем изображение по умолчанию
              />
            </Link>
          </div>
          <div className={styles.footer}>
            <div className={styles.footer_left}>
              <div className={styles.pr}>
                <img
                  src={getUserProfileImage(designe.user)} // Используем изображение профиля пользователя
                  alt="Profile"
                  onError={(e) => {
                    e.target.src = profil;
                  }} // Если изображение не удалось загрузить, показываем изображение по умолчанию
                />
              </div>
              <h3 className={styles.userName}>{getUserName(designe.user)}</h3>
              <span className={styles.teggg}>{designe.hashtag}</span>
            </div>
            <div className={styles.right}>
              <div className={styles.like}>
                <FavoriteIcon />
                <p className={styles.FavoriteIcon}>{designe.likes}</p>
              </div>
              <div className={styles.view}>
                <RemoveRedEyeIcon />
                <p>{designe.views}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProductCars;
