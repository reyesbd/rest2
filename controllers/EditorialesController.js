
const EditorialesModel = require('../models/editoriales');

class EditorialesController {
    static async indexGet(req, resp) {
        let data = await EditorialesModel.consultarEditoriales();
        resp.send(data);
    }

    static async itemGet(req, resp) {
        let id = req.params.id;
        let data = await EditorialesModel.idSearch(id);
        resp.send(data);

    }


}

module.exports = EditorialesController;