<?php
class Delete{

    public function deletepro($itemid){
        $cookie_data= stripslashes($_COOKIE['cart']);
        $cart_data = json_decode($cookie_data, true);
        foreach($cart_data as $keys => $values)
        {
            if($cart_data[$keys]['itemid'] == $itemid)
            {
            unset($cart_data[$keys]);
            $item_data = json_encode($cart_data);
            setcookie("cart", $item_data, time() +(86400* 30) ,"https://www.mtegypt.online");
            print_r("delete");

           }else{
            print_r("notdelete");
           }
    }
    }
}