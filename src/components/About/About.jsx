import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <h1>About Roxiler Store Rating Platform</h1>

        <p>
          Discover, rate, and explore stores with a seamless and modern
          experience.
        </p>
      </div>

      <div className={styles.contentSection}>
        <div className={styles.card}>
          <h2>Our Mission</h2>

          <p>
            Our mission is to help users find the best stores through genuine
            ratings and reviews while helping store owners improve customer
            satisfaction.
          </p>
        </div>

        <div className={styles.card}>
          <h2>What We Offer</h2>

          <p>
            Users can search stores, submit ratings, explore store details, and
            interact with a clean and user-friendly platform built for modern
            experiences.
          </p>
        </div>

        <div className={styles.card}>
          <h2>Why Choose Us</h2>

          <p>
            We focus on simplicity, performance, responsive design, and smooth
            user experience for both customers and store owners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
