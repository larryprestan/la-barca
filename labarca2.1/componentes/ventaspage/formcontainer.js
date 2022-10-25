function formcontainer() {

    let formcontainer = `
    <div id="formcontainer" class="container">
    <h6>LOGIN.</h6>
    <hr>
    <br>
    <form id="formregistro">
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <input type="text" class="form-control" name="usuario" id="usuario" placeholder="USUARIO." autocomplete="off">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <input type="password" class="form-control" name="contraseña" id="contraseña" placeholder="CONTRASEÑA." autocomplete="off">
                </div>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col">
                <button id="btnaceptar" class="btn btn-success btn-block">ACEPTAR</button>
            </div>
            <div class="col">
                <button id="btncancelar" class="btn btn-danger btn-block">CANCELAR</button>
            </div>
        </div>
    </form>
    </div>`;

    $('#rootcontainer').append(formcontainer);

    //BOTON ACEPTAR//
    $('#btnaceptar').click(function (e) {
        let usuario = $('#usuario').val();
        let contraseña = $('#contraseña').val();
        if (usuario == "administrador" && contraseña == "adminbarca2020") {
            $('#rootcontainer').empty();
            $.getScript("componentes/ventaspage/reporteventas.js", function () {
                reporteventas();
            });
        }else{
            alert(" USUARIO O CONTRASEÑA INCORRECTOS POR FAVOR VERIFIQUE... ");
            $('#formregistro')[0].reset();
        }
        e.preventDefault();

    });

    //BOTON CANCELAR//
    $('#btncancelar').click(function (e) {
        $('#formregistro')[0].reset();
        $('#rootcontainer').empty();
        window.location.replace("index.html");
        e.preventDefault();

    });

}