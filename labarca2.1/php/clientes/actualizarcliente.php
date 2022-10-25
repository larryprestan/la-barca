<?php

    include '../conexiondb.php';

    $idcliente = $_POST['idcliente'];
    $cedula = $_POST['cedula'];
    $nombre = $_POST['nombre'];
    $direccion = $_POST['direccion'];
    $barrio = $_POST['barrio'];
    $telefono = $_POST['telefono'];

    if( !empty($idcliente) && !empty($cedula) && !empty($nombre) && !empty($direccion) && !empty($barrio) && !empty($telefono) ){
        
        $sql = " UPDATE clientes SET cedula='$cedula', nombre='$nombre', direccion='$direccion', barrio='$barrio', telefono='$telefono' WHERE id='$idcliente' ";

        $res = mysqli_query($conn,$sql);
        echo ($res);
    }

?>