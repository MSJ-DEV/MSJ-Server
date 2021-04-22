DROP DATABASE IF EXISTS carrefour;
CREATE DATABASE IF NOT EXISTS carrefour;
USE carrefour;

CREATE TABLE IF NOT EXISTS users(
    id int AUTO_INCREMENT, 
    firstName VARCHAR(200),
    lastName VARCHAR(200),
    email VARCHAR(200),
    password VARCHAR(200),
    numberPhone INT,
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS products(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(200),
    information VARCHAR(200),
    category VARCHAR(200),
    oldprice VARCHAR(50),
    newprice VARCHAR(50),
    type VARCHAR (200),
    quantity VARCHAR(200),
    image VARCHAR(200),
    quantityinstock VARCHAR(200),
    status VARCHAR(200),
    promotion VARCHAR(20),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS list(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(200),
    quantity VARCHAR(200),
    description VARCHAR(200),
    price VARCHAR(200),
    image VARCHAR(200),
    information VARCHAR(200),
    PRIMARY KEY (id)
);
insert into products (name, information, category, oldprice, newprice, type, quantity, image, status, promotion ) value ("spagetti", "pate courte", "pate", 420, 420, "Epi d'or", "200", "https://i0.wp.com/lepidor.com.tn/wp-content/uploads/cavatoni.png?fit=431%2C431&ssl=1", "availeble", "true");
insert into products (name, information, category, oldprice, newprice, type, quantity, image, status, promotion ) value ("spagetti", "pate longue", "pate", 430, 410, "Epi d'or", "200", "https://i1.wp.com/lepidor.com.tn/wp-content/uploads/nouilles-1.png?fit=431%2C431&ssl=1", "availeble", "true")
CREATE TABLE IF NOT EXISTS admin(
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255),
    password VARCHAR(255),
    PRIMARY KEY (id)
);
INSERT INTO admin(email,password)VALUES("admin@msj.com","8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918");
