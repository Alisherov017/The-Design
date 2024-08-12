import React from "react";
import styles from "./Card.module.css";

const Card = ({ title, description, imageSrc, videoSrc }) => {
  return (
    <div className={styles.card}>
      {imageSrc && !videoSrc && (
        <img src={imageSrc} alt={title} className={styles.cardImage} />
      )}
      {videoSrc && (
        <video className={styles.cardVideo} controls>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export default Card;
