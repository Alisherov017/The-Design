import React from "react";
import styles from "./profile.module.css";
import avatarImage from "../../../../assets/images/4908417.png"; // Убедитесь, что путь к файлу правильный

const ProfilePage = () => {
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
                <img src={avatarImage} alt="Аватарка пользователя" />
              </div>
              <div className={styles.userNameContainer}>
                <h2 className={styles.userName}>Имя пользователя</h2>
                <h2 className={styles.userName}>Добавить</h2>
              </div>
            </div>
          </div>
          <div className={styles.infoBox}>
            <div className={styles.userDetails}>
              <p>
                <strong>Возраст:</strong> 30 лет
              </p>
              <p>
                <strong> Адрес: </strong> <br /> г. Москва, ул. Примерная, д.
                1г. Москва, ул. Примерная, д. 1
              </p>
              <p>
                <strong>О себе:</strong> <br /> Профессиональный опыт: Кратко
                опиши свой опыт в дизайне. УпомяМой подход к дизайну – это
                сочетание функциональности и эстетики. Я верю, что хороший
                дизайн должен быть интуитивно понятным и визуально
                привлекательным. Я стремлюсь к созданию решений, которые не
                только решают задачи, но и оставляют положительное впечатление у
                пользователей.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
