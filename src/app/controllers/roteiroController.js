const connectionRequest = require('../../config/connection');

const multer = require('multer');

class RoteiroController{


    insertRoteiro(req,res){
        const connection = connectionRequest();
        connection.query("INSERT INTO `roteiros` (`id_roteiro`, `desc_roteiro`, `foto_capa_roteiro`, `foto_principal_roteiro`, `id_estado`) VALUES ('"+ req.body.id_roteiro +"', '"+ req.body.desc_roteiro +"', '" + req.files.foto_capa_roteiro[0].path +"', '" + req.files.foto_principal_roteiro[0].path +"', '"+ req.body.id_estado +"');",
        (err) => {
            if (err instanceof multer.MulterError) {
                console.log(err)
                return res.status(400).json({
                    error: true, 
                    message: "Erro ao tentar inserir imagens no banco"
                })
              } else if (err) {
                console.log(err)
                return res.status(400).json({
                    error: true, 
                    message: "Erro ao tentar inserir roteiro no banco"
                })
              }
            return res.status(200).json({
                error:false,
                message: "Roteiro inserido.",
                local:{
                    "Nome do roteiro:": req.body.id_roteiro,
                    "Descrição:": req.body.desc_roteiro,
                    "Foto de capa": req.files.foto_capa_roteiro[0].path,
                    "Foto principal": req.files.foto_principal_roteiro[0].path,
                    "Estado:": req.body.id_estado
                }
            })
        })
        connection.end();
    }

    /*Você pode curtir*/
    getRoteiros(req, res){
        const connection = connectionRequest();
        connection.query('SELECT r.id_roteiro, r.foto_capa_roteiro FROM roteiros r ORDER BY rand() LIMIT 3;', function (err, rows, fields) {
            if (err) throw err
    
            res.send(rows);
        });
        connection.end();
    }

    /*Buscando roteiro pelo nome*/
    getRoteirosById(req, res){
        const connection = connectionRequest();
        let id = req.params.id;

        connection.query('SELECT * FROM roteiros r WHERE r.id_roteiro = "'+ id +'";', function (err, rows, fields) {
            if (err) throw err
            if(rows == 0){
                res.status(404).json({message:"Not found"})
            }else{
                res.status(201).send(rows);
            }
        });
        connection.end();
    }

    /*Mostrando informacões do roteiro*/ 
    getRoteirosInfo(req, res){
        const connection = connectionRequest();
        let id = req.params.id;

        connection.query('SELECT r.id_roteiro, r.desc_roteiro, r.foto_capa_roteiro, r.foto_principal_roteiro, p.id_ponto, p.desc_ponto, p.cidade, p.valor, p.foto_principal_ponto FROM roteiros r INNER JOIN pontos_turisticos p on r.id_roteiro = p.id_roteiro WHERE r.id_roteiro = "'+ id +'";', function (err, rows, fields) {
            if (err) {console.log(err)}
            if(rows == 0){
                res.status(404).json({message:"Not found"})
            }else{
                res.status(201).send(rows);
            }
        });
        connection.end();
    }

}

module.exports =  new RoteiroController();