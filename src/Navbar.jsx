import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Site Name
      </Link>
      <ul>
        <NavLink to="/pricing">Pricing</NavLink>
        <NavLink to="/about">About</NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
