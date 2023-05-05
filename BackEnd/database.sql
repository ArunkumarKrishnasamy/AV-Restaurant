CREATE DATABASE restaurantapp;

CREATE TABLE product(
     id BIGSERIAL NOT NULL PRIMARY KEY,
    sales_price INTEGER,
    cost INTEGER,
    product_category VARCHAR(50),
    product_tags VARCHAR(50),
    internal_notes VARCHAR(500)
);

CREATE TABLE login(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    inputemail VARCHAR(200) UNIQUE NOT NULL,
    inputpassword VARCHAR(200) NOT NULL,
    username VARCHAR(50)
)
SELECT * FROM login WHERE inputEmail=req.body
SELECT * FROM login WHERE  inputEmail='ak@email.com'
SELECT  * FROM login WHERE $1 IN (SELECT inputemail FROM login)