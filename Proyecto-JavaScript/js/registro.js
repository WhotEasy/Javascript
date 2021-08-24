// Hemos omitido los acentos en los comentarios por compatibilidad

function validar(formulario) {
    if (formulario.nombres.value.trim().length == 0) {
        alert("Nombre obligatorio");
        return false;
    }

    if (formulario.contrasena.value.trim().length == 0) {
        alert("Contraseña obligatoria");
        return false;
    }

    if (formulario.contrasena.value != formulario.confirmacion.value) {
        alert("Contraseñas no coinciden");
        return false;
    }
    //Expresion regular del correo
    var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!re.test(formulario.email.value)) {
        alert("Email inválido");
        return false;
    }

    if (formulario.tipo.value == -1) {
        alert("Tipo de usuario obligatorio");
        return false;
    }
    if (!formulario.acepto.checked) {
        alert("Debe aceptar terminos y condiciones");
        return false;
    }
    return true;

}