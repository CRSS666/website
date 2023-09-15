<?php
  global $twig;

  require_once '_config.php';

  use Bramus\Router\Router;
  
  $router = new Router();

  session_start();
  
  if(isset($_SESSION['user']))
    $twig->addGlobal('user', $_SESSION['user']);

  $router->get('/u/([a-z0-9_\.]+)', function($name) {
    echo 'Hello ' . htmlentities($name);
  });

  $router->get('/', function() {
    echo $twig->render('index.twig');
  });

  $router->get('/nations', function() {
    echo $twig->render('index.twig');
  });

  $router->set404(function() {
    http_response_code(404);
    
    echo $twig->render('404.twig');
  });

  $router->run();