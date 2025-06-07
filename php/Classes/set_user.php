<?php

class Info
{
    private $email;
    private $city;
    private $firstname;
    private $lastname;
    private $phone;
    private $address;
    private $apartment;
    private $random;
    private $price;


    //grabbing the data
    public function setEmail($email)
    {
        $this->email = $email;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function setCity($city)
    {
        $this->city = $city;
    }

    public function getCity()
    {
        return $this->city;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function getName()
    {
        return $this->name;
    }

    public function setLastname($lastname)
    {
        $this->lastname = $lastname;
    }

    public function getLastname()
    {
        return $this->lastname;
    }

    public function setPhone($phone)
    {
        $this->phone = $phone;
    }

    public function getPhone()
    {
        return $this->phone;
    }

    public function setAddress($address)
    {
        $this->address = $address;
    }

    public function getAddress()
    {
        return $this->address;
    }

    public function setApartment($apartment)
    {
        $this->apartment = $apartment;
    }

    public function getApartment()
    {
        return $this->apartment;
    }

    public function setRandom($random)
    {
        $this->random = $random;
    }

    public function getRandom()
    {
        return $this->random;
    }

    public function setPrice($price)
    {
        $this->price = $price;
    }

    public function getPrice()
    {
        return $this->price;
    }

   

}
