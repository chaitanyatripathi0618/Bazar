import './Advertise.css';
import im from "../../Assets/ban.jpg";
import im2 from "../../Assets/perfume.jpg";
import im3 from "../../Assets/ring.jpg";
import im4 from "../../Assets/bag.jfif"

function Offer(){

    return(
        <div>
            <h2 className='brandhead'>Offers</h2>
            <div className='forher'>
                <div>
                <img className="forherimg" src={im}/>
                <h2>For her</h2>
                <p>Hand Bags <span>60% OFF</span></p>
                </div>
                <div className='divbag'>
                    <img id="bagher" src={im4}/>
                </div>

            </div>
            <div className='offers2'>
            <div className='offeri'>
                <img className="perfume" src={im2}/>
            </div>
            <div className='offeri2'>
                <img  className="ring" src={im3}/>
            </div>
          
       

            </div>

        </div>
    
    )
}
export default Offer;