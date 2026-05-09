import { useNavigate } from "react-router-dom";

import styles from "./OwnerDashboard.module.css";
import { toast } from "react-toastify";

const OwnerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <button
          className={styles.logoutButton}
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

      <h1 className={styles.heading}>Store Owner Dashboard</h1>

      <div className={styles.ratingCard}>
        <h2>Average Store Rating</h2>

        <p>4.5 ⭐</p>
      </div>

      <div className={styles.tableSection}>
        <h2>Users Who Submitted Ratings</h2>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email</th>
              <th>Rating</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Rahul Sharma</td>
              <td>rahul@gmail.com</td>
              <td>5 ⭐</td>
            </tr>

            <tr>
              <td>Priya Patil</td>
              <td>priya@gmail.com</td>
              <td>4 ⭐</td>
            </tr>

            <tr>
              <td>Aman Verma</td>
              <td>aman@gmail.com</td>
              <td>4 ⭐</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OwnerDashboard;
