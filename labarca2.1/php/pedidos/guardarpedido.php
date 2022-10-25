<?php

    include '../conexiondb.php';
    
    $nombre=$_POST['nombrepedido'];
    $fecha=$_POST['fechapedido'];
    $hora=$_POST['horapedido'];
    $totalp=$_POST['totalpedido'];
    $descripcion=$_POST['descripcionpedido'];

    $total= (integer) $totalp;

    $sql = " INSERT INTO pedidos (nombre,fecha,descripcion,hora,total) VALUE ('$nombre','$fecha','$descripcion','$hora','$total') ";

    $res = mysqli_query($conn,$sql);

    if($res){
        echo $res;
    }

?>