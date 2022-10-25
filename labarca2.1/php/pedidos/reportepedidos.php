<?php

    include '../conexiondb.php';

    $datoreporte = $_POST['dato'];

    if(!empty($datoreporte)){
        $sql = " SELECT nombre,fecha,total FROM pedidos WHERE fecha='$datoreporte' ";
        $res = mysqli_query($conn,$sql);
        $datos = json_encode(mysqli_fetch_all($res));

        echo ($datos);
    }
    

?>