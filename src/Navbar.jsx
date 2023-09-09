import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Site Name
      </Link>
      <ul>
        <CustomLink to="/pricing">Pricing</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  // The useResolvedPath hook resolves the 'pathname' of the location in the given 'to' value against the pathname of the current location.
  // In other words, the hook allows you to take a relative or absolute path and combines it with the current path that you are on
  // and gives you the full absolute path that you will be accessing
  const resolvedPath = useResolvedPath(to);

  // Add end: true to the object to ensure that the entire path has to match. We do not want partial matches.
  // That way we are making sure not to compare the pathname to the link of for example /about/career
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
