const mysql = require('mysql2')
const dbConfig = require('../../db.config.js')



const connection = mysql.createConnection({
    host: dbConfig.HOST || 'us-cdbr-east-04.cleardb.com',
    user: dbConfig.USER || 'b2f06df2571ed0',
    password: dbConfig.PASSWORD || '6781b398',
    database: dbConfig.DB || 'heroku_d85d9926c96b391'
});
connection.connect((err)=> {
    if(err){
        console.log("Erro ao conectar com o banco!\n" + err)
    }else{
        console.log("Conectado com o banco!")
    }
    
});


module.exports = connection;