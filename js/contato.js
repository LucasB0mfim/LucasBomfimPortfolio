$(document).ready(function() {
    $('#numero').mask('(00) 00000-0000');

    $("form").on("submit", function(e) {
        e.preventDefault();
        //para fazer só aparecer:
        //$(".pedido").show();
        $(".pedido").fadeIn(1000);
        $("#plane").fadeIn(3000);
        // para remover:
        // $(".pedido").removeAttr("style").hide();
        $("#email").val("");
        $("#numero").val("");
        $("#descrição").val("");
    })
})