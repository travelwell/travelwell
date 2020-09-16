const { Router } = require('express');
const router = Router();

const controlador = require('../controller/Admin.controller');

router.get('/', controlador.inicio);
router.post('/', controlador.inicio);
 router.get('/nosotros', controlador.nosotros);
 router.post('/nosotros', controlador.nosotros);
router.get('/admin', controlador.admin);
router.post('/admin', controlador.admin);
router.get('/galeria', controlador.galeria);
router.post('/galeria', controlador.galeria);
router.get('/maps',controlador.maps);
router.post('/maps',controlador.maps);
router.get('/paquetes',controlador.paquetes);
router.post('/paquetes',controlador.paquetes);
router.get('/agenda',controlador.agenda);
router.post('/agenda',controlador.agenda);
router.get('/formulario',controlador.formulario);
router.post('/formulario',controlador.formulario);
router.get('/admin2agregar',controlador.admin2agregar);


router.post('/guardar',controlador.guardar);

module.exports = router;