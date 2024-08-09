import React from "react";
import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import nature from "../../../assets/images/nature-landscape.jpg";
import profile from "../../../assets/images/user logo.webp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CommentIcon from "@mui/icons-material/Comment";
import LoadingOne from "../../pages/loading/LoadingOne";

const DetailCard = () => {
  const { id } = useParams();
  const designeWorks = useSelector((state) => state.designe.designeWorks);
  const designe = designeWorks.find((item) => item.id === parseInt(id));

  const userProfiles = useSelector((state) => state.users.profiles);

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
            <div className={styles.header__right_icons}>
              <FavoriteBorderIcon className={styles.icons} />
            </div>
            <div className={styles.header__right_icons}>
              <BookmarkIcon className={styles.icons} />
            </div>
            <div className={styles.header__right_icons}>
              <CommentIcon className={styles.icons} />
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div>
            <img className={styles.header} src={designe.media_data} alt="" />{" "}
            <img
              className={styles.picture}
              src={designe.media_data || nature}
              alt="Product Image"
              onError={(e) => {
                e.target.src = nature;
              }}
            />
            <p>{designe.descriptions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
