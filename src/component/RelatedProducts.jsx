import React,{useContext , useRef, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { ShopContext } from '../context/ShopContext';
import "../Apps.css";
import {motion} from "framer-motion";



export default function RelatedProducts(props) {

    const [related, setRelated] = useState([]);
    const [product, setProduct] = useState([]);
     const{value1 , value3}= useContext(ShopContext);
     const [ quantity, setQuantity]= useState(1);
     const[relIndex,setRelIndex]=useState(null)

    
  
const handleCardClick = (index)=> {
  setRelIndex(index === relIndex ? -1: index)
}
const cardVariants=
{
  expanded:{
    width:"380px"
  },
Collapsed:{
  width :"180px"
}}

     
 const arrivalRef= useRef();
    const [width, setWidth ] = useState(0);
    useEffect(()=> {
        console.log(arrivalRef.current.scrollWidth - arrivalRef.current.offsetWidth);
        setWidth(arrivalRef.current.scrollWidth - arrivalRef.current.offsetWidth);
    },[width , arrivalRef]);
    console.log(width)

    useEffect(() => {
        fetch("http://localhost/php1/controller/Contact")
          .then(res => res.json())
          .then(
            (result) => {
              setProduct(result);
            })
      }, []);

    useEffect(()=>{
        if (product.length >0 ){
            let productCopy = product.slice();
            productCopy = productCopy.filter((item)=> props.id != item.id);
            productCopy = productCopy.filter((item)=> props.type === item.type);
            productCopy = productCopy.filter((item)=> props.category === item.category || props.subcategory === item.subcategory) ;
            setRelated(productCopy.slice(0,5));
        }
    },[product])

    function refreshPage() {
        setTimeout(()=>{
            window.location.reload(false);
        }, 500);
    }

    return(
      <div >
        <div className="relselection"> 
         {related.map((item,index)=>(
<div >
  {/* related products for large screen  */}
        <motion.div
        className={` ${index=== relIndex ? 'expanded':'Collapsed'}`}
        variants={cardVariants}
        initial="Collapsed"
        animate={index === relIndex ? 'expanded' :'Collapsed'}
          transition={{duration:0.5}}
          onClick={()=>handleCardClick(index)}
         style={{backgroundImage: `url(/men/${item.image})`}} 
          >
            <div className="reldiv">
              <div className="reldiv2">

             <h1 className="relname">{item.name}</h1>
             {
              index=== relIndex && (
                <Link className="rellink" onClick={ refreshPage } to={`/product/${item.sku}`}>
                <button className="relbotton"> Add To Cart</button> 
                </Link>
              )
             }
             </div>
            </div>

        </motion.div>
        </div>
         ))}
         </div>
    {/* related products for small screen  */}
       <div className="relselection2">
 <motion.div ref={arrivalRef} className="last1">
        <motion.div  drag="x" dragConstraints={{right:0 , left: -250}}  className="arrival">
                {related.map((item)=>(

                 <motion.div className="item1" key={item.image}>
                   <Link  onClick={ refreshPage } to={`/product/${item.sku}`}>

<img className="item1img" src={require(`../assets/images/men/${item.image}`)} />
</Link>
</motion.div>

))}
</motion.div>
</motion.div>
</div>
                    
</div>

    )
}