// src/components/SignIn.js
import React, { useState } from "react";
import styles from "../../auth/register/Reg.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/actions";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    password: "",
    password2: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.first_name ||
      !formData.email ||
      !formData.password ||
      !formData.password2
    ) {
      alert("Please fill in all fields!");
      return;
    }
    if (formData.password.length <= 6) {
      alert("Min length of password is 6 symbols");
      return;
    }
    if (formData.password !== formData.password2) {
      alert("Passowrds do not match!");
      return;
    }

    try {
      await dispatch(registerUser(formData)).unwrap();
      navigate("/login");
    } catch (error) {
      console.error(
        "Registration error:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className={styles.signInContainer}>
      <div className={styles.videoSection}>
        <video className={styles.video} autoPlay muted loop>
          <source
            src="https://cdn.dribbble.com/uploads/48292/original/30fd1f7b63806eff4db0d4276eb1ac45.mp4?1689187515"
            type="video/mp4"
          />
        </video>
      </div>
      <div className={styles.formSection}>
        <h2>Sign up to Dribbble</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <h3 id={styles.Username}>Username</h3>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
          </label>
          <label>
            <h3 id={styles.email}>Email</h3>
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
              placeholder="    6+ character"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <label>
            <h3 id={styles.password}>Confirm Password</h3>
            <input
              type="password"
              placeholder="    6+ character"
              name="password2"
              value={formData.password2}
              onChange={handleChange}
            />
          </label>

          <button className={styles.spann} type="submit">
            Create Account
          </button>
        </form>
        <p className={styles.account}>
          Already have an account?<Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
