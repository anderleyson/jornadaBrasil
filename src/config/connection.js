const mysql = require('mysql2')

for (;;) {
    try {
        const connection =  mysql.createConnection({
          host: process.env.DB_HOST,
          user: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME 
        });
        connection.connect((err)=> {
            if(err){
                console.log("Erro ao conectar com o banco!\n" + err)
            }else{
                console.log("Conectado com o banco!")
            }
            
        });
      try {
        // do stuff with conn
      } catch (err) {
        console.log(`Error doing stuff: ${err.message}`);
      } finally {
        connection.destroy();
      }
    } catch (err) {
      console.log(`Unable to acquire connection: ${err.message}`);
    }
    // delay before trying to reacquire connection

/*const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME 


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

*/
module.exports = connection;