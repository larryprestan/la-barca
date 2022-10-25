<?php

    include '../conexiondb.php';

    $cedula=$_POST['cedula'];
    $nombre=$_POST['nombre'];
    $direccion=$_POST['direccion'];
    $barrio=$_POST['barrio'];
    $telefono=$_POST['telefono'];

    //VERIFICAMOS SI YA EXISTE EL CLIENTE
    $sql = " SELECT * FROM clientes WHERE cedula='$cedula' ";
    $res = mysqli_query($conn,$sql);
    if (mysqli_num_rows($res)>0){
        echo(" CLIENTE YA SE ENCUENTRA REGISTRADO... ");
    }else{
        //SI EL CLIENTE NO ESTA REGISTRADO LO AGREGAMOS
        if( !empty($cedula) && !empty($nombre) && !empty($direccion) && !empty($barrio) && !empty($telefono) ){

        $sql = " INSERT INTO clientes (cedula,nombre,direccion,barrio,telefono) VALUES ('$cedula','$nombre','$direccion','$barrio','$telefono') ";

        $res = mysqli_query($conn,$sql);
    
        echo (" CLIENTE AGREGADO CORRECTAMENTE... ");
    
    }else{
        echo (" CLIENTE NO PUDO SER AGREGADO... ");
    }

}
    
?>