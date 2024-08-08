import React from "react";
import styles from "./Inspiration.module.css";

const Inspiration = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Discover the world’s top designers & creatives
      </h1>
      <p className={styles.subtitle}>
        Dribbble is the leading destination to find & showcase creative work and
        home to the world's best design professionals.
      </p>
      <div className={styles.search}>
        <input
          className={styles.input}
          placeholder="Search 18 million+ shots..."
        ></input>
      </div>
    </div>
  );
};

export default Inspiration;
