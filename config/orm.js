// creating orm connection, need to require the connection.js fole

var connection = require("./connection.js")

var orm = {
    selectAll: function(tableName, cb){
        connection.query("SELECT * FROM ??", tableName, function(err, res){
            cb(res)

        })
    },
    create: function(table, columnNames, values, cb){
        connection.query("INSERT INTO ?? (??, ??) VALUES (?, ?)", [table, columnNames[0], columnNames[1], values[0], values[1]], function(err, res){
            cb(res)
        })
    
    
    }
    

};

module.exports = orm;