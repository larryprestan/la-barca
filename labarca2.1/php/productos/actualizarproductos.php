<?php

    include '../conexiondb.php';

    $idproducto = $_POST['idproducto'];
    $codigo = $_POST['codigo'];
    $categoria = $_POST['categoria'];
    $nombre = $_POST['nombre'];
    $descripcion = $_POST['descripcion'];
    $valor = $_POST['valor'];

    if( !empty($idproducto) && !empty($codigo) && !empty($categoria) && !empty($nombre) && !empty($descripcion) && !empty($valor) ){
        
        $sql = " UPDATE productos SET codigo='$codigo', categoria='$categoria', nombre='$nombre', descripcion='$descripcion', valor='$valor' WHERE id='$idproducto' ";

        $res = mysqli_query($conn,$sql);
        echo ($res);
    }

?>