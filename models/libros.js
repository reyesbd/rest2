
const db = require('../dbconnection');

class LibrosModel {
    static async consultarLibros() {
        let libros = await db('libros as l')
  .join('autores as a', 'a.id_autor', 'l.fk_id_autor')
  .join('editoriales as e', 'e.id_editorial', 'l.fk_id_editorial')
  .join('temas as t', 't.id_tema', 'l.fk_id_tema')
  .select(
    'l.id_libro',
    'l.titulo as nombre_libro',
    'a.nombre as nombre_autor',
    'a.apellidos as apellido_autor',
    'l.edicion as nombre_edicion',
    'e.nombre as nombre_editorial',
    't.nombre as nombre_tema'
  );

return libros;

    }

    static async idSearch(id) {
        return await db('libros').where('id_libro', id);
    }

    static async insertarLibro(libro) {
        
        let queryResult = await db('libros').insert({
            titulo: libro.titulo,
            fk_id_autor: libro.fk_id_autor,
            edicion: libro.edicion,
            fk_id_editorial: libro.fk_id_editorial,
            fk_id_tema: libro.fk_id_tema,
        });
        return queryResult;
    }

    static async actualizarLibro(libro, id){
        let queryResult = await db('libros').where('id_libro',id).update({
            titulo: libro.titulo,
            fk_id_autor: libro.fk_id_autor,
            edicion: libro.edicion,
            fk_id_editorial: libro.fk_id_editorial,
            fk_id_tema: libro.fk_id_tema,
        });
        return queryResult;
    }
}

module.exports = LibrosModel;