import React, { useState , useContext ,useRef, useEffect }  from "react";
import { ShopContext } from '../context/ShopContext';
import { ShoppingCart} from 'phosphor-react' ;
import CartSummery from './CartSummery';
import { Link , useNavigate ,  useLocation} from 'react-router-dom';
import "../login.css";
import $ from "jquery";

function CheckOut(){
      const { state } = useLocation();  

   const{ value5 , value2, value1,value13 , value14, value15, value16, value17}= useContext(ShopContext);

      const [size] = value1;
      const cartContent= value5;
      const [product] = value2;
      const numberFormat =value13;
      const userInsert= value15;
      const orderInsert= value14;
      const decreasedata= value16;
      const quantityupdate = value17;
      let total = 0;
      let totalquantity=0;
      let totalprice = 0;
      let totalprice2=0;
  const [error1, setError1] = useState({});
  const[cart, setcart]= useState({});
  
  const [totalOrder, setTotalOrder] = useState(0);

  //get data from cartpage
 const location = useLocation();
   React.useEffect(()=>{
             if(location.state){
               let _state = location.state 
             }
           },[location]);
   useEffect(()=>{
             setcart(state.cart);
 
           },[]);
  const navigate = useNavigate();

document.body.style.cursor="default";


const ref = useRef();


let random= Str_Random(10);

  const [formData, setFormData] = useState({
  });

     let Cairo= 100 ;
     let Alexandria=140;
     let Tanta=120;
     let  Matrouh=160;


      const [data, setData] = useState({
        email: "",
        city: "",
        firstname: "",
        lastname: "",
        phone: "",
        address: "",
        apartment: "",
        random:random
      })
   
      useEffect(()=>{
        let timerId= setTimeout(()=>{
          if(ref.current?.innerText){

          setTotalOrder(ref.current?.innerText);

          }else{
            setTotalOrder(0);
          }
        
        },2000);
        return()=>{
          clearTimeout(timerId);
        };
      },[data])
  
//get data from input field 
      const handleChang = (e) => {
        const { name, value, type, checked } = e.target;
        setData({ ...data, [e.target.name]: e.target.value });
        setFormData((setData) => {
          return {
            ...setData,
            [name]: type === "checkbox" ? checked : value,
          };
        });
    
      }

      //check if data is invaild
      function validData() {
        let err = {}
        if (data.email === '') {
          err.email = 'please: submit the EMAIL'
        }
        if (data.city === '') {
          err.city = 'please: submit the CITY'
        }
        if (data.firstname === '') {
          err.firstname = 'please:submit the FIRSTNAME'
        }
        if (data.lastname === '') {
          err.lastname = 'please select LASTNAME'
        }
        if (data.phone === '') {
          err.phone = 'please: enter vaild phone number'
        }
        if (data.address === '') {
          err.address = 'please: submit required ADDRESS'
        }
        if (data.apartment === '') {
          err.apartment = 'please: submit required APARTMENT'
        }
       
    
        setError1({ ...err })
        console.log(Object.keys(err).length < 1)

        return Object.keys(err).length < 1;
      }

      //handle numeric value only
  const handlenumeric = (e) => {
    !/[0-9]/.test(e.key) && e.preventDefault()
  }
  function Str_Random(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    
    // Loop to generate characters for the specified length
    for (let i = 0; i < length; i++) {
        const randomInd = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomInd);
    }
    return result;
}


  //put order and user information in te data base
   const submitForm = (e) => {
    e.preventDefault();

    let isvalid = validData()
    if (isvalid) {
      if(
      decreasedata(cart)){
      quantityupdate(cart);
      
        orderInsert(random,totalprice2, cart ,data, totalOrder, totalprice);
        userInsert(data );
      }
    }
  };


    return(
      <div>

      <div className="header">
      <nav className="nav">
         
          <Link className="b" to="/">Perfume</Link>
          <Link className="c" to="/cart"  >
          
          <ShoppingCart size={32}/>
          </Link>
          </nav>
          </div>
        

            <div className="row">
           
            <form action=""
        id="product_form"
        method="POST"

        onSubmit={submitForm}>
           <div className="blockcheckout">
                <h3 className="h3"> Contact</h3>

                <div className="input-box1">
     <span>{error1.email}</span>

    <input id="email" className="in" type="text" name="email" onChange={handleChang} required />
    <label className="label2">
  Email:
   </label>
  
   </div>
   <div>
            <h3 className="h3"> Delivery</h3>
            <div className="input-box1">

            <select className="in"
            id="city"
            name="city"
            onChange={handleChang} required>
              <option  >
                Select City
              </option>
              <option id="Cairo"  value="Cairo">
                Cairo
              </option>
              <option id="Alexandria" value="Alexandria">
                Alexandria
              </option>
              <option id="Tanta" value="Tanta">
                Tanta
              </option>
              <option id="Matrouh" value="Matrouh">
                Matrouh
              </option>
            </select>
            <span>{error1.city}</span>

            </div>
            <div className="input-block">
            <div className="input-box3">

            <span>{error1.firstname}</span>
    <input id="firstname" className="in1" type="text" name="firstname" onChange={handleChang}  required />
    <label className="label1">
        First Name
        </label>
</div>
<div className="input-box3">
<span>{error1.lastname}</span>
    <input id="lastname" className="in1" type="text" name="lastname" onChange={handleChang} required />

    <label className="label1">
   Last Name:
   </label>
   </div>
   </div>
   
   <div className="input-box">
   <span>{error1.phone}</span>
    <input id="phone" className="in" type="text" name="phone" onChange={handleChang} required />
    <label className="label2">
  Phone:
   </label>
   </div>
   
   
   <div className="input-box">
   <span>{error1.address}</span>
    <input id="adress" className="in" type="text" name="address" onChange={handleChang} required   />
    <label className="label2">
   Address:
   </label>
  
   </div>
   <div className="input-box">
   <span>{error1.apartment}</span>
    <input id="apartment" className="in" type="text" name="apartment" onChange={handleChang}  required />
    <label className="label2">
    Apartment, suite , etc.(optional)..
   </label>
  
   </div>
   <div>

   <h3 className="h4">Shipping </h3>
   
   <p className="method">
   {data.city==='Cairo' && <p  ref={ref}>{Cairo} </p> }
   {data.city==='Alexandria' && <p  ref={ref}>{Alexandria} </p>}
   {data.city==='Tanta' && <p  ref={ref}>{Tanta} </p>}
   {data.city==='Matrouh' && <p  ref={ref}>{Matrouh} </p>}

 </p>
   </div> 
   <p className="h4"> cash on delivery</p>
   <button  className="checkbutton" type="submit" name="add">ORDER NOW</button>


            </div>
             </div>
             
             <div className="smallorder">
              < CartSummery />

              </div>
            

            <div className="blockcheckout2">
              <div className="scroll">
              {Object.keys(cart).map(
 key => <div>
  {size.filter((list)=>list.id == cart[key].itemid)
             .map((item)=>(
              <div>
   {product.filter((lists)=> lists.id == item.product_id) 
.map((items) => {
 total= item.price * cart[key].quantity;
 totalprice += total;
 totalprice2 = totalprice+ parseInt(totalOrder);
 totalquantity += parseInt(cart[key].quantity);
//  console.log(totalquantity)
 return(
    <div className="content11">
      <div >
        <div>
      <img className="checkimg" src={require(`../assets/images/men/${items.image}`)} ></img>
      <p className="circle3"> {cart[key].quantity} </p>
     </div>
        <p className="cartcontent11"> {items.name}</p>
       
        <div className="cartdata9">
        <p>{item.size}ml</p>
      
        <p className="price"> {numberFormat (total)}</p>
        </div> 
        </div>
        </div>
  )})} 
  
  </div>
))}
</div>
)}
</div>
<div className="cartborder" >
       <div className="totalblock3">
        <p> Subtotal . {totalquantity} items</p>
        <p > {numberFormat (totalprice)} </p>
        

        </div>
        <div className="totalblock3">
          <p> Shipping</p>
          <p > {numberFormat (totalOrder)}</p>
          </div>
          <div className="totalblock3">
            <p>TOTAL</p>
            <p>{numberFormat (totalprice2)}</p>
            </div>
            <button  className="checkbutton2">ORDER NOW</button>

            </div>

            </div>
            </form>

            </div>


            </div>


    )
}

 export default CheckOut;