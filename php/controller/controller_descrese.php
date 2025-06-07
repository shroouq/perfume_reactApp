<?php

class Decrese{
public  function decreseq(){

    if($_SERVER["REQUEST_METHOD"] == "POST")
    {
        print_r("OO");
       $data = new Product();
       $data->setId($_REQUEST['itemid']);
       $itemid= $data->getId() ;
       $delete = new Dquantity();
       $delete->deletequan($itemid);
   }
}
}
      
?>
