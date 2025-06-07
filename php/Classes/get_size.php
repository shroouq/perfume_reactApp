<?php

//function to get data from database

class Get_size extends Connect
{
    public function getdata()
    {

        $products = $this->getSize();
        print_r($products);
    }
}
?>