
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../styles/nav.css";
const Nav = () => {
  return (
    // <nav>
    //   <div className="head">
    //     <h3>JobHub</h3>
    //     <p>Connecting Talent with Opportunity</p>
    //   </div>
    //   <main>
    //     <Link to={"/"}>Home</Link>
    //     <HashLink to={"/#About"}>About</HashLink>
    //     <Link to={"/jobs"}>Jobs</Link>
    //     <Link to={"/login"}>Login</Link>
    //     <Link to={"/register"}>Register</Link>
    //   </main>
    // </nav>
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <h5 className="fs-3 mb-0 font-bold font-color">JobHub</h5>
          <p className="mb-0 title-font font-medium font-color">
            Connecting - Talent with Opportunity
          </p>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="navbar-toggler-icon"></div>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <ul
            className="navbar-nav mb-2 mb-lg-0 font-medium"
            style={{ gap: "10px" }}
          >
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active font-color"
                aria-current="page"
                href="#"
              >
                <span>Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <HashLink to="/#About" className="nav-link active font-color">
                <span> About</span>
              </HashLink>
            </li>
            <li className="nav-item">
              <Link to="/jobs" className="nav-link active font-color" href="#">
                <span> Jobs</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login/jobseekers" className="nav-link active">
                <button className="mybtn">Login</button>
              </Link>
            </li>
            <li className="nav-item font-color">
              <Link to="/register" className="nav-link active">
                <button className="mybtn">sign Up</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
