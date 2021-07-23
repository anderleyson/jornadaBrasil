import express from 'express';
import routes from './routes';
import cors from 'cors';

class App{

    constructor(){

        this.app = express();
        this.middlewares();
        this.routes();

    }
    middlewares(){
    
        this.app.use(express.json())
        
        this.app.use((req, res, next) => {
            res.header("Access-Controll-Allow-Origin", "*");
            res.header("Access-Controll-Allow-Methods", "Get, POST, PUT, DELETE");
            res.header("Access-Controll-Allow-Headers", "Access, Content-type, Authorization, Acept, Origin, X-Requested-With");
            this.app.use(cors());
            next();
        });

    }
    routes(){

        this.app.use(routes);
        

    }

}

export default new App().app;