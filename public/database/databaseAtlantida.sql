drop database if exists sorteo_atlantida;
create database if not exists  sorteo_atlantida;
use sorteo_atlantida;

create table alumnos(
	IDA int auto_increment,
    apellido varchar(20),
    nombre varchar(20),
    DNI int,
    fecha date,
    primary key (IDA)
    );

select * from alumnos;
insert into alumnos (apellido, nombre, DNI) values 
( "Noriega", "Ludmila", 45485190),
( "Miotti", "Ayrton Emanuel Jesús", 45855966),
( "Nieto", "Facundo", 44855966),
( "Toledo", "Franco", 55888999),
( "Colameo", "Tomas", 11222333),
( "Gatica", "Mateo", 22333444),
( "Negrete", "Martina", 33444555),
("Bonfigli", "Martina", 44555666),
( "Bazan", "Ana Luz", 66777888);


SELECT * FROM alumnos WHERE IDA >= RAND() * 
    ( SELECT MAX(IDA) FROM alumnos ) 
ORDER BY IDA LIMIT 5;
