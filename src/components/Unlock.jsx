import '../styles/Unlock.css'
import Frame from '../assets/Frame-1.svg'

const Unlock = ()=>{
    return(
        <section className="unlock">
            <div className="container">
                <div className="unlock-content">
                    <img data-aos="fade-right" src={Frame}  alt="Frame"/>
                    <div  data-aos="fade-left" className="text-box">
                        <h1>The unseen of spending three<br />years at Pixelgrade</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                        <button className='btn'>Learn More</button>
                    </div>
                </div>
            </div>            
        </section>
    )
}

export default Unlock