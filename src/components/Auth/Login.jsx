import { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <h1>Welcome Back</h1>

        <p className={styles.subtitle}>Login to continue exploring stores</p>

        <form className={styles.form}>
          <input type="email" placeholder="Enter your email" />

          <div className={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
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
          <span> Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
