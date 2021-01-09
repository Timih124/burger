// create dependecies with express and mysql
var mysql = require("mysql");
var express = require("express");
// creating connection to mysql
var connection = mysql.createConnection({
    host: "localhost",
    PORT: 3306,
    user: "root",
    password: "password",
    database: "burgers_db",
    

});


connection.connect(function(err) {
    if (err) {
        // console log if error
        console.error("error connecting: " + err.stack);
        return;
    }
    // console log if connection successful
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;