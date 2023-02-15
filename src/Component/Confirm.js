import confirm from "../Assets/confirm.json";
import Lottie from "lottie-react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import './payment.css'


function Confirm(){
    return(
    <div>
        <Navbar/>
        <div className="animationconfirm">
            <Lottie id="ConfirmAnimation" animationData={confirm} />
        </div>
    <Footer />
</div>
)
}
export default Confirm;