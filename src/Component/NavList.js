import'./NavList.css';
import { Link } from "react-router-dom";

function NavList(){
    return(
        <div className='navbar'>
            <ul>
                <Link to="/products">
                <li>
                    Shopping
                </li>

                </Link>
            </ul>
        </div>
    );
}
export default NavList;