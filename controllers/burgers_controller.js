
var express = require("express")
var router = express.Router();

var burgersModel = require("../models/burger");

router.get("/", function(req, res){
    burgersModel.selectAll(function(results){
        res.render("index", {burgers:results})
    })
})


router.post("/api/burgers", function(req, res){
    req.body.devoured = false
    burgersModel.create(["burger_name", "devoured"],[req.body.burger_name, req.body.devoured], function(results){
            res.redirect("/")
    })
})



module.exports = router