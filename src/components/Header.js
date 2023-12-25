
import Logo from "../../images/appLogo.png"

const Title = () => (
    <a href="/">
      <img className="logo" src={Logo} alt="Food villa logo" />
    </a>
  );
  
  // Header component for header section: Logo, Nav Items
  const Header = () => {
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li><i class="fa-solid fa-cart-shopping"></i></li>
          </ul>
        </div>
      </div>
    );
  };


  export default Header;