import { useState } from "react"
import login from "../../Assets/login.json";
import Lottie from "lottie-react";
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import './Profile.css';

// get data
const getProfile = () => {
    let data = localStorage.getItem('User');
    if (data) {
        return JSON.parse(localStorage.getItem('User'));
    }
    else {
        return [];
    }
}

function Profile(){
    const pasHistory = () => {
        let data = localStorage.getItem('store');
        if (data) {
            return JSON.parse(localStorage.getItem('store'));
        }
        else {
            return [];
        }
    }
    const [user, setUser] = useState(getProfile());
    const [udata, usetData] = useState(pasHistory());

    return(
    <div>
        <Navbar/>
        <div className="person">{
            user.map((setUser) => {
                return (
                    <div className="details">
                        <h1 id="greet">Hie! {setUser.name}</h1>
                        <p id="nameu">Name: {setUser.name}</p>
                        <p id="emailu">Email: {setUser.email}</p>
                        <p id="phoneu">Phone number: {setUser.pnum}</p>
                        <p id="phoneu">Phone number: {setUser.address}</p>
                        <p id="passu">Password: {setUser.password}</p>
                    </div>
                )
            })
        }
        <div className="pastHistory">
            

        </div>
        </div>
        <Footer/>
        
    </div>
    );
}
export default Profile;