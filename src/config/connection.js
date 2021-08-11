const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME 
});
connection.connect((err)=> {
  if(err){
      console.log("Erro ao conectar com o banco!\n" + err)
  }else{
      console.log("Conectado com o banco!")
  }
  
});
module.exports = connection;
