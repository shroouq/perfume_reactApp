import React from "react";
import { Link } from "react-router-dom";
import { useContext} from "react";
import { ShopContext } from '../context/ShopContext';
import "../Apps.css";
import EmptyCart2 from "../EmptyCart2";


function SideCart () { 
  const{value5, value1, value2,value6,value10,value13}= useContext(ShopContext);
    const numberFormat =value13;
    const handleDelete = value6;
    const increase= value10;


    const [product] = value2;
    const cartContent= value5;
    const [size] = value1;
    let total = 0;
    let totalquantity=0;
    let totalprice = 0;
    let totalprice2=0;


    return cartContent!= 0 ? ( 
      <div >
  <p className="pcart"> Your Cart </p>
      <div className="scroll">
      {Object.keys(cartContent).map(
key => <div>
{size.filter((list)=>list.id == cartContent[key].itemid)
     .map((item)=>(
      <div>
{product.filter((lists)=> lists.id == item.product_id) 
.map((items) => {
total= item.price * cartContent[key].quantity;
totalprice += total;
totalprice2 = totalprice 
totalquantity +=parseInt( cartContent[key].quantity);
return(

<div className="content12">

<div >
<div>
<img className="checkimg" src={require(`../assets/images/men/${items.image}`)} ></img>
</div>
{/* <div className="u"> */}
<p className="cartcontent11"> {items.name}</p>

<div className="cartdata52">
  <div className="small3">
<p >{item.size}ml</p>
{/* </div> */}

<p className="price1"> {numberFormat (total)}</p>
</div> 
</div>
<div className="cartdata53">
<div className="cartcontent12">
<button className="cartquantity1" > -</button>
<button className="cartquantity2"> {cartContent[key].quantity}</button>
<button className="cartquantity3" onClick={()=>increase(cartContent[key].itemid  )}> +</button>
</div>
<img className="cartremove1" onClick={()=>handleDelete(cartContent[key].itemid )} src={require("../assets/images/close.png")}/> 
</div>
</div>
</div>
)})} 

</div>
))}
</div>
)}
</div>
<div className="cartborder1" >
<div className="totalblock4">
<p> Subtotal . {totalquantity} items</p>
<p> {numberFormat (totalprice)}</p>
</div>
<p className="p1">Tax included and shipping calculated at checkout</p>
<Link className="Link"  to="/checkout">
<button className="checkoutbutton">CHECKOUT</button>

</Link>
<Link className="Link"  to="/cart">

<button className="viewbutton">VIRW CART</button>
</Link>

    </div>

    </div>
    ):<div>
      <EmptyCart2 />
    </div>
};
export default SideCart;
