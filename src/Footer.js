import React from "react";
import "./Apps.css";
import { useLocation} from 'react-router-dom';
import img from "./assets/images/facebook.png";
import img1 from "./assets/images/instgram.png";
import img2 from "./assets/images/twitter.png";
import img3 from "./assets/images/lock.png"



function Footer(){
    const location = useLocation();
    const hideHeaderForPaths = ['/Checkout' , "/Checkout2" , "/OrderSummary" , "/OrderSummary2" , "/cart"];
    if(hideHeaderForPaths.includes(location.pathname)) {
       return <></>;
    }
    return(
    <div className="footer">
        <div className="container">
            <div className="first label" >
            <img src={img3}  />
                <p>All products are 100% authentic original brand names. 
                    We guarantee your security and will not share your data 
                    with anyone.</p>
            </div>
            <div className="second label" >
                <h3> contact us </h3>
                <div className="brands">
                <a href="https://www.facebook.com">
                <img className="facebook" src={img} to="https://www.facebook.com" />
                </a>
                <a href="https://www.instagram.com">
                <img className="brand"src={img1} to="https://www.facebook.com" />
                </a>
                <a href="https://www.twitter.com">
                <img className="brand" src={img2} to="https://www.facebook.com" />
                </a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;