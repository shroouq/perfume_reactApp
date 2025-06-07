<?php

class ControllerDelete{
public  function delete(){

    if($_SERVER["REQUEST_METHOD"] == "POST")
    {
       $data = new Product();
       $data->setId($_REQUEST['itemid']);
       $itemid= $data->getId() ;
       $delete = new Delete();
       $delete->deletepro($itemid);
   }
}
}
      
?>
