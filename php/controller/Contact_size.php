<?php
class Size{

public function index(){
    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        $connect = new Get_size();
        $products = $connect->getdata();
        print_r($products);
    }

}
}
