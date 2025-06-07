<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
class Connect extends Db
{
     //get data from database
     public function getProduct()
     {
       // $sql1= "SELECT * FROM `product`  JOIN `product-attribute` ON `product`.id = `product-attribute`.product_id";
 
         $sql1= "SELECT * FROM product ORDER BY ID";
         $stmt1= $this->connect()->prepare($sql1);
         $stmt1->execute();
         $array = $stmt1->fetchAll();
         var_dump($array);
         return json_encode($array);
 
     }

     public function getSize()
     {
       // $sql1= "SELECT * FROM `product`  JOIN `product-attribute` ON `product`.id = `product-attribute`.product_id";
 
       $sql1= "SELECT * FROM `product-attribute` ORDER BY ID";
       $stmt1= $this->connect()->prepare($sql1);
       $stmt1->execute();
       $array = $stmt1->fetchAll();
       return json_encode($array);
 
     }

     public function updateData($itemid, $quantity)
     {
      $sql= "UPDATE `product-attribute` SET quantity =$quantity  WHERE id= $itemid";
      $stmt = $this->connect()->prepare($sql);
      $stmt->execute();


        
        return true;

     }

     public function setUser($email,$city, $name, $lastname, $phone, $addrss, $apartment,$random)
    {

       
      $sql= "INSERT INTO order_details (email, city, name, lastname, phone, address, apartment,orderNumber ) VALUES (? , ?, ?, ? , ?, ? ,? ,?)";
      $stmt = $this->connect()->prepare($sql);
      $stmt->execute([$email,$city, $name, $lastname, $phone, $addrss, $apartment,$random]);


        
        return true;

    }
    public function setData($array , $random , $price)
    {
var_dump($random['random']);      
foreach($array as $data){

        $query = "INSERT INTO order_items (itemid,size,quantity , orderNumber, tprice)
        VALUES ('$data[itemid]','$data[itemsize]',' $data[quantity]', '$random[random]' , '$price' )"; 
           
      $stmt = $this->connect()->prepare($query);
      $stmt->execute();
      
      }
        
        return true;

    }

    public function setBuy($id, $size, $quantity, $random , $price)
    {
              $query = "INSERT INTO order_items (itemid,size,quantity , orderNumber, tprice)
              VALUES ('$id', '$size' , '$quantity' , '$random[random]' , '$price' )";
               $stmt = $this->connect()->prepare($query);
               $stmt->execute();
               
               
                 
                 return true;
         
             

    }

    } 

