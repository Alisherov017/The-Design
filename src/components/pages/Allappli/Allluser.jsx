import React from "react";
import { useSelector } from "react-redux";
import styles from "./Alls.module.css";
import profile from "../../../assets/images/devid goggins.webp";
import LoadingOne from "../loading/LoadingOne";

const AlllUsers = () => {
  const userProfiles = useSelector((state) => state.users.profiles);
  console.log(userProfiles, "userProfiles AlllUsers");

  if (!userProfiles.length) {
    return (
      <div>
        <LoadingOne />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>User Profiles</h1>
      <div className={styles.userList}>
        {userProfiles.map((user) => (
          <div key={user.user} className={styles.userCard}>
            <img
              className={styles.profileImage}
              src={user.user_profile_image || profile}
              alt={user.user_profile_image}
              onError={(e) => {
                e.target.src = profile;
              }}
            />
            <h2 className={styles.userName}>{user.user_first_name}</h2>
            <p className={styles.userEmail}>{user.user_email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlllUsers;
