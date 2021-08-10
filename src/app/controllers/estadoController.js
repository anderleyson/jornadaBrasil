const connection = require('../../config/connection');

class EstadoController{

    getEstado(req, res){
        let id = req.params.id;
        connection.query('SELECT e.id_estado, e.uf, e.desc_estado, e.foto_capa_estado, e.foto_principal_estado, ro.id_roteiro, ro.foto_principal_roteiro FROM estados e INNER JOIN roteiros ro ON e.id_estado = ro.id_estado WHERE e.id_estado = "'+ id +'" ORDER BY rand() LIMIT 3;', function (err, rows, fields){
            if(err) throw err

            res.send(rows);
        });

    }

}

module.exports =  new  EstadoController();