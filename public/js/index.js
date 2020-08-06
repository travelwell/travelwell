
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAXSwGFe4m-5u8zG1_PPW5MjGeWvAwT93Y",
  authDomain: "travelwell-eeb73.firebaseapp.com",
  databaseURL: "https://travelwell-eeb73.firebaseio.com",
  projectId: "travelwell-eeb73",
  storageBucket: "travelwell-eeb73.appspot.com",
  messagingSenderId: "692140741389",
  appId: "1:692140741389:web:881963fd1865ebbd6b5644"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//   objeto donde se agregan todas las funcionalidades firestore
var db = firebase.firestore();


// codigo de prueba para login
function login() {
  var usuario = document.getElementById('txusuario');
  var contraseña = document.getElementById('txcontraseña');

  console.log(usuario.value + " " + contraseña.value);

  if (usuario.value == "admin" && contraseña.value == "admin") {       
      location.href = "panel.html";
          alert("inicaste")
          var inf2= document.getElementById('info2');
          inf2.style.display=none;
  } else {
      alert("estas equivocado")
       location.href = "panel.html"
       var info1 = document.getElementById('info1');
       info1.style.display= none;
      
  }

}


function regresar(){
  location.href="index.html";
}

// CRUD
var txnombres = document.getElementById('nombres');
var txcontraseñas = document.getElementById('contraseñas');
var txcorreos = document.getElementById('correos');
var btnagregar = document.getElementById('btnagregar');

function agregardatos() {
  db.collection("usuarios").add({
    Nombre: txnombres.value,
    correo: correos.value,
    contra: txcontraseñas.value,
  })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      alert('datos agregados correctamennte', docRef.id);
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
  // console.log(`el nombre es: ${txnombres.Value} el correo eso ${txcorreos.Value} 
  // y la contraeña es ${contraseñas.value}`);
  // alert(`a ${txnombres.value}f ${correos.value}`);

}
function eliminar(){
  alert('sirve');

}
