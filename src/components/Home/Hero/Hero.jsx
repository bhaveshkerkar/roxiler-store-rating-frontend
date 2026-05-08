import styles from "./Hero.module.css";
import { useNavigate } from "react-router-dom";

import herosectionVideo from "../../../assets/Home/Hero.mp4";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.hero}>
      <div className={styles.video_background}>
        <video autoPlay muted loop>
          <source src={"  "} type="video/mp4" />
          {/* Your browser does not support the video tag. */}
        </video>
      </div>

      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1>Discover Stores For You</h1>
        <p>
          Explore registered stores, check ratings, and share your own
          experience with honest reviews.
        </p>

        <div className={styles.buttons}>
          <button
            className={`btn ${styles.exploreStoresBtn}`}
            onClick={() => navigate("/roxiler/explore-stores")}
          >
            Explore Stores
          </button>

          <button
            className={`btn ${styles.getStartedBtn}`}
            onClick={() => navigate("/roxiler/user/signup")}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
