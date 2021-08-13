const connectionRequest = require('../../config/connection');
const connection = connectionRequest();

class EstadoController{

    updateEstado(req,res){
        let id = req.params.id
        connection.query("UPDATE `estados` SET `desc_estado` = '"+ req.body.desc_estado +"', `foto_capa_estado` = '"+  req.files.foto_capa_estado[0].path +"', `foto_principal_estado` = '" + req.files.foto_principal_estado[0].path +"' WHERE (`id_estado` = '"+ id + "');",
        
        (err) => {
            if(err){
            console.log(err)
                return res.status(400).json({
                    error: true, 
                    message: "Erro ao tentar atualizar região no banco"
                })
            }
            return res.status(200).json({
                error:false,
                message: "Região atualizada com sucesso",
                regiao: {
                
                    fotos: req.files
                }
            })
        })
    }
    getEstado(req, res){
        let id = req.params.id;
        connection.query('SELECT e.id_estado, e.uf, e.desc_estado, e.foto_capa_estado, e.foto_principal_estado, ro.id_roteiro, ro.foto_principal_roteiro FROM estados e INNER JOIN roteiros ro ON e.id_estado = ro.id_estado WHERE e.id_estado = "'+ id +'" ORDER BY rand() LIMIT 3;', function (err, rows, fields){
            if(err) throw err

            res.send(rows);
        });

    }
    getEstados(req, res){
        connection.query('SELECT e.id_estado, e.uf, e.foto_principal_estado FROM estados;', function (err, rows, fields){
            if(err) throw err

            res.send(rows);
        });
    }

}

module.exports =  new  EstadoController();