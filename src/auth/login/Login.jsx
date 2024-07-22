// src/components/SignIn.js
import React, { useState } from "react";
import styles from "./auth.module.css";
// import leftSign from "../../assets/images/sign up left.png";
import google from "../../assets/images/icons8-google.svg";

const SignIn = () => {
  return (
    <div className={styles.signInContainer}>
      <div className={styles.videoSection}>
        <video className={styles.video} autoPlay muted loop>
          <source
            src="https://cdn.dribbble.com/uploads/48226/original/b8bd4e4273cceae2889d9d259b04f732.mp4?1689028949"
            type="video/mp4"
          />
        </video>
      </div>
      {/* <div>
        <img className={styles.imageSection} src={leftSign} alt="" />
      </div> */}
      <div className={styles.formSection}>
        <h2>Sign in to Dribbble</h2>
        <span className={styles.googleSignIn}>
          <img id={styles.googleIcon} src={google} alt="" />
          Sign in with Google
        </span>
        <p className={styles.seperate}>or sign in with email</p>
        <form>
          <label>
            <h3>Username or Email</h3>
            <input type="text" name="username" />
          </label>
          <label>
            <h3 id={styles.password}>Password</h3>
            <input type="password" name="password" />
          </label>
          <span className={styles.spann} type="submit">
            Sign In
          </span>
        </form>
        <p className={styles.account}>
          Don't have an account? <a href="/sign-up">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
