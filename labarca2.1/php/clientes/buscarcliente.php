<?php

    include '../conexiondb.php';

    $valorbuscar=$_POST['valorbuscar'];

    if(!empty($valorbuscar)){

        $sql = " SELECT * FROM clientes WHERE cedula='$valorbuscar' or nombre='$valorbuscar' or direccion='$valorbuscar' or barrio='$valorbuscar' or telefono='$valorbuscar' ";

        $res = mysqli_query($conn,$sql);
        $datos= json_encode(mysqli_fetch_all($res));
        echo ($datos);
    }
    

?>