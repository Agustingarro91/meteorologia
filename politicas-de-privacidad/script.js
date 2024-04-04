const $dominio = document.querySelectorAll(".dominio"),
  $correo = document.querySelectorAll(".correo"),
  $nombre = document.querySelectorAll(".nombre");

$dominio.forEach((span) => {
  span.innerHTML = "estacionmeteorologica.top";
});
$correo.forEach((span) => {
  span.innerHTML = "agusdiazgarro@gmail.com";
});
$nombre.forEach((span) => {
  span.innerHTML = "Alejandro Agustín Díaz Garro";
});
