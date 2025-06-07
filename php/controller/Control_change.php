[<?php

class Change{
public  function changeq(){

    if($_SERVER["REQUEST_METHOD"] == "POST")
    {
       $data = new Product();
       $data->setId($_REQUEST['itemid']);
       $itemid= $data->getId() ;
       $data->setQuantity($_REQUEST['quantity']);
       $itemquantity= $data->getQuantity() ;
       if($itemquantity==0){
        $delete1= new Delete();
        $delete1->deletepro($itemid);
       }
       $delete = new Dchange();
       $delete->changequantity($itemid,  $itemquantity);
   }
}
}
      
?>
