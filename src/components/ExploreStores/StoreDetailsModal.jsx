import styles from "./StoreDetailsModal.module.css";

const StoreDetailsModal = ({ selectedStore, setSelectedStore }) => {
  if (!selectedStore) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button
          className={styles.closeButton}
          onClick={() => setSelectedStore(null)}
        >
          ✖
        </button>

        <div className={styles.storeIcon}>🏪</div>

        <h2>{selectedStore.name}</h2>

        <p className={styles.address}>📍 {selectedStore.address}</p>

        <div className={styles.rating}>
          ⭐ Overall Rating: {selectedStore.rating}
        </div>

        <div className={styles.userRating}>
          Your Rating: {"⭐".repeat(selectedStore.userRating)}
        </div>

        <p className={styles.description}>
          Premium quality store with excellent customer service and fast
          delivery.
        </p>
      </div>
    </div>
  );
};

export default StoreDetailsModal;
