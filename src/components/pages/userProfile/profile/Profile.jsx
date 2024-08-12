import React from "react";
import { useSelector } from "react-redux";
import styles from "./profile.module.css";
import userProfile from "../../../../assets/images/user logo.webp";

const ProfilePage = () => {
  const user = useSelector((state) => state.auth.user) || {};
  console.log("user ProfilePage", user);

  return (
    <div className={styles.profilePage}>
      <div className={styles.sidebar}>
        <ul className={styles.navList}>
          <li>
            <a href="/contact">Контакт</a>
          </li>
          <li>
            <a href="/messages">Сообщение</a>
          </li>
          <li>
            <a href="/projects">Проекты</a>
          </li>
          <li>
            <a href="/tasks">Задачи</a>
          </li>
          <li>
            <a href="/settings">Настройки</a>
          </li>
        </ul>
      </div>
      <div className={styles.profileDetails}>
        <div className={styles.infoWrapper}>
          <div className={styles.profileSquare}>
            <div className={styles.avatarAndName}>
              <div className={styles.profileAvatar}>
                {user.user_profile_image ? (
                  <img
                    src={user.user_profile_image}
                    alt="Profile"
                    className={styles.profileImage}
                  />
                ) : (
                  <div className={styles.placeholderImage}>No Image</div>
                )}
                {/* <img src={userProfile} alt="Аватарка пользователя" /> */}
              </div>
              <div className={styles.userNameContainer}>
                <h2 className={styles.userName}>
                  {user.first_name || user.user_first_name}
                </h2>
                <h2 className={styles.userName}>Добавить</h2>
              </div>
            </div>
          </div>
          <div className={styles.infoBox}>
            <div className={styles.userDetails}>
              <p>
                <strong>ID:</strong> {user.id || user.user}
              </p>
              <p>
                <strong> Email: </strong> <br /> {user.email || user.user_email}
              </p>
              <p>
                <strong>About me:</strong> <br /> {user.user_descriptions}
              </p>
              {/* <p>
                <strong>About me:</strong> <br /> {user.user_descriptions}
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

// <div className={styles.container}>
//   <h1 className={styles.title}>User Profile</h1>
//   <div className={styles.profileCard}>
// {user.user_profile_image ? (
//   <img
//     src={user.user_profile_image}
//     alt="Profile"
//     className={styles.profileImage}
//   />
// ) : (
//   <div className={styles.placeholderImage}>No Image</div>
// )}
//     <div className={styles.profileDetails}>
//       <h2 className={styles.name}>
//         Name: {user.user_first_name || user.first_name || "No Name"}
//       </h2>
//       <p className={styles.email}>
//         Email: {user.user_email || user.email || "No Email"}
//       </p>
//       <p className={styles.status}>
//         Status: {user.user_status || "No Status"}
//       </p>
//       {user.user_descriptions && (
//         <p className={styles.description}>
//           About: {user.user_descriptions}
//         </p>
//       )}
//     </div>
//   </div>
// </div>
