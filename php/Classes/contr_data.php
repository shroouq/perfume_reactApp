<?php

class Contr extends Connect
{
    //add product to database if the sku is not exist
    public function addpro($itemid, $itemsize)
    {
        
            $this->setUser($itemid, $itemsize);
            print_r("true");
            exit();
        
    }
}