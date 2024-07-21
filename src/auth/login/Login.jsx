import React from "react";
import styles from "./auth.module.css";
import signInImage from "../../assets/images/sign up left.png";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <img src={signInImage} alt="Sign In" className={styles.image} />
      </div>
      <div className={styles.rightSide}>
        <h1>Sign in to Dribbble</h1>
        <button className={styles.googleSignIn}>
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="Google"
          />
          Sign in with Google
        </button>
        <p>or sign in with email</p>
        <form>
          <input
            type="text"
            placeholder="Username or Email"
            className={styles.inputField}
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.inputField}
          />
          <a href="#" className={styles.forgotPassword}>
            Forgot password?
          </a>
          <button type="submit" className={styles.signInButton}>
            Sign In
          </button>
        </form>
        <p>
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
