CREATE DATABASE biblioteca2;

use biblioteca2;

create table autores(
    id_autor int not null auto_increment,
    nombre varchar(100) not null,
    apellido varchar(100) not null,
    primary key(id_autor)
);

create table libros(
    id_libro int not null auto_increment,
    titulo varchar(100) not null,
    fk_id_autor integer not null,
    edicion varchar(100) not null,
    fk_id_editorial integer not null,
    fk_id_tema integer not null,
    primary key(id_libro),
    foreign key(fk_id_autor) references autores(id_autor),
    foreign key(fk_id_editorial) references editoriales(id_editorial),
    foreign key(fk_id_tema) references temas(id_tema)
);

create table usuarios(
    id_usuario int not null auto_increment,
    nombre varchar(100) not null,
    apellido varchar(100) not null,
    email varchar(100) not null,
    primary key(id_usuario)
);

create table prestamos(
    id_prestamo int not null auto_increment,
    fk_id_libro int not null,
    fk_id_usuario int not null,
    fecha_prestamo date not null,
    fecha_devolucion date not null,
    primary key(id_prestamo),
    foreign key(fk_id_libro) references libros(id_libro),
    foreign key(fk_id_usuario) references usuarios(id_usuario)
);

create table editoriales(
    id_editorial int not null auto_increment,
    nombre varchar(100) not null,
    primary key(id_editorial)
);

create table temas(
    id_tema int not null auto_increment,
    nombre varchar(100) not null,
    primary key(id_tema)
);

