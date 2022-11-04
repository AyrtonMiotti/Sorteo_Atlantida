DROP DATABASE if exists sorteo_atlantida;
CREATE DATABASE if not exists  sorteo_atlantida;
USE sorteo_atlantida;

CREATE TABLE participantes(
	IDA INT NOT NULL auto_increment,
    DNI INT NOT NULL,
    nombre VARCHAR(20) NOT NULL,
    apellido VARCHAR(20) NOT NULL,
    fecha DATE NOT NULL,
    PRIMARY KEY (IDA));

CREATE TABLE winners_history(
    IDW INT auto_increment,
    DNI INT NOT NULL,
    dateWin DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(DNI) REFERENCES participantes(DNI)
    PRIMARY KEY(IDW));

SELECT * FROM participantes;
INSERT INTO participantes (apellido, nombre, DNI) VALUES 
( "Noriega", "Ludmila", 45485190),
( "Miotti", "Ayrton Emanuel Jesús", 45855966),
( "Nieto", "Facundo", 44855966),
( "Toledo", "Franco", 55888999),
( "Colameo", "Tomas", 11222333),
( "Gatica", "Mateo", 22333444),
( "Negrete", "Martina", 33444555),
("Bonfigli", "Martina", 44555666),
( "Bazan", "Ana Luz", 66777888);


SELECT * FROM participantes WHERE IDA >= RAND() * 
    ( SELECT MAX(IDA) FROM participantes ) 
ORDER BY IDA LIMIT 5;
