const TemasModel = require('../models/temas');

class TemasController {
    static async indexGet(req, resp) {
        let data = await TemasModel.consultarTemas();
        resp.send(data);
    }

    static async itemGet(req, resp) {
        let id = req.params.id;
        let data = await TemasModel.idSearch(id);
        resp.send(data);
    }


     static async addItem(req, resp) {
        let nombre = req.body.nombre;
        let data = await TemasModel.insertarTema(nombre);
        resp.send(data);
     }   
    
    
}

module.exports = TemasController;