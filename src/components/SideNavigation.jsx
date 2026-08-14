import { Link } from "react-router-dom";
import classes from "./SideNavigation.module.css";

export default function SideNavigation({ links }) {
  return (
    <nav className={classes.nav}>
      <ul>
        {links.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
