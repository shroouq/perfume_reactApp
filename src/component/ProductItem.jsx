import React from "react";
import { useState} from "react";
import img1 from "../assets/images/drop-down.png";
import "../Apps.css";

    
export default function ProductItem(props) {
        const [showFilter, setshowFilter]=useState(false);
        //function to show or hide filters onclick
        const handleClick= ()=> {
            if(showFilter == false){
                setshowFilter(true);
            }
            else{
                setshowFilter(false);
            }
        }
       

    return(
        <div>
            
            <div className="filter2" >
                <p >Filter
                <img className="drop"  src={img1} alt="drop-down"  onClick={handleClick} /> </p>
            </div>
            <div className={`${showFilter ? "filter3" : 'filter1'}`} >
                <p>CATEGORY</p>
                <div >
                    <p>
                        <input type="checkbox" value={'Parfum'} onChange={props.toggleCategory}/> Parfum
                    </p>
                    <p>
                        <input type="checkbox" value={'EDP'} onChange={props.toggleCategory}/> Eau de Parfum
                    </p>
                    <p>
                        <input type="checkbox" value={'EDT'} onChange={props.toggleCategory}/>  Eau de Toilette
                    </p>
                    <p>
                        <input type="checkbox" value={'EDC'} onChange={props.toggleCategory}/> Eau de Cologne
                    </p>
                    <p>
                        <input type="checkbox" value={'Eau-Fraîche'} onChange={props.toggleCategory}/>Eau Fraîche
                    </p>
                </div>
                
            </div>
            <div className={`${showFilter ? "filter3" : 'filter1'}`}>
            <p>TYPES</p>
                <div>
                    <p>
                        <input type="checkbox" value={'Floral'} onChange={props.toggleSubCategory} /> Floral Fragrances
                    </p>
                    <p>
                        <input type="checkbox" value={' Fruity'} onChange={props.toggleSubCategory} />  Fruity Fragrances
                    </p>
                    <p>
                        <input type="checkbox" value={'Oriental'} onChange={props.toggleSubCategory}/>  Oriental Fragrances
                    </p>
                    <p>
                        <input type="checkbox" value={'Woody'} onChange={props.toggleSubCategory}/> Woody Fragrances
                    </p>
                    <p>
                        <input type="checkbox" value={'Aquatic'} onChange={props.toggleSubCategory}/>Aquatic Fragrances
                    </p>
                </div>
            </div>

        </div>
    )
   
};

