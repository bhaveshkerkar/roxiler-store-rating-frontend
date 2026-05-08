import { useNavigate } from "react-router-dom";

import styles from "./AdminDashboard.module.css";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <button
          className={styles.logoutButton}
          onClick={() => navigate("/user/login")}
        >
          Logout
        </button>
      </div>

      <h1 className={styles.heading}>Admin Dashboard</h1>

      <div className={styles.statsGrid}>
        <div className={styles.card}>
          <h2>Total Users</h2>
          <p>120</p>
        </div>

        <div className={styles.card}>
          <h2>Total Stores</h2>
          <p>45</p>
        </div>

        <div className={styles.card}>
          <h2>Total Ratings</h2>
          <p>560</p>
        </div>
      </div>

      <div className={styles.tableSection}>
        <h2>Registered Stores</h2>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Rating</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Fresh Mart</td>
              <td>fresh@gmail.com</td>
              <td>Mumbai</td>
              <td>4.5</td>
            </tr>

            <tr>
              <td>Tech Plaza</td>
              <td>tech@gmail.com</td>
              <td>Pune</td>
              <td>4.2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
