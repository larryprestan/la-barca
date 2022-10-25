function navegacion() {

    let navegacion = `
    <nav class="navbar navbar-expand-lg navbar-light">
    <h6 style="text-align: center; margin-left:15%;">La Barca - MENÚ</h6>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-4">
            <li class="nav-item dropdown active">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    CATEGORIAS.
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a id="btnentrada" class="dropdown-item" href="#">ENTRADA  <img src="images/icons/entradas.png" alt="" width="25"></a>
                    <a id="btnprincipal" class="dropdown-item" href="#">PRINCIPAL  <img src="images/icons/principal.png" alt="" width="25"></a>
                    <a id="btnadicional" class="dropdown-item" href="#">ADICIONAL  <img src="images/icons/adicionales.png" alt="" width="25"></a>
                    <a id="btnbebidas" class="dropdown-item" href="#">BEBIDAS  <img src="images/icons/bebidas.png" alt="" width="25"></a>
                </div>
            </li>
        </ul>
    </div>
    </nav>
    <a id="navimglogo" href="#">
        <img id="imglogo" src="images/LOGO.jpg" alt="logo-labarca">
    </a>`;

    $('#navcontainer').append(navegacion);

    //limpiar el localstorage//
    $('#navimglogo').click(function(e) {
        localStorage.clear();
        window.location.replace("index.html");
        e.preventDefault();
    });

    //boton opcion entrada//
    $('#btnentrada').click(function(e) {
        let cat = $('#btnentrada').text();
        contenidomenu(cat);
        document.getElementById('avisoselect').innerText = "Seleccione un Item...";
        e.preventDefault();
        return cat;
    });

    //boton opcion principal//
    $('#btnprincipal').click(function(e) {
        let cat = $('#btnprincipal').text();
        contenidomenu(cat)
        e.preventDefault();
        return cat;
    });

    //boton opcion adicional//
    $('#btnadicional').click(function(e) {
        let cat = $('#btnadicional').text();
        contenidomenu(cat)
        e.preventDefault();
        return cat;
    });

    //boton opcion bebidas//btnadicional
    $('#btnbebidas').click(function(e) {
        let cat = $('#btnbebidas').text();
        contenidomenu(cat)
        e.preventDefault();
        return cat;
    });

    //funcion contenido del listado del menu//
    function contenidomenu(categoria) {
        $.ajax({
            type: "POST",
            url: "php/productos/listadoproductospedido.php",
            data: { categoria },
            success: function(res) {
                let datos = JSON.parse(res);
                let li = ``;
                // 0-id 1-codigo 2-cate 3-nom 4-des 5-valor
                datos.forEach(dato => {
                    li += `
                    <li id="` + dato[0] + `" class="list-group-item">
                    <input type="text" name="idproducto` + dato[0] + `" id="idproducto` + dato[0] + `" style="display: none;" value="` + dato[0] + `">
                    <h6 id="nombreproducto` + dato[0] + `">` + dato[3] + `</h6>
                    <p id="descripcionproducto` + dato[0] + `">` + dato[4] + `</p>
                    <div class="row">
                        <div class="col">
                            <i>Valor-$:</i><input type="text" class="form-control" name="valor` + dato[0] + `" id="valor` + dato[0] + `" value="` + dato[5] + `" readonly></div>
                        <div class="col">
                            <i>Cant.</i><input type="text" class="form-control" name="cantidad` + dato[0] + `" id="cantidad` + dato[0] + `" value="1" autocomplete="off">
                        </div>
                        <div class="col">
                            <a id="btnadd" class="add" href="#"><img src="images/icons/add-item.png" alt="" width="60"></a>
                        </div>
                    </div>
                    </li>`;
                });
                $('#listadoproductos').html(li);
            }
        });
    }


}