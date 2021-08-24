// Hemos omitido los acentos en los comentarios por compatibilidad
//Define las variables que necesites
var pasados = [];
var proximos = [];
var fechaActual;
var eventos;
let pos = 1;
let numElementos = 2;
$(document).ready(function() {
    //Carga los datos que estan en el JSON (info.json) usando AJAX
    $.ajax({
        url: "info.json"
    }).done(function(resultado) {
        //Guarda el resultado en variables
        hoy = resultado.fechaActual;
        eventos = resultado.eventos;
        //Clasifica los eventos segun la fecha actual del JSON
        for (var i = 0; i < eventos.length; i++) {
            if (eventos[i].fecha < hoy) {
                pasados.push(eventos[i]);
            } else {
                proximos.push(eventos[i]);
            }
        }

        //Ordena los eventos segun la fecha (los mas cercanos primero)
        proximos = proximos.sort(function(x, y) {
            if (x.fecha < y.fecha) {
                return 1;
            }
            return -1;
        });
        //Extrae solo dos eventos
        let dosproximos = proximos.splice(pos, numElementos);
        //Ordena los eventos segun la fecha (los mas cercanos primero)
        pasados = pasados.sort(function(x, y) {
            if (x.fecha < y.fecha) {
                return 1;
            }
            return -1;
        });
        //Extrae solo dos eventos
        let dospasados = pasados.splice(pos, numElementos);
        //Crea un string que contenga el HTML que describe el detalle del evento
        var html = ""

        //Recorre el arreglo y concatena el HTML para cada evento
        for (var j = 0; j < dospasados.length; j++) {
            var getUrl = window.location;
            var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
            var link = baseUrl + '/detalle.html' + '?id=' + dospasados[j].id
            html += `
        <div class ="col-sm-12 pb-1" >
        <div class="bg-white">
                <h2><a href="${link}">${dospasados[j].nombre}</a></h2>
                <p>${dospasados[j].fecha} - ${dospasados[j].lugar}</p>
                <p>Descripción: ${dospasados[j].descripcion}</p>
                <p>Invitados: ${dospasados[j].invitados}</p>
        </div>
        </diV>
                `
        }

        //Modifica el DOM agregando el html generado
        document.getElementById("pasados").innerHTML = html

        //Crea un string que contenga el HTML que describe el detalle del evento
        var htmlProx = ""

        //Recorre el arreglo y concatena el HTML para cada evento
        for (var j = 0; j < dosproximos.length; j++) {
            var getUrl = window.location;
            var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
            var link = baseUrl + '/detalle.html' + '?id=' + dosproximos[j].id
            htmlProx += `
        <div class ="col-sm-12 pb-1" >
        <div class="bg-white">
                <h2><a href="${link}">${dosproximos[j].nombre}</a></h2>
                <p>${dosproximos[j].fecha} - ${dosproximos[j].lugar}</p>
                <p>Descripción: ${dosproximos[j].descripcion}</p>
                <p>Invitados: ${dosproximos[j].invitados}</p>
        </div>
        </diV>
                `
        }

        //Modifica el DOM agregando el html generado
        document.getElementById("proximos").innerHTML = htmlProx

    })
});