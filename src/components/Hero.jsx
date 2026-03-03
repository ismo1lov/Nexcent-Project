import '../styles/Hero.css'
import illustration from '../assets/Illustration.png'

const Hero = ()=>{
    return(
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <div data-aos="fade-right">
                <h1>Lessons and insights <br /> <span>from 8 years</span></h1>
                <p>Where to grow your business as a photographer: site or social media?</p>
                <button className='btn'>Register</button>
              </div>
              <img data-aos="fade-left" src={illustration} className="illustration"/>
            </div>
          </div>
        </section>
    )
}

export default Hero