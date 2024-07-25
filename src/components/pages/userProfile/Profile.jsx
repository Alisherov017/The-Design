import React from "react";
import styles from "./userProfile.module.css";

const Profile = () => {
  return (
    <div className={styles.container}>
      <h2>Edit Profile</h2>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <label>
          <h3>Profile Picture:</h3>
          <img src="" alt="" className={styles.profileImage} />
          <input
            type="file"
            name="user_profile_image"
            // onChange={handleChange}
          />
          {/* {user.user_profile_image && (
            <img
              src={user.user_profile_image}
              alt="Profile"
              className={styles.profileImage}
            />
          )} */}
        </label>
        <label>
          <h3>First Name:</h3>
          <input
            type="text"
            name="user_first_name"
            // value={formData.user_first_name}
            // onChange={handleChange}
          />
        </label>
        <label>
          <h3>Email:</h3>
          <input
            type="email"
            name="user_email"
            // value={formData.user_email}
            // onChange={handleChange}
          />
        </label>
        <label>
          <h3>Description:</h3>
          <textarea
            name="user_descriptions"
            // value={formData.user_descriptions}
            // onChange={handleChange}
          />
        </label>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default Profile;
