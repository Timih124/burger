
var express = require("express")
var router = express.Router();

var burgersModel = require("../models/burger.js");

router.get("/", function(req, res){
    burgersModel.selectAll(function(results){
        res.render("index", {burgers:results})
    })
})

module.exports = router