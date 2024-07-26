import React, { useEffect, useState } from "react";
import styles from "./userProfile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../../store/actions";

const EditProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [formData, setFormData] = useState({
    user_first_name: "",
    user_email: "",
    user_descriptions: "",
    user_profile_image: null,
  });

  useEffect(() => {
    if (user) {
      setFormData({
        user_first_name: user.first_name || "",
        user_email: user.email || "",
        user_descriptions: user.user_descriptions || "",
        user_profile_image: null,
      });
    }
  }, [user]);

  console.log(formData, "EditProfile formData");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("user_first_name", formData.user_first_name);
    data.append("user_email", formData.user_email);
    data.append("user_descriptions", formData.user_descriptions);
    if (formData.user_profile_image) {
      data.append("user_profile_image", formData.user_profile_image);
    }

    try {
      await dispatch(updateUserProfile(data)).unwrap();
      alert("Profile updated successfully");
    } catch (error) {
      console.log("updateUserProfile error", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <h3>Profile Picture:</h3>
          {formData.user_profile_image && (
            <img
              src={URL.createObjectURL(formData.user_profile_image)}
              alt="Profile"
              className={styles.profileImage}
            />
          )}
          <input
            type="file"
            name="user_profile_image"
            onChange={handleChange}
          />
        </label>
        <label>
          <h3>First Name:</h3>
          <input
            type="text"
            name="user_first_name"
            value={formData.user_first_name}
            onChange={handleChange}
          />
        </label>
        <label>
          <h3>Email:</h3>
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
          />
        </label>
        <label>
          <h3>Description:</h3>
          <textarea
            name="user_descriptions"
            value={formData.user_descriptions}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;
