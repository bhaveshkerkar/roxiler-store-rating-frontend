import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import styles from "./Login.module.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email === "admin@gmail.com") {
      localStorage.setItem("isLoggedIn", "true");

      localStorage.setItem("role", "admin");

      toast.success("Login Successful!");

      navigate("/admin/dashboard");
    } else if (formData.email === "owner@gmail.com") {
      localStorage.setItem("isLoggedIn", "true");

      localStorage.setItem("role", "owner");

      toast.success("Login Successful!");

      navigate("/owner/dashboard");
    } else {
      localStorage.setItem("isLoggedIn", "true");

      localStorage.setItem("role", "user");

      toast.success("Login Successful!");

      navigate("/explore-stores");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <h1>Welcome Back</h1>

        <p className={styles.subtitle}>Login to continue exploring stores</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="username"
          />

          <div className={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />

            <span
              className={styles.showPassword}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          <button type="submit">Login</button>
        </form>

        <p className={styles.signupText}>
          Don’t have an account?
          <span onClick={() => navigate("/user/signup")}> Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
