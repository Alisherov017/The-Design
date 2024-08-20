import React from "react";
import styles from "./Job.module.css";
import { Link } from "react-router-dom";

const Jobs = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        The #1 job board <br /> for graphic design jobs
      </h1>
      <p className={styles.subtitle}>
        Dribbble is the heart of the design community and the best resource to
        discover <br /> and connect with designers and jobs worldwide.
      </p>
      <Link to="/addProduct">
        <button className={styles.button}>+ Post a job</button>
      </Link>
    </div>
  );
};

export default Jobs;
