const express = require("express");
const app = express();
app.use(express.json());

// dependencies
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// Middleware
const cors = require("cors");
const { Pool } = require("pg");
const pool = require("./dbConfig");
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Authenticate
function authenticate(req, res, next) {
  // check jwt token

  if (req.headers.authorization) {
    let decode = jwt.verify(req.headers.authorization, "secretkey");
    if (decode) {
      // req.id = decode.id;
      next();
    } else {
      res.status(401).json({ message: "Invalid token" });
    }
  } else {
    res.status(401).json({ message: "User is Unauthorized" });
  }
}

// Routes
app.post("/products", authenticate, async (req, res) => {
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

app.get("/products", authenticate, async (req, res) => {
  try {
    const products = await pool.query("SELECT * FROM products");
    res.status(200).json(products.rows);
  } catch (error) {
    console.error(error);
    res.json({ message: "Getting data went wrong" });
  }
});
app.delete("/products/:id", authenticate, async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const deleteProduct = await pool.query("DELETE FROM products WHERE id=$1", [
      id,
    ]);
    res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Delete went wrong" });
  }
});

// Log In
const bcrypt = require("bcryptjs");

app.post("/register", async (req, res) => {
  try {
    let { inputemail, inputpassword, username } = req.body;
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(inputpassword, salt);
    inputpassword = hash;
    const addUser = await pool.query(
      "INSERT INTO login (inputemail, inputpassword, username) VALUES ($1,$2,$3) RETURNING *",
      [inputemail, inputpassword, username]
    );
    res.status(200).json(addUser.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});
const jwt = require("jsonwebtoken");
app.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;
    var user = await pool.query("SELECT * FROM login WHERE inputemail= $1", [
      email,
    ]);
    user = user.rows[0];
    if (user) {
      let compare = bcrypt.compareSync(password, user.inputpassword);
      if (compare) {
        let token = jwt.sign(
          { inputemail: user.inputemail, id: user.id },
          "secretkey"
        );
        res.json(token);
      } else {
        res.status(401).json({ message: "Password doesn't match" });
      }
    } else {
      res.status(404).json({ message: "User Email not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

const PORT = 3001 || process.env.PORT;
app.listen(PORT, () => {
  console.log("Web server started");
});
