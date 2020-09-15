const { firebase, admin } = require('../configFirebase');
const controlador = {};

// var storage = admin.storage();
const db = firebase.firestore();
// var storageRef =storage().get();

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

    module.exports = controlador;