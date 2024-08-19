// import React from "react";
// import styles from "./Inspiration.module.css";
// import ProductCars from "../../ProductCard/ProductCars";

// const Inspiration = () => {
//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>
//         Discover the world’s top designers & creatives
//       </h1>
//       <p className={styles.subtitle}>
//         Dribbble is the leading destination to find & showcase creative work and
//         home to the world's best design professionals.
//       </p>
//       <div className={styles.search}>
//         <input
//           className={styles.input}
//           placeholder="Search 18 million+ shots..."
//         ></input>
//       </div>
//       <div className={styles.products}>
//         <ProductCars />
//       </div>
//     </div>
//   );
// };

// export default Inspiration;

import React, { useState } from "react";
import styles from "./Inspiration.module.css";
import ProductCars from "../../ProductCard/ProductCars";

const Inspiration = () => {
  const [searchTerm, setSearchTerm] = useState(""); // состояние для хранения значения поиска

  // Обработчик изменения значения поиска
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

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
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className={styles.products}>
        <ProductCars searchTerm={searchTerm} />{" "}
        {/* Передача значения поиска в ProductCars */}
      </div>
    </div>
  );
};

export default Inspiration;
