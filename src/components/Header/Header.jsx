import styles from "./Header.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        {/* Logo */}
        <NavLink to="/roxiler">
          <div className={styles.logo}>
            <img src={logo} alt="roxiler Logo" />
          </div>
        </NavLink>

        {/* Navigation Menu */}
        <nav className={styles.navigation}>
          <ul>
            <li>
              <NavLink
                to="/roxiler"
                end
                className={({ isActive }) =>
                  isActive ? styles.activeLink : null
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/roxiler/explore-stores"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : null
                }
              >
                Explore Stores
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/roxiler/about"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : null
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/roxiler/contact"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : null
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className={styles.action_buttons}>
          <>
            <button
              className={`btn ${styles.login}`}
              onClick={() => {
                navigate("/roxiler/user/login");
              }}
            >
              Login
            </button>

            <button
              className={`btn  ${styles.signup}`}
              onClick={() => {
                navigate("/roxiler/user/signup");
              }}
            >
              Sign Up
            </button>
          </>
        </div>
      </div>
    </header>
  );
};

export default Header;
