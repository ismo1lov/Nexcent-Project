import '../styles/Community.css'
import Card from './card'

const Community = ()=>{
    return(
        <section className='community'>
            <div className="container">
                <div className="community-content">
                    <h1  data-aos="zoom-out">Manage your entire community<br/>in a single system</h1>
                    <p  data-aos="zoom-out">Who is Nextcent suitable for?</p>
                    <Card/>
                </div>
            </div>
        </section>
    )
}

export default Community