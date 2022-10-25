function navegacion() {

    let navegacion = `
    <nav class="navbar navbar-expand-lg navbar-light">
        <h5 style="text-align: center; margin-left: 20%;">La Barca - Seafood & Drinks - Reporte de Ventas</h5>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <!--li class="nav-item active ">
                        <a class="nav-link" href="#" id="btnsalir">SALIR</a>
                 </li-->
            </ul>
        </div>
    </nav>
    <a id="navimglogo" href="index.html">
        <img id="imglogo" src="images/LOGO.jpg" alt="logo-labarca">
    </a>`;

    $('#navcontainer').append(navegacion);

}