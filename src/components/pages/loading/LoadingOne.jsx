import React from "react";
import styles from "./Waiting.module.scss";

const LoadingOne = () => {
  return (
    <div>
      <div className={styles.loader}>Loading...</div>;
    </div>
  );
};

export default LoadingOne;
