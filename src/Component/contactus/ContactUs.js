import Navbar from "../Navbar";
import Footer from "../Footer.js";
import { useState } from "react";
import login from "../../Assets/login.json";
import Lottie from "lottie-react";
import "./Contact.css";

function ContactUs(){

    const [inpval,setInpval]=useState({
        name:"",
        email:"",
        issue:"",
        date:"",
        productid:"",
        pnum:"",
        feedback:""
    })
    const [data,setData]= useState([]);
    const getData=(e)=>{
        const {value,name}=e.target;
        setInpval(()=>{
            return{
                ...inpval,
                [name]:value
            }
        })
    }
    const addData=(e)=>{
        e.preventDefault();
        const{name,email,issue,pnum,date,productid,feedback}=inpval;

        if(name===""){
            alert("Name field is empty")
        }else if(email==="" && !email.includes("@")){
            alert("something in email is not correct")
        }else if(pnum==="" && pnum.length<10){
            alert("Contact is incorrect")
        }else if(issue==="" ){
            alert("As you have issue then issue field is required to fill")
        }else if(date==="" ){
            alert("Purchase date is required")
        }else if(productid==="" ){
            alert("Product Id is required")
        }else if(feedback==="" && feedback.length>150 ){
            alert("FeedBack is not Empty")
        }else{
            setInpval("")
            alert("We will shortly get in touch with you")
            localStorage.setItem("Productinfo",JSON.stringify([...data,inpval]))
        }

    }
    return(<div>
        <Navbar/>
        <div className="cc">
        <div className="complain">
        <h1>Hie User!!</h1>
        <form>
            <input type="text" placeholder="Name" name="name" onChange={getData}/><br/>
            <input type="email" placeholder="Email" name="email" onChange={getData}/><br/>
            <input type="tel" placeholder="Phone Number" name="pnum" onChange={getData}/><br/>
            <input type="text" placeholder="Issue Related To" name="issue" onChange={getData}/><br/>
            <input type="Date" placeholder="Date of Purchase" name="date" onChange={getData}/><br/>
            <input type="text" placeholder="Product Id" name="productid" onChange={getData}/><br/>
            <input type="text" id="issuededo"placeholder="Your Feedback" name="feedback" onChange={getData}/><br/>
            <button onClick={addData}>Submit</button>

        </form>

        </div>
        <div className="Anima">
        <Lottie id="loginAnima" animationData={login} />

        </div>

        </div>
        <Footer/>


    </div>);
}
export default ContactUs;
