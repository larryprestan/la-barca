$(document).ready(function() {

    $.getScript("componentes/indexpage/navegacion.js", function() {
        navegacion();
    });

    $.getScript("componentes/indexpage/formulario.js", function() {
        formulario();
    });

    $.getScript("componentes/indexpage/botonmenu.js", function() {
        botonmenu();
    });

});