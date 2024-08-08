import React from "react";
import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const DetailCard = () => {
  const { id } = useParams();
  const designeWorks = useSelector((state) => state.designe.designeWorks);
  const designe = designeWorks.find((item) => item.id === parseInt(id));

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header__left}></div>
        <div className={styles.header__right}></div>
      </div>

      <div className={styles.content}>
        <div>
          <img className={styles.header} src={designe.media_data} alt="" />
        </div>
        <div>
          <p>{designe.descriptions}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
