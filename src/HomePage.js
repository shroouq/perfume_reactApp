import {useEffect, useState,useRef,useContext,} from "react";
import { Link } from 'react-router-dom';
import { ShopContext } from './context/ShopContext';
import {motion} from "framer-motion";
import 'reactjs-popup/dist/index.css';
import 'tippy.js/dist/tippy.css'; 
import SideCart from "./component/SideCart";
import "./Apps.css";
import cover2 from "./assets/images/360_F_909174056_2MSrjcYSXILRfFUx2CaKbuuw4Qla2va9.jpg";


function HomePage(){
    const [ sizes, setSizes]=useState("");
    const{value1,value2 , value11 , value3,value10, value12 , value18 , value19}= useContext(ShopContext);
    const [product] = value2;
    const [size] = value1;
    const increase= value10;
    const addToCart= value3;
    const variants = value12;
    const sold= value18;
    const soldOut= value19;
    const numberFormat1 = value11;

    //popup 
const [isOpen, setIsOpen] = useState(false);
const [visible, setVisible]=useState(true);
const [selectImage , setSelectImage]= useState({});
const [ quantity, setQuantity]= useState(1);
const[cartVisible, setCartVisible]=useState(false);

//open popup function
  const openPopup = (imageid) => {setIsOpen(true);
    setVisible(false);
    setSelectImage(imageid);
    setSizes("");
    setQuantity(1);
  };
  
  //close popup
  const closePopup = () => {setIsOpen(false);
    setVisible(true);
  }

  //increase quantity
  const quantityincrease= ()=>{
    setQuantity(quantity+1);
  }

  //decrease quantity
  const quantitydncrease= ()=>{
    if(quantity>1){
      setQuantity(quantity-1);
    }
   
  }

  //sidecart open function
  const sidecart=(id, size, quantity)=>{
    if(size){
    
        setCartVisible(true);
        document.body.style.cursor="none";
        document.getElementById("w").style.cursor="default";
        }
        addToCart(id,size, quantity ) 
      }
      

      //sidecart close function
      const closecart=()=>{
        document.getElementById("jj").addEventListener('click', function(e){
          if(cartVisible){
            document.body.style.cursor="default";
    
            setCartVisible(false)
          }
          console.log(cartVisible)
        })
      }
      
    

    const arrivalRef= useRef();
    const [width, setWidth ] = useState(0);
    useEffect(()=> {
        setWidth(arrivalRef.current.scrollWidth - arrivalRef.current.offsetWidth);
    },[])

    

      const numberFormat = (value) =>
      new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'USD'
      }).format(value);

     
    
    return(
        <div className="Home">

           <div className="nn" id="jj" onClick={()=>closecart()}>
           <div className="mousediv">
             <motion.div className={`${cartVisible ? "circlecart" : 'circlecart1'}`} variants={variants} animate="default">
                        <div className="cross1"></div>
                        <div className="cross2"></div>
                        
                        </motion.div>
                   </div>
          
                      <div id="u" className={`${cartVisible ? "parent1" : 'parent'}`} >

        <img className="image" src={cover2} alt="an image" />
        <h1 className="ani"> New Arrival</h1>
        {/* <motion.div ref={arrivalRef} className="last">
        
            <motion.div  drag="x" dragConstraints={{right:0 , left: -width}}  className="arrival">
                {images.map((image)=> (
                    <motion.div className="item"  key={image}>
                        <img src={image} alt="img"></img>
                        </motion.div>
                    
                ))}
            </motion.div>
        </motion.div> */}

        <motion.div ref={arrivalRef} className="last">
        <motion.div  drag="x" dragConstraints={{right:0 , left: -600}}  className="arrival">

    
        {product.filter((list)=>  list.arrival =="true")
            .map((items) => (

                    <motion.div className="item" key={items.image}>
                                    <Link to={`/product/${items.sku}`}>
                    <img  src={require(`./assets/images/men/${items.image}`)} ></img>
                    </Link>
                        </motion.div>
                    
                ))}
        </motion.div>
    </motion.div>


        
        <h1 className="seller"> Best Seller For Men 
        </h1>
        <div className="best">
               
        {product.filter((list)=> list.type ==="men" && list.best =="true")
            .map((item) => {
              let kk= sold(item.id, soldOut);

              return(
           
               
                <div>

                    <div className="con">
                    <div className="Add">
                    {kk==item.id && <button className="soldout1" >sold out </button>} 

        <div className="content">
        {kk != item.id &&   <button className={`${!visible && item.id ==selectImage ? "hidebutton" : "quickbutton"}`} onClick={()=> openPopup(item.id)} >QUICK ADD</button>}
      {isOpen && item.id == selectImage  && (
        <div className="popup">
            <p> size </p>
            <div className="addbutton1">

           {size.filter((list)=>list.product_id === item.id)
             .map((item)=>(
              <div>
              {item.quantity == 0 && 
              <button className="sold">{item.size}</button>
              }
           {item.quantity > 0 &&
            <button  onClick={()=>setSizes(item)} className={`${item ===sizes ? "bsize1" : 'b2size1'}`} > {item.size}</button>}
             </div>
             ))}
                         </div>
                         {size.filter((lists)=>lists === sizes)
             .map((items)=>(
              <div className="popprice">
              <p> price: </p>
               <p> {numberFormat (items.price * quantity) }</p>
              </div>
             ))}

       
                    <p>quantity</p>
                    <div className="addbutton2">
                           <button type="submit" onClick={quantitydncrease}>-</button>
                           <div className="quan">
                           <p className="quan"> {quantity}</p>
                            
                           </div>
                           <button type="submit" onClick={quantityincrease}>+</button>
                        </div>
                        <div className="addbutton3">
                        <button  type="submit" onClick={()=>sidecart(sizes.id, sizes.size, quantity )}> ADD </button>
                        <button onClick={closePopup}>CANCEL</button>
                        
                        </div>
        </div>
      )}
            </div>
               <img className="image1" src={require(`./assets/images/men/${item.image}`)} />


                </div>
                <Link className="Link"  to={`/product/${item.sku}`}>

                <div className="title">
                    <span> {item.name} </span>
               </div>
               </Link>

               </div>
               </div>
            )})}
              </div>
       
              
        <h1 className="seller"> Best Seller For Women 
        {/* <i class="fa-solid fa-child-dress"></i> */}
        </h1>
        <div className="best">
               
               {product.filter((list)=> list.type ==="woman" && list.best =="true")
                   .map((item) => {
                    let kk= sold(item.id, soldOut);

                    return(
                   
                    <div>

                    <div className="con">
                    <div className="Add">
                    {kk==item.id && <button className="soldout1" >sold out </button>} 

        <div className="content">
        {kk != item.id &&  <button className={`${!visible && item.id ==selectImage ? "hidebutton" : "quickbutton"}`} onClick={()=> openPopup(item.id)} >QUICK ADD</button> }
      {isOpen && item.id == selectImage  && (
        <div className="popup">
            <p> size </p>
            <div className="addbutton1">

           {size.filter((list)=>list.product_id === item.id)
             .map((item)=>(
              <div>
              {item.quantity == 0 && 
              <button className="sold">{item.size}</button>
              }
           {item.quantity > 0 &&
            <button  onClick={()=>setSizes(item)} className={`${item ===sizes ? "bsize1" : 'b2size1'}`} > {item.size}</button>}
             </div>
             ))}
                         </div>
                         {size.filter((lists)=>lists === sizes)
             .map((items)=>(
              <div className="popprice">
              <p> price: </p>
               <p> {numberFormat (items.price * quantity) }</p>
              </div>
             ))}

       
                    <p>quantity</p>
                    <div className="addbutton2">
                           <button type="submit" onClick={quantitydncrease}>-</button>
                           <div className="quan">
                           <p className="quan"> {quantity}</p>
                            
                           </div>
                           <button type="submit" onClick={quantityincrease}>+</button>
                        </div>
                        <div className="addbutton3">
                        <button  type="submit"onClick={()=>sidecart(sizes.id, sizes.size, quantity )}> ADD </button>
                        <button onClick={closePopup}>CANCEL</button>
                        
                        </div>
        </div>
      )}
            </div>
               <img className="image1" src={require(`./assets/images/men/${item.image}`)} />


                </div>
                <Link className="Link"  to={`/product/${item.sku}`}>

                <div className="title">
                    <span> {item.name} </span>
               </div>
               </Link>

               </div>
               </div>
            )})}
              </div>
              
              </div>
              </div>

              
            
              <div id="w" className={`${cartVisible ? "sidecart" : 'closeside'}`}>
                    <SideCart />
              
                            
              
                          </div>
</div>
    );
}

 export default HomePage;