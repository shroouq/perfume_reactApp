<?php

class Insert extends Connect
{
    // public function __construct($email,$city, $firstname, $lastname, $phone, $addrss, $apartment)
    // {
    //     $this -> email = $email;
    //     $this -> city = $city;
    //     $this -> firstname = $firstname;
    //     $this -> lastname = $lastname;
    //     $this -> phone = $phone;
    //     $this -> address = $address;
    //     $this -> apartment = $apartment;
    //     // $this -> random = $random;

    // }
  public function insertuser($email,$city, $name, $lastname, $phone, $addrss, $apartment,$random)
  {
        
        $this->setUser($email,$city, $name, $lastname, $phone, $addrss, $apartment,$random);
        
        print_r("true");
        exit();
}

}