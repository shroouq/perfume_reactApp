<?php
header("Access-Control-Allow-Origin: https://perfumreact.netlify.app/");
header("Access-Control-Allow-Origin: *");

header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Access-Control-Allow-Credentials: true");


require("./vendor/autoload.php");
$app = new Application();


$app->router->post('/controller/Contact', function(){
    $contact = new Contact();
    $contact->create();});

$app->router->post('/controller/controller_delete', function(){
    $contact = new ControllerDelete();
    $contact->delete();});

$app->router->get('/controller/Contact', function(){
    $contact = new Contact();
    $contact->index();});

$app->router->get('/controller/Contact_size', function(){
        $contact = new Size();
        $contact->index();});

$app->router->get('/controller/Contact_cart', function(){
            $contact = new Getcart();
            $contact->getc();});
       
$app->router->post('/controller/controller_descrese', function(){
    $contact = new Decrese();
    $contact->decreseq();});


$app->router->post('/controller/controller_increase', function(){
    $contact = new Increase();
    $contact->increaseq();});

$app->router->post('/controller/controller_user', function(){
    $contact = new User();
    $contact->adduser();});
    
$app->router->post('/controller/controller_order', function(){
    $contact = new Order();
    $contact->orderyy();});

$app->router->post('/controller/control_buy', function(){
    $contact = new Buy();
    $contact->buyorder();});

$app->router->post('/controller/control_update', function(){
    $contact = new Update();
    $contact->updatequan();});
    
$app->router->post('/controller/control_change', function(){
    $contact = new Change();
    $contact->changeq();});
        
$app->run();

?>
