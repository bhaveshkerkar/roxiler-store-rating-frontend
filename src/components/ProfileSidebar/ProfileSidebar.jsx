import { useSelector, useDispatch } from "react-redux";
import styles from "./ProfileSidebar.module.css";
import { logout } from "../../stores/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { changePassword } from "../../services/authService";
import { useState } from "react";

const ProfileSidebar = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((store) => store.auth);

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    setIsOpen(false);
    toast.success("Logout Successful!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePasswordChange(passwordData);
  };

  const handlePasswordChange = async (data) => {
    try {
      await changePassword(user.role, data);
      toast.success("Password updated");

      setShowOldPassword(false);
      setShowNewPassword(false);
      setShowPasswordForm(false);
      setPasswordData({
        oldPassword: "",
        newPassword: "",
      });
      setIsOpen(false);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.active : ""}`}>
      <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
        ✕
      </button>

      <div className={styles.profileSection}>
        <div className={styles.avatar}>👤</div>

        <h2>{user.name}</h2>

        <p>{user.email}</p>

        <span>Role: {user.role}</span>
      </div>

      <div className={styles.menu}>
        <button onClick={() => setShowPasswordForm(!showPasswordForm)}>
          Update Password
        </button>

        {showPasswordForm && (
          <form className={styles.passwordForm} onSubmit={handleSubmit}>
            <div className={styles.passwordContainer}>
              <input
                className={styles.passwordInput}
                type={showOldPassword ? "text" : "password"}
                name="oldPassword"
                placeholder="Old Password"
                value={passwordData.oldPassword}
                onChange={handleChange}
                required
              />

              <span
                className={styles.showPassword}
                onClick={() => setShowOldPassword(!showOldPassword)}
              >
                {showOldPassword ? "Hide" : "Show"}
              </span>
            </div>

            <div className={styles.passwordContainer}>
              <input
                className={styles.passwordInput}
                type={showNewPassword ? "text" : "password"}
                name="newPassword"
                placeholder="New Password"
                value={passwordData.newPassword}
                onChange={handleChange}
                required
              />

              <span
                className={styles.showPassword}
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? "Hide" : "Show"}
              </span>
            </div>

            <button className={styles.saveBtn} type="submit">
              Save Password
            </button>
          </form>
        )}
      </div>

      <button className={styles.logoutBtn} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default ProfileSidebar;
