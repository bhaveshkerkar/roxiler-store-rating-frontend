import { useState, useEffect } from "react";

import styles from "./RatingModal.module.css";

const RatingModal = ({
  selectedStore,
  setSelectedStore,
  handleSubmitRating,
}) => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (selectedStore) {
      setRating(selectedStore.userRating || 0);
    }
  }, [selectedStore]);

  // const [message, setMessage] = useState("");

  if (!selectedStore) return null;

  const submitHandler = () => {
    handleSubmitRating(selectedStore.id, rating);

    setSelectedStore(null);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button
          className={styles.closeBtn}
          onClick={() => setSelectedStore(null)}
        >
          ✕
        </button>

        <h2>Rate Store</h2>

        <div className={styles.storeInfo}>
          <p>
            <strong>Store:</strong> {selectedStore.name}
          </p>

          <p>
            <strong>Address:</strong> {selectedStore.address}
          </p>

          <p>
            <strong>Overall Rating:</strong> ⭐ {selectedStore.overallRating}
          </p>
        </div>

        <div className={styles.ratingSection}>
          <p>Your Rating</p>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} onClick={() => setRating(star)}>
                {star <= rating ? "⭐" : "☆"}
              </span>
            ))}
          </div>
        </div>

        {/* <textarea
          placeholder="Write your review..."
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        /> */}

        <button className={styles.submitBtn} onClick={submitHandler}>
          Submit Rating
        </button>
      </div>
    </div>
  );
};

export default RatingModal;
