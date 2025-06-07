<?php

class Product
{
    private $itemid;
    private $itemsize;
    private $itemquantity;
    
    //grabbing the data
    public function setId($itemid)
    {
        $this->itemid = $itemid;
    }

    public function getId()
    {
        return $this->itemid;
    }

    public function setSize($itemsize)
    {
        $this->itemsize = $itemsize;
    }

    public function getSize()
    {
        return $this->itemsize;
    }

    public function setQuantity($itemquantity)
    {
        $this->itemquantity = $itemquantity;
    }

    public function getQuantity()
    {
        return $this->itemquantity;
    }

}