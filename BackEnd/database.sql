CREATE DATABASE restaurantapp;

CREATE TABLE product(
     id BIGSERIAL NOT NULL PRIMARY KEY,
    sales_price INTEGER,
    cost INTEGER,
    product_category VARCHAR(50),
    product_tags VARCHAR(50),
    internal_notes VARCHAR(500)
);