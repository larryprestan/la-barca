<?php

    include '../conexiondb.php';

    $codigo=$_POST['codigo'];
    $categoria=$_POST['categoria'];
    $nombre=$_POST['nombre'];
    $descripcion=$_POST['descripcion'];
    $valor=$_POST['valor'];

    //VERIFICAMOS SI YA EXISTE EL PRODUCTO
    $sql = " SELECT * FROM productos WHERE codigo='$codigo' ";
    $res = mysqli_query($conn,$sql);
    if (mysqli_num_rows($res)>0){
        echo(" PRODUCTO YA SE ENCUENTRA REGISTRADO... ");
    }else{
        //SI EL PRODUCTO NO ESTA REGISTRADO LO AGREGAMOS
        if( !empty($codigo) && !empty($categoria) && !empty($nombre) && !empty($descripcion) && !empty($valor) ){

        $sql = " INSERT INTO productos (codigo,categoria,nombre,descripcion,valor) VALUES ('$codigo','$categoria','$nombre','$descripcion','$valor') ";

        $res = mysqli_query($conn,$sql);
    
        echo (" PRODUCTO AGREGADO CORRECTAMENTE... ");
    
    }else{
        echo (" PRODUCTO NO PUDO SER AGREGADO... ");
    }

}
    
?>