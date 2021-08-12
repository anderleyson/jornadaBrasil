const connectionRequest = require('../../config/connection');
const connection = connectionRequest();

class RegiaoController{


        getRegiao(req, res){
            let id = req.params.id;
            connection.query('SELECT r.id_regiao, r.desc_regiao, r.culinaria, r.foto_capa_regiao, r.foto_prato, r.foto_principal_regiao, e.id_estado, e.foto_principal_estado, ro.id_roteiro, ro.foto_principal_roteiro FROM regioes r INNER JOIN estados e ON r.id_regiao = e.id_regiao INNER JOIN roteiros ro ON e.id_estado = ro.id_estado WHERE r.id_regiao = "'+ id +'" ORDER BY rand() LIMIT 3;', function(err, rows, fields){
                if (err) throw err
    
                res.send(rows);
            });
        }
        getRegiaoRoteiros(req, res){
            let id = req.params.id;
    
            connection.query('SELECT ro.id_roteiro, ro.foto_principal_roteiro FROM roteiros ro INNER JOIN estados ON ro.id_estado = estados.id_estado INNER JOIN regioes r ON estados.id_regiao = r.id_regiao WHERE r.id_regiao = "'+ id +'" ORDER BY rand() LIMIT 3;', function (err, rows, fields) {
                if (err) throw err
        
                res.send(rows);
            })
        }

}

module.exports =  new RegiaoController();