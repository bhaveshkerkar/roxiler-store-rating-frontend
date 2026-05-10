import { useState } from "react";

import styles from "./Header.module.css";

import { NavLink, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { logout } from "../../stores/slices/authSlice";

import ProfileSidebar from "../ProfileSidebar/ProfileSidebar";

import logo from "../../assets/storesphere.png";
import { toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state) => state.auth);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        {/* Logo */}

        <NavLink to="/">
          <div className={styles.logo}>
            <img src={logo} alt="StoreSphere Logo" />
          </div>
        </NavLink>

        {/* Navigation Menu */}

        <nav className={styles.navigation}>
          <ul>
            <li>
              <NavLink
                to="/"
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
                to="/explore-stores"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : null
                }
              >
                Explore Stores
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : null
                }
              >
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
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
          {!isLoggedIn ? (
            <>
              <button
                className={`btn ${styles.login}`}
                onClick={() => navigate("/user/login")}
              >
                Login
              </button>

              <button
                className={`btn ${styles.signup}`}
                onClick={() => navigate("/user/signup")}
              >
                Sign Up
              </button>
            </>
          ) : (
            <button
              className={styles.profileBtn}
              onClick={() => setIsSidebarOpen(true)}
            >
              👤
            </button>
          )}
        </div>
      </div>

      {isLoggedIn && (
        <ProfileSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      )}
    </header>
  );
};

export default Header;
