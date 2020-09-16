const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

//Seteamos el puerto
// app.set('port', process.env.PORT || 4000);

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }))

// Rutas
app.use(require('./src/router/index'));

// Motor de Vistas Handlebars
app.set('views', path.join(__dirname, './src/views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    partialsDir: path.join(__dirname, './src/views/layouts/partials'),
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

//Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// app.listen(app.get('port'), () => {
//     console.log('Servidor escuchando en el puerto: ', app.get('port'))
// });
exports.app =functions.https.onRequest(app);
