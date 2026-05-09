import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import StoreCard from "./StoreCard";
import StoreDetailsModal from "./StoreDetailsModal";
import RatingModal from "./RatingModal";

import { useEffect } from "react";
import api from "../../services/api";

import ProfileSidebar from "../ProfileSidebar/ProfileSidebar";

import styles from "./ExploreStores.module.css";
import { useSelector } from "react-redux";

const ExploreStores = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  const [sortOption, setSortOption] = useState("");

  const [selectedStore, setSelectedStore] = useState(null);

  const [ratingModalStore, setRatingModalStore] = useState(null);

  const [storesData, setStoresData] = useState([]);

  const { isLoggedIn } = useSelector((state) => state.auth);

  const fetchStores = async () => {
    try {
      const res = await api.get("/stores");

      setStoresData(res.data.stores);
    } catch (error) {
      toast.error("Failed to fetch stores");
    }
  };

  // fetch stores data
  useEffect(() => {
    fetchStores();
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSubmitRating = async (storeId, rating) => {
    try {
      const selectedStore = storesData.find((store) => store.id === storeId);

      if (selectedStore.userRating != null) {
        await api.put("/user/rate", {
          storeId,
          rating,
        });
      } else {
        await api.post("/user/rate", {
          storeId,
          rating,
        });
      }

      toast.success("Rating submitted successfully!");

      fetchStores();
    } catch (error) {
      if (error.response?.data?.message == "Access denied. Token missing") {
        toast.error("Please Login Before Submiting Rating!!!");
      } else {
        toast.error(error.response?.data?.message || "Rating failed");
      }
    }
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
              setSelectedStore={setSelectedStore}
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
