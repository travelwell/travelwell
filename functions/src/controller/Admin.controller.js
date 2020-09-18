const { firebase } = require('../../configFirebase');
const controlador = {};
const auth = firebase.auth();

// var storage = admin.storage();
const db = firebase.firestore();
// var storageRef =storage().get();

// RUTAS

controlador.inicio = (req, res) => {
    res.render('index');
}
//este es el login
controlador.login = (req, res) => {
    res.render('./login');
}

controlador.nosotros = (req, res) => {
    res.render('./nosotros')
}

controlador.galeria = (req, res) => {
    res.render('./galeria')
}
controlador.maps = (req, res) => {
    res.render('./maps')
}
controlador.paquetes = (req, res) => {
    res.render('./paquetes')
}
controlador.agenda = (req, res) => {
    res.render('./agenda')
}
controlador.formulario = (req, res) => {
    res.render('./formulario')
}
controlador.admin = async (req, res) => {
    res.render('./admin', {
        sitiosagregados: await leersitios()
    })
}

controlador.agregarsitios = async (req, res) => {
    console.log(req.body);
     var nombre = req.body.nombre;
     var descripcion = req.body.descripcion;
    db.collection("sitiosagregados").add({
        nombres: nombre,
        descripciones: descripcion
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);

        })
        .catch((error) => {
            console.error("Error: ", error);
        });
    res.render("./admin", {
        sitiosagregados: await leersitios()
    });
}

const leersitios = () => {
    return new Promise(resolve => {
        let listasitios = [];
        db.collection("sitiosagregados").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    listasitios.push(doc.data())
                });
                resolve(listasitios);
            })
            .catch(function (error) {
                console.log("error", error);
            })
    })
}

// -------------------------------------------------------
//AGREGAR,GUARDAR

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
            res.redirect('/paquetes');
            res.render();
        })
        .catch((error) => {
            console.error("Error: ", error);
            alert('no sirve')
        });

}

//REGISTRO Y LOGIN

controlador.registraru = (req, res) => {
    console.log(req.body)
    db.collection("usuariosregistrados").add({
        email: req.body.email,
        contra: req.body.contra
    })

    firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.contra)
        .then(() => {
            console.log("El usuario se ha registrado");
            res.redirect('/prueba');
        })
        .catch(function (error) {
            console.log("Error: ", error.message);
            alert('la direccion de correo electronico ya esta siendo utilizada')
            res.redirect('/prueba');
        });
}



controlador.loginn = (req, res) => {
    console.log(req.body);
   auth.signInWithEmailAndPassword(req.body.email, req.body.contra)
        .then(async () => {
            res.render("./admin", {
                sitiosagregados: await leersitios()
            });
        })
        .catch(function (error) {
            console.log("Error: ", error.message);
        });
}
controlador.cerrarSesion = (req, res) => {
    console.log(req.body);
    auth.signOut()
        .then(() => {
            console.log("Sesion cerrada exitosamente");
            res.redirect('/');

        }).catch((error) => {
            console.log(error.message)
        });
}

module.exports = controlador;

