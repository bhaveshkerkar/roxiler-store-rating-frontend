import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import styles from "./ProfileSidebar.module.css";

const ProfileSidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const userRole = localStorage.getItem("role");

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.active : ""}`}>
      <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
        ✕
      </button>

      <div className={styles.profileSection}>
        <div className={styles.avatar}>👤</div>

        <h2>StoreSphere User</h2>

        <p>demo@storesphere.com</p>

        <span>Role: {userRole}</span>
      </div>

      <div className={styles.menu}>
        <button>Update Password</button>

        <button>My Ratings</button>

        <button>Account Settings</button>
      </div>

      <button
        className={styles.logoutBtn}
        onClick={() => {
          localStorage.removeItem("isLoggedIn");

          localStorage.removeItem("role");

          toast.success("Logged out successfully!");

          navigate("/user/login");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default ProfileSidebar;
