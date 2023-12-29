import { useState } from "react";
import Logo from "../assets/appLogo.png"
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img className="logo" src={Logo} alt="Food villa logo" />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toggleLogin = () => {
    setIsLoggedIn((prevState) => !prevState); // Toggle the login state
  };

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to={"/"}><li>Home</li></Link>
          <Link to={"/about"}><li>About</li></Link>
          <Link to={"/contact"}><li>Contact</li></Link>
          <li><i className="fa-solid fa-cart-shopping"></i></li>
          <li onClick={toggleLogin}>{isLoggedIn ? "Logout" : "Login"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
