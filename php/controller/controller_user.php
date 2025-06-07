<?php
class User{
    public  function adduser(){
    
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $data = new Info();


        
        
            $data->setEmail($_REQUEST['email']);
            $data->setCity($_REQUEST['city']);
            $data->setName($_REQUEST['firstname']);
            $data->setLastname($_REQUEST['lastname']);
            $data->setPhone($_REQUEST['phone']);
            $data->setAddress($_REQUEST['address' ]);
            $data->setApartment($_REQUEST['apartment']);
            $data->setRandom($_REQUEST['random']);
        
            $email= $data->getEmail() ;
            $city= $data->getCity() ;
            $name= $data->getName() ;
            $lastname = $data->getLastname();
            $phone= $data->getPhone() ;
            $address = $data->getAddress() ;
            $apartment = $data->getApartment() ;
            $random = $data->getRandom(); 

            $addproduct = new Insert();
            $addproduct->insertuser($email,$city, $name, $lastname, $phone, $address, $apartment, $random);
        
        }
    }

    
}


?>
