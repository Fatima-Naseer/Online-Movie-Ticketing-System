const mongoose = require('mongoose');

var pay_history=mongoose.Schema({

    username:  {
        type : String,
        unique : true
        //required : true

    },

    cinema_name : {
        type : String
        //required : true

    },
    movie_name : {
        type : String
       // required : true

    },
    select_seats : {
        type : Number
       // required : true

    },
    price : {
        type : Number
       // required : true

    },
    tax : {
        type : Number
       // required : true

    }
});



var payment1 = mongoose.model("payment1", pay_history);
module.exports = payment1;