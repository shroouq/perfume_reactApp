<?php
class DD extends Connect{

    public  function vv($data ,$random , $price){
        $this->setData($data, $random, $price);
        print_r("true");
        exit();
    }



}