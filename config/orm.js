// creating orm connection, need to require the connection.js fole

var connection = require("./connection.js")

var orm = {
    selectALL: function(tableName, burgersModel){
        connection.query("SELECT * FROM ??", tableName, function(err, res){
            burgerModel(res)

        })
    }


};

module.exports = orm