import './Advertise.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import im from "../../Assets/levis.png";
import im2 from "../../Assets/lotto.png";
import im3 from "../../Assets/alibaba.png";
import im4 from "../../Assets/samsung.png";
import im5 from "../../Assets/raymond.png";
import im6 from "../../Assets/pepe.png";

function Advertise(){

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <div>
            <h2 className='brandhead'>Top Brands</h2>
            <div className='slide'>
        <Slider {...settings}>
            <div className='Postimg'>
                <img className="images" src={im}/>
            </div>
            <div className='Postimg'>
                <img className="images" src={im2}/>
            </div>
            <div className='Postimg'>
                <img  className="images" src={im3}/>
            </div>
            <div className='Postimg'>
                <img className="images" src={im4}/>
            </div>
            <div className='Postimg'>
                <img className="images" src={im5}/>
            </div> 
            <div className='Postimg'>
                <img className="images" src={im6}/>
            </div> 

        </Slider>
       

    </div>

        </div>
    
    )
}
export default Advertise;