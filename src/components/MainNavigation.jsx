import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/html">HTML</Link>
          </li>
          <li>
            <Link to="/css">CSS</Link>
          </li>
          <li>
            <Link to="/js">JS</Link>
          </li>
          <li>
            <Link to="/webfejlesztes">WEBFEJLESZTES</Link>
          </li>
          <li>
            <Link to="/python">PYTHON</Link>
          </li>
          <li>
            <Link to="/mysql">MYSQL</Link>
          </li>
          <li>
            <Link to="/postgresql">POSTGRESQL</Link>
          </li>
          <li>
            <Link to="/git">GIT</Link>
          </li>
          <li>
            <Link to="/docker">DOCKER</Link>
          </li>
          <li>
            <Link to="/java">JAVA</Link>
          </li>
          <li>
            <Link to="/csharp">C#</Link>
          </li>
          <li>
            <Link to="/winform">WIN FORM</Link>
          </li>
          <li>
            <Link to="/linux">LINUX</Link>
          </li>
          <li>
            <Link to="/windows">WINDOWS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
