$(function() {

    //agregamos la vavegacion//
    $.getScript("componentes/ventaspage/navegacion.js", function() {
        navegacion();
    });

    //agregamos el formulario de registro//
    $.getScript("componentes/ventaspage/formcontainer.js", function() {
        formcontainer();
    });

    $.getScript("componentes/ventaspage/modal.js", function() {
        modal();
    });

});