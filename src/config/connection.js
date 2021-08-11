const mysql = require('mysql2')
const dbConfig = require('../../db.config.js')

for (;;) {
    try {
        const connection =  mysql.createConnection({
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
  }


module.exports = connection;