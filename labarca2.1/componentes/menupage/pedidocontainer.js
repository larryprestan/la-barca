function pedidocontainer() {

    let pedidocontainer = `
    <h5>Datos del pedido</h5>
    <table class="table" style="text-align:center;">
        <thead>
            <th>Nom.</th>
            <th>Val.$</th>
            <th>can.</th>
            <th>Tot.$</th>
            <th>Op.</th>
        </thead>
        <tbody id="datostabla">

        </tbody>
    </table>
    <hr>
    <div class="row">
        <div class="col">
            <div class="form-group">
                <button class=" calctotal btn btn-outline-danger btn-block">TOTAL <img src="images/icons/total.png" alt="" width="25"></button>
            </div>
        </div>
        <div class="col">
            <div class="form-group">
                <input id="inputtotal" type="text" class="form-control" name="" id="" readonly>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="form-group">
                <button class=" genpedido btn btn-outline-warning btn-block">GENERAR PEDIDO <img src="images/icons/pedido.png" alt="" width="30"> </button>
            </div>
        </div>
    </div>`;

    $('#pedidocontainer').append(pedidocontainer);


    //BORRAR ELEMENTO DEL PEDIDO //ok
    $(document).on('click', '.delete', function() {
        let element = $(this)[0].parentElement.parentElement;
        $(element).remove();
    });

    //Boton total//ok
    $(document).on('click', '.calctotal', function(e) {
        let gtotal = recorrertabla();
        $('#inputtotal').val(gtotal);
        e.preventDefault();
    });

    //REALIZO LA SUMATORIA DEL PEDIDO//
    //obtengo el numero de filas de la tabla//
    function filas() {
        var filas = $('#datostabla tr').length;
        return filas;
    }

    //recorro la tabla para sumar los totales por fila//
    function recorrertabla() {
        let nf = filas();
        let acum = 0;
        for (i = 0; i <= (nf - 1); i++) {
            for (j = 3; j <= 3; j++) {
                let td = document.getElementById('datostabla').rows[i].cells[j];
                $(td).attr("id", "f" + i);
                let sum = $(td).text();
                acum = (parseInt(acum) + parseInt(sum));
            }
        }
        return acum;
    }

    //boton generar pedido//
    $('.genpedido').click(function(e) {
        //datos de la tabla pedido//
        let descpedido = $('#datostabla').html();
        localStorage.setItem("tbodypedido", descpedido);
        //datos del cliente//
        let inputtotal = $('#inputtotal').val();
        let nombrepedido = $('#nombrepedido').val();
        let telefonopedido = $('#telefonopedido').val();
        let direccionpedido = $('#direccionpedido').val();
        let arr = { "nombre": nombrepedido, "telefono": telefonopedido, "direccion": direccionpedido, "totalpedido": inputtotal };
        localStorage.setItem("datoscliente", JSON.stringify(arr));
        //redirigimos al pedido//
        window.location.href = "pedido.html";
        e.preventDefault();

    });
}