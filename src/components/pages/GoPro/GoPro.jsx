import React from "react";
import styles from "./GoPro.module.css";

const GoPro = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.protitle}>DRIBBBLE PRO</h3>

      <h1 className={styles.title}>Grow your design business</h1>
      <p className={styles.subtitle}>
        Get more eyes on your work and stand out with attention grabbing profile
        <br /> features to attract more opportunities.
      </p>
      <p className={styles.description}>
        $8/mo <br></br>
        <button className={styles.button}>Get started today</button>
      </p>
    </div>
  );
};

export default GoPro;
