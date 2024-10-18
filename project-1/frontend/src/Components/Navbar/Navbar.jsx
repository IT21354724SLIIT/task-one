import { assets } from "../../assets/assets";
import "./navbar.css"; // Make sure you import your CSS file

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        {/* Logo on the left */}
        <a href="" className="navbar-logo">
          <img src={assets.logo} alt="" width="80" height="80" />
        </a>

        {/* Centered navigation items */}
        <div className="nav-center">
          <ul className="navbar-nav">
            <li className="navbar-item">Home</li>
            <li className="navbar-item">Shop</li>
            <li className="navbar-item">About</li>
            <li className="navbar-item">Blog</li>
            <li className="navbar-item">Contact</li>
            <li className="navbar-item">Pages</li>
          </ul>
        </div>

        {/* Right-side items */}
        <div className="nav-right">
          <img src={assets.account} alt="" />
          <p className="login">Login/Register</p>
          <img src={assets.search} alt="" width="30" height="30" />
          <img src={assets.purchase} alt="" width="30" height="30" />
          <img src={assets.like} alt="" width="30" height="30" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
