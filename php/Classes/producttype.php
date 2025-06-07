<?php


interface producttype
{
    public function addproduc();
}

class Datadd
{
    public function attribute($sku, $name, $price, $type, $size, $weight, $dimensions)
    {
        $class = $type;
        $d =  new $class($sku, $name, $price, $type, $size, $weight, $dimensions);
        $d->addproduc();
    }
}
