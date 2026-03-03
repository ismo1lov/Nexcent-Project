import '../styles/Calendar.css'
import Frame from '../assets/Frame-2.svg'

const Calendar = ()=>{
    return(
        <section className="calendar">
            <div className="container">
                <div className="calendar-content">
                    <img data-aos="fade-left" src={Frame}  alt="Frame"/>
                    <div data-aos="fade-right" className="text-box">
                        <h1>How to design your site footer like<br />we did</h1>
                        <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                        <button className='btn'>Learn More</button>
                    </div>
                </div>
            </div>            
        </section>
    )
}

export default Calendar