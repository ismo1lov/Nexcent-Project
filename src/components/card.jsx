import "../styles/Community.css";

import Icon1 from "../assets/card-icon-1.svg";
import Icon2 from "../assets/card-icon-2.svg";
import Icon3 from "../assets/card-icon-3.svg";

const Card = () => {
  return (
    <div className="card-box">
        <div data-aos="fade-right" className="card">
          <img src={Icon1} alt='card-icon' className="card-icon"/>
          <h2 className="title">Membership<br />Organisations</h2>
          <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>

        <div data-aos="zoom-in-up" className="card">
          <img src={Icon2} alt='card-icon' className="card-icon"/>
          <h2 className="title">National<br />Associations</h2>
          <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>

        <div data-aos="fade-left" className="card">
          <img src={Icon3} alt='card-icon' className="card-icon"/>
          <h2 className="title">Clubs And<br />Groups</h2>
          <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
    </div>
  );
};

export default Card;
