import { Link , useLocation} from 'react-router-dom';
import React, { useState , useContext, useEffect}  from "react";
import { ShopContext } from '../context/ShopContext';
import img from "../assets/images/img1.jpg";
import SmallSummery2 from './SmallSummary2';




export default function(){
  document.body.style.cursor="default";

    const { state } = useLocation();
    const[locationState, setLocationState] = useState({cart:[], totalPrice:'', data:[]});
    const{ value5 , value2, value1,value13 }= useContext(ShopContext);
    const[data, setData]= useState({});
    const [size] = value1;
    const [product] = value2;
      const numberFormat =value13;

      let total= 0;
      let subtotal = 0;

      //use location to get data from checkout page
    const location = useLocation();
          React.useEffect(()=>{
            if(location.state){
              let _state = location.state 
              setLocationState(_state)
            }
          },[location]);

         
          
          useEffect(()=>{
            setData(state.data);

          },[]);

    
    return(
        <div>

             <div className="smallorder3">
                    <SmallSummery2
                    id={locationState.id}
                    size={locationState.size}
                    quantity={locationState.quantity}
                     totalPrice={locationState.totalprice2}
                     shipping={locationState.shipping}
                     total={locationState.totalPrice}
                     />
      
                    </div>
                    <div className='smallorder2'>
           <div className='ordersummary'>
            {size.filter((list)=>list.id == locationState.id)
             .map((item)=>(
              <div>
   {product.filter((lists)=> lists.id == item.product_id) 
.map((items) => {
    total= item.price *locationState.quantity;
    subtotal += total;


    return(
    <div className="content11">
       
      <div  className='c'>
   
        <div>
      <img className="checkimg" src={require(`../assets/images/men/${items.image}`)} ></img>
      <p className="circle3"> {locationState.quantity} </p>
     </div>
        <p className="cartcontent15"> {items.name}</p>
       
        <div className="cartdata10">
        <p>{item.size}ml</p>
      
        <p className="price10"> {numberFormat (total)}</p>
        </div> 
        </div>
        </div>
)})}
</div>
             ))}

  
            <div>
            <div className='summarysub'>
           <div className='summarysub1'>
            <p> Subtotal </p>  
            <p> {locationState.totalPrice2}</p>
            {/* <p>{locationState.totalPrice}</p>  */}
            </div>
            <div className='summarysub1'>
              <p> Shipping</p>
            <p> {numberFormat(locationState.shipping)}</p>
            </div> 
            <div className='summarysub1'>
              <p>Taxes</p>
              <p> {numberFormat(0)}</p>
              </div>         
                 </div> 
                 <div className='summarysub2'>
                 <p> Total: </p>
                 <p className='summarytotal'>{numberFormat(locationState.totalPrice)} </p>
                 </div> 
                 </div>
                 </div>
                 </div>
<div className='confirum'>
             <img className="imgsummary" src={img} ></img>  
             <div>
             <p> confirmed  #{data.random}</p>

             <p className='thank'> Thank You {data.firstname} { data.lastname}</p>  
             </div>
             </div>
             <div className='confirum3'>
                <h3> Your Order is confirmed</h3>
                <p className='summaryp'> you'll recive a confirmation email with your order number sortly </p>
                <div className='summarydetail'>
                    <h3> Order details</h3>   
                    <h4>Contact information </h4>    
                    <p>{data.email}</p>     
                    <h4> Shipping address</h4>
                    <p>{data.firstname} {data.lastname}</p>
                    <p> {data.address}</p>
                    <p>{data.apartment}</p>
                    <p>{data.city}</p>
                    <p>{data.phone}</p>
                    </div>
                      <div className='summarydetail1'>
                    <h4> payment method</h4>
                    <p>cash on delivery</p>
                    <h4>Billing address</h4>
                    <p>{data.firstname} {data.lastname}</p>
                    <p> {data.address}</p>
                    <p>{data.apartment}</p>
                    <p>{data.city}</p>
                    <p>{data.phone}</p>
                </div>
                <Link to="/">
                <button className='summarybutton'> Continue Shopping </button>
                </Link>
                </div>
               
            </div>
    )

}