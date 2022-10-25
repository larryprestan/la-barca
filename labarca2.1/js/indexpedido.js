$(document).ready(function() {
    //obtengo la tabla con la detalle del pedido//
    let tbodypedido = localStorage.getItem("tbodypedido");
    $('#tbodypedido').html(tbodypedido);
    //obtengo los datos del cliente para el pedido//
    let datoscliente = localStorage.getItem("datoscliente");
    let datos = JSON.parse(datoscliente);
    //asigno los datos a los elementos//
    $('#nombrepedido').html(datos.nombre);
    $('#telefonopedido').html(datos.telefono);
    $('#direccionpedido').html(datos.direccion);
    $('#totalpedido').html(datos.totalpedido);
    $('#fechapedido').html(fecha());
    $('#horapedido').html(hora());
    //de la tabla remuevo el boton eleiminar articulo//
    $('.delete').remove();
    //centro el texto de la tabla//
    $('tr td').css("text-align", "center");

    //boton imprimir//
    $('#btnimprimir').click(function() {
        let conf = confirm(" DESEA IMPRIMIR ESTE PEDIDO ???.... ");
        if (conf) {
            guardardatospedido();
            window.print();
            window.close();
            $('#btnimprimir').attr("disabled", true);
        } else {
            localStorage.clear();
            window.location.href = "index.html";
        }
    });

    // boton volver//
    $('#btnvolver').click(function(e) {
        window.location.href = "index.html";
        localStorage.clear();
        e.preventDefault();

    });

    //obtener fecha y hora del sistema//

    //funcion hora//
    function hora() {
        var dt = new Date();
        var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
        return time;
    }

    //funcion fecha//
    function fecha() {
        let date = new Date()

        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()

        if (month < 10) {
            return (`${day}-0${month}-${year}`);
        } else {
            return (`${day}-${month}-${year}`);
        }
    }

    //funcion guardar datos del pedido//
    function guardardatospedido() {
        let fechapedido = $('#fechapedido').text();
        let horapedido = $('#horapedido').text();
        let totalpedido = $('#totalpedido').text();
        let nombrepedido = $('#nombrepedido').text();
        let descripcionpedido = $('#tbodypedido').html();
        $.ajax({
            type: "POST",
            url: "php/pedidos/guardarpedido.php",
            data: { fechapedido, horapedido, totalpedido, nombrepedido, descripcionpedido },
            success: function(res) {

            }
        });
    }

});