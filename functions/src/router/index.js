const { Router } = require('express');
const router = Router();

const controlador = require('../controller/Admin.controller');

router.get('/', controlador.inicio);
router.post('/', controlador.inicio);

 router.get('/nosotros', controlador.nosotros);
 router.post('/nosotros', controlador.nosotros);

router.get('/galeria', controlador.galeria);
router.post('/galeria', controlador.galeria);

router.get('/maps',controlador.maps);
router.post('/maps',controlador.maps);

router.get('/agenda',controlador.agenda);
router.post('/agenda',controlador.agenda);

router.get('/formulario',controlador.formulario);
// aqui llamamos en el metodo post en formulario guardar agendas
router.post('/formulario',controlador.agregaragenda);

 router.get('/paquetes',controlador.paquetes);
// // router.post('/paquetes',controlador.guardar);

router.get('/admin', controlador.admin);
// aqui llamamos en el metodo post en admin agregarsitios
router.post('/admin', controlador.agregarsitios);
///METODOS DE INTERACCION

router.get('/admin2',controlador.admin2);
router.post('/admin2',controlador.agregaragenda);

router.get('/login', controlador.login);
router.post('/logina', controlador.loginn);


 router.post('/registraru',controlador.registraru);
 router.get('/registraru',controlador.registraru);

 router.post('/agregarsitios',controlador.agregarsitios);
 router.get('/agregarsitios',controlador.agregarsitios);

 router.post('/cerrarsesion',controlador.cerrarsesion);
 router.get('/cerrarsesion',controlador.cerrarsesion);


module.exports = router;