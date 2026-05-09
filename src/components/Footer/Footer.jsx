import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";

import logo from "../../assets/storesphere.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.my_footer}>
      <div className={styles.footer_container}>
        {/* logo */}
        <div className={`${styles.section} ${styles.logoSection}`}>
          <Link
            to="/roxiler"
            className="link-body-emphasis text-decoration-none"
          >
            <div className={styles.logo_container}>
              <img src={logo} className={styles.logo} alt="logo" />
              <p className={`${styles.logo_name}`}>
                Store <br /> Sphere
              </p>
            </div>
          </Link>
        </div>

        {/* Get in touch */}
        <div className={`${styles.section} ${styles.getInTouchSection}`}>
          <div className={styles.footer_list_heading}>GET IN TOUCH</div>
          <ul>
            <li>
              <IoMail /> storesphere9@gmail.com
            </li>
            <li>
              <IoMail /> spherestore003@gmail.com
            </li>
          </ul>
        </div>

        {/* Connect with us */}
        <div className={styles.section}>
          <div className={styles.footer_list_heading}>Connect With Us</div>
          <ul>
            <li>
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                // target="_blank"
                rel="noopener noreferrer"
                className={styles.social_link}
              >
                Instagram <FaInstagram className={styles.footer_icon} />
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                // target="_blank"
                rel="noopener noreferrer"
                className={styles.social_link}
              >
                Facebook <FaFacebook className={styles.footer_icon} />
              </Link>
            </li>
            {/* <li>
              Twitter <FaTwitter className={styles.footer_icon} />
            </li>
            <li>
              YouTube <FaYoutube className={styles.footer_icon} />
            </li> */}
          </ul>
        </div>
      </div>

      <hr />
      {/* copy right */}
      <p className={`${styles.copyRight}`}>© 2026 Roxiler Stores, Inc</p>
      <div className={styles.footer_icons}>
        {/* <FaInstagram className={styles.footer_icon} /> */}
        {/* <FaFacebook className={styles.footer_icon} />
        <FaTwitter className={styles.footer_icon} /> */}
      </div>
    </footer>
  );
};

export default Footer;
