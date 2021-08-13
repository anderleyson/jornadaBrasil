const { Router } = require('express');
const uploads = require('./config/upload');
const multer = require('multer');

const placeController = require('./app/controllers/placeController');
const userController = require('./app/controllers/userController');
const regiaoController = require('./app/controllers/regiaoController');
const roteiroController = require('./app/controllers/roteiroController');
const estadoController = require('./app/controllers/estadoController');


const routes = new Router();

/**
 * Rotas para telas
 */
routes.get("/regioes", regiaoController.getRegioes);
routes.get("/regiao/:id", regiaoController.getRegiao);
routes.put('/regiao/:id', uploads.fields([{name: 'foto_capa_regiao', maxCount:1 }, {name: 'foto_principal_regiao', maxCount:1 }, {name: 'foto_prato', maxCount:1 }]), regiaoController.updateRegiao);

routes.get('/estados', estadoController.getEstados);
routes.get("/estado/:id", estadoController.getEstado);
routes.put('/estado/:id', uploads.fields([{name: 'foto_capa_estado', maxCount:1 }, {name: 'foto_principal_estado', maxCount:1 }]), estadoController.updateEstado);

routes.get("/:id", roteiroController.getRoteirosById)
routes.get("/roteiros", roteiroController.getRoteiros);
routes.get("/roteiro/:id", roteiroController.getRoteirosInfo);
routes.post("/roteiro", uploads.fields([{ name: 'foto_capa_roteiro', maxCount: 1 }, { name: 'foto_principal_roteiro', maxCount: 1 }]), roteiroController.insertRoteiro);
routes.post("/roteiro/:id/", uploads.single('foto_principal_ponto'), placeController.insertPonto);


/**
 *  Rotas para requisições de usuário 
*/
routes.get("/user", userController.show);
routes.post("/user", userController.store);


module.exports =  routes;


