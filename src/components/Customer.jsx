import "../styles/Customer.css";
import Image from "../assets/image-1.svg";

const Customer = () => {
  return (
    <section className="customer">
      <div className="container">
        <div className="customer-content">
          <img data-aos="flip-up" src={Image} alt="image" />
          <div data-aos="flip-down" className="text-box">
            <p>
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <h3>Tim Smith</h3>
            <span>British Dragon Boat Racing Association</span>
            <div className="grid-box">
               <img className="logo" src="../images/Logo-1.svg" />
               <img className="logo" src="../images/Logo-2.svg" />
               <img className="logo" src="../images/Logo-3.svg" />
               <img className="logo" src="../images/Logo-4.svg" />
               <img className="logo" src="../images/Logo-5.svg" />
               <img className="logo" src="../images/Logo-6.svg" />
               <button className="btn-secondary">Meet all customers →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;
