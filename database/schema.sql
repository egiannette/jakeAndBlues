CREATE DATABASE users_db;

USE users_db;

CREATE TABLE customerInfo (
	id INT NOT NULL AUTO_INCREMENT,
	customer_firstName VARCHAR(15),
	customer_lastName VARCHAR(15),
	email VARCHAR(50),
	dog_name VARCHAR(15),
	dog_birthday datetime,
	PRIMARY KEY (id)
);