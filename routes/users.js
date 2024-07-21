const express = require('express');
const router = express.Router();

router.get("/", function (req, res) {
    res.send("users");
})

router.get("/new", function (req, res) {
    res.send("new users");
})

router.post("/", function (req, res) {
    res.send("new user");
})


router.route("/:id")
    .get(function (req, res) {
    res.send(`Get user ${req.params.id}`);
}).put(function (req, res) {
    res.send(`Get user ${req.params.id}`);
}).delete(function (req, res) {
    res.send(`Delete user ${req.params.id}`);
})

module.exports = router;