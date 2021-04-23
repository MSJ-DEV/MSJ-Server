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


CREATE TABLE IF NOT EXISTS admin(
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255),
    password VARCHAR(255),
    PRIMARY KEY (id)
);
INSERT INTO admin(email,password)VALUES("admin@msj.com","8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918");


insert into products (name, information, category, oldprice, newprice, type, quantity, image, quantityinstock,  status, promotion ) value ("spagetti", "pate courte", "Food", "0.420", "0.420", "Epi d'or", "1", "https://i0.wp.com/lepidor.com.tn/wp-content/uploads/cavatoni.png?fit=431%2C431&ssl=1", "1520",  "availeble", "true");
insert into products (name, information, category, oldprice, newprice, type, quantity, image, quantityinstock,  status, promotion ) value ("spagetti", "pate longue", "Food", "0.430", "0.410", "Epi d'or", "1", "https://i1.wp.com/lepidor.com.tn/wp-content/uploads/nouilles-1.png?fit=431%2C431&ssl=1", "652", "availeble", "true");
insert into products (name, information, category, oldprice, newprice, type, quantity, image, quantityinstock,  status, promotion ) value ("spagetti", "pate courte", "Food", "0.860", "840", "Chips", "1", "https://www.carrefourtunisie.com/medias/produits/numeroun/P2.jpg","8520" ,"availeble", "true");
insert into products (name, information, category, oldprice, newprice, type, quantity, image, quantityinstock,  status, promotion ) value ("El mazzraa", "Chiken", "Chiken", "7.150", "7.150", "mliha", "1", "https://monoprixsmiles.monoprix.tn/wp-content/uploads/2021/04/Sans-titre-17.png", "562", "availeble", "true");
insert into products (name, information, category, oldprice, newprice, type, quantity, image, quantityinstock,  status, promotion ) value ("spagetti", "pate courte", "LA Ghazelle", "3.190", "3.490", "Epi d'or", "1", "https://monoprixsmiles.monoprix.tn/wp-content/uploads/2021/04/Sans-titre-14.png","2305", "availeble", "true");
insert into products (name, information, category, oldprice, newprice, type, quantity, image, quantityinstock,  status, promotion ) value ("spagetti", "pate courte", "pate", "2.280", "2.280", "NAtilait", "1", "https://monoprixsmiles.monoprix.tn/wp-content/uploads/2021/04/Sans-titre-113.png", "652", "availeble", "true");
insert into products (name, information, category, oldprice, newprice, type, quantity, image, quantityinstock,  status, promotion ) value ("Thon", "", "SeaFood", "17.890", "17.890", "IL Manar", "601", "https://clickandcollect.monoprix.tn/44952-large_default/thon-entier.jpg","632", "availeble", "true");
insert into products (name, information, category, oldprice, newprice, type, quantity, image, quantityinstock,  status, promotion ) value ("Thon", "SeaFood", "Thon", "5.190", "5.190", "Sidi Jabeur", "1", "https://clickandcollect.monoprix.tn/42508-large_default/thon-entier.jpg","963",  "availeble", "true");
insert into products (name, information, category, oldprice, newprice, type, quantity, image, quantityinstock,  status, promotion ) value ("Harissa", "Harissa", "Harissa", "1.300"," 1.300", "Harissa du tunis", "1", "https://clickandcollect.monoprix.tn/42226-large_default/harissa.jpg","636",  "availeble", "true");
