const mysql = require('mysql2')
const config = require('../../config');


const connection = mysql.createConnection(config.production);
connection.connect((err)=> {
    if(err){
        console.log("Erro ao conectar com o banco!\n" + err)
    }else{
        console.log("Conectado com o banco!")
    }
    
});


module.exports = connection;