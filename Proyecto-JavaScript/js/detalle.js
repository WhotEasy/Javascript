// Hemos omitido los acentos en los comentarios por compatibilidad

$(document).ready(function () {

  //cargando los datos
  $.ajax({
    url: "info.json"
  }).done(function (resultado) {

    //llenando la variable
    eventos = resultado.eventos;

    //obteniendo el id del url
    var id = location.search.match(/id=(\d)*/)[1]

    evento = eventos.find(function (element) {
      return element.id == id
    })
    //llenando dinamicamente los eventos
    var html = `
    <div class ="col-sm-12 pb-1" >
    <div class="bg-white">
                <h2>${evento.nombre}</h2>
                <p>${evento.fecha} - ${evento.lugar}</p>
                <p>Descripción: ${evento.descripcion}</p>
                <p>Costo: ${evento.precio}</p>
                <p>Invitados: ${evento.invitados}</p>
                </div>
                </diV>
                `
    document.getElementById("evento").innerHTML = html
  });

});


