const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "panaderia_v1"
});

db.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err);
        return;
    }
    console.log("Connected to the database");
});

app.post("/create", (req, res) => {
    const { correo, contrasena, usuario } = req.body;
    const newUser = { correo, contrasena, usuario };

    console.log("Request body:", req.body); // Log para verificar la estructura de los datos

    db.query("INSERT INTO usuarios SET ?", newUser, (err, result) => {
        if (err) {
            console.error("Error inserting user into the database:", err);
            res.status(500).send("Error registering user");
        } else {
            res.send("Usuario registrado");
        }
    });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
