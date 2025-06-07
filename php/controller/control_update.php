<?php
class Update{


//addto cart
public  function updatequan(){
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
       

        $data = new Product();
        $data->setId($_REQUEST['itemid']);
       $itemid= $data->getId() ;
        $data->setQuantity($_REQUEST['quantity']);
        $newquantity= $data->getQuantity() ;


        $order = new Up();
        $order->newquan( $itemid, $newquantity);

    }
}
}