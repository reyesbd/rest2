
const db = require('../dbconnection');  

class UsuariosModel {   
    static async consultarUsuarios() {       
        let query = db('usuarios');       
        return await query;   
    } 
}

module.exports = UsuariosModel;