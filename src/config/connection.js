import mysql from 'mysql2'
require('dotenv').config();


const connection = mysql.createConnection({
    

      host: process.env.DATABASE_HOST || 'localhost',
      port: process.env.DATABASE_PORT || '3306',
      database: process.env.DATABASE_NAME || 'jornada_brasil',
      user: process.env.DATABASE_USERNAME || 'root',
      password: process.env.DATABASE_PASSWORD || 'root'    
});
connection.connect((err)=> {
    if(err){
        console.log("Erro ao conectar com o banco!\n" + err)
    }else{
        console.log("Conectado com o banco!")
    }
    
});


export default connection;