// create the code that will call the ORM function

var orm = require("../config/orm.js");

var burgersModel = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res)
        })
    },
    create: function(columnNames, values, cb){
        orm.create("burgers", columnNames, values, function(res){
            cb(res)
        })
    }
}
module.exports = burgersModel