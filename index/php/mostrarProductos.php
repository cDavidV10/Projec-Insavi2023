<?php

$conexion = mysqli_connect ("localhost", "root", "", "proyecto");




$conexion->query("SET NAMES 'utf8'");

if (!$conexion){
    echo json_encode("error");

    return;
} 

$query = "SELECT * FROM producto";

$consulta = mysqli_query($conexion, $query);

 $rows= array();


while($r = $consulta->fetch_object()) {
    array_push($rows, $r);
    }

foreach ($rows as $objeto) {
    $datos[] = array("nombre" => $objeto->nombre,"description" => $objeto->descripcion, "precio" => $objeto->precio);
}

$mysql_json = json_encode($datos, JSON_UNESCAPED_UNICODE);

echo $mysql_json;
    



?>