import '../styles/Footer.css'

const List = ()=>{
    return(
        <div className="lists">
            <div className="list-box">
                <h3 className='title'>Company</h3>
                <a href="#">About us</a>
                <a href="#">Blog</a>
                <a href="#">Contact us</a>
                <a href="#">Pricing</a>
                <a href="#">Testimonials</a>
            </div>
            <div className="list-box">
                <h3 className='title'>Support</h3>
                <a href="#">Help center</a>
                <a href="#">Terms of service</a>
                <a href="#">Legal</a>
                <a href="#">Privacy policy</a>
                <a href="#">Status</a>
            </div>
            <div className="list-box">
                <h3 className="title">Stay up to date</h3>
                <form action="">
                    <input type="email" name='email' placeholder='Your email adress'/>
                    <button className='input-btn'><i class="bi bi-send"></i></button>
                </form>
                
            </div>
        </div>
    )
}

export default List