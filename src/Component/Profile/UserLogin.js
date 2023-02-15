import { useState } from "react"
import { Link } from 'react-router-dom';
import './Userlogin.css';
import logo from "../../Assets/logo2.svg";
import login from "../../Assets/login.json";
import Lottie from "lottie-react";
import Footer from '../Footer.js';

function UserLogin(){
    const [inpval,setInpval]=useState({
        name:"",
        email:"",
        password:"",
        pnum:"",
        address:""
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
    const addData=(e)=>{
        e.preventDefault();
        const{name,email,password,pnum,address}=inpval;

        if(name===""){
            alert("Name field is empty")
        }else if(email==="" && !email.includes("@")){
            alert("something in email is not correct")
        }else if(password==="" && password.length<5){
            alert("Password is weak or empty")
        }else if(pnum==="" && pnum.length<10){
            alert("Contact is incorrect")
        }else if(address==="" ){
            alert("Address field is required for delivery")
        }else{
            localStorage.setItem("User",JSON.stringify([...data,inpval]))
        }

    }
    return(
        <div className="bodydiv">
      <div className="loginContent">
        <div className="formContent">
          <div className="updi">
                <div className="logodiv">
                    <img src={logo} className="logo1" />
                    <Link to="/">
                        <button className="logbtn">SignIn</button>
                    </Link>
                </div>
                <form className="formPage">
                    <input
                        type="text"
                        className="text"
                        onChange={getdata}
                        name="name"
                        placeholder="Name"
                    /> 
                    <br />
                    <input type="email"className="text" onChange={getdata} name='email' placeholder="Email"/><br/>
                   <input
                        type="password"
                        className="text"
                        onChange={getdata}
                        name="password"
                        placeholder="Password"
                    />
                    <input type="tel" className="text" onChange={getdata} name='pnum' placeholder="Phone Number"/><br/>
                    <input type="text" className="text" onChange={getdata} name='address' placeholder="Address"/><br/>
                    <br />
                    <button className="subbtn" onClick={addData}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
            <div className="animationContent">
                <Lottie id="loginAnimation" animationData={login} />
            </div>
        </div>
      <Footer />
    </div>
    )
}
export default UserLogin;
