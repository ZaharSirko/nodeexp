const express = require('express');
const app = express();
const mysql = require('mysql2');
const port = 3000;
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.log(err);
    }
    console.log('MySQL Connected...');
});

app.get("/", (req, res) => {
    console.log("here");
    // res.sendStatus(200);
    // res.status(200).send("Hello");
    res.status(200).json({message: "Ok"});
})
const userRouter = require("./routes/users");

app.use("/users",userRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
