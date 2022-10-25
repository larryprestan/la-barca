<?php

    include '../conexiondb.php';

    $id=$_POST['id'];

    if(!empty($id)){
        $sql = " SELECT descripcion FROM pedidos WHERE id='$id' ";
        $res = mysqli_query($conn,$sql);
        echo json_encode(mysqli_fetch_all($res)) ;
    }


?>