const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST || 'localhost',
  user: process.env.DATABASE_USERNAME || 'root',
  password: process.env.DATABASE_PASSWORD || 'root',
  database: process.env.DATABASE_NAME || 'jornada_brasil'
});
connection.connect((err)=> {
  if(err){
      console.log("Erro ao conectar com o banco!\n" + err)
  }else{
      console.log("Conectado com o banco!")
  }
  
});
module.exports = connection;
