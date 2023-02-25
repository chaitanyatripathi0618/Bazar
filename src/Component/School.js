import im1 from "../Assets/s2.jpeg";
import im2 from "../Assets/s3.jpeg";

import "./school.css"



function School(){
    return(<div className="outerdive">
        <div className="schoolName">
            <div className="schoolimg">
                <img src={im1}/>
            </div>
            <h2>Random Lake ELementary SChool</h2>
            <p>currently serves approximately 260 children starting in 4-Year-Old-Kindergarten through grade 4. In addition, we are proud to offer an on-campus child care center. Our full-day 4K program offers students creative, hands-on learning opportunities guided by our state’s Early Learning Standards.</p>

        </div>
        <div className="schoolName">
            <div className="schoolimg">
                <img id="im2"src={im2}/>
            </div>
            <h2>Elementary School</h2>
            <p>Southwest Wisconsin Tech is an above-average public college located in Fennimore, Wisconsin. It is a small institution with an enrollment of 675 undergraduate students. The Southwest Wisconsin Tech acceptance rate is 100%.ELementary SChool</p>
            

        </div>



    </div>
    )

}
export default School