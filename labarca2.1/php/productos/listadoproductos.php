<?php

    include '../conexiondb.php';

    $sql = " SELECT * FROM productos ORDER BY categoria ";
    $res = mysqli_query($conn,$sql);
    $datos = json_encode(mysqli_fetch_all($res));

    echo ($datos);

?>