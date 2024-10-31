import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const currentPage = useLocation().pathname;
  // TODO: Add necessary code to display the navigation bar and link between the pages
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
