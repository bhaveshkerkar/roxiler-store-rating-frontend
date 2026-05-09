import styles from "./StoreCard.module.css";

const StoreCard = ({
  store,
  handleRating,
  setSelectedStore,
  submittedRatings,
  setRatingModalStore,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.storeIcon}>🏪</div>

      <h2>{store.name}</h2>

      <p>{store.address}</p>

      <div className={styles.rating}>⭐ Overall Rating: {store.rating}</div>

      <div className={styles.userRating}>
        <p>Your Rating:</p>

        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={styles.star}
            onClick={() => handleRating(store.id, star)}
          >
            {star <= store.userRating ? "⭐" : "☆"}
          </span>
        ))}
      </div>

      <div className={styles.buttonGroup}>
        <button onClick={() => setRatingModalStore(store)}>
          {submittedRatings.includes(store.id) ? "Update Rating" : "Rate Store"}
        </button>

        <button onClick={() => setSelectedStore(store)}>Details</button>
      </div>
    </div>
  );
};

export default StoreCard;
