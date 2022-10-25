function menucontainer() {
    let menucontainer = `
    <p style="text-align: end; position: relative; padding: 0; margin: 0;">LaBarca-V.2.1</p>
    <p id="avisoselect" >Seleccione una categoria...</p>
    <ul id="listadoproductos" class="list-group list-group-flush">
        
    </ul>`;
    $('#menucontainer').append(menucontainer);

    //boton add este viene con el contenido del menu//
    $(document).on('click', '.add', function(e) {

        //obtengo el id de la lista padre contenedor del boton//
        let padre = $(this)[0].parentElement.parentElement.parentElement;
        let id = $(padre).attr('id');

        //obtengo los datos del plato seleccionado//
        let nombreproducto = $('#nombreproducto' + id).text();
        let valorproducto = $('#valor' + id).val();
        let cantidadproducto = $('#cantidad' + id).val();
        //calculat el total//
        let total = (parseInt(valorproducto) * parseInt(cantidadproducto));

        //agrupamos los valores para asignarlos a la tabla de pedido//
        let datos = [{ "nombre": nombreproducto, "valor": valorproducto, "cantidad": cantidadproducto, "total": total }];
        tabla = ``;
        datos.forEach(dato => {
            tabla += `
            <tr>
                <td>` + dato.nombre + `</td>
                <td>` + dato.valor + `</td>
                <td>` + dato.cantidad + `</td>
                <td style="text-align:end;">` + dato.total + `</td>
                <td>
                    <a class="delete" href="#">
                        <img src="images/icons/delete2.png" alt="" width="25">
                    </a>
                </td>
            </tr>`;
        });
        $('#datostabla').append(tabla);
        $('#cantidad' + id).val("1");
        e.preventDefault();
    })


}