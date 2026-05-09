import styles from "./Hero.module.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.badge}>⭐ Roxiler Store Rating Platform</div>

        <h1>
          Find. Rate. Discover.
          <span>The Best Stores Near You.</span>
        </h1>

        <p>
          Explore trusted stores, share honest ratings, and help others make
          smarter shopping decisions every day.
        </p>

        <div className={styles.features}>
          <div className={styles.featureCard}>
            <h3>🔍 Discover</h3>
            <p>Find stores that match your needs.</p>
          </div>

          <div className={styles.featureCard}>
            <h3>⭐ Rate</h3>
            <p>Share your real experience instantly.</p>
          </div>

          <div className={styles.featureCard}>
            <h3>👥 Help Others</h3>
            <p>Guide users with genuine feedback.</p>
          </div>
        </div>

        <div className={styles.buttons}>
          <button
            className={styles.exploreBtn}
            onClick={() => navigate("/explore-stores")}
          >
            Explore Stores →
          </button>

          <button
            className={styles.startedBtn}
            onClick={() => navigate("/user/signup")}
          >
            Get Started →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
