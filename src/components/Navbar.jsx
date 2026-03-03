import "../styles/Navbar.css";

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
            <img src="../public/logo.svg" className="logo" />
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
