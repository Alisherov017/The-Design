import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDesigneWork } from "../../store/actions";
import styles from "./addProduct.module.css";

const AddProduct = () => {
  const user = useSelector((state) => state.auth.user);

  // console.log(user, "AddProduct user");
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    designe_title: "",
    hashtag: "",
    category: "",
    descriptions: "",
    user_status_display: "",
    media_data: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: files ? files[0] : value,
    }));
  };

  console.log(formData, "formData in AddProduct");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("designe_title", formData.designe_title);
    data.append("hashtag", formData.hashtag);
    data.append("category", formData.category);
    data.append("descriptions", formData.descriptions);
    data.append("user_status_display", formData.user_status_display);
    if (formData.media_data) {
      data.append("media_data", formData.media_data);
    }

    if (user) {
      data.append("user", user.id);
    }

    try {
      await dispatch(addDesigneWork(data)).unwrap();
      alert("Designe work added successfully");
    } catch (error) {
      console.log(error, "error addDesigneWork");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Add new designe work</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="designe_title"
            value={formData.designe_title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          HashTag:
          <input
            type="text"
            name="hashtag"
            value={formData.hashtag}
            onChange={handleChange}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            className={styles.descriptions}
            name="descriptions"
            value={formData.descriptions}
            onChange={handleChange}
          ></textarea>
        </label>
        <label>
          User Status Display:
          <input
            type="text"
            name="user_status_display"
            value={formData.user_status_display}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Media Data:
          <input type="file" name="media_data" onChange={handleChange} />
        </label>
        <button className={styles.button} type="submit">
          Add designe
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
