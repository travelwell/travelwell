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

controlador.agenda = async (req, res) => {
    res.render('./agenda', {
        sitiosagregados: await leersitios()
    })
}


controlador.paquetes = async (req, res) => {
    res.render('./paquetes', {
        sitiosagendados: await leersitios2()
    })
}

//get
controlador.admin2 = async (req, res) => {
    res.render('./admin2', {
        sitiosagendados: await leersitios2()
    })
}
//get
controlador.formulario = async (req, res) => {
    res.render('./formulario')
}

controlador.admin = async (req, res) => {
    res.render('./admin')
}
controlador.contactos = (req, res) => {
    res.render('./contactoss')
}
//-------------------------------------------------------
// AGREGANDO SITIOS Y AGENDAS

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


//post
controlador.agregaragenda = async (req, res) => {
    console.log(req.body);
    var nombres = req.body.nombres;
    var telefonos = req.body.telefonos;
    var correos = req.body.correos;
    var nombressitios = req.body.nombressitios;

    db.collection("sitiosagendados").add({
        nombre: nombres,
        telefono: telefonos,
        correo: correos,
        nombresitio: nombressitios
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
    //aqui podemos cambiar de vista
    res.redirect("./paquetes");
}


controlador.agregarinquietudes =  (req, res) => {
    console.log(req.body);
    var nom = req.body.nom;
    var correo = req.body.correo;
    var inquietud = req.body.inquietud;
    db.collection("inquietudes").add({
        name: nom,
        email: correo,
        inqui: inquietud
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
        res.redirect('/')
    }

//LEER SITIOS Y AGENDAS

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
            });
    })
}


const leersitios2 = () => {
    return new Promise(resolve => {
        let listaa = [];
        db.collection("sitiosagendados").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    listaa.push(doc.data())
                });
                resolve(listaa);
            })
            .catch(function (error) {
                console.log("error", error);
            });
    })
}

//---------------------------------------------------------------------------------
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
controlador.cerrarsesion = (req, res) => {
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
