const mysql = require('mysql2')
const dbConfig = require('../../db.config.js')


const connection = mysql.createConnection({

  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB 
});
connection.connect((err)=> {
  if(err){
      console.log("Erro ao conectar com o banco!\n" + err)
  }else{
      console.log("Conectado com o banco!")
  }
  
});
module.exports = connection;
