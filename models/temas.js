
const { json } = require('body-parser');
const db = require('../dbconnection');
class TemasModel {
    static async consultarTemas() {
        let query = db('temas');
        return await query;
    }
    static async idSearch(id) {
        let query = db('temas').where('id_tema', id);
        return await db('temas').where('id_tema', id);
    }

    static async insertarTema(tema) {
        let queryResult = await db('temas').insert({ nombre: tema });
        return queryResult;
    }

}

module.exports = TemasModel;
