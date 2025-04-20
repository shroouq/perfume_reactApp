import React, { useState, useEffect, } from "react";
import $ from "jquery";
import { Link } from 'react-router-dom';


function Register() {

  const [item, setItem] = useState([])
  // get list of products from database
  useEffect(() => {
    fetch("http://localhost/yy/controller/Contact")
      .then(res => res.json())
      .then(
        (result) => {
          setItem(result);
        })

  }, []);
 return(
  <div>
    {item.map(item=> {
      return(
            <div> <img className="image1" src={ require(`./assets/images/men/${item.image}`)} alt="an image" />  </div>
    )})}
    
    <button>Add To Cart</button>
  </div>
 )

}

export default Register;