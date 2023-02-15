import './footer.css'
import { Link } from "react-router-dom";
import Logo from "../Assets/logo.svg"
function Footer(){
    return(
    <div className='Footer'>
        <div className='div1'>
        <img src={Logo} />
            <p>About Bazar, it is a online platform for shopping every stuffs of once living in various discount offers</p>
        </div>
        <div className='div2'>
            <p>About Us</p>
            <ul>
               <Link to="/contact"><li>Careers</li></Link>
                <Link to="/contact"><li>Our Stores</li></Link>
                <Link to="/contact"><li>Our cares</li></Link>
                <Link to="/contact"><li>Terms & Conditions</li></Link>
                <Link to="/contact">  <li>Privacy Policy</li></Link>

            </ul>
        </div>
        <div className='div3'>
        <p>Customer Care</p>
            <ul>
                <li>Help Center</li>
                <li>How to Buy</li>
                <li>Track Your Order</li>
                <li>Corporate & Bulk Purchasing</li>
                <Link to="/contact"><li>Return $ Refund </li></Link>
            </ul>
        </div>
        <div className='div4'>
            <Link to="/contactinfo"> <p className='contact'>Contact Us</p></Link>
            <p className='p1'>1/8, 3rd floor, g Block Malviya Nagar, New Delhi-110017</p>
            <p className='email'>Email: bazar.help@gmail.com</p>
            <p className='phone'>Phone: +91 8908789234</p>
        </div>


    </div>
    )
}
export default Footer;