
const AutoresModel = require('../models/autores');

class AutoresController {
    static async indexGet(req, resp) {
        let data = await AutoresModel.consultarAutores();
        resp.send(data);
    }

    static async itemGet(req, resp) {
        let id = req.params.id;
        let data = await AutoresModel.idSearch(id);
        resp.send(data);

        // if(data.length == 0){
        //     resp.status(404).send({errno: 404, error: 'No se encontró el autor'});
        //     return;
        // }

        // resp.send(data[0]);
    }
}

module.exports = AutoresController;