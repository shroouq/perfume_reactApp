<?php
class Buy{


//addto cart
public  function buyorder(){
    $data = new Info();
    $data2 = new Product;

    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
       

        $data2->setQuantity($_REQUEST['quantity']);
        $quantity = $data2->getQuantity(); 
        $data2->setSize($_REQUEST['size']);
        $size = $data2->getSize(); 
        $data2->setId($_REQUEST['id']);
        $id = $data2->getId(); 
        $data->setPrice($_REQUEST['price']);
        $price = $data->getPrice(); 
        $array = json_decode(($_POST['data']),true);
        $order = new Now();
        $order->buynow( $id, $size, $quantity ,$array , $price);

    }}}

