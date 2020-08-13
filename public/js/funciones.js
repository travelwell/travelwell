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

//   variables
var txnombres = document.getElementById('nombres');
var txcontraseñas = document.getElementById('contraseñas');
var txcorreos = document.getElementById('correos');
var listausuarios = document.getElementById('listausuarios');
var btnagregar = document.getElementById('btnagregar');

// funciones




function agregardatos() {
    leerDatos();
    db.collection("usuarios").add({
        Nombre: txnombres.value,
        correo: txcorreos.value,
        contra: txcontraseñas.value,
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert('datos agregados correctamennte', docRef.id);
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
}

function leerDatos() {
    listausuarios.innerHTML = "";
    // btnActualizar.classList.add('d-none');

    db.collection("usuarios").get()
        .then((querySnapshot) => {
            // esquema para definir funciones anonimas
            querySnapshot.forEach((doc) => {
                listausuarios.innerHTML += `
                   <tr>
                       <td>${doc.data().nombre}</td>
                       <td>${doc.data().correo}</td>
                       <td>${doc.data().contra}</td>
                       <td>
                           <button onclick="eliminar('${doc.id}')" class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
                           <button onclick="editar('${doc.id}')" class="btn btn-info"><i class="far fa-edit"></i></button>
                       </td>
                   </tr>           
               `;
            });
        })
        .catch(function (error) {
            console.log("Error: ", error);
        });
}
