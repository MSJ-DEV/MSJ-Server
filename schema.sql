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
     Address VARCHAR(255),
    image VARCHAR(200),
     country VARCHAR(20),
    State VARCHAR(250),
    Zip VARCHAR(250),
    gender VARCHAR(250),
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS products(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(200),
    date VARCHAR(200),
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
    date VARCHAR(200),
    PRIMARY KEY (id)
);


CREATE TABLE IF NOT EXISTS admin(
    id INT NOT NULL AUTO_INCREMENT,
    Firstname VARCHAR(250),
    Lastname VARCHAR(250),
    username VARCHAR(255),
    email VARCHAR(255),
    Address VARCHAR(255),
    numberPhone  VARCHAR(250),
    password VARCHAR(255),
    repeatepassword VARCHAR(255),
    image VARCHAR(255),
    country VARCHAR(20),
    State VARCHAR(250),
    Zip INT,
    gender VARCHAR(20),
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS images(
    id int AUTO_INCREMENT, 
    image text,
    PRIMARY KEY (id)
);
CREATE TABLE sessions(
    id int NOT NULL AUTO_INCREMENT,
   admin_id int NOT NULL ,
    session varchar(250) NOT NULL,
    date varchar(250) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (admin_id) References admin(id)
);
insert into products (name, date, category, oldprice, newprice, type, quantity, image, quantityinstock, status, promotion ) value ("Penne", "Dex 24/04/2021", "Pasta", '0.420', '0.420', "Epi Dor", 1, "https://i0.wp.com/lepidor.com.tn/wp-content/uploads/cavatoni.png?fit=431%2C431&ssl=1",100, "availeble", "false");
insert into products (name, date, category, oldprice, newprice, type, quantity, image, quantityinstock, status, promotion ) value ("Coca Cola", "Dex 24/04/2021", "Drink", '2.100', '2.100', "coca cola", 1, "http://cdn.shopify.com/s/files/1/0360/6436/2634/products/5449000000439-1_1024x.jpg?v=1586729294",1000, "availeble", "false");
insert into products (name, date, category, oldprice, newprice, type, quantity, image, quantityinstock, status, promotion ) value ("Sprite", "Dex 24/04/2021", "Drink", '2.100', '2.100', "limon", 1, "https://9a4yti-fi-dari.com/wp-content/uploads/2020/12/41795.jpg",1000, "availeble", "false");
insert into products (name, date, category, oldprice, newprice, type, quantity, image, quantityinstock, status, promotion ) value ("Fanta", "Dex 24/04/2021", "Drink", '2.100', '2.100', "orange", 1, "https://otrity.com/wp-content/uploads/2020/02/FantaOrange1-5L-1.jpg",1000, "availeble", "false");
insert into products (name, date, category, oldprice, newprice, type, quantity, image, quantityinstock, status, promotion ) value ("Meat", "", "Meat", '28.000 Kg', '28.000 Kg', "sheep", 1, "https://www.boucherieviandesagogo.com/images/produits/Epaule-de-Mouton-608.jpg",1000, "availeble", "false");
insert into products (name, date, category, oldprice, newprice, type, quantity, image, quantityinstock, status, promotion ) value ("Meat", "", "Meat", '30.000 Kg', '30.000 Kg', "Beff", 1, "https://static.canadiancattlemen.ca/wp-content/uploads/2015/09/beef-meat-display-1737-CanadaBeefInc.jpg",1000, "availeble", "false");
insert into products (name, date, category, oldprice, newprice, type, quantity, image, quantityinstock, status, promotion ) value ("Spagitti", "Dex 24/04/2021", "Pasta", '0.420', '0.420', "Epi Dor", 1, "https://i2.wp.com/lepidor.com.tn/wp-content/uploads/nouilles-2.png?fit=431%2C431&ssl=1",1000, "availeble", "false");
insert into products (name, date, category, oldprice, newprice, type, quantity, image, quantityinstock, status, promotion ) value ("Fell 2", "Dex 24/04/2021", "Pasta", '0.420', '0.420', "Epi Dor", 1, "https://static.openfoodfacts.org/images/products/619/400/331/0052/front_fr.7.full.jpg",1000, "availeble", "false");
insert into products (name, date, category, oldprice, newprice, type, quantity, image, quantityinstock, status, promotion ) value ("Touna", "Dex 24/04/2021", "Keep box", '1.500', '1.500', "El Manar", 1, "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/64/0903/1.jpg?8805",1000, "availeble", "false");
INSERT INTO admin(Firstname,Lastname,username,email,Address,password,repeatepassword,numberPhone,image,country,State,Zip,gender)VALUES("","","Abidijhed","abidi55@gmail.com ","","8b107acfd3cfa06ba0b45e20b4284f005ea3d440183a44260b221eb8d8be9acc","8b107acfd3cfa06ba0b45e20b4284f005ea3d440183a44260b221eb8d8be9acc","2586","https://static.toiimg.com/photo/msid-67625046/67625046.jpg?57466","cif-Tn","mared",5,"Male");


insert into products (name, date, category, oldprice, newprice, type, quantity, image, quantityinstock,  status, promotion ) value ("spagetti", "pate courte", "Food", "0.420", "0.420", "Epi d'or", 1, "https://i0.wp.com/lepidor.com.tn/wp-content/uploads/cavatoni.png?fit=431%2C431&ssl=1", 1500,  "availeble", "true");
insert into products (name, date, category, oldprice, newprice, type, quantity, image, quantityinstock,  status, promotion ) value ("spagetti", "pate longue", "Food", "0.430", "0.410", "Epi d'or", 1, "https://i1.wp.com/lepidor.com.tn/wp-content/uploads/nouilles-1.png?fit=431%2C431&ssl=1",800, "availeble", "true");
insert into products (name, date, category, oldprice, newprice, type, quantity, image, quantityinstock,  status, promotion ) value ("spagetti", "pate courte", "Food", "0.860", "840", "Chips", 1, "https://www.carrefourtunisie.com/medias/produits/numeroun/P2.jpg",1000 ,"availeble", "true");
insert into products (name, date, category, oldprice, newprice, type, quantity, image, quantityinstock,  status, promotion ) value ("El mazzraa", "Chiken", "Chiken", "7.150", "7.150", "mliha", 1, "https://monoprixsmiles.monoprix.tn/wp-content/uploads/2021/04/Sans-titre-17.png", 699, "availeble", "true");
insert into products (name, date, category, oldprice, newprice, type, quantity, image, quantityinstock,  status, promotion ) value ("spagetti", "pate courte", "LA Ghazelle", "3.190", "3.490", "Epi d'or", 1, "https://monoprixsmiles.monoprix.tn/wp-content/uploads/2021/04/Sans-titre-14.png",788, "availeble", "true");
insert into products (name, date, category, oldprice, newprice, type, quantity, image, quantityinstock,  status, promotion ) value ("spagetti", "pate courte", "pate", "2.280", "2.280", "NAtilait", 1, "https://monoprixsmiles.monoprix.tn/wp-content/uploads/2021/04/Sans-titre-113.png", 650, "availeble", "true");
insert into products (name, date, category, oldprice, newprice, type, quantity, image, quantityinstock,  status, promotion ) value ("Thon", "", "SeaFood", "17.890", "17.890", "IL Manar",1, "https://clickandcollect.monoprix.tn/44952-large_default/thon-entier.jpg",635, "availeble", "true");
insert into products (name, date, category, oldprice, newprice, type, quantity, image, quantityinstock,  status, promotion ) value ("Thon", "SeaFood", "Thon", "5.190", "5.190", "Sidi Jabeur", 1, "https://clickandcollect.monoprix.tn/42508-large_default/thon-entier.jpg",658,  "availeble", "true");
insert into products (name, date, category, oldprice, newprice, type, quantity, image, quantityinstock,  status, promotion ) value ("Harissa", "Harissa", "Harissa", "1.300"," 1.300", "Harissa du tunis", 1, "https://clickandcollect.monoprix.tn/42226-large_default/harissa.jpg",855,  "availeble", "true");
-- {
--                   "Firstname":"",
--                   "Lastname":"",
--                   "username":"AbidiJihed",
--                   "email":"abidij55@gmail.com",
--                   "Address":"",
--                   "numberPhone":"",
--                   "password":"Ji31826832",
--                   "repeatepassword":"Ji31826832",
--                 "image": "https://static.toiimg.com/photo/msid-67625046/67625046.jpg?57466",
--                 "country":"",
--                 "State":"",
--                 "Zip":""
              
               
-- }