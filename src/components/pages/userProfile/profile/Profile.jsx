import React from "react";
import { useSelector } from "react-redux";
import styles from "./profile.module.css";

const ProfilePage = () => {
  const user = useSelector((state) => state.auth.user);
  console.log("user ProfilePage", user);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>User Profile</h1>
      <div className={styles.profileCard}>
        {user.user_profile_image && (
          <img
            src={user.user_profile_image}
            alt="Profile"
            className={styles.profileImage}
          />
        )}
        <div className={styles.profileDetails}>
          <h2 className={styles.name}>{user.user_first_name}</h2>
          <p className={styles.email}>Email: {user.user_email}</p>
          <p className={styles.email}>status_display: {user.user_status}</p>
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
