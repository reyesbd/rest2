
const UsuariosModel = require('../models/usuarios');

class UsuariosController {
    static async indexGet(req, resp) {
        let data = await UsuariosModel.consultarUsuarios();
        resp.send(data);
    }  
}

module.exports = UsuariosController;