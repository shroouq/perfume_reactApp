import React, { useState , useContext ,useRef , useEffect}  from "react";
import { ShopContext } from '../context/ShopContext';
import { ShoppingCart} from 'phosphor-react' ;
import CartSummery from './CartSummery';
import { Link , useLocation} from 'react-router-dom';
import "../login.css";
import { useNavigate } from "react-router-dom";


export default function(){
  document.body.style.cursor="default";

      const[locationState, setLocationState] = useState({id:'' , size:'', quantity:'', price:''})
      const location = useLocation();
      React.useEffect(()=>{
        if(location.state){
          let _state = location.state 
          setLocationState(_state)
        }
      },[location])
  

   const{ value5 , value2,value1,value13, value15 , value23, value21, value22}= useContext(ShopContext);

      const [size] = value1;
      const cartContent= value5;
      const [product] = value2;
      const numberFormat =value13;
      const userInsert= value15;
      const orderInsert= value23;
      const decreasedata= value21;
      const quantityupdate = value22;
      let total = 0;
      let totalquantity=0;
      let totalprice = 0;
      let totalprice2=0;
      let Cairo= 100 ;
      let Alexandria=140;
      let Tanta=120;
      let  Matrouh=160;

      const [error1, setError1] = useState({});
      const [totalOrder, setTotalOrder] = useState(0);
      
        
      
      
      const ref = useRef();
     
     
      const[total1,setTotal1]=useState("");
      let random= Str_Random(10);
      
        const [formData, setFormData] = useState({
        });

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
//data to save user input
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

                    //take data from input field
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
  
                    //check if data is vaild
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

                    

                    

                    //submit order and user information in database
                    const submitForm = (e) => {
                      e.preventDefault();
                      let isvalid = validData();
                      if (isvalid) {
                        if(
                        decreasedata(locationState.id, locationState.quantity)){
                        quantityupdate(locationState.id, locationState.quantity);
                        
                          orderInsert(locationState.id,locationState.quantity, locationState.size ,data, totalprice2 , totalprice ,totalOrder);
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

    <input className="in" type="text" name="email" onChange={handleChang}  required />
    <label className="label2">
  Email: 
   </label>
  
   </div>
   <div>
            <h3 className="h3"> Delivery</h3>
            <div className="input-box1">
            <select select className="in"
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
              <option id="Matrou" value="Matrouh">
                Matrouh
              </option>
            </select>
            <span>{error1.city}</span>

            </div>
            <div className="input-block">
            <div className="input-box3">


    <input className="in1" type="text" name="firstname" onChange={handleChang}  required />
    <label className="label1">
        First Name
        </label>
</div>
<div className="input-box3">
    <input className="in1" type="text" name="lastname" onChange={handleChang}  required />

    <label className="label1">
   Last Name:
   </label>
   </div>
   </div>
   
   <div className="input-box">

    <input className="in" type="text" name="phone" onChange={handleChang} required />
    <label className="label2">
   Phone:
   </label>
  
   </div>
   
   <div className="input-box">

    <input className="in" type="text" name="address" onChange={handleChang}   required />
    <label className="label2">
   Address:
   </label>
  
   </div>
   <div className="input-box">

    <input className="in" type="text" name="apartment" onChange={handleChang}  required />
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
   <button className="checkbutton" type="submit" name="add">ORDER NOW</button>


            </div>
             </div>
             <div className="smallorder">
              < CartSummery />

              </div>
            

            <div className="blockcheckout2">
              <div className="scroll">
 
              {size.filter((list)=>list.id == locationState.id)
             .map((item)=>(
              <div>
   {product.filter((lists)=> lists.id == item.product_id) 
.map((items) => {
  total= item.price * locationState.quantity;
  totalprice += total;
  totalprice2 = totalprice+ parseInt(totalOrder);
  totalquantity += parseInt(locationState.quantity);
 return(
    <div className="content11">
      <div >
        <div>
      <img className="checkimg" src={require(`../assets/images/men/${items.image}`)} ></img>
      <p className="circle3"> {locationState.quantity} </p>
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
<div className="cartborder" >
       <div className="totalblock3">
        <p> Subtotal . {totalquantity} items</p>
        <p> {numberFormat (totalprice2)} </p>
        </div>
        <div className="totalblock3">
          <p> Shipping</p>
          <p > {numberFormat (totalOrder)}</p>
          </div>
          <div className="totalblock3">
            <p>TOTAL</p>
            <p>{numberFormat (totalprice)}</p>
            </div>
   
            <button className="checkbutton2">ORDER NOW</button>

            </div>

            </div>
            </form>

            </div>
            </div>

    )
}

