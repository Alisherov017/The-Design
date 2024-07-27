import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import profil from "../../assets/images/user logo.webp";
import styles from "./card.module.css";
const ProductCars = () => {
  return (
    <div className={styles.container}>
      <div className={styles.picture}>
        <img src={profil} alt="Product Image" />
      </div>
      <div className={styles.footer}>
        <div className={styles.footer_left}>
          <div className={styles.pr}>
            <img src={profil} alt="profil" />
          </div>
          <h3 className={styles.userName}>Ali Sherov</h3>
          <span className={styles.teggg}>Teg</span>
        </div>
        <div className={styles.right}>
          <div className={styles.like}>
            <FavoriteIcon />
            <p className={styles.FavoriteIcon}>34</p>
          </div>
          <div className={styles.view}>
            <RemoveRedEyeIcon />
            <p>34</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCars;
