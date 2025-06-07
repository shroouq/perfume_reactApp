<?php
class Iquantity extends Connect{

    public function addquan($itemid){

        $cookie_data= stripslashes($_COOKIE['cart']);
        $cart_data = json_decode($cookie_data, true);
        $item_id_list = array_column($cart_data, 'itemid');
        print_r("UU");

        if(in_array($itemid, $item_id_list)){
            foreach($cart_data as $keys =>$values)
            {
                // $yy= json_encode($itemid);
                // $this->setData($yy);
                // print_r("true");

                if($cart_data[$keys]["itemid"] == $itemid)
                {
                    $cart_data[$keys]["quantity"] +=1;
                }
                
            }
        }
        $item_data = json_encode($cart_data);

            setcookie("cart", $item_data, time() +(86400* 30) ,"https://www.mtegypt.online");
            print_r("true");
}
}