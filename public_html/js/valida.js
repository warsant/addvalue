window.onload = function () {
	document.form_contacto.nombre.focus();
	document.form_contacto.addEventListener('submit', validarFormulario);
}
 
function validarFormulario(evObject) {
	evObject.preventDefault();
	var todoCorrecto = true;
	var formulario = document.form_contacto;
	if (isNaN(formulario.telefono.value)==true || /^[1-9]\d$/.test(formulario.telefono.value)==false ) {
		formulario.telefono.value='';
		alert ('Ingrese un número de telefono válido'); todoCorrecto=false;
	}
	if (isNaN(formulario.mail.value)==true || / [a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(formulario.mail.value)==false ) {
		formulario.mail.value='';
		alert ('Ingrese una dirección de correo valida'); todoCorrecto=false;
	}
	if (todoCorrecto ==true) {
		formulario.submit();
	}
}
