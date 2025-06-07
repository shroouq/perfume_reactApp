 <?php
class Order{


//addto cart
public  function orderyy(){
    $data = new Info();

    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $data->setPrice($_REQUEST['price']);
        $price = $data->getPrice(); 
        $array1 = json_decode(($_POST['data1']),true);

        $array = json_decode(($_POST['data']),true);
        $order = new DD();
        $order->vv( $array ,$array1 , $price);


    }}}

