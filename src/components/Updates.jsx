import '../styles/Update.css'
import Description from './description'

const Update = ()=>{
    return(
        <section className="update">
            <div className="container">
                <div className="update-content">
                    <h1 data-aos="zoom-out">Caring is the new marketing</h1>
                    <p data-aos="zoom-out">The Nextcent blog is the best place to read about the latest membership insights,<br />trends and more. See who's joining the community, read about how our community<br />are increasing their membership income and lot's more.​</p>
                    <Description/>
                </div>
            </div>
        </section>
    )
}

export default Update