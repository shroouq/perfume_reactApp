import React from "react";
import {useEffect, useState,useRef, useContext} from "react";
import { ShopContext } from './context/ShopContext';
import "./Apps.css";
import './EmptyCart'
import EmptyCart from "./EmptyCart";


function Cart () {

  document.body.style.cursor="default"
   const{ value5, value6 , value2, value1, value8 , value9 , value10 , value13}= useContext(ShopContext);
      const increase= value10;
      const [size] = value1;
      const cartContent= value5;
      const handleDelete = value6;
      const numberFormat =value13;
      const [product] = value2;
      const navigate = value8;
      const descrese = value9;
      let total = 0;
      
      
    const [ productData , setProductData] = useState({});
    

      //remove product from cart 
  useEffect(()=>{
    Object.keys(cartContent).map(
      key =>{
           const data2 = []
           data2.push ({
            id: cartContent[key].itemid,
            size: cartContent[key].itemsize
           })
            setProductData(data2)
            console.log(productData);
    })},[])
 

  return cartContent!=0 ?( 
    <div>
      <h2 className="h1"> Your Cart</h2>
     <br/>
     <div className="row">
<div className="block" >


     {Object.keys(cartContent).map(
 key => <div>
  {size.filter((list)=>list.id == cartContent[key].itemid)
             .map((item)=>(
              <div>
   {product.filter((lists)=> lists.id == item.product_id) 
.map((items) => 
  { total += item.price * cartContent[key].quantity ;
  return(
  <div>
  <div className="cartdata">
    <div className="cartdata2">
      
    <img className="imagecart" src={require(`./assets/images/men/${items.image}`)} ></img>
    <div >

    <p className="cartcontent"> {items.name}</p>


    <div className="cartdata4">
      <div className="small">
      <p>{item.size}ml</p>
      <p className="smallp">{item.price}$</p>
      </div>
      <div className="small2">
      <div className="addbutton2">
      <button type="submit" className="button" onClick={()=>descrese(cartContent[key].itemid , cartContent[key].quantity)}>-</button>
      <span className="quann" >  {cartContent[key].quantity}</span>
      <button className="button" type="submit" onClick={()=>increase(cartContent[key].itemid  )} >+</button>

       </div>
       <div className="quantity">
       <div className="addbutton0">

       <img className="cartremove" onClick={()=>handleDelete(cartContent[key].itemid )} src={require("./assets/images/close.png")}/> 
       </div>
       </div>
       </div>

    </div>

    </div>
      </div>
     

      </div>      
                    </div>
                )})} 
                </div>
             ))}
  </div>
     )}
     </div >
     <div className="block1">
      <h3> ORDER SUMMERY</h3> 
      <div className="block3">
        <div className="totalblock2">
          <p> Subtotal : </p>  
           <p>{numberFormat (total)}</p>
         </div>
        
         
         </div>
         
         <button className="cartbutton" onClick={()=>navigate('/checkout' , { state: { cart: cartContent}})}> CHECKOUT</button>
         </div>
  

</div>
</div>


): <div> 
  <EmptyCart />
  
</div>
} 
export default Cart;
