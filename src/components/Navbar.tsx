import { Link } from "react-router-dom";
import Restore from "../assets/restore.svg";
// components
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
// styles
import styles from "./Navbar.module.css";

interface INavBarProps {}

export const Navbar = (props: INavBarProps) => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className={`${styles.navbar}`}>
      <ul>
        <li className={styles.title}>
          <Link to="/">iSpentIt</Link>
        </li>
        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li>Hello, {user.displayName}</li>
            <li>
              <button className="btn" onClick={logout}>
                Logout
              </button>
            </li>
            <li>
              <Link to="/deleted-transactions">
                <img
                  width={35}
                  height={35}
                  alt="Delete this recipe"
                  src={Restore}
                  className="restore"
                  style={{
                    marginTop: 15,
                    backgroundColor: "#555",
                    borderRadius: 5,
                    filter: "invert(60)",
                  }}
                />
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
