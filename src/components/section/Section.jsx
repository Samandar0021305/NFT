
import "./section.css";


function Section(){
    return(
        <section className="section container">
            <div className="section-left">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            </div>
            <div className="section-right">
                <ul className="section-right-list">
                    <li>
                        <h4>17K</h4>
                        <p>Artwork</p>
                    </li>
                    <li>
                        <h4>4.5K</h4>
                        <p>Auctions</p>
                    </li>
                    <li>
                        <h4>23</h4>
                        <p>Artists</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Section;