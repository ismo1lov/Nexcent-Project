import '../styles/Achievements.css'
import Status from './status'

const Achivements = ()=>{
    return(
        <section className="achievements">
            <div className="container">
                <div className="achievements-content">
                    <div data-aos="zoom-out" className="text-box">
                        <h1>Helping a local<br/><span>business reinvent itself</span></h1>
                        <p>We reached here with our hard work and dedication</p>
                    </div>
                    <Status/>
                </div>
            </div>
        </section>
    )
}

export default Achivements