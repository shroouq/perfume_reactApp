<?php
class Contactcart{

public function getcart(){
    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        $connect = new Getcart();
        $products = $connect->getc();
        print_r("true");
        print_r($products);

    }

}
}