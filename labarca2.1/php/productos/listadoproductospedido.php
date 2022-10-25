<?php

    include '../conexiondb.php';

    $categoria=$_POST['categoria'];

    $sql2 = " SELECT * FROM productos WHERE categoria='$categoria'";
    $res2 = mysqli_query($conn,$sql2);
    $datos2 = json_encode(mysqli_fetch_all($res2));

    echo ($datos2);
?>