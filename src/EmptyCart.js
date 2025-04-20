import React from "react";
import {Link} from "react-router-dom";
import { Swiper,SwiperSlide } from "swiper/react";
import 'swiper/css';
import'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow,Pagination, Navigation } from "swiper/modules";
import {useState, useContext} from "react";
import { ShopContext } from './context/ShopContext';
import "./Apps.css";
import img1 from "./assets/images/empty1.png";
 function EmptyCart(){
    const{value2 }= useContext(ShopContext);
    const [product] = value2;
  
return(
    <div>
        <h3 className="empty"> Your Cart is Empty !</h3>
        <img className="imgempty" src={img1} ></img>
<div className="shop">
  <Link to="/">
        <button className="shopping"> CONTINUE SHOPPING</button>
        </Link>
</div>
<div className="cartseller">

        <p> BEST SELLERS</p>
        </div>
{/* <div className="kk">
        {product.filter((list)=> list.best =="true")
                   .map((item, index) => (
                    <motion.img
                    key={index}
                    src={require(`./assets/images/men/${item.image}`)}
                    className="motionimage"
                    initial="pos1"
                    animate={position[positionIndex[index]]}
                    variants={imageVariants}
                    transition={{duration:0.5}} 
                    style={{width: '40%', position:'absolute'}}
 
                    />
                   ))}
                   </div>
                   <button  onClick={handleNext}> Next</button> */}
                   <div className="swiper myswiper">
                    <div className="swiper-wrapper">
                    <Swiper effect='coverflow'
                    grabCursor={true}
                    speed={1000}
                    autoplay={{
                      delay:5000,
                      disableOnInteraction:true


                    }}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={4}
                    coverflowEffect={
                      {
                        rotate:0,
                        stretch:0,
                        depth:180,
                        modifier:2.5,
                        dynamicBullets:true
                      }}
                      breakpoints={{
                        320:{ spaceBetween:40},
                        430:{ spaceBetween:40 },
                        580:{ spaceBetween:30},
                        650:{ spaceBetween:30},
                      }}
                      pagination={{el:'.swiper-pagination', hideOnClick:true}}
                      navigation={{
                        nextEl:'.swiper-button-next',
                        prevEl:'.swiper-button-prev',
                      }}
                      modules={[EffectCoverflow, Pagination,Navigation]}

                      className="swiper_container">
                        
                      {product.filter((list)=> list.best =="true")

                   .map((item) => (
                    <SwiperSlide className="swiper-slide swiper-slide-active">
                      <Link to={`/product/${item.sku}`}>
                    <img className="swimage" src={require(`./assets/images/men/${item.image}`)}></img>
                    </Link>
                    </SwiperSlide>
                   ))}

                      <div className="swiper-pagination">

                      </div>
                    </Swiper>

                    </div>
                    </div>

       {/* {product.filter((list)=> list.best =="true")
                   .map((item) => (
                      
                       <div>
       
                           <div className="con">
                           <div className="Add">
               <div className="content">
               <button className={`${!visible && item.id ==selectImage ? "hidebutton" : "quickbutton"}`} onClick={()=> openPopup(item.id)} >QUICK ADD</button>
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
                               <button  type="submit" onClick={()=>addToCart(sizes.id, sizes.size, quantity )}> ADD </button>
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
                   ))}
               */}
    </div>

)    

 }
 export default EmptyCart;






