import connection from '../../config/connection'




class UserController{

    
    store(req,res){

        if (req.body.name == "" || req.body.email == "" || req.body.password == "") {
            return res.status(400).send({ message: 'Dados inseridos de forma incorreta. Verifique os dados informados e tente novamente.' });
        }
        else {
            connection.query("INSERT INTO `jornada_brasil`.`users` (`name`, `email`, `password`) VALUES ('"+ req.body.name +"','" + req.body.email +"','" + req.body.password + "' );", (err) => {
                if (err) {
                    return res.status(400).json({ 
                        error:true,
                        message: 'Dados inseridos de forma incorreta. Verifique os dados informados e tente novamente.' });
                }
                res.status(201).json({
                    error: false,
                    message: "Dados inseridos com sucesso"
                })
            })
        }
    }

    show(req, res){
        connection.query('SELECT * FROM users', function (err, rows, fields) {
            if (err) throw err
    
            res.send(rows);
        })
    }

}

export default new UserController();