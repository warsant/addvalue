<?php
	$destino = "contacto@addvalueit.com, soporte@addvalueit.com";
	$nombre = $_POST["nombre"];
	$correo = $_POST["mail"];
	$telefono = $_POST["telefono"];
	$mensaje = $_POST["mensaje"];

	$contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nTeléfono: " . $telefono . "\nMensaje: " . $mensaje;

	mail($destino, "Contacto", $contenido);
	header("Location:index.html");

?>
