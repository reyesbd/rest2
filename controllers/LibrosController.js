
const LibrosModel = require('../models/libros');

class LibrosController {
    static async indexGet(req, resp) {
        let data = await LibrosModel.consultarLibros();
        console.log(data);
        resp.send(data);
    }

    static async itemGet(req, resp) {
        let id = req.params.id;
        let data = await LibrosModel.idSearch(id);
        resp.send(data);
    }

    static async insertPost(req, resp) {
         req.on('data',async (data)=>{
            var libro = {
                'titulo': JSON.parse(data).titulo ,
                'fk_id_autor': JSON.parse(data).fk_id_autor,
                'edicion': JSON.parse(data).edicion, 
                'fk_id_editorial': JSON.parse(data).fk_id_editorial,
                'fk_id_tema': JSON.parse(data).fk_id_tema
               };
            let datos = await LibrosModel.insertarLibro(libro);
            resp.send(datos);
         })
    }

    static async libroUpdate(req, resp) {
         req.on('data',async (data)=>{
            var id = JSON.parse(data).idLibro;
            var libro = {
                'titulo': JSON.parse(data).titulo ,
                'fk_id_autor': JSON.parse(data).fk_id_autor,
                'edicion': JSON.parse(data).edicion, 
                'fk_id_editorial': JSON.parse(data).fk_id_editorial,
                'fk_id_tema': JSON.parse(data).fk_id_tema
               };
            let datos = await LibrosModel.actualizarLibro(libro, id);
            resp.send(datos);
         })
    }
}

module.exports = LibrosController;