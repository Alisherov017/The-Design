import React, { useEffect, useState } from "react";
import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import nature from "../../../assets/images/nature-landscape.jpg";
import profile from "../../../assets/images/devid goggins.webp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import CommentIcon from "@mui/icons-material/Comment";
import LoadingOne from "../../pages/loading/LoadingOne";
import { addFavorite, removeFavorite } from "../../../store/actions";
import {
  addComment,
  deleteComment,
  fetchComments,
} from "../../../store/chats.action";
import DeleteIcon from "@mui/icons-material/Delete";

const DetailCard = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [showCommentField, setShowCommentField] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [comment, setComment] = useState("");

  const designeWorks = useSelector((state) => state.designe.designeWorks);
  const designe = designeWorks.find((item) => item.id === parseInt(id));

  const userProfiles = useSelector((state) => state.users.profiles);
  const senderId = useSelector((state) => state.auth.user);
  const favorites = useSelector((state) => state.favorites.favorites);
  const comments = useSelector((state) => state.chats.comments);
  console.log(comments, "comments");

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

  const handleCommentClick = () => {
    setShowCommentField(!showCommentField);
  };

  useEffect(() => {
    // Загружаем комментарии при монтировании компонента
    dispatch(fetchComments(id));

    // Обновляем состояние избранного
    setIsFavorite(favorites.includes(id));
  }, [dispatch, id, favorites]);

  const handleFavoriteClick = async () => {
    try {
      if (isFavorite) {
        await dispatch(removeFavorite(id)).unwrap();
        setIsFavorite(false);
      } else {
        await dispatch(addFavorite(id)).unwrap();
        setIsFavorite(true);
      }
    } catch (error) {
      console.error("Ошибка при обновлении избранного:", error);
    }
  };

  const handleCommentSubmit = async () => {
    if (comment.trim().length === 0) {
      alert("Комментарий не может быть пустым.");
      return;
    }

    try {
      await dispatch(addComment({ designId: id, content: comment })).unwrap();
      setComment("");
      setShowCommentField(false);

      // Обновляем комментарии после добавления нового
      await dispatch(fetchComments(id));
    } catch (error) {
      console.error("Ошибка при добавлении комментария:", error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await dispatch(deleteComment(id, commentId)).unwrap();
    } catch (error) {
      console.error("Ошибка при удалении комментария:", error);
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
          <p>{designe.designe_title}</p>
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
            <div className={styles.header__right_icons}>
              <FavoriteBorderIcon className={styles.icons} />
              {/* <BookmarkIcon className={styles.icons} /> */}
            </div>
            <div
              className={styles.header__right_icons}
              onClick={handleFavoriteClick}
            >
              {isFavorite ? (
                <BookmarkRemoveIcon className={styles.icons} />
              ) : (
                <BookmarkAddedIcon className={styles.icons} />
              )}
            </div>

            <div
              className={styles.header__right_icons}
              onClick={handleCommentClick}
            >
              <CommentIcon className={styles.icons} />
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div>
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
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <button
              className={styles.commentButton}
              onClick={handleCommentSubmit}
            >
              Отправить
            </button>
          </div>
        )}

        {/* Список комментариев */}
        <div className={styles.commentsSection}>
          {comments
            .filter((c) => c.design === designe.id) // Фильтруем комментарии по дизайну
            .map((comment) => (
              <div key={comment.id} className={styles.commentItem}>
                <div className={styles.commentUser}>
                  <img
                    className={styles.commentUserImage}
                    src={getUserProfileImage(comment.user)}
                    alt="Profile"
                  />
                  <p className={styles.commentUserName}>
                    {comment.user_first_name}
                  </p>
                </div>
                <div
                  key={comment.id}
                  className={styles.deleteCon}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <p style={{ marginRight: "10px" }}>{comment.content}</p>
                  <DeleteIcon
                    className={styles.delete}
                    onClick={() => handleDeleteComment(comment.id)}
                  />
                </div>

                <p className={styles.commentDate}>
                  {new Date(comment.created_at).toLocaleString()}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
