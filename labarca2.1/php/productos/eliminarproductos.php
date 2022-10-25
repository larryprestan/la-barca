<?php

    include '../conexiondb.php';

    $id=$_POST['id'];

    if(!empty($id)){

        $sql = " DELETE FROM productos WHERE id = $id ";
        $res = mysqli_query($conn,$sql);
        echo ($res);
    }

?>