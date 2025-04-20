import React from "react";
import {useEffect, useState,useContext} from "react";
import { Link ,NavLink , useLocation} from 'react-router-dom';
import "./Apps.css";
import img from "./assets/images/menu.png";
import { ShoppingCart} from 'phosphor-react' ;
import { ShopContext } from './context/ShopContext';


function Header(){
   
    const [visible, setVisible]=useState(false);
    const{ value5}= useContext(ShopContext);
    const cartContent= value5;
    const location = useLocation();
    const hideHeaderForPaths = ["/Checkout" , "/Checkout2"];
    let totalquantity=0;

    if(hideHeaderForPaths.includes(location.pathname)) {
       return <></>;
    }
    
    return(
       
        <div >
        <div className="header">
        <nav className="nav">
           
            <img className="imgMenu" src={img} onClick={()=>setVisible(true)} />
           
            <Link className="b" to="/">Perfume</Link>

            <Link className="a" to="/men"> Men </Link>
            <Link className="a" to="/woman"> Woman</Link>

            <div>
            {Object.keys(cartContent).map(
                 key => {
                    totalquantity += parseInt(cartContent[key].quantity);

                                         })}             
            <div>
                <Link className="c" to="/cart"  >
               <ShoppingCart size={32}/>
            
            <p className="circle2">   {totalquantity}  </p>
            </Link>
                            </div>
        
            </div>
            
        </nav>
        </div>
        
        <div className="nav2" >
            {/* side menu for small screen */}
        <div className={`${visible ? "openside" : 'closeside'}`}>
                <div onClick={()=>setVisible(false)}>
                    <p className="side" > back</p> </div>
                    <NavLink onClick={()=>setVisible(false)} className="side" activeClassName="active" to="/Woman">Woman</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className="side" activeClassName="active" to="/Men">Men</NavLink>
            </div>
        
        </div>
       
        </div>
    )

       
};

export default Header;