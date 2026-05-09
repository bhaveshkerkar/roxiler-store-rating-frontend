import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import styles from "./Signup.module.css";

import { signupUser } from "../../services/authService";

const Signup = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Name Validation
    if (formData.name.length < 20 || formData.name.length > 60) {
      newErrors.name = "Name must be between 20 and 60 characters";
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter valid email";
    }

    // Address Validation
    if (formData.address.length > 400) {
      newErrors.address = "Address cannot exceed 400 characters";
    }

    // Password Validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,16}$/;

    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must contain uppercase, special character and be 8-16 chars";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async (e, formData) => {
    e.preventDefault();

    try {
      console.log(formData);
      const res = await signupUser(formData);

      alert(res.message);

      navigate("/user/login");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.signupCard}>
        <h1>Create Account</h1>

        <p className={styles.subtitle}>Join Roxiler Store Rating Platform</p>

        <form
          className={styles.form}
          onSubmit={(e) => handleSignup(e, formData)}
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
          />

          {errors.name && <p className={styles.error}>{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
          />

          {errors.email && <p className={styles.error}>{errors.email}</p>}

          <textarea
            name="address"
            placeholder="Enter your address"
            rows="4"
            value={formData.address}
            onChange={handleChange}
            autoComplete="street-address"
          />

          {errors.address && <p className={styles.error}>{errors.address}</p>}

          <div className={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Create password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="new-password"
            />

            <span
              className={styles.showPassword}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          {errors.password && <p className={styles.error}>{errors.password}</p>}

          <button type="submit">Sign Up</button>
        </form>

        <p className={styles.loginText}>
          Already have an account?
          <span onClick={() => navigate("/user/login")}> Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
