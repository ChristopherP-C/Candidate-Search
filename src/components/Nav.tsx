import { Link, useLocation } from "react-router-dom";
import '../index.css';

const Nav = () => {
  const currentPage = useLocation().pathname;
  return (
    <nav className="nav">
      <ul className="nav-item">
        <li className="nav-link">
          <Link to="/" className={currentPage === "/" ? "active" : ""}>
            Candidate Search
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/SavedCandidates" className={currentPage === "/SavedCandidates" ? "active" : ""}>
            Saved Candidates
          </Link>
        </li>
      </ul>
    </nav>
  )
};

export default Nav;
