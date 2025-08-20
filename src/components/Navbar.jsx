import { Link, NavLink } from "react-router-dom";
import { COMPANY_NAME } from "../utils/globals";
import logo from "../assets/logo.png"; // adjust path if needed

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent">
      <div className="container d-flex align-items-center justify-content-between">

        {/* Left: Logo + Company Name */}
        <Link to="/" className="d-flex align-items-center text-decoration-none">
          <img src={logo} alt="Logo" style={{ height: 40, marginRight: 10 }} />
          <span className="navbar-brand mb-0 h1 text-dark">{}</span>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Middle: Nav links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav gap-2">

            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  "nav-link px-3 py-2 rounded" +
                  (isActive ? " bg-secondary bg-opacity-50 text-black" : " bg-light text-black")
                }
                style={{ fontWeight: "500" }}
              >
                Home
              </NavLink>
            </li>

            {/* Products Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle px-3 py-2 rounded bg-light text-black"
                href="#!"
                id="productsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ fontWeight: "500" }}
              >
                Products
              </a>
              <ul className="dropdown-menu" aria-labelledby="productsDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/products/cable-laying-equipments">
                    Cable Laying Equipments
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/products/telecom-osp-materials">
                    Telecom OSP Materials
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/products/tools-test-equipments">
                    Tools & Test Equipments
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/products/pipe-hangers-supports">
                    Pipe Hangers & Supports
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/products/vibration-isolators">
                    Vibration Isolators
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/products/casters-wheels">
                    Casters & Wheels
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/products/manhole-accessories">
                    Manhole Accessories
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* Support Services Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle px-3 py-2 rounded bg-light text-black"
                href="#!"
                id="supportDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ fontWeight: "500" }}
              >
                Support Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="supportDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/support/service1">
                    Service 1
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/support/service2">
                    Service 2
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  "nav-link px-3 py-2 rounded" +
                  (isActive ? " bg-secondary bg-opacity-50 text-black" : " bg-light text-black")
                }
                style={{ fontWeight: "500" }}
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right: Contact Sales Button */}
        <Link
          to="/contact"
          className="btn btn-dark rounded-pill"
          style={{ minWidth: 130 }}
        >
          Contact Sales
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
