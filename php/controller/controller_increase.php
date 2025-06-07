<?php

class Increase{
public  function increaseq(){

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $data = new Product();
        
        
        $data->setId($_REQUEST['itemid']);

        $itemid= $data->getId() ;

       $add = new Iquantity();
       $add->addquan($itemid );
   }
}
}
      
?>
