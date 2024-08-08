
const db = require('../dbconnection');  

class AutoresModel {
    static async consultarAutores() {
        let query = db('autores');
        return await query;
    }

    static async idSearch(id) {
        return await db('autores').where('id_autor', id);
    }
}

module.exports = AutoresModel;