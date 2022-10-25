<?php

    include '../conexiondb.php';

    $fecha = $_POST['fecha'];

    if(!empty($fecha)){
        $sql = " SELECT id,nombre,fecha,total FROM pedidos WHERE fecha='$fecha' ORDER BY nombre ";
        $res = mysqli_query($conn,$sql);
        $datos = json_encode(mysqli_fetch_all($res));

        echo ($datos);
    }
    

?>