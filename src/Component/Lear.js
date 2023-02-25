import { useState } from "react";
import girl from "../Assets/girl.png";
import Lottie from "lottie-react";
import logo from "../Assets/logo.png"
import desk from "../Assets/desk.png"
import sparkle from "../Assets/sparkle.json"
import clock from "../Assets/clock.json"
import window from "../Assets/window.json"
import './learn.css'
import { useNavigate } from "react-router-dom";

function Learn(){
    const learnhome = useNavigate();
    const [inpval, setInpval] = useState({
        name: "",
        password: "",
      });
    
      const getdata = (e) => {
        const { value, name } = e.target;
        setInpval(() => {
          return {
            ...inpval,
            [name]: value,
          };
        });
      };
      const addData = (e) => {
        e.preventDefault();
        const getValueArr = localStorage.getItem("User");
    
        const { name, password } = inpval;
    
        if (name === "") {
          alert("Name field is empty");
        } else if (password === "" && password.length < 5) {
          alert("Password is weak or empty");
        } else {
          if (getValueArr.length && getValueArr) {
            const userData = JSON.parse(getValueArr);
            const userLogin = userData.filter((el, k) => {
              return el.name === name && el.password === password;
            });
            if (userLogin.length === 0) {
              alert(
                "Opps!! you seems new for the Login Please Create an account first"
              );
            } else {
              learnhome("/school")
              
            }
          }
        }
      };
    
    return(
        <div>
            <div className="divbox">
                <div className="logo">
                    <div id="logodiv">
                    <div className="sparkle">
                    <Lottie  animationData={sparkle}/>
                    </div>
                        <img src={logo}/>  
                        <p id="tagname">our Purpose is to turn mirrors in to windows</p>
                    </div>
                    <form className="divform">
                        <input type="text" onChange={getdata} name="name" placeholder="UserName"/><br/>
                        <input type="password" onChange={getdata} name="password" placeholder="Password"/><br/>
                        <button id="mem"  onClick={addData}>Enter</button>
                    </form>
                    <button id="help">Help</button>

                </div>
                <div className="aniiicontent">  
                <div className="clock">
                <Lottie id="clock"animationData={clock}/>
                </div>
                <div className="sideani">
                     <Lottie id="window" animationData={window} /> 
                     {/* <Lottie animationData={clock}/> */}
                     <img src={girl} className="girl"/>
                     <img src={desk} className="desk"/>
                </div>
                
                
                </div>

            </div>

            {/* <img src={girl}/>
            <Lottie id="loginAnimation" animationData={window} /> */}


        </div>
    )
}
export default Learn
