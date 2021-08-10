const connection = require('../../config/connection');

class RoteiroController{

    /*Você pode curtir*/
    getRoteiros(req, res){
        connection.query('SELECT r.id_roteiro, r.foto_capa_roteiro FROM roteiros r ORDER BY rand() LIMIT 3;', function (err, rows, fields) {
            if (err) throw err
    
            res.send(rows);
        })
    }

    /*Buscando roteiro pelo nome*/
    getRoteirosById(req, res){
        let id = req.params.id;

        connection.query('SELECT r.id_roteiro, r.foto_principal_roteiro FROM roteiros r WHERE r.id_roteiro = "'+ id +'";', function (err, rows, fields) {
            if (err) throw err
            if(rows == 0){
                res.status(404).json({message:"Not found"})
            }else{
                res.status(201).send(rows);
            }
        })
    }

    /*Mostrando informacões do roteiro*/ 
    getRoteirosInfo(req, res){
        let id = req.params.id;

        connection.query('SELECT r.id_roteiro, r.desc_roteiro, r.foto_capa_roteiro, r.foto_principal_roteiro, p.id_ponto, p.desc_ponto, p.cidade, p.valor, foto_principal_ponto FROM roteiros r INNER JOIN pontos_turisticos p on r.id_roteiro = p.id_roteiro WHERE r.id_roteiro = "'+ id +'";', function (err, rows, fields) {
            if (err) {console.log(err)}
            if(rows == 0){
                res.status(404).json({message:"Not found"})
            }else{
                res.status(201).send(rows);
            }
        })
    }

}

module.exports =  new RoteiroController();