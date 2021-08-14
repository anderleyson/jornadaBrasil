const connectionRequest = require('../../config/connection');

const multer = require('multer')
const path = require('path')


    

class PlaceController{

    insertPonto(req, res){
        const connection = connectionRequest();
        let id = req.params.id;
        
            connection.query("INSERT INTO `pontos_turisticos` (`id_ponto`, `desc_ponto`, `cidade`, `valor`, `tipo`, `curiosidade`, `foto_principal_ponto`, `id_roteiro`) VALUES (?, ?, ?, ?, ?, ?, ?, ?);",
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
                    console.log(err);
                    return res.status(400).json({
                        error: true, 
                        message: "Erro ao tentar inserir local no banco"
                    })
                  }
                console.log(req.file)
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
                        "Foto": req.file,
                        "Roteiro:": id
                    }
                })
            })
            connection.end();
    }
    
    
    
    
    show(req,res){
        const connection = connectionRequest();
        try{
        connection.query('SELECT id_regiao, foto_capa_regiao FROM regioes;', function (err, rows, fields) {
            if (err) 
            {
                res.send("Erro" + err);
            }else{
                res.send(rows);
            }
        })}
        catch{

        }
        connection.end();
    }
}


module.exports =  new PlaceController();