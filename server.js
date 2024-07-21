const express = require('express');
const app = express();

app.get("/", (req, res) => {
    console.log("here");
    // res.sendStatus(200);
    // res.status(200).send("Hello");
    res.status(200).json({message: "Ok"});
})
const userRouter = require("./routes/users");

app.use("/users",userRouter);

app.listen(8080);
