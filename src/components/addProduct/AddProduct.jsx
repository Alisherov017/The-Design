import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDesigneWork } from "../../store/actions";
import styles from "./addProduct.module.css";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    designe_title: "",
    hashtag: "",
    category: "",
    descriptions: "",
    media_data: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]:
        name === "category" ? parseInt(value, 10) : files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("designe_title", formData.designe_title);
    data.append("hashtag", formData.hashtag);
    data.append("category", formData.category.toString());
    data.append("descriptions", formData.descriptions);
    if (formData.media_data) {
      data.append("media_data", formData.media_data);
    }

    if (user) {
      data.append("user", user.id);
    }

    try {
      await dispatch(addDesigneWork(data)).unwrap();
      alert("Designe work added successfully");
      navigate("/");
    } catch (error) {
      console.log(error, "error addDesigneWork");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add new designe work</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Title:
          <input
            type="text"
            name="designe_title"
            value={formData.designe_title}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          HashTag:
          <input
            type="text"
            name="hashtag"
            value={formData.hashtag}
            onChange={handleChange}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Category:
          <input
            type="number"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Description:
          <textarea
            name="descriptions"
            value={formData.descriptions}
            onChange={handleChange}
            className={styles.textarea}
          ></textarea>
        </label>
        <label className={styles.label}>
          Media Data:
          <input
            type="file"
            name="media_data"
            onChange={handleChange}
            className={styles.fileInput}
          />
        </label>
        <button className={styles.button} type="submit">
          Add designe
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
