import '../styles/Achievements.css'
import Icon1 from '../assets/achev-icon-1.svg'
import Icon2 from '../assets/card-icon-3.svg'
import Icon3 from '../assets/achev-icon-3.svg'
import Icon4 from '../assets/achev-icon-4.svg'


const Status = () => {
  return (
    <div data-aos="zoom-in" className='status'>
        <div className='parent-box'>
            <div className='child-box'>
                <img src={Icon1} alt="icon" />
                <div>
                    <h3>2,245,341</h3>
                    <p>Members</p>
                </div>
            </div>
            <div className='child-box'>
                <img src={Icon2} alt="icon" />
                <div>
                    <h3>46,328</h3>
                    <p>Clubs</p>
                </div>
            </div>
        </div>

        <div className='parent-box'>
            <div className='child-box'>
                <img src={Icon3} alt="icon" />
                <div>
                    <h3>828,867</h3>
                    <p>Event Booking</p>
                </div>
            </div>
            <div className='child-box child-4'>
                <img src={Icon4} alt="icon" />
                <div>
                    <h3>1,926,436</h3>
                    <p>Payments</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Status;