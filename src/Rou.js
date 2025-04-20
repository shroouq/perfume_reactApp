import React from "react";
import { Route, Routes, useLocation} from 'react-router-dom';
import Register from "./Register";
import Bages from "./Bages";
import Login from "./Login";
import Homepage from "./HomePage";
import Product from "./Product";
import Cart from "./Cart";
import SideCart from "./component/SideCart";
import CheckOut2 from "./component/CheckOut2";
import OrderSummary from "./component/OrderSummary";
import "./Apps.css";
import Men from "./component/Men";
import Woman from "./component/Woman";
import Checkout from "./component/CheckOut";
import OrderSummary2 from "./component/OrderSummary2";




function Rou(){
   
   

    
    const location = useLocation();
    const hideHeaderForPaths = ["/Checkout , /checkout2"];

    if(hideHeaderForPaths.includes(location.pathname)) {
       return <></>;
    }

    
    return(
       
        <div >
        
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/bages" element={<Register />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/product/:productSku" element={<Product />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Bages />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Woman" element={<Woman />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Checkout2" element={<CheckOut2 />} />
        <Route path="/SideCart" element={<SideCart />} />
        <Route path="/OrderSummary" element={<OrderSummary />} />
        <Route path="/OrderSummary2" element={<OrderSummary2 />} />



        </Routes>
        
        </div>
        

    )

       
};

export default Rou;