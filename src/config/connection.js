const mysql = require('mysql2')
require('dotenv').config();


const connection = mysql.createConnection({
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD    
});
connection.connect((err)=> {
    if(err){
        console.log("Erro ao conectar com o banco!\n" + err)
    }else{
        console.log("Conectado com o banco!")
    }
    
});


module.exports = connection;