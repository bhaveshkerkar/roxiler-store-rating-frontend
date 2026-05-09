import styles from "./FeaturedStores.module.css";

const stores = [
  {
    id: 1,
    name: "ABC Mart",
    address: "Mumbai, Maharashtra",
    rating: 4.5,
    image: "/store1.jpeg",
  },
  {
    id: 2,
    name: "Fresh Market",
    address: "Pune, Maharashtra",
    rating: 4.2,
    image: "/store2.jpeg",
  },
  {
    id: 3,
    name: "Daily Needs",
    address: "Bangalore, Karnataka",
    rating: 4.7,
    image: "/store3.jpeg",
  },
  {
    id: 4,
    name: "Smart Store",
    address: "Hyderabad, Telangana",
    rating: 4.3,
    image: "/store4.jpeg",
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
            <div
              key={store.id}
              className={styles.card}
              style={{
                backgroundImage: `url(${store.image})`,
              }}
            >
              <div className={styles.overlay}></div>

              <div className={styles.cardContent}>
                <h3>{store.name}</h3>

                <p>{store.address}</p>

                <span>⭐ {store.rating} / 5</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStores;
