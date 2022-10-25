function listadoclientes() {

    let listadoclientes = `
    <h6>LISTADO DE CLIENTES</h6>
    <table class="table" style="text-align: center;">
        <thead>
            <th>Ced.</th>
            <th>Nom.</th>
            <th>Dir.</th>
            <th>Tel.</th>
        </thead>
        <tbody id="listadotabla">

        </tbody>
    </table>
    <hr>
    <p style="text-align:end;">LaBarca-V.2.1</p>`;

    $('#formulario').append(listadoclientes);

}