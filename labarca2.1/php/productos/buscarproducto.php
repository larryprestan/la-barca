<?php

    include '../conexiondb.php';

    $valorbuscar=$_POST['valorbuscar'];

    if(!empty($valorbuscar)){

        $sql = " SELECT * FROM productos WHERE codigo LIKE '%$valorbuscar%' or nombre LIKE '%$valorbuscar%' or descripcion LIKE '%$valorbuscar%' ";

        $res = mysqli_query($conn,$sql);
        $datos= json_encode(mysqli_fetch_all($res));
        echo ($datos);
    }
    

?>