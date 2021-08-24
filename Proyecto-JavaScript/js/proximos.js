// Hemos omitido los acentos en los comentarios por compatibilidad
var proximos = [];
var fechaActual;
var eventos;

$(document).ready(function() {

    //Carga los datos que estan en el JSON (info.json) usando AJAX
    $.ajax({
        url: "info.json"
    }).done(function(resultado) {

        //Guarda el resultado en variables
        hoy = resultado.fechaActual;
        eventos = resultado.eventos;

        //Selecciona los eventos que sean proximos a la fecha actual del JSON
        for (var i = 0; i < eventos.length; i++) {
            if (eventos[i].fecha > hoy) {
                proximos.push(eventos[i]);
            }
        }

        //Ordena los eventos segun la fecha (los mas recientes primero)
        proximos = proximos.sort(function(x, y) {
            if (x.fecha < y.fecha) {
                return 1;
            }
            return -1;
        });

        //Crea un string que contenga el HTML que describe el detalle del evento
        var html = ""

        //Recorre el arreglo y concatena el HTML para cada evento
        for (var j = 0; j < proximos.length; j++) {
            var getUrl = window.location;
            var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
            var link = baseUrl + '/detalle.html' + '?id=' + proximos[j].id
            html += `
        <div class ="col-sm-12 pb-1" >
        <div class="bg-white">
                <h2><a href="${link}">${proximos[j].nombre}</a></h2>
                <p>${proximos[j].fecha} - ${proximos[j].lugar}</p>
                <p>Descripción: ${proximos[j].descripcion}</p>
                <p>Invitados: ${proximos[j].invitados}</p>
        </div>
        </diV>
                `
        }

        //Modifica el DOM agregando el html generado
        document.getElementById("proximos").innerHTML = html

    })
});