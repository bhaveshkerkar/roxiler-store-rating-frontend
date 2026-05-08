import styles from "./FeaturedStores.module.css";

const stores = [
  {
    id: 1,
    name: "ABC Mart",
    address: "Mumbai, Maharashtra",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Fresh Market",
    address: "Pune, Maharashtra",
    rating: 4.2,
  },
  {
    id: 3,
    name: "Daily Needs",
    address: "Bangalore, Karnataka",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Smart Store",
    address: "Hyderabad, Telangana",
    rating: 4.3,
  },
];

const FeaturedStores = () => {
  return (
    <section className={styles.featuredStores}>
      <div className={styles.container}>
        <h2>Featured Stores</h2>
        <p>Popular stores rated by users.</p>

        <div className={styles.storeGrid}>
          {stores.map((store) => (
            <div key={store.id} className={styles.card}>
              <h3>{store.name}</h3>
              <p>{store.address}</p>
              <span>⭐ {store.rating} / 5</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStores;