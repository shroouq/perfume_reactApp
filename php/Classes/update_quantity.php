<?php
class Up extends Connect{

    public  function newquan($itemid, $quantity){
        $this->updateData($itemid, $quantity);
        
        print_r("true");
        exit();
        


    }



}