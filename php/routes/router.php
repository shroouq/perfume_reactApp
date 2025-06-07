<?php

class Router{
    public Request $request;
    protected array $router = [];


    public function __construct(Request $request)  {
        $this->request = $request;
        
    }




    public function get($path, $callback)
    {
        $this->routes['get'][$path] = $callback;
    }

    public function post($path, $callback)
    {
        $this->routes['post'][$path] = $callback;
    }

    public function resolve(){
        $path= $this->request->getPath(); 
        $method = $this->request->getMethod();
        $callback = $this->routes[$method][$path] ?? false;
     


        if($callback ==false)
        {
            echo "not found";
            exit;
        }
       echo call_user_func($callback);
    }

    // private array $handlers;

    // public function get(string $path, $handler) : void{
    //     $this->addHandler( 'GET', $path, $handler);
    // }

    // public function post(string $path, $handler):void{
    //     $this->addHandler( 'POST', $path, $handler);
    // }

    // public function addHandler( string $method , string $path , $handler):void
    // {
    //     $this->handlers[$method . $path] = [
    //         'path'=> $path,
    //         'method'=> $method,
    //         'handler'=> $handler, 
    //     ];
    // }

    // public function run(){
    //     $requestUri = parse_url($_SERVER ['REQUEST_URI']);
    //     $requestPath = $requestUri['path'];
        // $method = $_SERVER['REQUEST_METHOD'];
        // $callback = null;


        // foreach ($this->handlers as $handler){
        //     if($handler['path']===$requestPath && $method === $handler['method']){
        //         $callback = $handler['handler'];
        //     }
        // }
        // var_dump($callback);
        // var_dump(array_merge($_GET,$_POST));



        // call_user_func_array($callback , [
        //     array_merge($_GET,$_POST)
        // ]);
        // }
    }
    
