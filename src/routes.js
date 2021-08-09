import { Router } from "express";
import uploads from './config/upload'
import placeController from "./app/controllers/placeController";
import userController from './app/controllers/userController';
import regiaoController from "./app/controllers/regiaoController";
import roteiroController from "./app/controllers/roteiroController";
import estadoController from "./app/controllers/estadoController";

const routes = new Router();


/**
 * 
 * Rotas para telas
 * 
 */
routes.get("/", placeController.show);

routes.get("/regiao/:id", regiaoController.getRegiao);
routes.get("/estado/:id", estadoController.getEstado);
routes.get("/roteiros", roteiroController.getRoteiros);
routes.get("/roteiro/:id", roteiroController.getRoteirosById);


routes.post("/roteiro/:id", uploads.single('foto_principal_ponto'), placeController.insertPonto);
routes.post("/roteiro", uploads.single('foto_capa_roteiro','foto_principal_roteiro'), placeController.insertRoteiro);


/**
 * 
 *  Rotas para requisições de usuário 
 * 
*/
routes.get("/user", userController.show);
routes.post("/user", userController.store);




export default routes;


