function modal() {

    let modal = `
    <div class="modal fade" id="descripcionpedido" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">DETALLE DE PEDIDO.</h5>
                </div>
                <div class="modal-body">
                    <table class="table">
                        <thead>
                            <th>Desc.</th>
                            <th>Cant.</th>
                            <th>Valor.</th>
                            <th>Total.</th>
                        </thead>
                        <tbody id="modaltable">

                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>`;

    $('#body').append(modal);

}