// create the code that will call the ORM function

var orm = require("../config/orm.js");

var burgers_model = {
    selectALL: function(cbController){
        orm.selectALL("burgers, function")
    }
}