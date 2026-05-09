import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { loginSuccess } from "../../stores/slices/authSlice";
import { loginUser } from "../../services/authService";

import styles from "./Login.module.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e, formData) => {
    e.preventDefault();

    try {
      const res = await loginUser(formData);

      dispatch(
        loginSuccess({
          user: res.user,
          token: res.token,
        }),
      );

      if (res.user.role === "admin") {
        navigate("/admin/dashboard");
        toast.success("Login Successful!");
      } else if (res.user.role === "owner") {
        navigate("/owner/dashboard");
        toast.success("Login Successful!");
      } else {
        navigate("/");
        toast.success("Login Successful!");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <h1>Welcome Back</h1>

        <p className={styles.subtitle}>Login to continue exploring stores</p>

        <form
          className={styles.form}
          onSubmit={(e) => {
            handleLogin(e, formData);
          }}
        >
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
              name="password"
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
