import { useSelector } from "react-redux";
import styles from "./StoreCard.module.css";

const StoreCard = ({ store, setSelectedStore, setRatingModalStore }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <div className={styles.card}>
      <div className={styles.storeIcon}>🏪</div>

      <h2>{store.name}</h2>

      <p>{store.address}</p>

      <div className={styles.rating}>
        ⭐ Overall Rating: {store.overallRating}
      </div>

      {isLoggedIn ? (
        <div className={styles.userRating}>
          <p>Your Rating:</p>

          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className={styles.star}>
              {star <= store.userRating ? "⭐" : "☆"}
            </span>
          ))}
        </div>
      ) : (
        <></>
      )}

      <div className={styles.buttonGroup}>
        <button onClick={() => setRatingModalStore(store)}>
          {store.userRating != null ? "Update Rating" : "Give Rating"}
        </button>

        <button onClick={() => setSelectedStore(store)}>Details</button>
      </div>
    </div>
  );
};

export default StoreCard;
