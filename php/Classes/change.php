<?php
class Dchange{

    public function changequantity($itemid, $itemquantity){
        $cookie_data= stripslashes($_COOKIE['cart']);
        $cart_data = json_decode($cookie_data, true);
        $item_id_list = array_column($cart_data, 'itemid');
        
        if(in_array($itemid, $item_id_list)){
            foreach($cart_data as $keys =>$values)
            {
                if($cart_data[$keys]["itemid"] == $itemid)
                {
                    $cart_data[$keys]["quantity"] = $itemquantity;
                }
                
            }
        }
        $item_data = json_encode($cart_data);

            setcookie("cart", $item_data, time() +(86400* 30) ,"https://www.mtegypt.online");
}
}