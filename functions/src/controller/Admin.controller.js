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
        });
}


controlador.login = (req, res) => {
    console.log(req.body)

    firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.contra)
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

controlador.agregarsitios = (req, res) => {

    console.log(req.body)

    var nombre = req.body.nombre;
    var descripcion = req.body.descripcion;

    db.collection("sitiosagregados").doc().set({
        first: nombre,
        born: descripcion,

    })
        .then(function (docRef) {
            console.log("CONSOLE: Sítio registrado: ");

        })
        .catch(function (error) {
            console.log("CONSOLE: Error no se ha podido registrar el sitio: ", error);
        });
}
var tabla = req.body.tabla;
    db.collection("sitiosagregados").get().then((querySnapshot) => {
        tabla.innerHTML = '';
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().first}`);
            tabla.innerHTML += `

    <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
    
    
      <div class="card-body">
        <p class="card-text"> <b>${doc.data().first}</b> </p>
        <p class="card-text">${doc.data().born}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
          </div>
          <a href="Formulario.html" class="btn btn-secondary my-2">Agenda</a>
        </div>
      </div>
    </div>
    </div>
        `

        });
    });

    var tabla2 = req.body.tabla2;
    db.collection("sitiosagregados").onSnapshot((querySnapshot) => {
        tabla2.innerHTML = '';
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().first}`);
            tabla2.innerHTML += `
        <tr>
          <th scope="row">${doc.id}</th>
          <td>${doc.data().first}</td>
          <td>${doc.data().born}</td>
          <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button></td>
          <td><button class="btn btn-warning" onclick="editar('${doc.id}','${doc.data().first}','${doc.data().born}')">Editar</button></td>
        </tr>
        
        `

        });
    });




module.exports = controlador;

