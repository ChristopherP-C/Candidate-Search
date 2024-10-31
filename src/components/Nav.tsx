import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const currentPage = useLocation().pathname;
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className={currentPage === "/" ? "active" : ""}>
            Candidate Search
          </Link>
        </li>
        <li>
          <Link to="/SavedCandidates" className={currentPage === "/SavedCandidates" ? "active" : ""}>
            Saved Candidates
          </Link>
        </li>
      </ul>
    </nav>
  )
};

export default Nav;
