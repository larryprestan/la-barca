function navegacion() {

    let navegacion = `
    <nav class="navbar navbar-expand-lg navbar-light">
    <h5 style="text-align: center; margin-left: 20%;">La Barca - Seafood & Drinks</h5>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown activate active">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    CLIENTES.
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a id="btnclientes" class="dropdown-item" href="#">Gestion Clientes <img src="images/icons/ajustes.png" alt="" width="30"></a>
                    <a id="btnlistado" class="dropdown-item" href="#">Listado Clientes <img src="images/icons/pedido.png" alt="" width="30"></a>
                </div>
            </li>
            <li class="nav-item dropdown activate active">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    MENÚ.
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a id="btngestionmenu" class="dropdown-item" href="#">Gestion Menú <img src="images/icons/ajustes.png" alt="" width="30"></a>
                    <a id="btnlistadomenu" class="dropdown-item" href="#">Listado Menú <img src="images/icons/pedido.png" alt="" width="30"></a>
                </div>
            </li>
            <li class="nav-item active ">
            <a class="nav-link" href="#" id="btnventas">VENTAS</a>
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

    //Boton Clientes//
    $('#btnclientes').click(function(e) {
        $('#formulario').empty();
        formulario();
        let form = document.getElementById('formulario');
        form.style.marginLeft = "10%";
        let botonmenu = document.getElementById('btnmenu');
        botonmenu.style.display = "block";
        e.preventDefault();

    });

    //boton Listado//
    $('#btnlistado').click(function(e) {
        let botonmenu = document.getElementById('btnmenu');
        botonmenu.style.display = "none";
        $('#formulario').empty();
        let formulario = document.getElementById('formulario');
        formulario.style.marginLeft = "20%";
        $.getScript("componentes/indexpage/listado.js", function() {
            listadoclientes();
            listadotabla();
        });
        e.preventDefault();

    });

    //Boton gestion menu//
    $('#btngestionmenu').click(function(e) {
        let botonmenu = document.getElementById('btnmenu');
        botonmenu.style.display = "none";
        $('#formulario').empty();
        let formulario = document.getElementById('formulario');
        formulario.style.marginLeft = "20%";
        $.getScript("componentes/indexpage/formulariomenu.js", function() {
            formulariomenu();
        });
        e.preventDefault();

    });

    //boton Listado menu//
    $('#btnlistadomenu').click(function(e) {
        let botonmenu = document.getElementById('btnmenu');
        botonmenu.style.display = "none";
        $('#formulario').empty();
        let formulario = document.getElementById('formulario');
        formulario.style.marginLeft = "20%";
        $.getScript("componentes/indexpage/listadoproductos.js", function() {
            listadoproductos();
            listadotablaproductos();
        });
        e.preventDefault();

    });

    //boton ventas// para modificar 
    $('#btnventas').click(function(e) {
        let conf = confirm(" DESEA INGRESAR AL REPORTE DE VENTAS..,? ");
        if (conf) {
            window.location.replace("ventas.html");
        }
        e.preventDefault();

    });

    //listado de clientes//
    function listadotabla() {
        $.ajax({
            type: "POST",
            url: "php/clientes/listadoclientes.php",
            success: function(res) {
                let tabla = ``;
                let datos = JSON.parse(res);
                datos.forEach(dato => {
                    tabla += `
                    <tr>
                    <td>` + dato[1] + `</td>
                    <td>` + dato[2] + `</td>
                    <td>` + dato[3] + `</td>
                    <td>` + dato[5] + `</td>
                    </tr>`;
                });
                $('#listadotabla').html(tabla);
            }
        });
    }

    //listado de productos//
    function listadotablaproductos() {
        $.ajax({
            type: "POST",
            url: "php/productos/listadoproductos.php",
            success: function(res) {
                let tabla = ``;
                let datos = JSON.parse(res);
                datos.forEach(dato => {
                    tabla += `
                    <tr>
                    <td>` + dato[1] + `</td>
                    <td>` + dato[2] + `</td>
                    <td>` + dato[3] + `</td>
                    <td>` + dato[5] + `</td>                   
                    </tr>`;
                });
                $('#tablalistadomenu').html(tabla);
            }
        });

    }




}