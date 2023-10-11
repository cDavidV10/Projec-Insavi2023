<?php

error_reporting(0);

session_start();

$session = $_SESSION['usuario'];

if($session == null || $session == ''){
    echo json_encode("error");
    die();
}else{
    echo json_encode('exito');
}

?>