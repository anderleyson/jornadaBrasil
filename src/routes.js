import { Router } from "express";
import placeController from "./app/controllers/placeController";
import userController from './app/controllers/userController';

const routes = new Router();



/**
 * 
 *  Rotas para requisições de usuário 
 * 
*/
routes.get("/user", userController.show);
routes.post("/user", userController.store);


/**
 * 
 *  Rotas para requisições de lugares
 * 
*/
routes.get("/local", placeController.show);
routes.post("/local", placeController.store)


export default routes;


