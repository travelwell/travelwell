const { firebase } = require('../../configFirebase');
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

controlador.prueba = (req, res) => {
    res.render('./prueba');
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

//----------------------

// -------------------------------------------------------
controlador.guardar = (req,res) => {
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
            res.redirect('/paquetes');
            res.render();
        })
        .catch((error) => {
            console.error("Error: ", error);
            alert('no sirve')
        });

}


 controlador.registraru = (req, res) => {
     console.log(req.body)
     db.collection("usuariosregistrados").add({
         email: req.body.email,
         contra: req.body.contra
     })

     firebase.auth().createUserWithEmailAndPassword(req.body.email,req.body.contra)
         .then(() => {
             console.log("El usuario se ha registrado");
             res.redirect('/prueba');
         })
         .catch(function (error) {
             console.log("Error: ", error.message);
         });
 }


 controlador.login=(req,res)=> {
    console.log(req.body)
     
     firebase.auth().signInWithEmailAndPassword(req.body.email,req.body.contra )
         .then((user) => {
             sessionStorage.setItem('login', user.email);
             console.log("funcionando");
            res.redirect('/');
         })
         .catch(function (error) {
             console.log("Error: ", error.message);
            //  limpiarDatosLogin();
         });
 }

// controlador.cerrarSesion=(req,res) => {
//     firebase.auth().signOut()
//         .then(() => {
//             console.log("Sesion cerrada exitosamente");
//             res.redirect = '/';
//         }).catch((error) => {
//             console.log(error.message)
//         });
// }



module.exports = controlador;

