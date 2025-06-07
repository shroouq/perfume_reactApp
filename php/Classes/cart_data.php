<?php

class Getcart{

    public function getc(){
        
    
        if(isset($_COOKIE["cart"])){
            $total = 0;
            $cookie_data = stripslashes($_COOKIE['cart']);
            print_r($cookie_data);
            return json_encode($cookie_data);
            exit();

        }else{
            print_r("false");
        }
    }
}