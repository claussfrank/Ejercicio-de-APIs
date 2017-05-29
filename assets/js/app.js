var tituloMensaje =  document.getElementById("tituloMensaje");
var textMensaje = document.getElementById("textMensaje");
var enviarMensaje = document.getElementById("mensajeSend");

enviarMensaje.addEventListener("click", mostarPublicacion);

function mostarPublicacion(e){
    e.preventDefault()
    var publicar = document.getElementById("publicar");
    var nuevaPublicacion = document.createElement("div");
    var nuevoTexto = document.createElement("p");
    var nuevoTitulo = document.createElement("h3");
    
    nuevaPublicacion.className ="card-panel" + " " + "hoverable";
    
    nuevoTitulo.innerHTML = tituloMensaje.value;
    nuevoTexto.innerHTML = textMensaje.value;
    nuevaPublicacion.appendChild(nuevoTitulo);
    nuevaPublicacion.appendChild(nuevoTexto);
    publicar.appendChild(nuevaPublicacion);
}