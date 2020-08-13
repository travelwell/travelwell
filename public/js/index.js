
// codigo de prueba para login
 function login() {
   var usuario = document.getElementById('txusu');
   var contraseña = document.getElementById('txcont');

   console.log(usuario.value + " " + contraseña.value);

   if (usuario.value == "admin" && contraseña.value == "admin") {
     location.href = "panel.html";
     alert("inicaste")
     var inf2 = document.getElementById('info2');
     inf2.style.display = none;
   } else {
     alert("estas equivocado")
     location.href = "panel.html"
     var info1 = document.getElementById('info1');
     info1.style.display = none;

   }
 };


 function regresar() {
  location.href = "index.html";
 }




