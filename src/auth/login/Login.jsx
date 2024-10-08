import React, { useState } from "react";
import styles from "./auth.module.css";
import google from "../../assets/images/icons8-google.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/actions";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(loginUser(formData)).unwrap();
      console.log("Login result:", result);
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
    }
  };
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
      <div className={styles.formSection}>
        <h2>Sign in to Dribbble</h2>
        <span className={styles.googleSignIn}>
          <img id={styles.googleIcon} src={google} alt="" />
          Sign in with Google
        </span>
        <p className={styles.seperate}>or sign in with email</p>
        <form onSubmit={handleSubmit}>
          <label>
            <h3>Email</h3>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            <h3 id={styles.password}>Password</h3>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <button className={styles.spann} type="submit">
            Sign In
          </button>
        </form>
        <p className={styles.account}>
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
