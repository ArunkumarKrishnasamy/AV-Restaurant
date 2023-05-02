const express = require("express");
const app = express();
app.use(express.json());

// Middleware
const cors = require("cors");
const { Pool } = require("pg");
const pool = require("./db");
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Routes
app.post("/products", async (req, res) => {
  try {
    const {
      available_units,
      cost,
      product_name,
      product_tags,
      internal_notes,
    } = req.body;
    const addrow = await pool.query(
      "INSERT INTO products(available_units, cost, product_name, product_tags,internal_notes) VALUES($1,$2,$3,$4,$5) RETURNING *",
      [available_units, cost, product_name, product_tags, internal_notes]
    );
    res.status(201).json(addrow.rows[0]);
  } catch (error) {
    console.error(error);
    res.json({ message: "Posting data went wrong" });
  }
});

app.get("/products", async (req, res) => {
  try {
    const products = await pool.query("SELECT * FROM products");
    res.status(200).json(products.rows);
  } catch (error) {
    console.error(error);
    res.json({ message: "Getting data went wrong" });
  }
});

const PORT = 3001 || process.env.PORT;
app.listen(PORT, () => {
  console.log("Web server started");
});
