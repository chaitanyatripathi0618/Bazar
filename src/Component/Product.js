import "./Product.css";
import { Link } from "react-router-dom";
import axios from "axios";
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import Shopping from "../Assets/shopping.json";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Footer from "./Footer";
import Navbar from './Navbar'
import { useDispatch } from "react-redux";
import { addToCart } from "./features/cart";

function Product() {
  const dispatch = useDispatch();
  const handleAddToCart = (a) => {
    dispatch(addToCart(a));
  };
  const [category, setCategory] = useState("all");
  const [showProducts, setShowProducts] = useState([]);

  const [isLoading, setLoading] = useState(false);
  const [products, setProducts] = useState([]); 
  const [isError, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    const promise = axios.get("https://fakestoreapi.com/products");
    promise.then(function (response) {
        setProducts(response.data);
        setShowProducts(response.data);
        setLoading(false);
    }).catch(function (error) {
        console.log("Error: ", error);
        setLoading(false);
        setError(true);
    });
}, []);
  const handleSelect = (event) => {
    const cat = event.target.value;
    setCategory(cat);

    // take copy of the state
    let updatedProducts = [...products];

    if (cat !== "all") {
        // modify the copy
        updatedProducts = updatedProducts.filter((curProduct) => {
            return curProduct.category === cat;
        });
    }
    // give the copy to setState
    setShowProducts(updatedProducts);
}
const getInputValue = (inputValue) => {
  let updatedProducts = [...products];

  updatedProducts = updatedProducts.filter((curProduct) => {
      return curProduct.title.toLowerCase().includes(inputValue.toLowerCase());
  });

  setShowProducts(updatedProducts);
}

  return (
    <>
    <Navbar getInputValue={getInputValue}/>
    <div className='navbar'>
            <div className='Category'>
                <GridViewRoundedIcon className='grid'/>
            <select onChange={handleSelect} value={category}>
                <option value="all">All</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewellery</option>
                <option value="men's clothing">Men's clothing</option>
                <option value="women's clothing">Women's clothing</option>
                </select>
             </div>
            <div className='navlist'>
                

            </div>
        </div>
      {isLoading ? (
        <Lottie id="animation" animationData={Shopping} />
      ) : (
        <div className="productpage">
          {showProducts.map((item) => {
            return (
              <div className="card">
                <div className="cardimg">
                  <Link to={`/products/${item.id}`}>
                  <img id="pimg" src={item.image} />
                  </Link>
                </div>
                <div className="cardcontent">
                  <p>{item.title}</p>
                  <p id="price">Price: $ {item.price}</p>
                </div>
                <button
                id="addbtn"
                  onClick={() => {
                    handleAddToCart(item);
                  }}
                >
                  Add To Cart
                </button>
              </div>
            );
          })}
        </div>
      )}
       {isError && <p>Some error occurred!</p>}
      <Footer/>
    </>
  );
}
export default Product;
