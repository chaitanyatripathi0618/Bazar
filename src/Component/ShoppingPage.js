import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import Lottie from "lottie-react";
import Delivery from "../Assets/delivery.json";
import './Shopping.css'
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer";

function ShoppingPage(){
    const Payment=useNavigate()

    const [cnf, setCnf]=useState(false)
    
    const [cart, setCart] = useState([]);

    useEffect(() => {
      const storeData = localStorage.getItem('store');
      if (storeData) {
        setCart(JSON.parse(storeData).cart);
      } 
    }, []);

    const getdata=(e)=>{
        const {value,name}=e.target;
        setCnf(()=>{
            return{
                ...cnf,
                [name]:value
            }
        })
    }
    const proceed =(e)=>{
        e.preventDefault();
        const{butn}=cnf;

        if(butn === false){
            alert("Namefield is empty")
        }else{
            Payment("/payment")
        }
    }
    const remove = (id) => {
        setCart(cart.filter(item => item.id !== id));
  localStorage.setItem('store', JSON.stringify({ cart: cart.filter(item => item.id !== id) }));
      };
    
      let total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
      total= total.toFixed(2);
      let Taxes=100
      
    return(<div className="bg">
        <Navbar/>
        <div className="shopping"> 
            <p>Shopping Cart</p> 
            <div className="truck">
                <Lottie id="delanimation" animationData={Delivery} />
            </div>
        </div>
        <div className='shoppingCart'>
            <div className="product_de">
            {cart.map((item) => (
                <div className="product">
                    <div className="productimg" key={item.id}>
                        <img id="productimg" src={item.image} alt=''/>
                    </div>
                    <div className="productname">
                        <h4>{item.title}</h4>
                        <p>{item.category}</p>
                        <p>{item.price}</p>
                        <p>Quantity: {item.qty}</p>
                        <p>total{item.qty*item.price}</p>
                        <button className="removebtn" onClick={() => remove(item.id)}>Remove</button>
                    </div>
                </div>
            ))}</div>
            <div className='cart'>
                <p id="coupons">COUPONS</p>
                <p id="c300">On the above order of $300</p>
                <hr className="line"/>
                <p id="gift">Gifting & Peronalisation</p>
                <div className="giftpack">
                    <p>Buying for a loved One?</p>
                    <div className="inputtag"><input type="checkbox" /><p>Gift wrap and personalised message on card</p></div>
                </div>
                <hr className="line"/>
                <h2 id="total">TOTAL PRICE</h2>
                <p className="pricecal">Total: ${total}</p>
                <p className="pricecal" id="strike">Taxes: ${Taxes}</p>
                <p className="pricecal">SubTotal: ${total}</p>
                <div id="tag"><input type="checkbox" onChange={getdata} name='butn'/> <p>Are you sure want to place order ?</p></div>
                <button className='orderbtn'onClick={proceed} >Proceed to checkout</button>
            </div> 
        </div>
        <Footer/>
    </div>
    )
}
export default ShoppingPage;