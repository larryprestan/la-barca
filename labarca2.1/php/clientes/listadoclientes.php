<?php

    include '../conexiondb.php';

    $sql = " SELECT * FROM clientes ";
    $res = mysqli_query($conn,$sql);
    $datos = json_encode(mysqli_fetch_all($res));

    echo ($datos);

?>