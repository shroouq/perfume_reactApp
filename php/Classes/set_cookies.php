<?php

class Cookie{

    public function cart($itemid, $itemsize , $itemquantity){

        if(isset($_COOKIE["cart"]))
        {
            $cookie_data = stripslashes($_COOKIE['cart']);
            $cart_data = json_decode($cookie_data, true);
        }
        else{
            $cart_data= array();
        }
        $item_id_list = array_column($cart_data, 'itemid');
        if(in_array($itemid, $item_id_list)){
            foreach($cart_data as $keys =>$values)
            {
                if($cart_data[$keys]["itemid"] == $itemid)
                {
                    $cart_data[$keys]["quantity"] += $itemquantity;
                }
                
            }
        }
        else{
            $item_array = array(
                'itemid' => $itemid,
                'itemsize' => $itemsize,
                'quantity' => $itemquantity
            );
            $cart_data[] =$item_array;

        }


        $cookiname = "cart"; 

       
        $item_data = json_encode($cart_data);
        
       setcookie($cookiname, $item_data, time() +(86400* 30) ,"https://www.mtegypt.online");
        print_r( "true");
        
        if (!isset($_COOKIE[$cookiname])) {
            print_r( "Cookie called '" . $cookiname . "' is not set");
        } else {
            print_r( "Cookie '" . $cookiname . "' has been set");
            print_r( "Value: " . $_COOKIE[$cookiname]);
        }
    }

}

//     public function addcookie($itemid, $itemsize){

//         $this->itemid = $itemid;
//         $this->itemsize = $itemsize;

       

//         $cart = isset($_COOKIE["cart"]) ? $_COOKIE["cart"] :"[]";
//         $cart = json_decode($cart);
//         print_r($cart);
//         $item_array = array(
//               'itemid' => $this->itemid,
//               'itemsize' => $this->itemsize,
//             'quantity' => 1
//         );
//         $cookiname = "cart";
//         $cookivalue = "kk";

//         setcookie($cookiname, $cookivalue, time() +(86400* 30) ,"http://localhost:3000/");
//         print_r( "true");

//         if (!isset($_COOKIE[$cookiname])) {
//             print_r( "Cookie called '" . $cookiname . "' is not set");
//         } else {
//             print_r( "Cookie '" . $name . "' has been set");
//             print_r( "Value: " . $_COOKIE[$cookivalue]);
//         }
        


//         // $item_array = array(
//         //     'itemid' => $this->itemid,
//         //     'itemsize' => $this->itemsize,
//         //     'quantity' => 1

//         // );

//         // setcookie("Shopping_cart", json_encode($item_array), time() +(86400* 30) ,'/');
//         // print_r($item_data);
        
        
//         // exit();

//     }
// }