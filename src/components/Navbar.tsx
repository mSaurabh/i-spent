import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

interface INavBarProps {}

export const Navbar = (props: INavBarProps) => {
  return (
    <nav className={`${styles.navbar}`}>
      <ul>
        <li className={styles.title}>
          <Link to="/">iSpentIt</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
};
