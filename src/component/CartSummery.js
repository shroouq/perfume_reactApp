import React from "react";
import { useState, useContext} from "react";
import { ShopContext } from '../context/ShopContext';
import img from "../assets/images/drop-down.png";
import "../login.css";


function CartSummery(){
    const [visible, setVisible]=useState(true);
    const{ value5 , value2, value1}= useContext(ShopContext);
    const [size] = value1;
    const cartContent= value5;
    const [product] = value2;
    let total = 0;


    //open and close order summary
    const change = ()=>{
        if(visible){
            setVisible(false)
        }else{
            setVisible(true)
        }
    }
   
    
return(
    <div>
    <div className="sum">
        <h3 className="ordersum">ORDER SUMMERY</h3>
       
        <p  onClick={change }>{visible? 'Show' : 'Hide'}</p>
        <img  src={img} ></img>

    </div>

    <div className="show">
    <div className={`${visible ? "showside" : 'hideside'}`}>
        <div>
        {Object.keys(cartContent).map(
 key => <div>
  {size.filter((list)=>list.id == cartContent[key].itemid)
             .map((item)=>(
              <div>
   {product.filter((lists)=> lists.id == item.product_id) 
.map((items) => {
 total= item.price * cartContent[key].quantity;
 return(
    <div className="content22">
      <div >
            <div>
      <img className="checkimg2" src={require(`../assets/images/men/${items.image}`)} ></img>
      <p className="circle4"> {cartContent[key].quantity} </p>
     </div>

     <p className="smallcartname"> {items.name}</p>

     <div className="cartdata55">
     <p className="cartcontent22"> {item.size}ml</p>

        <p className="price2"> {total}$</p>
        </div>

        </div>
        </div>
  )})} 
  
  </div>
))}
</div>
)}
        </div>
        </div>

    </div>
    </div>
)
};
export default CartSummery;