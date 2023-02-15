import { useState } from "react";
import { Link } from "react-router-dom";
import login from "../../Assets/login.json";
import logo from "../../Assets/logo2.svg";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import "./Userlogin.css";
import Footer from "../Footer";

function Login() {
  const home = useNavigate();

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
          home("/home");
        }
      }
    }
  };
  return (
    <div className="bodydiv">
      <div className="loginContent">
        <div className="formContent">
          <div className="updi">
                <div className="logodiv">
                    <img src={logo} className="logo1" />
                    <Link to="/login">
                        <button className="logbtn">SignUp</button>
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
                   <input
                        type="password"
                        className="text"
                        onChange={getdata}
                        name="password"
                        placeholder="Password"
                    />
                    <br />
                    <button className="subbtn" id="pass" onClick={addData}>
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
  );
}
export default Login;
