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
    quantity INT,
    image VARCHAR(200),
    quantityinstock INT,
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
insert into products (name, information, category, oldprice, newprice, type, quantity, image, quantityinstock, status, promotion ) value ("Penne", "Dex 24/04/2021", "Pasta", '0.420', '0.420', "Epi Dor", 1, "https://i0.wp.com/lepidor.com.tn/wp-content/uploads/cavatoni.png?fit=431%2C431&ssl=1",100, "availeble", "false");
insert into products (name, information, category, oldprice, newprice, type, quantity, image, quantityinstock, status, promotion ) value ("Coca Cola", "Dex 24/04/2021", "Drink", '2.100', '2.100', "coca cola", 1, "http://cdn.shopify.com/s/files/1/0360/6436/2634/products/5449000000439-1_1024x.jpg?v=1586729294",1000, "availeble", "false");
insert into products (name, information, category, oldprice, newprice, type, quantity, image, quantityinstock, status, promotion ) value ("Sprite", "Dex 24/04/2021", "Drink", '2.100', '2.100', "limon", 1, "https://9a4yti-fi-dari.com/wp-content/uploads/2020/12/41795.jpg",1000, "availeble", "false");
insert into products (name, information, category, oldprice, newprice, type, quantity, image, quantityinstock, status, promotion ) value ("Fanta", "Dex 24/04/2021", "Drink", '2.100', '2.100', "orange", 1, "https://otrity.com/wp-content/uploads/2020/02/FantaOrange1-5L-1.jpg",1000, "availeble", "false");
insert into products (name, information, category, oldprice, newprice, type, quantity, image, quantityinstock, status, promotion ) value ("Meat", "", "Meat", '28.000 Kg', '28.000 Kg', "sheep", 1, "https://www.boucherieviandesagogo.com/images/produits/Epaule-de-Mouton-608.jpg",1000, "availeble", "false");
insert into products (name, information, category, oldprice, newprice, type, quantity, image, quantityinstock, status, promotion ) value ("Meat", "", "Meat", '30.000 Kg', '30.000 Kg', "Beff", 1, "https://static.canadiancattlemen.ca/wp-content/uploads/2015/09/beef-meat-display-1737-CanadaBeefInc.jpg",1000, "availeble", "false");
insert into products (name, information, category, oldprice, newprice, type, quantity, image, quantityinstock, status, promotion ) value ("Spagitti", "Dex 24/04/2021", "Pasta", '0.420', '0.420', "Epi Dor", 1, "https://i2.wp.com/lepidor.com.tn/wp-content/uploads/nouilles-2.png?fit=431%2C431&ssl=1",1000, "availeble", "false");
insert into products (name, information, category, oldprice, newprice, type, quantity, image, quantityinstock, status, promotion ) value ("Fell 2", "Dex 24/04/2021", "Pasta", '0.420', '0.420', "Epi Dor", 1, "https://static.openfoodfacts.org/images/products/619/400/331/0052/front_fr.7.full.jpg",1000, "availeble", "false");
insert into products (name, information, category, oldprice, newprice, type, quantity, image, quantityinstock, status, promotion ) value ("Touna", "Dex 24/04/2021", "Keep box", '1.500', '1.500', "El Manar", 1, "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/64/0903/1.jpg?8805",1000, "availeble", "false");
INSERT INTO admin(email,password)VALUES("admin@msj.com","8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918");
