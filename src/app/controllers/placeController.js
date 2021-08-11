const connection = require('../../config/connection');
const multer = require('multer')

class PlaceController{
    
    insertPonto(req, res){
       let id = req.params.id;
        console.log(req.file);
            connection.query("INSERT INTO `jornada_brasil`.`pontos_turisticos` (`id_ponto`, `desc_ponto`, `cidade`, `valor`, `tipo`, `curiosidade`, `foto_principal_ponto`, `id_roteiro`) VALUES (?, ?, ?, ?, ?, ?, ?, ?);",
            [
                req.body.id_ponto,
                req.body.desc_ponto,
                req.body.cidade,
                req.body.valor,
                req.body.tipo,
                req.body.curiosidade,
                req.file.path,
                id
            ], 
            (err) => {

                if (err instanceof multer.MulterError) {
                    console.log(err)
                    return res.status(400).json({
                        error: true, 
                        message: "Erro ao tentar inserir imagem no banco"
                    })
                  } else if (err) {
                    console.log(err)
                    return res.status(400).json({
                        error: true, 
                        message: "Erro ao tentar inserir local no banco"
                    })
                  }
                 
                return res.status(200).json({
                    error:false,
                    message: "Local inserido.",
                    local:{
                        "Nome do ponto turístico:": req.body.nome_ponto,
                        "Descrição:": req.body.desc_ponto,
                        "Cidade:": req.body.nome_cidade,
                        "Valor": req.body.valor,
                        "Tipo": req.body.tipo,
                        "Curiosidade": req.body.curiosidade,
                        "Foto": req.file.path,
                        "Roteiro:": id
                    }
                })
            })
    }
    insertRoteiro(req,res){
        connection.query("INSERT INTO `jornada_brasil`.`roteiros` (`id_roteiro`, `desc_roteiro`, `foto_capa_roteiro`, `foto_principal_roteiro`, `id_estado`) VALUES ('?', '?', '?', '?', '?');",
        [
            req.body.id_roteiro,
            req.body.desc_roteiro,
            req.file.path,
            req.file.path,
            req.body.id_estado
        ], 
        (err) => {
            if(err){
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
                    "Foto de capa": req.file.path,
                    "Foto principal": req.file.path,
                    "Estado:": req.body.id_estado
                }
            })
        })
    }
    
    
    
    show(req,res){
        
        connection.query('SELECT id_regiao, foto_capa_regiao FROM regioes;', function (err, rows, fields) {
            if (err) 
            {
                res.send("Erro" + err);
            }else{
                res.send(rows);
            }
    
            
        })
    }
}


module.exports =  new PlaceController();