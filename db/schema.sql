DROP DATABASE IF EXISTS moviesdb;
CREATE DATABASE moviesdb;

USE moviesdb;

CREATE TABLE movies (
    id INT AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    watched BOOLEAN default FALSE,
    PRIMARY KEY (id)
);

INSERT INTO movies (title, watched)
VALUES ("Pom Poko", true);
INSERT INTO movies (title, watched)
VALUES ("Lord of the Rings: The Two Towers", true);
INSERT INTO movies (title)
VALUES ("The Godfather");
INSERT INTO movies (title)
VALUES ("Over The Hedge");
INSERT INTO movies (title)
VALUES ("The Big Short");
INSERT INTO movies (title)
VALUES ("Snowpiercer");
INSERT INTO movies (title)
VALUES ("Pirates of the Caribbean");

SELECT * FROM movies;