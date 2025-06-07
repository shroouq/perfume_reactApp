<?php

header('Access-Control-Allow-Origin: https://perfumreact.netlify.app/');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

class Db
{
    private $host = "yhrz9vns005e0734.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
    private $user = "h6ribd94e1br4imd";
    private $password = "ybjwdlyqmk6yh2aw";
    private $dbName= "vnpn1yzj86h5w5ff";

    protected function connect()
    {
        $dsn = 'mysql:host=' . $this->host . ';dbname=' . $this->dbName;
        $pdo = new PDO($dsn, $this->user, $this->password);
        return $pdo;
    }
}
