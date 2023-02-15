import Navbar from './Navbar.js';
import { useEffect, useState } from 'react';
import Shopping from "../Assets/shopping.json";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import './ProductPage.css';
import Footer from './Footer.js';
import { useDispatch } from "react-redux";
import StarIcon from '@mui/icons-material/Star';
import Lottie from "lottie-react";
import { addToCart } from "./features/cart";
function ProductPage(){

    const params = useParams();
    // const navigate = useNavigate();

    const productId = params.productId;
    const [state, setState] = useState();
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .then((response) => {
                console.log(response);
                setState(response.data);
                setLoading(false);
                console.log(response.data);
            })
    }, []);

    const dispatch = useDispatch();
    const handleAddToCart = (a) => {
    dispatch(addToCart(a));
  };

    return(
           <>
           <Navbar/>
           {
            isLoading ? <Lottie id="animation" animationData={Shopping} />:
            <div className="Content">
            <div className='imgContent'>{state && <img id="imgid" src={state.image}/>}</div>
            <div className='textcontent'>
            <h1 id="title">{state && state.title}</h1>
            <p id="category">Category: {state && state.category}</p>
            <hr/>
            <p id="price">Price: $ {state && state.price}</p>
            <p id="taxes">Including All Taxes</p>
            <div className="ratediv"><p>Ratings</p><StarHalfIcon/></div>
            <hr id="hr2"/>
            <div className="rate"><p id="ratep">{state && state.rating.rate}</p><StarIcon id="star"/></div>
            <p id="size">Size Chart </p>
            <div className='sizechart'>
                <div className='scl'><p>XXL</p></div>
                <div className='scl'><p>XL</p></div>
                <div className='scl'><p>L</p></div>
                <div className='scl'><p>M</p></div>
                <div className='scl'><p>S</p></div>
                <div className='scl'><p>XS</p></div>

            </div>
            <div className='btndiv'>
            <button id='plusbtn'>+</button>
            <button id='cartbtn' onClick={()=>{
                handleAddToCart(state)
            }}>Add to cart</button>
            <button id='minusbtn'>-</button>
            </div>
            <hr/>
            <div>
                <div className="delivery">
                    <h2>DELIVERY OPTION</h2>
                    <p>100% Original Produtcs</p>
                    <p>Pay on delivery might be available on certain products or above order of $50</p>
                    <p>Easy 30 days returns and exchanges</p>
                    <p>Try & Buy might be available</p>
                </div>
                <div className='offers'>
                    <h2 >BEST OFFERS</h2>
                    <p>Best price: $ {state && state.price}</p>
                    <p>Coupon Discount: Rs. 125 off (check cart for final savings)</p>
                    <p>Applicable on: Orders above Rs. 799 (only on first purchase)</p>
                    <p>Coupon code: BAZAR200</p>
                </div>
                <div className='description'>
                    <h2>Description</h2>
                    <p>{state && state.description}</p>
                </div>
                <div className='review'>
                    <h2>Review</h2>
                    <p>{state && state.rating.count}+ Happy customers</p>
                </div>

            </div>
            </div>
           </div>


           }
           <Footer/>
           </>
    )
}
export default ProductPage;