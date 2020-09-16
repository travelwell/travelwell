// ESTO ES UNA LLAVE PARA CONECTARNOS A UNA BASE DE DATOS
var admin = require("firebase-admin");
const firebase = require('firebase');

var serviceAccount = require("./travelwell-eeb73-firebase-adminsdk-dpkq2-9608bb3d47.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://travelwell-eeb73.firebaseio.com"
});



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


// EXPORTAMOS EL MODULO

module.exports= {admin, firebase};
