import'./NavList.css';
import { Link } from "react-router-dom";

function NavList(){
    return(
        <div className='navbarrrrr'>
            <ul>
                <Link to="/products">
                <li>
                    Shopping
                </li>
                </Link>
                <Link to ="/learn">
                <li>
                    Learn & Grow
                </li>
                </Link>
            </ul>
        </div>
    );
}
export default NavList;