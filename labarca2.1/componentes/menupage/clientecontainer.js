function clientecontainer() {

    let clientecontainer = `
    <h5>Datos de cliente.</h5>
    <hr>
    <form>
        <div class="row">
            <div class="col">
                <i>Nombre</i>
                <div class="form-group">
                    <input type="text" class="form-control" name="nombrepedido" id="nombrepedido" readonly>
                </div>
            </div>
            <div class="col">
                <i>Telefono</i>
                <div class="form-group">
                    <input type="text" class="form-control" name="telefonopedido" id="telefonopedido" readonly>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <i>Direccion</i>
                <div class="form-group">
                    <input type="text" class="form-control" name="direccionpedido" id="direccionpedido" autocomplete="off">
                </div>
            </div>
        </div>
    </form>`;

    $('#clientecontainer').append(clientecontainer);
}