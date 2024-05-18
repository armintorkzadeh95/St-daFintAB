import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark fs-4 d-flex justify-content-between px-2 fixed-top">
      <NavLink to="/">
        <img
          src="img/logo.png"
          className="nav"
          alt="Logo"
          style={{ width: "60px", height: "80px" }}
        />
      </NavLink>

      <ul className="navbar-nav d-flex flex-row justify-content-center gap-2">
        <li className="nav-item active">
          <NavLink to="/" className="nav-link" style={{ color: "white" }}>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link" style={{ color: "white" }}>
            Booking
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link" style={{ color: "white" }}>
            Help
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link" style={{ color: "white" }}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
