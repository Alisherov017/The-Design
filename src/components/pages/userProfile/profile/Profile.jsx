import React from "react";
import { useSelector } from "react-redux";
import styles from "./profile.module.css";

const ProfilePage = () => {
  const user = useSelector((state) => state.auth.user) || {};
  console.log("user ProfilePage", user);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>User Profile</h1>
      <div className={styles.profileCard}>
        {user.user_profile_image ? (
          <img
            src={user.user_profile_image}
            alt="Profile"
            className={styles.profileImage}
          />
        ) : (
          <div className={styles.placeholderImage}>No Image</div>
        )}
        <div className={styles.profileDetails}>
          <h2 className={styles.name}>
            Name: {user.user_first_name || user.first_name || "No Name"}
          </h2>
          <p className={styles.email}>
            Email: {user.user_email || user.email || "No Email"}
          </p>
          <p className={styles.status}>
            Status: {user.user_status || "No Status"}
          </p>
          {user.user_descriptions && (
            <p className={styles.description}>
              About: {user.user_descriptions}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
