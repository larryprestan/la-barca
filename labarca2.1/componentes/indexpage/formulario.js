function formulario() {

    //Variable conel contenido del formulario//ok
    let formulario = `
    <h6>GESTION DE CLIENTES</h6>
    <hr>
    <div class="row">
    <div class="col-3">
        <div class="form-group">
            <i>Limpiar Formulario</i>
            <a id="btnlimpiar" href="#"><img src="images/icons/broom.png" alt="" width="50"></a>
        </div>
    </div>
    <div class="col">
        <i>Buscar</i>
        <input type="search" name="inputbuscar" id="inputbuscar" placeholder="Buscar.." autocomplete="off">
    </div>
    </div>
    <hr>
    <form id="formcliente">
        <div class="row" style="display: none;">
            <div class="col">
                <input type="text" name="idcliente" id="idcliente">
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <input type="text" name="cedula" id="cedula" placeholder="Cedula" autocomplete="off">
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <input type="text" name="nombre" id="nombre" placeholder="Nombre" autocomplete="off">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <input type="text" name="direccion" id="direccion" placeholder="Direccion" autocomplete="off">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <input type="text" name="barrio" id="barrio" placeholder="Barrio" autocomplete="off">
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <input type="text" name="telefono" id="telefono" placeholder="Telefono" autocomplete="off">
                </div>
            </div>
        </div>
        <hr>
        <div class="row align-items-center">
            <div class="col">
                <div class="form-group">
                    <i>Agregar</i>
                    <a id="btnagregar" href="#"><img src="images/icons/verified.png" alt="" width="60px"></a>
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <i>Eliminar</i>
                    <a id="btneliminar" href="#"><img src="images/icons/delete.png" alt="" width="60px"></a>
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <i>Actualizar</i>
                    <a id="btnactualizar" href="#"><img src="images/icons/edit.png" alt="" width="60px"></a>
                </div>
            </div>
        </div>
    </form>
    <p style="text-align:end;">LaBarca-V.2.1</p>`;

    //Insertar contenido en el div formulario//ok
    $('#formulario').append(formulario);

    //Boton limpiar formulario//ok
    $('#btnlimpiar').click(function(e) {
        $('#inputbuscar').val("");
        $("#formcliente")[0].reset()
        e.preventDefault();

    });

    //input de busqueda de cliente//ok
    $('#inputbuscar').keyup(function(e) {
        let valorbuscar = $('#inputbuscar').val();
        $.ajax({
            type: "POST",
            url: "php/clientes/buscarcliente.php",
            data: { valorbuscar },
            success: function(res) {
                let datos = JSON.parse(res);
                datos.forEach(dato => {
                    $('#idcliente').val(dato[0]);
                    $('#cedula').val(dato[1]);
                    $('#nombre').val(dato[2]);
                    $('#direccion').val(dato[3]);
                    $('#barrio').val(dato[4]);
                    $('#telefono').val(dato[5]);
                });
            }
        });
    });

    //Boton agregar cliente//ok
    $('#btnagregar').click(function(e) {
        let datoscliente = $('#formcliente').serialize();
        $.ajax({
            type: "POST",
            url: "php/clientes/agregarcliente.php",
            data: datoscliente,
            success: function(res) {
                alert(res);
            }
        });
        $('#inputbuscar').val("");
        $("#formcliente")[0].reset()
        e.preventDefault();
    });

    //Boton eliminar cliente//
    $('#btneliminar').click(function(e) {

        //confirmamos si quiere borrar el registro//ok
        let confirmar = confirm("DESEA BORRAR ESTE REGISTRO?:::");
        if (confirmar) {
            //obtengo el id del cliente//
            let id = $('#idcliente').val();
            $.ajax({
                type: "POST",
                url: "php/clientes/eliminarcliente.php",
                data: { id },
                success: function(res) {
                    if (res == 1) {
                        alert("REGISTRO BORRADO CORRECTAMENTE...");
                    } else {
                        alert("NO SE PUDO BORRAR ESTE REGISTRO...");
                    }
                }
            });
            //LIMPIAMOS LOS CAMPOS
            $("#inputbuscar").val("");
            $("#formcliente")[0].reset();
        } else {
            //LIMPIAMOS LOS CAMPOS
            $("#inputbuscar").val("");
            $("#formcliente")[0].reset();
        }
        e.preventDefault();

    });

    //Boton actualizar cliente//
    $('#btnactualizar').click(function(e) {
        let confirmar = confirm("DESEA ACTUALIZAR ESTE REGISTRO?...");
        if (confirmar) {
            let datoscliente = $('#formcliente').serialize();
            $.ajax({
                type: "POST",
                url: "php/clientes/actualizarcliente.php",
                data: datoscliente,
                success: function(res) {
                    if (res == 1) {
                        alert("REGISTRO ACTUALIZADO CORRECTAMENTE...");
                        $('#inputbuscar').val("");
                        $("#formcliente")[0].reset();
                    } else {
                        alert("REGISTRO NO SE PUDO ACTUALIZAR ...");
                        $('#inputbuscar').val("");
                        $("#formcliente")[0].reset();
                    }
                }
            });
        } else {
            $('#inputbuscar').val("");
            $("#formcliente")[0].reset();
        }
        e.preventDefault();

    });

}