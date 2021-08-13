module.exports = function () {
      
  let mysql = require('mysql2')
  let connection =  mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'jornada_brasil' 
  });
  connection.connect((err)=> {
      if(err){
          console.log("Erro ao conectar com o banco!\n" + err)
          connection.connect();
      }
  });


  return connection;
}
   
