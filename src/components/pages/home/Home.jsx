import React from "react";
import ProductCars from "../../ProductCard/ProductCars";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <ProductCars />
      <ProductCars />
      <ProductCars />
      <ProductCars />
      <ProductCars />
      <ProductCars />
      <ProductCars />
      <ProductCars />
      <ProductCars />
      <ProductCars />
    </div>
  );
};

export default Home;
