-- creating burger database, will drop the database if already exist
DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;


-- creating burger table
CREATE TABLE burgers (
    id INTEGER AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(40),
    devoured BOOLEAN,
    PRIMARY KEY (id)
);
