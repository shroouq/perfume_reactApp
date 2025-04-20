import React, { useState, useEffect, createContext } from "react";
import { toast } from "react-toastify";
import $, { data } from "jquery";
import axios from "axios";
import { useNavigate } from "react-router-dom";




export const ShopContext = createContext();
const ShopContextProvider =({children}) =>{
    const [product, setProduct] = useState([]);
    const [size, setSize] = useState([]);
    const [ cartItems, setCartItems]= useState(0);
    const[cartCount, setCartCount]= useState(cartItems);
    const[cart,setCart]= useState([]);
    const navigate = useNavigate();
    let new1=0;
    

    //refresh component 
    useEffect(()=>{
      let timerId= setTimeout(()=>{
        fetchData();
        
      },2000);
      return()=>{
        clearTimeout(timerId);
      };
    },[cart])


    //add product to cookies (cart)
    const addToCart = async (itemId , itemsize , itemquantity)=>{
          if(!itemsize){
            toast.error('please select size');
            return;
    
          }
              setCartItems(itemId);
              setCartCount( cartCount+ itemquantity);
              function axqs(d){
                let p = new URLSearchParams();
                Object.keys(d).forEach(function(key){
                    p.append(key, this[key]);
                }, d);
                return p
            }
            
            let data = {
              'itemid': itemId,
              'itemsize': itemsize,
              'itemquantity': itemquantity,
            }
                       
           axios.post("http://localhost/php1/controller/Contact",  axqs(data) ,  {withCredentials: true},
           { headers: {
                "Content-type": "application/json",
            },}).then(function(response) {
        });
      }


       //decrease quantity in cart(cookies)
      const descrese = async(itemId , quantity)=>{
        if(quantity == 1 ){
          return;
        }else{
        function axq(d){
          setCartCount( cartCount - 1);

          let p = new URLSearchParams();
          Object.keys(d).forEach(function(key){
              p.append(key, this[key]);
          }, d);
          return p
      }
      
      let data = {
        'itemid': itemId
      }

      let p = axq(data);
      
        axios.post("http://localhost/php1/controller/controller_descrese",  p ,  {withCredentials: true},
          { headers: {
            "Content-type": "application/json",
        },}).then(function(response) {
    });
    // window.location.reload(false);}
  }
      }

      //change quantity of product in cart(cookies)
      const changequan = async(itemId , quantity)=>{
        

        function axq(d){

          let p = new URLSearchParams();
          Object.keys(d).forEach(function(key){
              p.append(key, this[key]);
          }, d);
          return p
      }
      
      let data = {
        'itemid': itemId,
        'quantity':quantity
      }

      let p = axq(data);
      
        axios.post("http://localhost/php1/controller/control_change",  p ,  {withCredentials: true},
          { headers: {
            "Content-type": "application/json",
        },}).then(function(response) {
        console.log(response.data);
    });
    return;
      }

      // increase quantity in cart(cookies)
      const increase = async(itemId )=>{
        function axq(d){
          setCartCount( cartCount+ 1);

          let p = new URLSearchParams();
          Object.keys(d).forEach(function(key){
              p.append(key, this[key]);
          }, d);
          return p
      }
      
      let data = {
        'itemid': itemId
      }

      let p = axq(data);
      
        axios.post("http://localhost/php1/controller/controller_increase",  p ,  {withCredentials: true},
          { headers: {
            "Content-type": "application/json",
        },}).then(function(response) {
    });
    return;
    
      }


      //mousePosition
      const[mousePosition , setMousePosition]=useState({
        x:0,
        y:0
      });
      useEffect(()=>{
        const mouseMove= e=>{
          setMousePosition({
            x:e.clientX,
            y:e.clientY
          })
  
        }
        window.addEventListener("mousemove", mouseMove)
        return()=>{
          window.removeEventListener("mousemove",mouseMove)
        }
      },[]);


      //insert user data in database
      const userInsert= async(data)=>{
        $.ajax({
          type: "POST",
          url: "http://localhost/php1/controller/controller_user",
          
          
          data: data ,
          complete: function (data) {
            let value2 = $.trim(data.responseText)
              console.log(value2)
              console.log(data.responseText)
            
          }

        });

      }


      //drcrease quantity of product  in database
      const decreasedata =  (cartContent)=>{
        let available= 0;
         {Object.keys(cartContent).map(
                   key => <div>
                 {size.filter((list)=>list.id == cartContent[key].itemid)
                   .map((item)=>(
                     <div>
                        {product.filter((lists)=> lists.id == item.product_id) 
                  .map((items) => {
                     new1= item.quantity - cartContent[key].quantity;
                     if(new1<0){
                      console.log(new1);
                       if(item.quantity==0){
                        toast.error(' Sorry! ' + (items.name) + ' is sold oult ' );

                        handleDelete(cartContent[key].itemid)


                       }else{
                        toast.error(' Sorry! There are only ' +'' + (item.quantity) + ' ' + ' from '+ (items.name) +'in stock' );

                       changequan(cartContent[key].itemid, item.quantity );
                       }
                       available=1;

                       navigate('/cart' ,   { replace: true });

}
                        else{
                        }
                   })} 
                   </div>
                  ))}
                  </div>

                  )}
                  return (new1>= 0 && available ==0);
        }

      //decrease quantity of product in database
        const decreasedata2 =  (id , quantity)=>{
                   {size.filter((list)=>list.id == id)
                     .map((item)=>(
                       <div>
                          {product.filter((lists)=> lists.id == item.product_id) 
                    .map((items) => {
                       new1= item.quantity - quantity;
                       if(new1<0){
                        console.log(new1);
                         toast.error(' Sorry! There are only ' +'' + (item.quantity) + ' ' + ' from '+ (items.name) +'in stock' );
                         changequan(id, item.quantity );
  
                         navigate('/cart' ,   { replace: true });
  
  }
                          else{
                          }
                     })} 
                     </div>
                    ))}
                  
                    return (new1>= 0 );
          }


       //update quantity of product in database 
        const quantityupdate=  (cartContent)=>{
          {Object.keys(cartContent).map(
                    key => <div>
                  {size.filter((list)=>list.id == cartContent[key].itemid)
                    .map((item)=>{                         
                      new1= item.quantity - cartContent[key].quantity;

                       $.ajax({
          type: "POST",
          url: "http://localhost/php1/controller/control_update",
          // dataType: 'json',
          
          data: {'quantity':new1 , 'itemid':cartContent[key].itemid} ,
          complete: function (data) {
            let value2 = $.trim(data.responseText)
              console.log(value2)
              console.log(data.responseText)
              console.log("delete number")
              console.log(cartContent[key].itemid)
              handleDelete(cartContent[key].itemid)
          }
        });   
                  })}
                   </div>
 
                   )}
                   return
         }

         const quantityupdate2=  (id, quantity)=>{
                  {size.filter((list)=>list.id == id)
                    .map((item)=>{                         
                      new1= item.quantity - quantity;

                       $.ajax({
          type: "POST",
          url: "http://localhost/php1/controller/control_update",
          
          data: {'quantity':new1 , 'itemid':id} ,
          complete: function (data) {
            let value2 = $.trim(data.responseText)
              console.log(value2)
              console.log(data.responseText)
              handleDelete(id)
          }
        });   
                  })}
                   return
         }

         
         //insert order information in databse
      const orderInsert2= async( id, quantity, size ,data ,totalPrice ,totalprice2, shipping)=>{
        console.log(data);
        $.ajax({
          type: "POST",
          url: "http://localhost/php1/controller/control_buy",
          // dataType: 'json',
          data: {'price':totalPrice,  'data':JSON.stringify(data),'id':id , 'size':size, 'quantity':quantity},
          complete: function (data) {
            let value2 = $.trim(data.responseText)
              // console.log(value2)
              console.log(data.responseText)
              // navigate('/', { replace: true });
            console.log(data)
          }
        });
        
               navigate('/OrderSummary2' ,   { state: { id: id , size:size, quantity:quantity,  totalPrice:totalPrice, data:data , shipping:shipping, totalPrice2:totalprice2 } });

      }


      //insert order information in database
      const orderInsert= async(random , totalPrice, cartContent ,data ,totalOrder, totalPrice2)=>{
        console.log(data);
        $.ajax({
          type: "POST",
          url: "http://localhost/php1/controller/controller_order",
          data: {'price':totalPrice,  'data':JSON.stringify(cartContent),'data1':JSON.stringify(data)},
          complete: function (data) {
            let value2 = $.trim(data.responseText)
              console.log(data.responseText)
            console.log(data)
          }
        });
               navigate('/OrderSummary' ,   { state: { cart: cartContent , totalPrice:totalPrice, data:data , shipping:totalOrder, totalPrice2:totalPrice2 } });

      }

      
  
      //variants to get position to move div with mouse
      const variants={
        default:{
          x: mousePosition.x + $(document).scrollLeft() -16,
          y: mousePosition.y + $(document).scrollTop() -16
        }
      }
    
    
      //delete product from cart(cookies)
      const handleDelete = async (itemId )=> {
       
        function axq(d){
          let p = new URLSearchParams();
          Object.keys(d).forEach(function(key){
              p.append(key, this[key]);
          }, d);
          return p
      }
      
      let data = {
        'itemid': itemId
      }

      let p = axq(data);
      
        axios.post("http://localhost/php1/controller/controller_delete",  p ,  {withCredentials: true},
          { headers: {
            "Content-type": "application/json",
        },}).then(function(response) {
    });
    
    }
    
    const gettotal= async=> {
      let totalAmount=0;
      for(const items in cart){
        let iteminfo = size.find((item)=> item.id == items);
        for (const items in cart){
          try {
            if(cart.item >0){
              totalAmount += iteminfo.price * cart.quantity 
            }
            
          } catch (error) {
            
          }
        }

      }
      return totalAmount;

    }
            
          
    //get products from database
    useEffect(() => {
        fetch("http://localhost/php1/controller/Contact")
          .then(res => res.json())
          .then(
            (result) => {
              setProduct(result);
              
            })
      }, []);

      //get cartitems from cookies
      async function fetchData() {
        fetch("http://localhost/php1/controller/Contact_cart", {
          method: 'GET',
            credentials: 'include'},
            { headers: {
                "Content-type": "application/json",
            },})
          .then(res => res.json())
          .then(
            (result) => {
              setCart(result);
            })
      }
      

      //get products size from database
      useEffect(() => {
        fetch("http://localhost/php1/controller/Contact_size")
          .then(res => res.json())
          .then(
            (result) => {
              setSize(result);
              
            })
            
      }, []);
      
   
      //get soldout products
    const sold1=()=>{
      let sold1 =0;
      let sold2 =[]
      {product.map((items)=>{

        let breakcondition=0

      {size.filter((list)=>list.product_id === items.id).map((item)=>{

      if(item.quantity == 0 && breakcondition == 0){ 
        sold1=item.product_id
         }else {
          sold1=0;
          breakcondition=1;
             
    }
      })}
      if(sold1 ==0){
     return;   
        
      }else{
      sold2[sold1]={'id':sold1};
        }

       })}
       return sold2

    }
    let kk= sold1();
const sold= ( id , soldout1)=>{
  let k=0;
  {Object.keys(soldout1).map(
    key => {
      if(id == soldout1[key].id){
       k=id;
       return
      }
      
  })}
  return(k);
}

     
     const numberFormat = (value) =>
      new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'USD'
      }).format(value);



    return(

        <ShopContext.Provider value={{value1:[size],value2:[product] ,value3:addToCart ,value4: cartCount , value5: cart , value6:handleDelete , value7:gettotal , value8:navigate , value9:descrese , value10:increase ,value11:numberFormat , value12:variants , value13:numberFormat , value14:orderInsert , value15:userInsert  ,value16:decreasedata , value17:quantityupdate , value18:sold , value19:kk ,  value21:decreasedata2 , value22:quantityupdate2 , value23:orderInsert2}}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;