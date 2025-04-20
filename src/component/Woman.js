import React, { useState, useEffect, useContext} from "react";
import { ShopContext } from '../context/ShopContext';
import {Card,  CardBody,CardImg} from 'reactstrap';
import {motion} from "framer-motion";
import { Link } from "react-router-dom";
import Productitem from "./ProductItem";
import SideCart from "./SideCart";
import "../login.css";




function Men() {
  const{ value3,value5, value12, value13}= useContext(ShopContext);
  const addToCart= value3;
  const numberFormat= value13;
  const variants = value12;


    //popup
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible]=useState(true);
    const [selectImage , setSelectImage]= useState({});
    const [ quantity, setQuantity]= useState(1);
    const [ sizes, setSizes]=useState("");
    const[cartVisible, setCartVisible]=useState(false);
    

      const openPopup = (imageid) => {setIsOpen(true);
        setVisible(false);
        setSelectImage(imageid);
        setCartVisible(false);

        setSizes("");
        setQuantity(1);
      };
      const closePopup = () => {setIsOpen(false);
        setVisible(true);

      }

      const quantityincrease= ()=>{
        setQuantity(quantity+1);
      }
      const quantitydncrease= ()=>{
        if(quantity>1){
          setQuantity(quantity-1);
        }
       
      }
    

// get list of products from database
const{value1,value2, value18,value19}= useContext(ShopContext);
const [product] = value2;
const [size] = value1;
const soldOut= value19;
const sold= value18;
const [filterProduct, setFilterProduct] = useState([]);
const [category, setCategory] = useState([]);
const [subCategory, setSubCategory] = useState([]);
const [ sortType, setSortType]= useState('relavent');

//get selected category
const toggleCategory =(e)=>{
  if(category.includes(e.target.value)) {
    setCategory(prev=> prev.filter(product =>product !== e.target.value))
  }
  else{
    setCategory(prev=> [...prev, e.target.value])
  }
}
//get selected subcategory
const toggleSubCategory =(e)=>{
  if(subCategory.includes(e.target.value)) {
    setSubCategory(prev=> prev.filter(product =>product !== e.target.value))
  }
  else{
    setSubCategory(prev=> [...prev, e.target.value])
  }
}




const applyFilter =() => {
  let productCopy = product.slice();
  
  if (category.length >0) {
    productCopy = productCopy.filter(item => category.includes(item.category));
  }
  if (subCategory.length >0) {
    productCopy = productCopy.filter(item => subCategory.includes(item.subcategory));
  }
  setFilterProduct(productCopy)
}





useEffect(()=>{
  applyFilter();
},[category,subCategory])


 useEffect(()=>{
    setFilterProduct(product);
  },[product])


  //sidecart available
  const sidecart=(id, size, quantity)=>{
if(size){

    setCartVisible(true);
    document.body.style.cursor="none";
    document.getElementById("w").style.cursor="default";
    }
    addToCart(id,size, quantity )
    
  }
  

  //sidecart close
  const closecart=()=>{
    document.getElementById("jj").addEventListener('click', function(e){
      if(cartVisible){
        document.body.style.cursor="default";

        setCartVisible(false)
      }
    })
  
   
  //sort by price 
//   const sortProduct =()=>{
// }
// let fpCopy = filterProduct.slice();
// console.log(fpCopy);

// switch(sortType){
//   case 'low-high':
//     setFilterProduct(fpCopy.sort((a,b)=>(a.price-b.price)));
//     break;
//     case 'high-low':
//     setFilterProduct(fpCopy.sort((a,b)=>(b.price-a.price)));
//     break;

//     default:
//       applyFilter();
//       break;

// }
 }
// useEffect(()=>{
//   sortProduct();
// })
  
//sort by price 
// const sortProduct =()=>{

//   let fpCopy = filterProduct.slice();
  
//   switch(sortType){
//     case 'low-high':
//       setFilterProduct(fpCopy.sort((a,b)=>(a.price-b.price)));
//       break;
//       case 'high-low':
//       setFilterProduct(fpCopy.sort((a,b)=>(b.price-a.price)));
//       break;
  
      // default:
      //   applyFilter();
      //   break;
  
  // }
  // }

  
 


  return(
  
    <div >


      
        <div className="nn" id="jj" onClick={()=>closecart()}>
          <motion.div className={`${cartVisible ? "circlecart" : 'circlecart1'}`} variants={variants} animate="default">
           {/* <div className="circlecart"> */}
            <div className="cross1"></div>
            <div className="cross2"></div>
            {/* </div> */}
            </motion.div>
        <div id="u" className={`${cartVisible ? "parent1" : 'parent'}`} >


      <div class="sidecat" >
      <Productitem 
       toggleCategory={toggleCategory}
       toggleSubCategory={toggleSubCategory}
       applyFilter={applyFilter}


       />
      </div>
      
        
         {/* <div className="sort">
          <select onChange={(e)=>setSortType(e.target.value)} className="sort1" >
            <option value="relavent">Sort by :</option>
            <option value="low-high"> Low to high</option>
            <option value="high-low">High to low</option>
          </select>
          </div> */}
          <p className="title2"> Woman Collection </p>
            <div>

            
            <div className="men1">
{filterProduct.filter((list)=> list.type ==="woman")
.map((item) => {
  let kk= sold(item.id, soldOut);
  console.log(kk);


return(


  <div>
   
<div className="con-men">

<div className="Add">
{kk==item.id && <button className="soldout" >sold out </button>} 

  <div className="content">

 
          {kk != item.id &&   <button className={`${!visible  && item.id ==selectImage  ? "hidebutton" : "quickbutton2"}`} onClick={()=> openPopup(item.id)} >QUICK ADD</button>}
  
      {isOpen && item.id == selectImage  && (
        <div className="popup2">
            <p> size </p>
            <div className="addbutton6">


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
              <div className="popprice2">
              <p> price: </p>
               <p> {numberFormat (items.price * quantity) }</p>
              </div>
             ))}

       
                    <p>quantity</p>
                    <div className="addbutton8">
                           <button type="submit" onClick={quantitydncrease}>-</button>
                           <div className="quan">
                           <p className="quan"> {quantity}</p>
                            
                           </div>
                           <button type="submit" onClick={quantityincrease}>+</button>
                        </div>
                        <div className="addbutton5">
                        <button  type="submit" onClick={()=>sidecart(sizes.id, sizes.size, quantity )}> ADD </button>
                        <button onClick={closePopup}>CANCEL</button>
                        
                        </div>
        </div>
      )}

            </div>

            
        
  <Card >

    <CardImg className="image3" src={require(`../assets/images/men/${item.image}`)} ></CardImg>
    <CardBody>
    

    </CardBody>
    </Card>
          

    </div>
    <Link className="Link"  to={`/product/${item.sku}`}>

<div className="title5">
    <span> {item.name} </span>
</div>
</Link>         
    </div>    
</div>
    
)})}  
    </div>

    </div>
    </div>
    </div>
    <div id="w" className={`${cartVisible ? "sidecart" : 'closeside'}`}>
      <SideCart />

              

            </div>

        </div>
  )
  
 
};
export default Men;



