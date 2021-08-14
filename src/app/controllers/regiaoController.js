const connectionRequest = require('../../config/connection')

class RegiaoController {
  updateRegiao(req, res) {
    const connection = connectionRequest()
    let id = req.params.id
    connection.query(
      "UPDATE `regioes` SET `desc_regiao` = '" +
        req.body.desc_regiao +
        "', `culinaria` = '" +
        req.body.culinaria +
        "', `foto_capa_regiao` = '" +
        req.files.foto_capa_regiao[0].path.toString() +
        "', `foto_principal_regiao` = '" +
        req.files.foto_principal_regiao[0].path.toString() +
        "', `foto_prato` = '" +
        req.files.foto_prato[0].path.toString() +
        "' WHERE (`id_regiao` = '" +
        id +
        "');",

      err => {
        if (err) {
          console.log(err)
          return res.status(400).json({
            error: true,
            message: 'Erro ao tentar atualizar região no banco'
          })
        }
        return res.status(200).json({
          error: false,
          message: 'Região atualizada com sucesso',
          regiao: {
            fotos: req.files
          }
        })
      }
    )
    connection.end()
  }
  getRegiao(req, res) {
    const connection = connectionRequest()
    let id = req.params.id
    connection.query(
      'SELECT r.id_regiao, r.desc_regiao, r.culinaria, r.foto_capa_regiao, r.foto_prato, r.foto_principal_regiao, e.id_estado, e.foto_principal_estado, ro.id_roteiro, ro.foto_principal_roteiro FROM regioes r INNER JOIN estados e ON r.id_regiao = e.id_regiao INNER JOIN roteiros ro ON e.id_estado = ro.id_estado WHERE r.id_regiao = "' +
        id +
        '" ORDER BY rand() LIMIT 3;',
      function (err, rows, fields) {
        if (err) throw err

        res.send(rows)
      }
    )
    connection.end()
  }
  getRegioes(req, res) {
    const connection = connectionRequest()
    connection.query('SELECT * FROM regioes', function (err, rows, fields) {
      if (err) throw err

      res.send(rows)
    })
    connection.end()
  }
  getRegiaoRoteiros(req, res) {
    const connection = connectionRequest()
    let id = req.params.id

    connection.query(
      'SELECT ro.id_roteiro, ro.foto_principal_roteiro FROM roteiros ro INNER JOIN estados ON ro.id_estado = estados.id_estado INNER JOIN regioes r ON estados.id_regiao = r.id_regiao WHERE r.id_regiao = "' +
        id +
        '" ORDER BY rand() LIMIT 3;',
      function (err, rows, fields) {
        if (err) throw err

        res.send(rows)
      }
    )
    connection.end()
  }
}

module.exports = new RegiaoController()
