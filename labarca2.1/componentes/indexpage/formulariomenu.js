function formulariomenu() {

    let formulariomenu = `
    <h5>GESTION DE MENÚ</h5>
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
    <form id="formproducto">
        <div class="row">
            <div class="col">
                <input type="text" name="idproducto" id="idproducto" style="display: none;">
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <select class="form-control" name="categoria" id="categoria">
                        <option id="op1">Categoria...</option>
                        <option>Entrada</option>
                        <option>principal</option>
                        <option>adicional</option>
                        <option>bebidas</option>
                      </select>
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <input type="text" name="codigo" id="codigo" placeholder="Codigo..." autocomplete="off">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <input type="text" name="nombre" id="nombre" placeholder="Nombre..." autocomplete="off" >
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <input type="text" name="valor" id="valor" placeholder="$-Valor..." autocomplete="off">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <textarea name="descripcion" id="descripcion" cols="30" rows="3" placeholder="Descripcion..." autocomplete="off"></textarea>
                </div>
            </div>
        </div>
        <hr>
        <div class="row align-items-center">
            <div class="col">
                <div class="form-group">
                    <i>Agregar</i>
                    <a id="btnagregar" href="#"><img src="images/icons/salvar.png" alt="" width="50px"></a>
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <i>Eliminar</i>
                    <a id="btneliminar" href="#"><img src="images/icons/eliminar.png" alt="" width="50px"></a>
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <i>Actualizar</i>
                    <a id="btnactualizar" href="#"><img src="images/icons/actualizar.png" alt="" width="50px"></a>
                </div>
            </div>
        </div>
    </form>
    <p style="text-align:end;">LaBarca-V.2.1</p>`;

    $('#formulario').append(formulariomenu);


    //Boton limpiar formulario//ok
    $('#btnlimpiar').click(function(e) {
        $('#inputbuscar').val("");
        $('#formproducto')[0].reset();
        e.preventDefault();

    });

    //Input buscar//ok
    $('#inputbuscar').keyup(function(e) {
        let valorbuscar = $('#inputbuscar').val();
        $.ajax({
            type: "POST",
            url: "php/productos/buscarproducto.php",
            data: { valorbuscar },
            success: function(res) {
                let datos = JSON.parse(res);
                datos.forEach(dato => {
                    $('#idproducto').val(dato[0]);
                    $('#codigo').val(dato[1]);
                    $('#categoria').val(dato[2]);
                    $('#nombre').val(dato[3]);
                    $('#descripcion').val(dato[4]);
                    $('#valor').val(dato[5]);
                });

            }
        });

    });


    //boton agregar producto//ok
    $('#btnagregar').click(function(e) {
        let datos = $('#formproducto').serialize();
        $.ajax({
            type: "POST",
            url: "php/productos/agregarproducto.php",
            data: datos,
            success: function(res) {
                alert(res);
            }
        });
        $('#inputbuscar').val("");
        $('#formproducto')[0].reset();
        e.preventDefault();

    });

    //boton eliminar producto//ok
    $('#btneliminar').click(function(e) {
        let conf = confirm("DESEA BORRAR ESTE REGISTRO.??");
        if (conf) {
            let id = $('#idproducto').val();
            $.ajax({
                type: "POST",
                url: "php/productos/eliminarproductos.php",
                data: { id },
                success: function(res) {
                    if (res == 1) {
                        alert("REGISTRO BORRADO CORRECTAMENTE...");
                    } else {
                        alert("NO SE PUDO BORRAR ESTE REGISTRO...");
                    }
                }
            });
            $('#inputbuscar').val("");
            $('#formproducto')[0].reset();
        } else {
            $('#inputbuscar').val("");
            $('#formproducto')[0].reset();
        }
        e.preventDefault();

    });

    //boton actualizar producto//
    $('#btnactualizar').click(function(e) {
        let confirmar = confirm("DESEA ACTUALIZAR ESTE REGISTRO?...");
        if (confirmar) {
            let datoscliente = $('#formproducto').serialize();
            $.ajax({
                type: "POST",
                url: "php/productos/actualizarproductos.php",
                data: datoscliente,
                success: function(res) {
                    if (res == 1) {
                        alert("REGISTRO ACTUALIZADO CORRECTAMENTE...");
                        $('#inputbuscar').val("");
                        $('#formproducto')[0].reset();
                    } else {
                        alert("REGISTRO NO SE PUDO ACTUALIZAR ...");
                        $('#inputbuscar').val("");
                        $('#formproducto')[0].reset();
                    }
                }
            });
        } else {
            $('#inputbuscar').val("");
            $('#formproducto')[0].reset();;
        }
        e.preventDefault();

    });
}