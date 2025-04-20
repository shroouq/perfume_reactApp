import React, { useState , useEffect, useContext }  from "react";
import {  useParams ,Link} from "react-router-dom";
import "./Apps.css";
import { ShopContext } from "./context/ShopContext";
import RelatedProducts from "./component/RelatedProducts";



function Product(){


    document.body.style.cursor="default";
    const {productSku} = useParams();
    const{value1,value2,value3, value19}= useContext(ShopContext);
    const soldOut= value19;
    const [product] = value2;
    const addToCart= value3;
    const [size] = value1;
    const [ productData , setProductData] = useState(false);
    const [ sizes, setSizes]=useState("");
    const [ quantity, setQuantity]= useState(1);


       //get produc by id 
      const fetchProductData = async () => {

        product.map((item)=> {
            if (item.sku === productSku) {
                setProductData(item)
                return null;
            }
        })

      }

      useEffect(()=> {
        fetchProductData()
      },[productSku , product])

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


    return productData ?(

        <div className="Register">
        <div class="parent">
            <div class="segment eight"><img className="product-img"  src={require(`./assets/images/men/${productData.image}`)} alt="an image" /></div>
            <div class="segment four">
                <p className="name"> {productData.name}</p>
                <div className="justifydesc">
                <p className="desc"> {productData.description}</p>
                </div>

              <div className="size">
                <p> Select Size </p>
                <div className="size1">

                {size.filter((list)=>list.product_id === productData.id)
             .map((item)=>(
              <div>
              {item.quantity == 0 && 
                <button className="sold1">{item.size}</button>
                }
                    {item.quantity > 0 &&

                  <button onClick={()=>setSizes(item)} className={`${item ===sizes ? "bsize" : 'b2size'}`}> {item.size} </button>
                    }
                  </div>
             )) }
             {Object.keys(soldOut).map(
    key => (
      <div>
      {productData.id== soldOut[key].id &&
        <p className="soldproduct"> SOLD OUT OF STOCK  </p>}
      
    </div>

      ))}
            </div>

             {size.filter((lists)=>lists === sizes)
             .map((items)=>(
              <div className="price ">
              <p> Subtotal:  {items.price * quantity} </p>
              </div>
             ))}
             <div className="quantity">
              <p>Quantity</p>
              <button className="quantity1" onClick={quantitydncrease}> -</button>
              <button className="quantity2"> {quantity}</button>
              <button className="quantity3" onClick={quantityincrease}> +</button>
               
              <button className="subm" type="submit" onClick={()=>addToCart(sizes.id, sizes.size , quantity )} >add to cart</button>

             </div>
             <div>


             
             <Link className="Link" to="/Checkout2" state={{id:sizes.id, size:sizes.size , quantity:quantity, price :sizes.price}}>
             <button className="subm1" > BUY IT NOW!</button>
             </Link>
</div>
                
</div>
            </div>  
        </div>
        <h1 className="related">You May Also Like</h1>
<div className="ee">
        <RelatedProducts type={productData.type} id={productData.id} category={productData.category} subcategory={productData.subcategory} />
        </div>
     
    </div>
    ) : <div></div>

}

 export default Product;