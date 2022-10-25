$(document).ready(function() {

    $.getScript("componentes/menupage/navegacion.js", function() {
        navegacion();
    });

    $.getScript("componentes/menupage/menucontainer.js", function() {
        menucontainer();
    });

    $.getScript("componentes/menupage/clientecontainer.js", function() {
        clientecontainer();
        getdatos();
    });

    $.getScript("componentes/menupage/pedidocontainer.js", function() {
        pedidocontainer();
    });

    //obtendo los datos de cliente para el pedido//
    function getdatos() {

        let nombrepedido = localStorage.getItem("nombrepedido");
        let telefonopedido = localStorage.getItem("telefonopedido");
        let direccionpedido = localStorage.getItem("direccionpedido");
        $('#nombrepedido').val(nombrepedido);
        $('#telefonopedido').val(telefonopedido);
        $('#direccionpedido').val(direccionpedido);

    }



});