import "../styles/Footer.css";
import List from "./lists";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div data-aos="fade-down" className="footer-content">
          <div className="logo-box">
            <a href="#"><img src="./footer-logo.svg" alt="logo" /></a>
            <p>Copyright © 2020 Landify UI Kit.<br />All rights reserved</p>
            <div className="social-box">
                <a href="https://www.instagram.com"><i class="bi bi-instagram"></i></a>
                <a href="https://dribble.com"><i class="bi bi-dribbble"></i></a>
                <a href="https://twitter.com"><i class="bi bi-twitter"></i></a>
                <a href="https://www.youtube.com"><i class="bi bi-youtube"></i></a>
            </div>
          </div>
          <List/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
