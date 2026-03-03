import "../styles/Navbar.css";
import Logo from '../assets/navbar-logo.svg'

const Navbar = () => {
  const links = ["Home", "Features", "Community", "Blog", "Pricing"];

  return (
    <header
      data-aos="fade-down"
      data-aos-easing="linear"
      className="navbar"
    >

      <div className="container">
        <div className="navbar-content">
          <a href="#">
            <img src={Logo} className="logo" />
          </a>
          <ul className="menu">
            {links.map((link) => {
              return (
                <a key={link} href={`#${link.toLowerCase()}`} className="link">
                  {link}
                </a>
              );
            })}
            <button className="btn">Register Now →</button>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
