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
var btnleer = document.getElementById('btnleer');

// funciones


// function abrirpaquetes(){
//     location.href = "paquetes.html";
// }

function agregardatos() {
    leerDatos();
    db.collection("usuarios").add({
        nombre: txnombres.value,
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
                           <button onclick="eliminar('${doc.id}')" class="btn btn-danger"><i class="far fa-trash-alt"></i>delete</button>
                           <button onclick="editar('${doc.id}')" class="btn btn-info"><i class="far fa-edit"></i>edit</button>
                       </td>
                   </tr>           
               `;
            });
        })
        .catch(function (error) {
            console.log("Error: ", error);
        });
}

function eliminar(id) {
    db.collection("usuarios").doc(id).delete()
        .then(() => {
            console.log("Documento eliminado");
            leerDatos();
        }).catch((error) => {
            console.error("Error: ", error);
        });
}

function editar(id) {
    btnAgregar.classList.add('d-none');
    btnActualizar.classList.remove('d-none');
    db.collection("usuarios").doc(id).get()
        .then((doc) => {
            idUsuario.value = id;
            txtname.value = doc.data().nombre;
            apellidos.value = doc.data().apellido;
        })
        .catch((error) => {
            console.log("Error: ", error);
        });
}

function actualizarDatos() {
    db.collection("usuarios").doc(idUsuario.value).update({
        nombre: txtname.value,
        apellido: apellidos.value,
        rol: opcion.value
    })
        .then(() => {
            limpiarDatos()
            leerDatos();
            btnActualizar.classList.add('d-none');
            btnAgregar.classList.remove('d-none');
            console.log("Document successfully updated!");
        })
        .catch((error) => {
            console.log("Error: ", error);
        });

}

function limpiarDatos() {
    txtname.value = "";
    apellidos.value = "";
}
