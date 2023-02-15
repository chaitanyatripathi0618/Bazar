import logo from "../Assets/logo.svg";
import'./Navbar.css';
import { useSelector } from "react-redux";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SearchIcon from '@mui/icons-material/Search';
import NavList from "./NavList";
import { Link } from 'react-router-dom';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useState } from "react";

//redux-persist
function Navbar({getInputValue}) {
  const [searchText, setSearchText] = useState("");
  const cartProducts=useSelector((store)=>store.cart);
  let nCartItems=0;
  cartProducts.map((productObj)=>{
    nCartItems+= productObj.qty;
  })


  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchText(value);

    getInputValue(searchText);
}

  return (
    <div>
      <div className="header">
      <div className="imgdiv">
        <Link to="/home">
        <img src={logo} className="logo"/>
        </Link>
      </div>
      <div className="divmenu">
      <SearchIcon className="Search"/>
      <input type="search" placeholder="Searching for..."
      value={searchText} 
      onChange={handleInputChange}
      />
      </div>
      <div className="used">
        <div className="user">
          <Link to="/user">
          <Person2OutlinedIcon className="icon" />
          </Link>
        </div>
        <div className="bag">
          <Link to="/cart">
            <ShoppingBagOutlinedIcon className="icon"/>
          </Link>
          <div id="cartItem">
          <p>{nCartItems}</p>
          </div>
        </div>
      </div>
      </div>
      
    </div>
    
  );
}
export default Navbar;
