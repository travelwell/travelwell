const { firebase} = require('../../configFirebase');
const controlador = {};

// var storage = admin.storage();
const db = firebase.firestore();
// var storageRef =storage().get();

// VARIABLES
// login y registro
// var emailUser = document.getElementById('emailUser');
// var passUser = document.getElementById('passUser');

// RUTAS

controlador.inicio = (req, res) => {
    res.render('index');
}
controlador.nosotros = (req, res) => {
    res.render('./nosotros')
}
controlador.admin = (req, res) => {
    res.render('./admin',)
}
controlador.galeria = (req, res) => {
    res.render('./galeria',)
}
controlador.maps = (req, res) => {
    res.render('./maps',)
}
controlador.paquetes = (req, res) => {
    res.render('./paquetes',)
}
controlador.agenda = (req, res) => {
    res.render('./agenda',)
}
controlador.formulario = (req, res) => {
    res.render('./formulario',)
}
controlador.admin2agregar = (req, res) => {
    res.render('./admin2agregar',)
}
// -------------------------------------------------------
controlador.guardar = (req, res) => {
    console.log(req.body);

    db.collection("sitiosagendados").add({
        nombres: req.body.nombres,
         telefonos: req.body.telefonos,
         correos: req.body.correos,
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert('Datos agregados correctamente', docRef.id);
            limpiarDatos();
        })
        .catch((error) => {
            console.error("Error: ", error);
        });

    }

    // validacion registro y login
    
function limpiarDatosLogin() {
    emailUser.value = "";
    passUser.value = "";
}
controlador.registrarUsuario =(req,res)=>{
    firebase.auth().createUserWithEmailAndPassword(emailUser.value, passUser.value)
    .then(() => {
        console.log("El usuario se ha registrado");
        limpiarDatosLogin();
    })
    .catch(function (error) {
        console.log("Error: ", error.message);
    });
}


function login() {
    var uno = emailUser.value;
    firebase.auth().signInWithEmailAndPassword(uno, passUser.value)
        .then((user) => {
            sessionStorage.setItem('login', user.email);
            window.location.href = 'admin.html';
        })
        .catch(function (error) {
            console.log("Error: ", error.message);
            limpiarDatosLogin();
        });
}

function cerrarSesion() {
    firebase.auth().signOut()
        .then(() => {
            console.log("Sesion cerrada exitosamente");
            window.location.href = 'index.html';
        }).catch((error) => {
            console.log(error.message)
        });
}

function estado() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            emailUsuarioLogueado.innerHTML = user.email;
            usuarioActual = user;
        }
        else {
            window.location.href = 'index.html';
        }
    });
}

    module.exports = controlador;