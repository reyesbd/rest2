
const db = require('../dbconnection');

class EditorialesModel {
    static async consultarEditoriales() {
        let query = db('editoriales');
        return await query;
    }

    static async idSearch(id) {
        return await db('editoriales').where('id_editorial', id);
    }
}

module.exports = EditorialesModel;