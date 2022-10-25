function listadoproductos() {

    let listadoproductos = `
    <h5>LISTADO MENÚ </h5>
    <table class="table">
        <thead>
            <th>Cod.</th>
            <th>Categ.</th>
            <th>Nom.</th>
            <th>Val.</th>
        </thead>
        <tbody id="tablalistadomenu">

        </tbody>
    </table>
    <hr>
    <p style="text-align:end;">LaBarca-V.2.1</p>`;

    $('#formulario').append(listadoproductos);


}