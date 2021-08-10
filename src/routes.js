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
 * 
 * Rotas para telas
 * 
 */
routes.get("/", placeController.show);

routes.get("/regiao/:id", regiaoController.getRegiao);
routes.get("/estado/:id", estadoController.getEstado);



/**
 * 
 *  Rotas para requisições de usuário 
 * 
*/
routes.get("/user", userController.show);
routes.post("/user", userController.store);



routes.get("/roteiros", roteiroController.getRoteiros);
routes.get("/roteiro/:id", roteiroController.getRoteirosInfo);
routes.get("/:id", roteiroController.getRoteirosById)


routes.post("/roteiro/:id", uploads.single('foto_principal_ponto'), placeController.insertPonto);
routes.post("/roteiro", uploads.single('foto_capa_roteiro','foto_principal_roteiro'), placeController.insertRoteiro);



module.exports =  routes;


