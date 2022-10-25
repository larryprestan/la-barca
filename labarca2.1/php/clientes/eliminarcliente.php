<?php

    include '../conexiondb.php';

    $id=$_POST['id'];

    if(!empty($id)){

        $sql = " DELETE FROM clientes WHERE id = $id ";
        $res = mysqli_query($conn,$sql);
        echo ($res);
    }

?>