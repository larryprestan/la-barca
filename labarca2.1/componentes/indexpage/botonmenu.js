function botonmenu() {

    let botonmenu = `
    
    <a id="btnmenu" href="#">
        <i style="color: black;">PEDIDO</i>
        <img src="images/icons/pagpedido.png" alt="" width="120">
    </a>`;

    $('body').append(botonmenu);

    //Boton menu//
    $('#btnmenu').click(function(e) {
        //obtengo los datos del cliente para agregarlos al pedido//
        let nombre = $('#nombre').val();
        let telefono = $('#telefono').val();
        let direccion = $('#direccion').val();
        //los guardo en el localstorage para obtenerlos en el pedido//
        localStorage.setItem("nombrepedido", nombre);
        localStorage.setItem("telefonopedido", telefono);
        localStorage.setItem("direccionpedido", direccion);
        //redirecciona a menupage.html//
        window.location.replace("menupage.html");

        e.preventDefault();

    });


}