import '../styles/Update.css'
import image1 from '../assets/image-2.svg'
import image2 from '../assets/image-3.svg'
import image3 from '../assets/image-4.svg'


const Description = ()=>{
    return(
        <div className="description">
            <div data-aos="zoom-out" className="card">
                <img src={image1} alt="image" />
                <div>
                    <p>What are your safeguarding responsibilities and how can you manage them?</p>
                    <button className='btn-secondary'>Readmore →</button>
                </div>
            </div>
            <div data-aos="zoom-out" className="card">
                <img src={image2} alt="image" />
                <div>
                    <p>What are your safeguarding responsibilities and how can you manage them?</p>
                    <button className='btn-secondary'>Readmore →</button>
                </div>
            </div>
            <div data-aos="zoom-out" className="card">
                <img src={image3} alt="image" />
                <div>
                    <p>What are your safeguarding responsibilities and how can you manage them?</p>
                    <button className='btn-secondary'>Readmore →</button>
                </div>
            </div>
        </div>
    )
}

export default Description