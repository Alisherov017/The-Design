import React, { useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import profil from "../../assets/images/user logo.webp";
import styles from "./card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchDesigneWorks } from "../../store/actions";

const ProductCars = () => {
  const designeWorkss = useSelector((state) => state.designe.designeWorks);
  console.log(designeWorkss, "ProductCars designe log");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDesigneWorks());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {designeWorkss.map((designe) => (
        <div key={designe.id} className={styles.card}>
          <div>
            <img
              className={styles.picture}
              src={designe.media_data}
              alt="Product Image"
            />
          </div>
          <div className={styles.footer}>
            <div className={styles.footer_left}>
              <div className={styles.pr}>
                <img src={profil} alt="profil" />
              </div>
              <h3 className={styles.userName}>{designe.user}</h3>
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
