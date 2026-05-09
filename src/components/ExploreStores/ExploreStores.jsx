import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import StoreCard from "./StoreCard";
import StoreDetailsModal from "./StoreDetailsModal";
import RatingModal from "./RatingModal";

import ProfileSidebar from "../ProfileSidebar/ProfileSidebar";

import styles from "./ExploreStores.module.css";

const initialStores = [
  {
    id: 1,
    name: "Fresh Mart",
    address: "Andheri, Mumbai",
    rating: 4.5,
    userRating: 4,
    review: "",
  },
  {
    id: 2,
    name: "Tech Plaza",
    address: "Pune, Maharashtra",
    rating: 3.8,
    userRating: 5,
    review: "",
  },
  {
    id: 3,
    name: "Coffee Corner",
    address: "Bandra, Mumbai",
    rating: 4.2,
    userRating: 3,
    review: "",
  },
];

const ExploreStores = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  const [sortOption, setSortOption] = useState("");

  const [selectedStore, setSelectedStore] = useState(null);

  const [ratingModalStore, setRatingModalStore] = useState(null);

  const [submittedRatings, setSubmittedRatings] = useState([]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [storesData, setStoresData] = useState(initialStores);

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleRating = (storeId, rating) => {
    const updatedStores = storesData.map((store) =>
      store.id === storeId
        ? {
            ...store,
            userRating: rating,
          }
        : store,
    );

    setStoresData(updatedStores);
  };

  const handleSubmitRating = (storeId, rating) => {
    const updatedStores = storesData.map((store) =>
      store.id === storeId
        ? {
            ...store,
            userRating: rating,
          }
        : store,
    );

    setStoresData(updatedStores);

    if (!submittedRatings.includes(storeId)) {
      setSubmittedRatings([...submittedRatings, storeId]);
    }

    toast.success("Rating submitted successfully!");
  };

  const filteredStores = storesData.filter(
    (store) =>
      store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.address.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const sortedStores = [...filteredStores].sort((a, b) => {
    if (sortOption === "highest") {
      return b.rating - a.rating;
    }

    if (sortOption === "lowest") {
      return a.rating - b.rating;
    }

    if (sortOption === "az") {
      return a.name.localeCompare(b.name);
    }

    return 0;
  });

  return (
    <div className={styles.container}>
      {/* OLD LOGOUT BUTTON */}

      {/*
      <div className={styles.topBar}>
        <button
          className={styles.logoutButton}
          onClick={() => {
            localStorage.removeItem("isLoggedIn");

            toast.success(
              "Logged out successfully!"
            );

            navigate("/user/login");
          }}
        >
          Logout
        </button>
      </div>
      */}

      {isLoggedIn && (
        <div className={styles.topBar}>
          <button
            className={styles.profileBtn}
            onClick={() => setIsSidebarOpen(true)}
          >
            👤
          </button>
        </div>
      )}

      <h1 className={styles.heading}>Explore Stores</h1>

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search stores..."
          className={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className={styles.sortSelect}
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort By</option>

          <option value="highest">Highest Rated</option>

          <option value="lowest">Lowest Rated</option>

          <option value="az">A-Z</option>
        </select>
      </div>

      <div className={styles.storeGrid}>
        {filteredStores.length > 0 ? (
          sortedStores.map((store) => (
            <StoreCard
              key={store.id}
              store={store}
              handleRating={handleRating}
              setSelectedStore={setSelectedStore}
              submittedRatings={submittedRatings}
              setRatingModalStore={setRatingModalStore}
            />
          ))
        ) : (
          <h2 className={styles.noStore}>No Stores Found</h2>
        )}
      </div>

      <StoreDetailsModal
        selectedStore={selectedStore}
        setSelectedStore={setSelectedStore}
      />

      <RatingModal
        selectedStore={ratingModalStore}
        setSelectedStore={setRatingModalStore}
        handleSubmitRating={handleSubmitRating}
      />

      <ProfileSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
    </div>
  );
};

export default ExploreStores;
