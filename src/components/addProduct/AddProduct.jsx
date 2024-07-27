import React from "react";

const AddProduct = () => {
  return (
    <div className={styles.container}>
      <h2>Add new designe work</h2>
      <form action="">
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <label>
          HashTag:
          <input type="text" name="hasgtag" />
        </label>
        <label>
          Category:
          <input type="text" name="category" />
        </label>
        <label>
          Description:
          <textarea name="description"></textarea>
        </label>
        <label>
          Media Data:
          <input type="file" name="media_data" />
        </label>
        <button type="submit">Add designe</button>
      </form>
    </div>
  );
};

export default AddProduct;
