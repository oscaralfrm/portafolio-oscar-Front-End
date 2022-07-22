/* Conexión con Discord */

const botonDiscord = document.getElementById('Discord');

const mostrarUsuarioDiscord = botonDiscord.addEventListener('click', function() {
  alert("Usuario de Discord: oscaralfrm#2401");
})

/* Conexión a LinkedIn */

const botonLinkedIn = document.getElementById('LinkedIn');

const confirmarLinkedIn = botonLinkedIn.addEventListener('click', function() {
  if (confirm("¿Quieres visitar mi perfil de LinkedIn?")) {
    open("https://www.linkedin.com/in/oscar-romero-2726b0218/");
  }
})

/* Conexión a GitHub */

const botonGithub = document.getElementById('Github');

const confirmarGithub = botonGithub.addEventListener('click', function() {
  if (confirm("¿Quieres visitar mi perfil de GitHub?")) {
    open("https://github.com/oscaralfrm");
  }
})
