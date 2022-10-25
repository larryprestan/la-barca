function reporteventas() {

    let reporteventas = `
    <div id="reportcontainer" class="container">
            <h6>REPORTE DE VENTAS</h6>
            <hr>
            <div class="row">
                <div class="col">
                    <h6 style="text-align: end;">INGRESE FECHA DE REPORTE: </h6>
                </div>
                <div class="col">
                    <div class="form-group">
                        <input type="text" name="inputbuscar" id="inputbuscar" placeholder="DD-MM-AAAA" autocomplete="off">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <button id="btnconsultar" class="btn btn-primary btn-block">CONSULTAR</button>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <button id="btnsalir" class="btn btn-danger btn-block">SALIR</button>
                    </div>
                </div>
            </div>
            <table class="table">
                <thead>
                    <th>Id.</th>
                    <th>Cliente.</th>
                    <th>Fecha.</th>
                    <th>Valor.</th>
                    <th>Detalle.</th>
                </thead>
                <tbody id="tablaventas" style="text-align:center;">

                </tbody>
            </table>
            <div class="row">
                <div class="col"></div>
                <div class="col"></div>
                <div class="col"></div>
                <div class="col">No.Registros:</div>
                <div class="col">
                    <input type="text" class="form-control" name="Noregistros" id="Noregistros">
                </div>
                <div class="col">Total Venta:</div>
                <div class="col-3">
                    <input type="text" class="form-control" name="totalreporte" id="totalreporte">
                </div>
            </div>
        </div>`;

    $('#rootcontainer').append(reporteventas);

    //pendiente codigo buscar llenar tabla numero de registros total venta //

    //boton consultar//
    $('#btnconsultar').click(function(e) {
        let fecha = $('#inputbuscar').val();
        $.ajax({
            type: "POST",
            url: "php/reportes/reportedeventas.php",
            data: { fecha },
            success: function(res) {
                let tabla = ``;
                let datos = JSON.parse(res)
                datos.forEach(dato => {
                    tabla += `
                    <tr id="` + dato[0] + `">
                        <td>` + dato[0] + `</td>
                        <td>` + dato[1] + `</td>
                        <td>` + dato[2] + `</td>
                        <td>` + dato[3] + `</td>
                        <td> 
                            <button id="detalle" type="button" class="btn" data-toggle="modal" data-target="#descripcionpedido">
                            <img src="images/icons/pedido.png" alt="" width="25">
                            </button
                        </td>
                    </tr>
                    `
                });
                $('#tablaventas').html(tabla);
                //muestro el numero de registros//
                let reg = filas();
                $('#Noregistros').val(reg);
                let total = recorrertabla();
                $('#totalreporte').val(total);
            }
        });

        e.preventDefault();
    });


    //obtengo el numero de filas//
    function filas() {
        var filas = $('#tablaventas tr').length;
        return filas;
    }

    //recorro la tabla para sumar los totales por fila//
    function recorrertabla() {
        let nf = filas();
        let acum = 0;
        for (i = 0; i <= (nf - 1); i++) {
            for (j = 3; j <= 3; j++) {
                let td = document.getElementById('tablaventas').rows[i].cells[j];
                $(td).attr("id", "f" + i);
                let sum = $(td).text();
                acum = (parseInt(acum) + parseInt(sum));
            }
        }
        return acum;
    }

    //boton salir//
    $('#btnsalir').click(function(e) {
        let conf = confirm(" DESEA ABANDONAR EL REPORTE?? ");
        if (conf) {
            $('#rootcontainer').empty();
            $.getScript("componentes/ventaspage/formcontainer.js", function() {
                formcontainer();
            });
        }
        e.preventDefault();

    });

    //boton detalle del pedido en reporte de venta//
    $(document).on('click', '#detalle', function(e) {
        let fila = $(this)[0].parentElement.parentElement;
        let id = $(fila).attr('id');
        $.ajax({
            type: "POST",
            url: "php/reportes/detallepedido.php",
            data: { id },
            success: function(res) {
                $('#modaltable').empty();
                let tabla = ``;
                let dato = JSON.parse(res);
                tabla += `` + dato + ``
                $('#modaltable').append(tabla);
            }
        });
        e.preventDefault();
    })
}