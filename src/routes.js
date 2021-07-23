import { Router } from "express";
import placeController from "./app/controllers/placeController";
import userController from './app/controllers/userController';

const routes = new Router();




import mysql from 'mysql2';


var connection = mysql.createConnection({
    host: process.env.DATABASE_HOST || 'localhost',
    user: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD ||'2205derLEYan',
    database: process.env.DATABASE_NAME || 'jornada_brasil'
    
});
connection.connect((err)=> {
    if(err){
        console.log("Erro ao conectar com o banco!\n" + err)
    }else{
        console.log("Conectado com o banco!")
    }
    
});





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


