// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBat9YlO7IqYMnaHMleavlSqzwk4TfmU8U",
  authDomain: "proyecto1-3124c.firebaseapp.com",
  projectId: "proyecto1-3124c"
});



var db = firebase.firestore();



function guardar() {

  var nombre = document.getElementById('nombre').value;
  var imagen = document.getElementById('imagen').value;
  var brevedescripcion = document.getElementById('brevedescripcion').value;

  db.collection("users").add({
    first: nombre,
    last: imagen,
    born: brevedescripcion
  })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);

      var nombre = document.getElementById('nombre').value = '';
      var imagen = document.getElementById('imagen').value = '';
      var brevedescripcion = document.getElementById('brevedescripcion').value = '';
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
}


var tabla = document.getElementById('tabla');
db.collection("users").get().then((querySnapshot) => {
  tabla.innerHTML = '';
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().first}`);
    tabla.innerHTML += `

    <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
    
    <p><img src="${doc.data().last}" alt="" width="347" height="301" /></p>
    
    
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

var tabla2 = document.getElementById('tabla2');
db.collection("users").onSnapshot((querySnapshot) => {
  tabla2.innerHTML = '';
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().first}`);
    tabla2.innerHTML += `
        <tr>
          <th scope="row">${doc.id}</th>
          <td>${doc.data().first}</td>
          <td>${doc.data().last}</td>
          <td>${doc.data().born}</td>
          <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button></td>
          <td><button class="btn btn-warning" onclick="editar('${doc.id}','${doc.data().first}','${doc.data().last}','${doc.data().born}')">Editar</button></td>
        </tr>
        
        `

  });
});

// borrar documentos
function eliminar(id) {
  db.collection("users").doc(id).delete().then(function () {
    console.log("Document successfully deleted!");
  }).catch(function (error) {
    console.error("Error removing document: ", error);
  });

}

//editar documentos


function editar(id, nombre, imagen, brevedescripcion) {

  document.getElementById('nombre').value = nombre;
  document.getElementById('imagen').value = imagen;
  document.getElementById('brevedescripcion').value = brevedescripcion;

  var boton = document.getElementById('boton');
  boton.innerHTML = 'Editar';

  boton.onclick = function () {
    var washingtonRef = db.collection("users").doc(id);
    // Set the "capital" field of the city 'DC'

    var nombre = document.getElementById('nombre').value;
    var imagen = document.getElementById('imagen').value;
    var brevedescripcion = document.getElementById('brevedescripcion').value;

    return washingtonRef.update({
      first: nombre,
      last: imagen,
      born: brevedescripcion
    })
      .then(function () {
        console.log("Document successfully updated!");
        boton.innerHTML = 'Guardar';
        var nombre = document.getElementById('nombre').value = '';
        var imagen = document.getElementById('imagen').value = '';
        var brevedescripcion = document.getElementById('brevedescripcion').value = '';
      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });

  }


}





