DROP DATABASE if exists sorteo_atlantida;
CREATE DATABASE if not exists  sorteo_atlantida;
USE sorteo_atlantida;

CREATE TABLE participantes(
    DNI INT NOT NULL,
    nombre VARCHAR(20) NOT NULL,
    apellido VARCHAR(20) NOT NULL,
    PRIMARY KEY (DNI));

CREATE TABLE winn_history(
    DNI INT,
    dateWin DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (DNI) REFERENCES participantes(DNI));



INSERT INTO participantes (DNI, nombre, apellido) VALUES 
(45485190, "Ludmila",  "Noriega"),
(45095311, "Ayrton",  "Miotti"),
(44855966, "Facundo",  "Nieto"),
(55888999, "Franco",  "Toledo"),
(11222333, "Tomas",  "Colameo"),
(22333444, "Mateo",  "Gatica"),
(33444555, "Martina",  "Negrete"),
(44555666, "Emilia", "Bonfigli"),
(66777888, "Ana Luz",  "Bazan");


SELECT * FROM participantes WHERE DNI >= RAND() * 
    ( SELECT MAX(DNI) FROM participantes ) 
ORDER BY DNI LIMIT 5;