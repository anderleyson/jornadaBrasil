import connection from '../../config/connection';
import path from 'path';
import multer from 'multer';


class PlaceController{

    async store(req, res){

        console.log(req.file);
        
        if (req.body.nm_regiao == "" || req.body.nm_estado == "" || req.body.nm_cidade == "" || req.body.desc_cidade == "" || req.body.desc_estado == "" || req.body.desc_regiao == "" || req.body.nm_local == "") {
            return res.status(400).send({ message: 'Dados inseridos de forma incorreta. Verifique os dados informados e tente novamente.' });
        }else{
            connection.query("INSERT INTO `jornada_brasil`.`regioes` (`nm_regiao`, `nm_estado`, `nm_cidade`, `desc_cidade`, `desc_estado`, `desc_regiao`, `nm_local`, `local_capa`) VALUES (?, ?, ?, ?, ?, ?, ?, ?);",
            [
                req.body.nm_regiao,
                req.body.nm_estado,
                req.body.nm_cidade,
                req.body.desc_cidade,
                req.body.desc_estado,
                req.body.desc_regiao,
                req.body.nm_local,
                req.file.path
            ], 
            (err) => {
                if(err){
                    //console.log(err);
        
                    return res.status(400).json({
                        error: true, 
                        message: "Erro ao tentar inserir local no banco"
                    })
                }    
                return res.status(200).json({
                    error:false,
                    message: "Local inserido."
                })
            })
        }
    }

    show(req,res){

    }
    
}

export default new PlaceController();