import'./Poster.css';
import po from "../Assets/po.jpg";
import poster from "../Assets/poster1.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import poster2 from "../Assets/poster2.jpg"
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

function Posters() {
  return (
    <div>
        <div className="background">
            <div className="poster">
            <img id="posterimg"src={po} />
            <div className="content">
                <p className='heading'>LIFESTYLE COLLECTION</p>
                <h2 className='men'>MEN</h2>
                <p className='sale'>SALE UP TO <span>30% OFF</span></p>
                <p className='order'>Get Free Shipping on orders over $99.00 </p>
                <button className='btn'>Shop Now</button>
                </div>
            
                <div className='sidePoster'>
                    <div className='p1'>
                        <img id="p1i" src={poster}/>
                        <div className='scontent'>
                            <p >NEW ARRIVALS</p>
                            <h4>SUMMER SALE 20% OFF</h4>
                            <div className='abtn'>
                            <button className='shopbtn'>Shop Now</button>
                            <ArrowForwardOutlinedIcon className='arrow'/>
                            </div>
                        </div>

                    </div>
                    <div className='p2'>
                        <img id="p1i" src={poster2}/>
                        <div className='scontent'>
                            <p >GAMING 4K</p>
                            <h4>DESKTOP & LAPTOPS</h4>
                            <div className='abtn'>
                            <button className='shopbtn'>Shop Now</button>
                            <ArrowForwardOutlinedIcon className='arrow'/>
                            </div>
                        </div>
                         
                    </div>

                </div>
            </div>
        </div>
    </div>
  );
}
export default Posters;

