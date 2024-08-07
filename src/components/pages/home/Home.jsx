import React from "react";
import ProductCars from "../../ProductCard/ProductCars";
import styles from "./home.module.css";
import Footer from "../../footer/Footer";

const Home = () => {
  return (
    <div className={styles.container}>
      <ProductCars />
    </div>
  );
};

export default Home;
