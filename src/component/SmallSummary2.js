import { useState, useContext} from "react";
import { ShopContext } from '../context/ShopContext';
import img from "../assets/images/drop-down.png";
import "../login.css";


export default function SmallSummary(props) {
    const [visible, setVisible]=useState(true);
    const{ value2, value1,value13}= useContext(ShopContext);
    const [size] = value1;
    const [product] = value2;
    const numberFormat =value13;
    let total = 0;


    //visible ordersummary 
    const change = ()=>{
        if(visible){
            setVisible(false)
        }else{
            setVisible(true)
        }
    }
   
    
return(
    <div className="smallsum">
    <div className="sum">
        <h3 className="ordersum">ORDER SUMMERY</h3>
       
        <p  onClick={change }>{visible? 'Show' : 'Hide'}</p>
        <img  src={img} ></img>

    </div>

    <div className="show">
    <div className={`${visible ? "showside2" : 'hideside'}`}>
        <div className="set">
       
  {size.filter((list)=>list.id == props.id)
             .map((item)=>(
              <div>
   {product.filter((lists)=> lists.id == item.product_id) 
.map((items) => {
 total= item.price * props.quantity;
 return(
    <div className="content22">
      <div >
            <div>
      <img className="checkimg2" src={require(`../assets/images/men/${items.image}`)} ></img>
      <p className="circle4"> {props.quantity} </p>
     </div>

     <p className="smallcartname"> {items.name}</p>

     <div className="cartdata55">
     <p className="cartcontent22"> {props.size}ml</p>

        <p className="price2"> {total}$</p>
        </div>
        </div>
        </div>
  )})} 
  
  </div>
))}
    </div>
    <div>
            <div className='summarysub'>
           <div className='summarysub1'>
            <p className="j"> Subtotal </p>  
            <p className="j"> {props.totalPrice}</p>
            {/* <p>{locationState.totalPrice}</p>  */}
            </div>
            <div className='summarysub1'>
              <p> Shipping</p>
            <p> {numberFormat(props.shipping)}</p>
            </div> 
            <div className='summarysub1'>
              <p>Taxes</p>
              <p> {numberFormat(0)}</p>
              </div>         
                 </div> 
                 <div className='summarysub2'>
                 <p> Total: </p>
                 <p className='summarytotal'>{numberFormat(props.total)} </p>
                 </div> 
                 </div>
                 </div>

                 </div>
                 </div>
)
};
