import Footer from "./Footer";
import Navbar from "./Navbar";
import { useState } from "react";
import './payment.css'
import { useNavigate } from "react-router-dom";

function Payment(){
    const Confirm=useNavigate()


        const [inpval,setInpval]=useState({
            name:"",
            address:"",
            landmark:"",
            pnum:"",
            pcode:""
        })
        const [data,setData]= useState([]);
        const getdata=(e)=>{
            const {value,name}=e.target;
            setInpval(()=>{
                return{
                    ...inpval,
                    [name]:value
                }
            })
        }
        const cnfm=(e)=>{
            e.preventDefault();
            const{name,address,landmark,pnum,pcode}=inpval;
    
            if(name===""){
                alert("Name field is empty")
            }else if(landmark===""){
                alert("something in email is not correct")
            }else if(pcode==="" && pcode.length<6){
                alert("Password is weak or empty")
            }else if(pnum==="" && pnum.length<10){
                alert("Contact is incorrect")
            }else if(address==="" ){
                alert("Address field is required for delivery")
            }else{

                Confirm("/confirm")
                
            }
    
        }
    return(
    <div>
        <Navbar/>
        <div className="Delivery_credentials">
            <h2>Delivery Credentials</h2>
            <div className="formflex">
                <div className="form11">
                    <form>
                    <input type="text" placeholder="Name" name="name" onChange={getdata}/><br/>
                        <input type="text" placeholder="Delivery Address" name="address"onChange={getdata}/><br/>
                        <input type="text" placeholder="Landmark" name="landmark" onChange={getdata}/><br/>
                        <input type="text" placeholder="Phone Number" name="pnum" onChange={getdata}/><br/>
                        <input type="tel" placeholder="Pin Code" name="pcode" onChange={getdata}/><br/>
                    </form>
                </div>
                {/* <div>
                    <form>
                        <input type="checkbox"/><p>Want to provide any tip to delivery agent</p>
                    </form>
                </div> */}
            

            </div>
            <button id="cnfbtn" onClick={cnfm}>Confirm order</button>
        </div>
        <Footer/>
    </div>
    )
}
export default Payment;
