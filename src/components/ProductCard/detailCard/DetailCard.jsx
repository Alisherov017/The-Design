import React, { useEffect, useState } from "react";
import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import nature from "../../../assets/images/nature-landscape.jpg";
import profile from "../../../assets/images/devid goggins.webp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CommentIcon from "@mui/icons-material/Comment";
import LoadingOne from "../../pages/loading/LoadingOne";
import {
  addFavorite,
  removeFavorite,
  sendMessage,
} from "../../../store/actions";
import axios from "axios";

const DetailCard = () => {
  const { id: designId } = useParams();
  const { id } = useParams();
  const dispatch = useDispatch();

  const [showCommentField, setShowCommentField] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  const designeWorks = useSelector((state) => state.designe.designeWorks);
  const designe = designeWorks.find((item) => item.id === parseInt(id));

  const userProfiles = useSelector((state) => state.users.profiles);
  const senderId = useSelector((state) => state.auth.user);
  const favorites = useSelector((state) => state.favorites.favorites);

  const getUserName = (userId) => {
    const userProfile = userProfiles.find((profile) => profile.user === userId);
    return userProfile ? userProfile.user_email : "Unknown";
  };

  const getUserProfileImage = (id) => {
    const userProfile = userProfiles.find((item) => item.user === id);
    return userProfile && userProfile.user_profile_image
      ? userProfile.user_profile_image
      : profile;
  };

  // ! коммент
  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      dispatch(sendMessage({ chatId: designe.id, text: commentText, senderId }))
        .unwrap()
        .catch((error) => {
          console.error("Ошибка при отправке сообщения:", error);
        });
      setCommentText("");
      setShowCommentField(false);
    }
  };

  const handleCommentClick = () => {
    setShowCommentField(!showCommentField);
  };

  // ! фаворит
  useEffect(() => {
    setIsFavorite(favorites.includes(designId));
  }, [favorites, designId]);

  const handleFavoriteClick = async () => {
    try {
      if (isFavorite) {
        await dispatch(removeFavorite(designId)).unwrap();
        setIsFavorite(false);
      } else {
        await dispatch(addFavorite(designId)).unwrap();
        setIsFavorite(true);
      }
    } catch (error) {
      console.error("Ошибка при обновлении избранного:", error);
      // Обработка ошибки, например, отображение сообщения пользователю
    }
  };

  if (!designe) {
    return (
      <div>
        <LoadingOne />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title_head}>
          <p> {designe.designe_title} </p>
        </div>
        <div className={styles.header}>
          <div className={styles.header__left}>
            <div className={styles.header__left_img}>
              <img
                className={styles.header__left_img}
                src={getUserProfileImage(designe.user)}
                alt="Profile"
                onError={(e) => {
                  e.target.src = profile;
                }}
              />
            </div>
            <div>
              <p className={styles.header__left_name}>
                {getUserName(designe.user)}
              </p>
            </div>
          </div>
          <div className={styles.header__right}>
            <div
              className={styles.header__right_icons}
              onClick={handleFavoriteClick}
            >
              {isFavorite ? (
                <FavoriteIcon className={styles.icons} />
              ) : (
                <FavoriteBorderIcon className={styles.icons} />
              )}
            </div>
            <div className={styles.header__right_icons}>
              <BookmarkIcon className={styles.icons} />
            </div>
            <div
              className={styles.header__right_icons}
              onClick={handleCommentClick} // Добавляем обработчик клика
            >
              <CommentIcon className={styles.icons} />
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div>
            {/* <img className={styles.header} src={designe.media_data} alt="" />{" "} */}
            <img
              className={styles.picture}
              src={designe.media_data || nature}
              alt="Product Image"
              onError={(e) => {
                e.target.src = nature;
              }}
            />
            <p className={styles.deatailDescr}>{designe.descriptions}</p>
          </div>
        </div>

        {/* Поле для ввода комментария */}
        {showCommentField && (
          <div className={styles.commentField}>
            <textarea
              placeholder="Write comments ..."
              className={styles.commentInput}
              value={commentText}
              onChange={handleCommentChange}
            ></textarea>
            <button
              className={styles.commentButton}
              onClick={handleCommentSubmit}
            >
              Отправить
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailCard;
